import React, { useState } from 'react';
import { Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppScreen from '../../components/common/AppScreen';
import FormContainer from '../../components/common/FormContainer';
import FormInput from '../../components/common/FormInput';
import FormButton from '../../components/common/FormButton';
import SignInLink from '../../components/common/SignInLink';

const EmailInputScreen = () => {
  const navigation: any = useNavigation();
  
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
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
        navigation.navigate('VerifyEmail'); 
      }, 500);
    } else {
      if (errors.email) {
        Alert.alert('Input Error', errors.email);
      }
      setIsSubmitting(false);
    }
  };

  return (
    <AppScreen>
      <FormContainer heading="STAY CONNECTED">
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
        
        <FormButton
          title="Next"
          onPress={handleNext}
          isLoading={isSubmitting}
        />
        
        <SignInLink />
      </FormContainer>
    </AppScreen>
  );
};

export default EmailInputScreen;