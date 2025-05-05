import React, { useState } from 'react';
import { Keyboard, Alert, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import AppScreen from '../../components/common/AppScreen';
import FormInput from '../../components/common/FormInput';
import NavigateButton from '../../components/common/NavigateButton';
import SignUpLink from '../../components/common/SignUpLink';
import baseStyles from '../../css/BaseStyles';
import { NavigationProp } from '@react-navigation/native';

const EmailInputScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearError = () => {
    if (errors.email) {
      setErrors({ ...errors, email: '' });
    }
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '' };

    if (!email.trim()) {
      newErrors.email = 'Email address is required';
      isValid = false;
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email.trim())) {
        newErrors.email = 'Please enter a valid email address';
        isValid = false;
      }
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    Keyboard.dismiss();
    if (validateForm()) {
      setIsSubmitting(true);
      console.log('Email details:', {
        email: email.trim(),
        timestamp: new Date().toISOString(),
      });

      setTimeout(() => {
        setIsSubmitting(false);
        navigation.navigate('VerifyEmailScreen');
      }, 500);
    } else {
      if (errors.email) {
        Alert.alert('Input Error', errors.email);
      }
      setIsSubmitting(false);
    }
  };

  return (
    <AppScreen showBackButton={true} enableKeyboardAvoid={true}>
      <View style={baseStyles.formContainer}>
        <Text style={baseStyles.heading}>STAY CONNECTED</Text>
        <FormInput
          placeholder="Your Email Address"
          value={email}
          onChangeText={setEmail}
          error={errors.email}
          clearError={clearError}
          keyboardType="email-address"
          autoCapitalize="none"
          returnKeyType="done"
          maxLength={100}
          accessibilityLabel="Email Address"
          accessibilityHint="Enter your email address"
        />

        <NavigateButton
          title="Next"
          onPress={handleNext}
          isLoading={isSubmitting}
          accessibilityLabel="ConnectScreen"
        />

        <SignUpLink />
      </View>
    </AppScreen>
  );
};

export default EmailInputScreen;