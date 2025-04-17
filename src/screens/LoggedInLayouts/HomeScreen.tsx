// src/screens/employee/HomeScreen.tsx
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import homeScreenStyles from '../../css/HomeScreen.styles';
import styles from '../../css/About.styles';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation: any = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  const handleBankSelection = () => {
    navigation.navigate('BankAccountSelection');
  };
  return (
    <View style={homeScreenStyles.container}>
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
      <Text style={homeScreenStyles.text}>Home Screen</Text>
      <Text style={homeScreenStyles.subtext}>Welcome to Stush App</Text>
      <TouchableOpacity style={styles.signInButton} onPress={handleBankSelection}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
          Select Bank Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
