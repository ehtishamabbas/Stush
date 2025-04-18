import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
} from 'react-native';
var styles = require('./style');

const SuccessScreen = () => {
  const [balanceData, setBalanceData] = useState(null);

  // Fetch balance data
  const getBalance = useCallback(async () => {
    await fetch('http://localhost:3000/api/plaid/accounts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setBalanceData(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    if (balanceData == null) {
      getBalance();
    }
  }, [balanceData, getBalance]);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.heading}>
        <Text style={styles.titleText}>Balance Response</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.baseText}>
            {
              JSON.stringify(balanceData)
            }
        </Text>
      </View>
    </View>
  );
};

export default SuccessScreen;
