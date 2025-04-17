// src/screens/auth/EmailInputScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../css/RegisterScreen.styles';

const EmailInputScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigation: any = useNavigation();

  // Clear errors when user starts typing
  const clearError = () => {
    if (errors.email) {
      setErrors({ ...errors, email: '' });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '' };

    // Email validation
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
      isValid = false;
    } else {
      // Basic email format validation
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
      // Log the validated email
      console.log('Email details:', {
        email: email.trim(),
        timestamp: new Date().toISOString(),
      });
      
      // Navigate to VerifyEmail screen
      setTimeout(() => {
        setIsSubmitting(false);
        navigation.navigate('VerifyEmail'); 
      }, 500);
    } else {
      // Show the error in an alert for accessibility
      if (errors.email) {
        Alert.alert('Input Error', errors.email);
      }
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <ImageBackground
          source={require('../../../assets/images/background.png')}
          style={styles.backgroundImage}
          resizeMode="cover">
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
              {/* Back Button */}
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
              <View style={styles.logoContainer}>
                <Image
                  source={require('../../../assets/images/stushlogo.png')}
                  style={styles.logoImage}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.formContainer}>
                <View style={styles.formSubContainer}>
                  <Text style={styles.heading}>STAY CONNECTED</Text>

                  <View style={styles.inputContainer}>
                    <TextInput
                      placeholder="Your Email Address"
                      placeholderTextColor="#8D8E99"
                      style={[
                        styles.input,
                        errors.email ? styles.inputError : null,
                      ]}
                      value={email}
                      onChangeText={text => {
                        setEmail(text);
                        clearError();
                      }}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      returnKeyType="done"
                      maxLength={100}
                      accessibilityLabel="Email Address"
                      accessibilityHint="Enter your email address"
                    />
                    {errors.email ? (
                      <Text style={styles.errorText}>{errors.email}</Text>
                    ) : null}
                  </View>

                  <TouchableOpacity
                    style={[
                      styles.nextButton,
                      isSubmitting ? styles.nextButtonDisabled : null,
                    ]}
                    activeOpacity={0.8}
                    onPress={handleNext}
                    disabled={isSubmitting}
                    accessibilityLabel="Next button"
                    accessibilityHint="Continue to verify email">
                    {isSubmitting ? (
                      <ActivityIndicator color="#FFFFFF" />
                    ) : (
                      <Text style={styles.nextButtonText}>Next</Text>
                    )}
                  </TouchableOpacity>

                  <View style={styles.signInContainer}>
                    <Text style={styles.signInText}>
                      Already have an account?{' '}
                      <Text
                        style={styles.signInLink}
                        onPress={handleSignIn}
                        accessibilityRole="link"
                        accessibilityHint="Go to sign in screen">
                        Sign In
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </>
    </TouchableWithoutFeedback>
  );
};

export default EmailInputScreen;