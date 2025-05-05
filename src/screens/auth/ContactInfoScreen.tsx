import React, { useState } from 'react';
import { View, Text } from 'react-native';
import VerificationBase from '../../components/common/VerificationBase';
import PhoneInput from '../../components/common/PhoneInput';
import Keypad from '../../components/common/NumericKeypad';
import styles from '../../css/Verificcation.styles';
import NavigateButton from '../../components/common/NavigateButton';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { NavigationProp } from '@react-navigation/native';

const phoneNumberRegex = /^\+?\d{10,15}$/;

const PhoneNumberScreen = ({ navigation }: { navigation: NavigationProp<RootStackParamList> }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleVerify = () => {
    if (!phoneNumberRegex.test(phoneNumber)) {
      setError('Please enter a valid phone number (10-15 digits)');
      return;
    }
    setError(null);
    navigation.navigate('OTPVerificationScreen');
  };
  const handleBackPress = () => {
    navigation.goBack();
  };
  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      if (phoneNumber.length > 0) {
        setPhoneNumber(phoneNumber.slice(0, -1));
      }
    } else if (key === 'forgot') {
      navigation.navigate('ForgotPasswordScreen');
    } else {
      const newNumber = phoneNumber + key;
      if (newNumber.length <= 15) {
        setPhoneNumber(newNumber);
      }
    }
    setError(null);
  };
  return (
    <VerificationBase
      title="PHONE NUMBER"
      instruction="Enter your phone number below. It will be used for verification and updates."
      onBackPress={handleBackPress}
      showBackButton={true}
    >
      <View style={{ width: '100%', alignItems: 'center' }}>
        {error && <Text style={{ color: 'red', fontSize: 17, textAlign: 'center' }}>{error}</Text>}
        <PhoneInput
          phoneNumber={phoneNumber}
          onPhoneNumberChange={setPhoneNumber}
          error={error}
        />

        <Keypad onKeyPress={handleKeyPress} />
        <View style={{ height: 70 }} />
        <NavigateButton
          onPress={handleVerify}
          title="Verify Phone Number"
          buttonStyle={styles.verifyButton}
          textStyle={styles.verifyText}
        />
      </View>
    </VerificationBase>
  );
};

export default PhoneNumberScreen;