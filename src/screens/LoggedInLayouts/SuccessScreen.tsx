import React, {useState, useEffect, useCallback} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import homeScreenStyles from '../../css/HomeScreen.styles';
import styles from '../../css/About.styles';
import {useNavigation} from '@react-navigation/native';

const SuccessScreen = () => {
  const [balanceData, setBalanceData] = useState<any>(null);
  const navigation: any = useNavigation();

  // Fetch balance data
  const getBalance = useCallback(async () => {
    await fetch('http://localhost:3000/api/plaid/accounts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setBalanceData(data?.accounts);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (balanceData == null) {
      getBalance();
    }
  }, [balanceData, getBalance]);

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={homeScreenStyles.successContainer}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.8}
          onPress={handleBack}
          accessibilityLabel="Go back"
          accessibilityRole="button">
          <Image
            source={require('../../../assets/images/back-arrow.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        {balanceData ? (
          <>
            <Text style={homeScreenStyles.text}>Bank account connected </Text>
            <Text style={homeScreenStyles.text}>Account Information</Text>
            <Text style={homeScreenStyles.subtext}>{balanceData?.[0]?.name}</Text>
            <Text style={homeScreenStyles.subtext}>
              {balanceData?.[0]?.balances?.available +
                ' ' +
                balanceData?.[0]?.balances?.iso_currency_code}
            </Text>
            <Text style={homeScreenStyles.subtext}>{balanceData?.[0]?.type}</Text>
          </>
        ) : null}
      </View>
    </>
  );
};

export default SuccessScreen;
