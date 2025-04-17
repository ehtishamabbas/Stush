// src/screens/auth/AboutScreen.tsx
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
   ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../css/About.styles';

const AboutScreen = () => {
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({
    dob: '',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigation: any = useNavigation();

  // Clear errors when user starts typing
  const clearError = (field: 'dob' | 'address') => {
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { dob: '', address: '' };

    // Date of Birth validation
    if (!dob.trim()) {
      newErrors.dob = 'Date of Birth is required';
      isValid = false;
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dob.trim())) {
      newErrors.dob = 'Please use format: MM/DD/YYYY';
      isValid = false;
    }

    // Address validation
    if (!address.trim()) {
      newErrors.address = 'Home Address is required';
      isValid = false;
    } else if (address.trim().length < 5) {
      newErrors.address = 'Please enter a valid address';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    Keyboard.dismiss();
    if (validateForm()) {
      setIsSubmitting(true);
      // Log the validated user details
      console.log('About details:', {
        dob: dob.trim(),
        address: address.trim(),
        timestamp: new Date().toISOString(),
      });
      
      // Navigate to EmailInput screen
      setTimeout(() => {
        setIsSubmitting(false);
        navigation.navigate('EmailInput');
      }, 500);
    } else {
      // Show the first error in an alert for accessibility
      const firstError = errors.dob || errors.address;
      if (firstError) {
        Alert.alert('Input Error', firstError);
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
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <ImageBackground
          source={require('../../../assets/images/background.png')}
          style={styles.backgroundImage}
          resizeMode="cover">
          <SafeAreaView style={styles.safeArea}>
            <ScrollView 
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="handled"
            >
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
                    accessibilityLabel="Stush Logo"
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.formContainer}>
                  <View style={styles.formSubContainer}>
                    <Text style={styles.heading}>TELL US ABOUT YOURSELF</Text>

                    <View style={styles.inputContainer}>
                      <TextInput
                        placeholder="Date of Birth (MM/DD/YYYY)"
                        placeholderTextColor="#8D8E99"
                        style={[
                          styles.input,
                          errors.dob ? styles.inputError : null,
                        ]}
                        value={dob}
                        onChangeText={text => {
                          setDob(text);
                          clearError('dob');
                        }}
                        keyboardType="numbers-and-punctuation"
                        returnKeyType="next"
                        maxLength={10}
                        accessibilityLabel="Date of Birth"
                        accessibilityHint="Enter your date of birth in MM/DD/YYYY format"
                      />
                      {errors.dob ? (
                        <Text style={styles.errorText}>{errors.dob}</Text>
                      ) : null}
                    </View>

                    <View style={styles.inputContainer}>
                      <TextInput
                        placeholder="Home Address"
                        placeholderTextColor="#8D8E99"
                        style={[
                          styles.input,
                          errors.address ? styles.inputError : null,
                        ]}
                        value={address}
                        onChangeText={text => {
                          setAddress(text);
                          clearError('address');
                        }}
                        returnKeyType="done"
                        maxLength={100}
                        accessibilityLabel="Home Address"
                        accessibilityHint="Enter your home address"
                      />
                      {errors.address ? (
                        <Text style={styles.errorText}>{errors.address}</Text>
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
                      accessibilityHint="Continue to the next step">
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
            </ScrollView>
          </SafeAreaView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AboutScreen;