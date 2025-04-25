import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {
  create,
  open,
  dismissLink,
  LinkSuccess,
  LinkExit,
  LinkIOSPresentationStyle,
  LinkLogLevel,
  LinkTokenConfiguration,
  destroy,
} from 'react-native-plaid-link-sdk';
import * as Keychain from 'react-native-keychain';
import {useNavigation} from '@react-navigation/native';
import homeScreenStyles from '../../css/HomeScreen.styles';
import styles from '../../css/About.styles';

const BankAccountSelectionScreen = () => {
  const [linkToken, setLinkToken] = useState(null);
  const navigation: any = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const platform = Platform.OS;

  const createLinkToken = useCallback(async () => {
    await fetch('http://localhost:3000/api/plaid/create-link-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({platform}),
    })
      .then(response => response.json())
      .then(data => {
        setLinkToken(data.linkToken);
      })
      .catch(err => {
        console.log(err);
      });
  }, [setLinkToken, platform]);

  useEffect(() => {
    if (linkToken == null) {
      createLinkToken();
    } else {
      const tokenConfiguration = createLinkTokenConfiguration(linkToken);

       const setupLink = async () => {
        try {
          await destroy();  
          create(tokenConfiguration);
        } catch (e) {
          console.error('Error during flow:', e);
        }
      };

      setupLink();  
    }
  }, [linkToken, createLinkToken]);

  const createLinkTokenConfiguration = (
    token: string,
    noLoadingState: boolean = false,
  ): LinkTokenConfiguration => {
    return {
      token: token,
      noLoadingState: noLoadingState,
    };
  };

  const createLinkOpenProps = () => {
    return {
      onSuccess: async (success: LinkSuccess) => {
        await fetch('http://localhost:3000/api/plaid/exchange-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({publicToken: success.publicToken}),
        }).catch(err => {
          console.log(err);
        });
        navigation.navigate('Success');
        setIsLoading(false);
      },
      onExit: (linkExit: LinkExit) => {
        console.log('Exit: ', linkExit);
        dismissLink();
        setIsLoading(false);
      },
      iOSPresentationStyle: LinkIOSPresentationStyle.MODAL,
      logLevel: LinkLogLevel.ERROR,
    };
  };

  const handleOpenLink = () => {
    setIsLoading(true);
    const openProps = createLinkOpenProps();
    open(openProps);
  };

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      // Clear Keychain storage
      await Keychain.resetGenericPassword();
      // Navigate back to login screen
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <View style={homeScreenStyles.container}>
        <SafeAreaView style={styles.safeArea}>
          <View style={homeScreenStyles.logOutContainer}>
            <TouchableOpacity onPress={handleLogout} style={styles.signInButton}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
                Log out
              </Text>
            </TouchableOpacity>
          </View>
          <View style={homeScreenStyles.subContainer}>
            <Text style={homeScreenStyles.text}>Home Screen</Text>
            <Text style={homeScreenStyles.subtext}>Welcome to Stush App</Text>
            <TouchableOpacity
              style={styles.signInButton}
              onPress={handleOpenLink}>
              {isLoading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
                  Connect Bank Account
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default BankAccountSelectionScreen;
