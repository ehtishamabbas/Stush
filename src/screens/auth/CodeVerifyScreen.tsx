import React, { useState } from 'react';
import { View, Text } from 'react-native';
import VerificationBase from '../../components/common/VerificationBase';
import CodeInput from '../../components/common/CodeInput';
import Keypad from '../../components/common/NumericKeypad';
import ResendTimer from '../../components/common/resend';
import styles from '../../css/Verificcation.styles';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface OTPVerificationScreenParams {
  phoneNumber: string;
}
type OTPVerificationScreenProps = NativeStackScreenProps<RootStackParamList, 'OTPVerificationScreen'>;

export const OTPVerificationScreen = ({ navigation, route }: OTPVerificationScreenProps) => {

  const { phoneNumber } = route.params || { phoneNumber: '+123456789110' };
  const [code, setCode] = useState<string[]>(Array(6).fill(''));
  const [error, setError] = useState<string | undefined>(undefined);

  const handleError = (message?: string) => {
    setError(message ?? undefined);
  };

  const handleVerify = () => {
    const fullCode = code.join('');
    if (fullCode.length !== 6) {
      handleError('Please enter a 6-digit code');
      return;
    }
    navigation.navigate('SuccessSignup');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      const newCode = [...code];
      const lastFilledIndex = newCode.findIndex((val, idx) => val !== '' && newCode.slice(idx + 1).every(v => v === ''));
      if (lastFilledIndex !== -1) {
        newCode[lastFilledIndex] = '';
        setCode(newCode);
      }
    } else if (key === 'forgot') {
      navigation.navigate('ForgotPasswordScreen');
    } else {
      const newCode = [...code];
      const nextEmptyIndex = newCode.findIndex(val => val === '');
      if (nextEmptyIndex !== -1) {
        newCode[nextEmptyIndex] = key;
        setCode(newCode);
      }
    }
    handleError();
  };

  const validateCode = (newCode: string[]) => {
    if (newCode.filter(Boolean).length === 6) {
      handleError();
    }
  };

  return (
    <VerificationBase
      title="VERIFY CODE"
      instruction={`Enter the 6-digit code sent to ${phoneNumber}`}
      onBackPress={handleBackPress}
      showBackButton={true}
      buttonText="Verify OTP"
      onButtonPress={handleVerify}
    >
      {error && <Text style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>{error}</Text>}

      <CodeInput
        code={code}
        onCodeChange={(newCode) => {
          setCode(newCode);
          validateCode(newCode);
        }}
        error={error}
      />

      <ResendTimer
        initialSeconds={48}
        onResend={handleVerify}
      />

      <View style={{ marginBottom: 10 }}>
        <Keypad onKeyPress={handleKeyPress} />

      </View>


    </VerificationBase>
  );
};

export default OTPVerificationScreen;