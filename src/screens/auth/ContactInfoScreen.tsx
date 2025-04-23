import React, { useState } from 'react';
import { View } from 'react-native';
import VerificationBase from '../../components/common/VerificationBase';
import PhoneInput from '../../components/common/PhoneInput';
import Keypad from '../../components/common/NumericKeypad';
import styles from '../../css/Verificcation.styles';

interface PhoneNumberScreenProps {
  navigation: any;
}

const PhoneNumberScreen: React.FC<PhoneNumberScreenProps> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleVerify = () => {
    navigation.navigate('OTPVerificationScreen', { phoneNumber });
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

    } else {
      setPhoneNumber(phoneNumber + key);
    }
  };

  return (
    <VerificationBase
      title="PHONE NUMBER"
      instruction="Enter your phone number below. It will be used for verification and updates."
      buttonText="Verify Phone Number"
      onButtonPress={handleVerify}
      onBackPress={handleBackPress}
      showBackButton={true}
    >
      <View>
        <PhoneInput
          phoneNumber={phoneNumber}
          onPhoneNumberChange={setPhoneNumber}
        />

        <Keypad onKeyPress={handleKeyPress} />
      </View>
    </VerificationBase>
  );
};
export default PhoneNumberScreen;