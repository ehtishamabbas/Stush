import React, { useState } from 'react';
import { View } from 'react-native';
import VerificationBase from '../../components/common/VerificationBase';
import CodeInput from '../../components/common/CodeInput';
import Keypad from '../../components/common/NumericKeypad';
import ResendTimer from '../../components/common/resend';
import styles from '../../css/Verificcation.styles';
import NavigateButton from '../../components/common/NavigateButton';

interface OTPVerificationScreenProps {
  navigation: any;
  route: any;
}

const OTPVerificationScreen: React.FC<OTPVerificationScreenProps> = ({ navigation, route }) => {
  const { phoneNumber } = route.params || { phoneNumber: '+1234567890' };
  const [code, setCode] = useState<string[]>(Array(6).fill(''));

  const handleVerify = () => {
    navigation.navigate('SuccessSignup');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      const newCode = [...code];
      for (let i = newCode.length - 1; i >= 0; i--) {
        if (newCode[i]) {
          newCode[i] = '';
          break;
        }
      }
      setCode(newCode);
    } else if (key === 'forgot') {
      // Handle forgot functionality
    } else {
      const emptyIndex = code.findIndex(digit => !digit);
      if (emptyIndex !== -1) {
        const newCode = [...code];
        newCode[emptyIndex] = key;
        setCode(newCode);
      }
    }
  };

  const handleCodeChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleResend = () => {
    console.log('Resending OTP...');
  };

  return (
    <VerificationBase
      title="OTP VERIFICATION"
      instruction={`Please enter 6-digit code we have sent you at ${phoneNumber}`}
      onBackPress={handleBackPress}
      showBackButton={true}
      buttonText="Verify OTP"   
      onButtonPress={handleVerify}  
    >
      <CodeInput
        code={code}
        onCodeChange={handleCodeChange}
      />

      <ResendTimer
        initialSeconds={48}
        onResend={handleResend}
      />

      <View style={{ marginBottom: 20 }}>
        <Keypad onKeyPress={handleKeyPress} />
      </View>
      
      
    </VerificationBase>
  );
};

export default OTPVerificationScreen;