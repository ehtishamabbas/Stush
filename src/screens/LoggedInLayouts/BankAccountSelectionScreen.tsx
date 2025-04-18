import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
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

import { useNavigation } from '@react-navigation/native';
import homeScreenStyles from '../../css/HomeScreen.styles';
import styles from '../../css/About.styles';

const BankAccountSelectionScreen = () => {
  const [linkToken, setLinkToken] = useState(null);
  const navigation: any = useNavigation();
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

      // Define AND execute the async function
      const setupLink = async () => {
        try {
          await destroy(); // Clear previous session state
          create(tokenConfiguration);
        } catch (e) {
          console.error('Error during flow:', e);
        }
      };

      setupLink(); // Actually call the function
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
      },
      onExit: (linkExit: LinkExit) => {
        console.log('Exit: ', linkExit);
        dismissLink();
      },
      iOSPresentationStyle: LinkIOSPresentationStyle.MODAL,
      logLevel: LinkLogLevel.ERROR,
    };
  };

  const handleOpenLink = () => {
    const openProps = createLinkOpenProps();
    open(openProps);
  };

  return (
    <>

    <View style={homeScreenStyles.container}>
      <Text style={homeScreenStyles.text}>Home Screen</Text>
      <Text style={homeScreenStyles.subtext}>Welcome to Stush App</Text>
      <TouchableOpacity style={styles.signInButton} onPress={handleOpenLink}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
          Connect Bank Account
        </Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

export default BankAccountSelectionScreen;
