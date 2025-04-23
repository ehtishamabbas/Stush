import React, { useState, useRef, useEffect } from 'react';
import { TextInput as RNTextInput, View, Text, TouchableOpacity, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Keychain from 'react-native-keychain';

import AppScreen from '../../components/common/AppScreen';
import FormInput from '../../components/common/FormInput';
import FormButton from '../../components/common/FormButton';
import SignInLink from '../../components/common/SignInLink';
import SocialIcons from '../../components/SocialMediaIcons';
import baseStyles from '../../css/BaseStyles';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginScreen = () => {
  const navigation: any = useNavigation();
  const passwordRef = useRef<RNTextInput>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    if (!email.trim()) {
      setEmailError('Email is required');
      return false;
    } else if (!EMAIL_REGEX.test(email)) {
      setEmailError('Please enter a valid email');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = () => {
    if (!password.trim()) {
      setPasswordError('Password is required');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const clearEmailError = () => setEmailError('');
  const clearPasswordError = () => setPasswordError('');

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleSignIn = async () => {
    Keyboard.dismiss();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    try {
      setIsLoading(true);

       await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Login Credentials:', {
        email,
        password,
        timestamp: new Date().toISOString(),
      });

       const userData = {
        email,
        timestamp: new Date().toISOString(),
      };
      await Keychain.setGenericPassword('user_session', JSON.stringify(userData));

      setEmail('');
      setPassword('');

      navigation.navigate('BankAccountSelection');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = () => {
    navigation.navigate('PhoneNumberScreen');
  };

  return (
    <AppScreen showBackButton={false} enableKeyboardAvoid={true}>
      <View style={baseStyles.formContainer}>
        <Text style={baseStyles.heading}>SIGN IN</Text>
        
        <FormInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          error={emailError}
          clearError={clearEmailError}
          keyboardType="email-address"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        
        <FormInput
          ref={passwordRef}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          error={passwordError}
          clearError={clearPasswordError}
          secureTextEntry
          returnKeyType="done"
          onSubmitEditing={handleSignIn}
        />
        
        <TouchableOpacity
          style={baseStyles.forgotPasswordContainer}
          onPress={handleForgotPassword}>
          <Text style={baseStyles.forgotPassword}>FORGOT PASSWORD?</Text>
        </TouchableOpacity>
        
        <FormButton
          title="Sign In"
          onPress={handleSignIn}
          isLoading={isLoading}
        />
        
        <View style={baseStyles.dividerContainer}>
          <View style={baseStyles.divider} />
          <Text style={baseStyles.dividerText}>or sign in using</Text>
          <View style={baseStyles.divider} />
        </View>
        
        <SocialIcons />
        
        <SignInLink
          text="Don't have an account?"
          linkText="Sign Up"
          navigateTo="PhoneNumberScreen"
        />
      </View>
    </AppScreen>
  );
};

export default LoginScreen;