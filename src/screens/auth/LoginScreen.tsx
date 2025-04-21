import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput as RNTextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import * as Keychain from 'react-native-keychain';
import styles from '../../css/LoginScreen.styles';
import { useNavigation } from '@react-navigation/native';
import SocialIcons from '../../components/SocialMediaIcons';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginScreen = () => {
  const navigation: any = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(true);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const passwordRef = useRef<RNTextInput>(null);

  useEffect(() => {
    checkExistingSession();
  }, []);

  const checkExistingSession = async () => {
    try {
      if (!Keychain || typeof Keychain.getGenericPassword !== 'function') {
        console.error('Keychain is not properly initialized');
        setIsCheckingSession(false);
        return;
      }

      const credentials = await Keychain.getGenericPassword();

      if (credentials) {
        const userData = JSON.parse(credentials.password);

        const sessionTime = new Date(userData.timestamp);
        const currentTime = new Date();
        const timeDifference = currentTime.getTime() - sessionTime.getTime();
        const hoursDifference = timeDifference / (1000 * 60 * 60);

        if (hoursDifference < 24) {
          navigation.replace('BankAccountSelection');
          return;
        } else {
          await Keychain.resetGenericPassword();
        }
      }
    } catch (error) {
      console.error('Error checking session:', error);
    } finally {
      setIsCheckingSession(false);
    }
  };

  const saveUserSession = async (userEmail: string, userPassword: string) => {
    try {
      const userData = {
        email: userEmail,
        password: userPassword,
        timestamp: new Date().toISOString(),
      };

      await Keychain.setGenericPassword(
        'user_session',
        JSON.stringify(userData),
      );

      return true;
    } catch (error) {
      console.error('Error saving session:', error);
      return false;
    }
  };

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
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return false;
    }
    setPasswordError('');
    return true;
  };

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


      await saveUserSession(email, password);

      setEmail('');
      setPassword('');

      navigation.navigate('BankAccountSelection');
    } catch (error) {
      Alert.alert(
        'Login Failed',
        'Invalid email or password. Please try again.',
        [{ text: 'OK' }],
      );
    } finally {
      setIsLoading(false);
    }
  };


  const handleSignUp = () => {
    navigation.navigate('Dashboard');
    setEmailError('');
    setPasswordError('');
    setEmail('');
    setPassword('');
  };

  if (isCheckingSession) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, backgroundColor: '#000000' }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
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
                showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                  <View style={styles.logoContainer}>
                    <Image
                      source={require('../../../assets/images/stushlogo.png')}
                      style={styles.logoImage}
                      resizeMode="contain"
                    />
                  </View>

                  <View style={styles.formOuterContainer}>
                    <View style={styles.formContainer}>
                      <Text style={styles.heading}>SIGN IN</Text>

                      <TextInput
                        placeholder="Email"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        style={[
                          styles.input,
                          emailError ? styles.inputError : null,
                        ]}
                        value={email}
                        onChangeText={setEmail}
                        onBlur={validateEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current?.focus()}
                        autoCorrect={false}
                      />
                      {emailError ? (
                        <Text style={styles.errorText}>{emailError}</Text>
                      ) : null}

                      <TextInput
                        ref={passwordRef}
                        placeholder="Password"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        secureTextEntry
                        style={[
                          styles.input,
                          passwordError ? styles.inputError : null,
                        ]}
                        value={password}
                        onChangeText={setPassword}
                        onBlur={validatePassword}
                        returnKeyType="done"
                        onSubmitEditing={handleSignIn}
                      />
                      {passwordError ? (
                        <Text style={styles.errorText}>{passwordError}</Text>
                      ) : null}

                      <TouchableOpacity
                        style={styles.forgotPasswordContainer}
                        onPress={handleForgotPassword}>
                        <Text style={styles.forgotPassword}>FORGOT PASSWORD?</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.signInButton}
                        onPress={handleSignIn}
                        disabled={isLoading}>
                        {isLoading ? (
                          <ActivityIndicator color="#FFFFFF" />
                        ) : (
                          <Text style={styles.signInButtonText}>Sign In</Text>
                        )}
                      </TouchableOpacity>

                      <View style={styles.dividerContainer}>
                        <View style={styles.divider} />
                        <Text style={styles.dividerText}>or sign in using</Text>
                        <View style={styles.divider} />
                      </View>

                      <View style={styles.socialContainer}>
                        <SocialIcons />
                      </View>

                      <View style={styles.signUpContainer}>
                        <Text style={styles.signUpText}>
                          Don't have an account?{' '}
                        </Text>
                        <TouchableOpacity onPress={() => handleSignUp()}>
                          <Text style={styles.signUpLink}>Sign Up</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </SafeAreaView>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;