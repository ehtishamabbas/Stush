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

import styles from './style';
import { useNavigation } from '@react-navigation/native';

const BankAccountSelectionScreen = () => {
  const [linkToken, setLinkToken] = useState(null);
  const [linkCopy, setLinkCopy] = useState(null);
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
        setLinkCopy(data.linkToken);
      })
      .catch(err => {
        console.log(err);
      });
  }, [setLinkToken, setLinkCopy, platform]);

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
    <View style={{flex: 1}}>
      <View style={styles.heading}>
        <Text style={styles.titleText}>
          Tiny Quickstart – React Native {linkToken}
        </Text>
        <Text style={styles.baseText}>{linkCopy}</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={handleOpenLink}>
          <Text style={styles.baseText}>Open Link</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BankAccountSelectionScreen;
