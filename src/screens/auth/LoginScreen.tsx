import React, {useState, useRef, useEffect} from 'react';
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
import {useNavigation} from '@react-navigation/native';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginScreen = () => {
  const navigation: any = useNavigation();

  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(true);

  // Error states
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // References for input focus
  const passwordRef = useRef<RNTextInput>(null);

  // Check for existing session on component mount
  useEffect(() => {
    checkExistingSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkExistingSession = async () => {
    try {
      // Check if Keychain is available
      if (!Keychain || typeof Keychain.getGenericPassword !== 'function') {
        console.error('Keychain is not properly initialized');
        setIsCheckingSession(false);
        return;
      }

      // Retrieve credentials from secure storage
      const credentials = await Keychain.getGenericPassword();

      if (credentials) {
        // Parse the stored data
        const userData = JSON.parse(credentials.password);

        // Check if session is still valid (within 24 hours)
        const sessionTime = new Date(userData.timestamp);
        const currentTime = new Date();
        const timeDifference = currentTime.getTime() - sessionTime.getTime();
        const hoursDifference = timeDifference / (1000 * 60 * 60);

        if (hoursDifference < 24) {
          // Session is still valid, navigate to Bank Account Selection
          navigation.replace('BankAccountSelection');
          return;
        } else {
          // Session expired, clear it
          await Keychain.resetGenericPassword();
        }
      }
    } catch (error) {
      console.error('Error checking session:', error);
    } finally {
      setIsCheckingSession(false);
    }
  };

  // Save user session
  const saveUserSession = async (userEmail: string, userPassword: string) => {
    try {
      const userData = {
        email: userEmail,
        password: userPassword,
        timestamp: new Date().toISOString(),
      };

      // Store user data securely
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

  // Validate email
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

  // Validate password
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

  // Handle forgot password
  const handleForgotPassword = () => {
    // Navigate to forgot password screen
    navigation.navigate('ForgotPassword');
  };

  // Handle sign in
  const handleSignIn = async () => {
    // Dismiss keyboard
    Keyboard.dismiss();

    // Validate form
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    try {
      setIsLoading(true);

      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Log credentials (for demo purposes only)
      console.log('Login Credentials:', {
        email,
        password,
        timestamp: new Date().toISOString(),
      });

      // In a real app, you would make an API call here
      // const response = await authService.login(email, password);

      // Save user session for 24 hours
      await saveUserSession(email, password);

      // Reset form
      setEmail('');
      setPassword('');

      // Navigate to home screen or dashboard
      navigation.navigate('BankAccountSelection');
    } catch (error) {
      // Handle errors
      Alert.alert(
        'Login Failed',
        'Invalid email or password. Please try again.',
        [{text: 'OK'}],
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Handle social login
  const handleSocialLogin = (provider: string) => {
    Alert.alert(
      'Social Login',
      `Login with ${provider} will be implemented soon.`,
      [{text: 'OK'}],
    );
  };

  const handleSignUp = () => {
    navigation.navigate('Register');
    setEmailError('');
    setPasswordError('');
    setEmail('');
    setPassword('');
  };

  // Show loading indicator while checking session
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
      style={{flex: 1, backgroundColor: '#000000'}}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1}}>
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
                contentContainerStyle={{flexGrow: 1}}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                  {/* Logo */}
                  <View style={styles.logoContainer}>
                    <Image
                      source={require('../../../assets/images/stushlogo.png')}
                      style={styles.logoImage}
                      resizeMode="contain"
                    />
                  </View>

                  {/* Login Form */}
                  <View style={styles.formOuterContainer}>
                    <View style={styles.formContainer}>
                      <Text style={styles.heading}>SIGN IN</Text>

                      {/* Email Input */}
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

                      {/* Password Input */}
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

                      {/* Forgot Password */}
                      <TouchableOpacity
                        style={styles.forgotPasswordContainer}
                        onPress={handleForgotPassword}>
                        <Text style={styles.forgotPassword}>FORGOT PASSWORD?</Text>
                      </TouchableOpacity>

                      {/* Sign In Button */}
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

                      {/* Divider */}
                      <View style={styles.dividerContainer}>
                        <View style={styles.divider} />
                        <Text style={styles.dividerText}>or sign in using</Text>
                        <View style={styles.divider} />
                      </View>

                      {/* Social Login */}
                      <View style={styles.socialContainer}>
                        {/* Twitter */}
                        <TouchableOpacity
                          style={styles.socialIconWrap}
                          onPress={() => handleSocialLogin('Twitter')}>
                          <View
                            style={[styles.socialIconButton, styles.twitterButton]}>
                            <Text style={styles.twitterIcon}>𝕏</Text>
                          </View>
                        </TouchableOpacity>

                        {/* Facebook */}
                        <TouchableOpacity
                          style={styles.socialIconWrap}
                          onPress={() => handleSocialLogin('Facebook')}>
                          <View
                            style={[
                              styles.socialIconButton,
                              styles.facebookButton,
                            ]}>
                            <Text style={styles.facebookIcon}>f</Text>
                          </View>
                        </TouchableOpacity>

                        {/* Google */}
                        <TouchableOpacity
                          style={styles.socialIconWrap}
                          onPress={() => handleSocialLogin('Google')}>
                          <View
                            style={[styles.socialIconButton, styles.googleButton]}>
                            <Text style={styles.googleIcon}>G</Text>
                          </View>
                        </TouchableOpacity>

                        {/* TikTok */}
                        <TouchableOpacity
                          style={styles.socialIconWrap}
                          onPress={() => handleSocialLogin('TikTok')}>
                          <View
                            style={[styles.socialIconButton, styles.tiktokButton]}>
                            <Text style={styles.tiktokIcon}>♪</Text>
                          </View>
                        </TouchableOpacity>

                        {/* Instagram */}
                        <TouchableOpacity
                          style={styles.socialIconWrap}
                          onPress={() => handleSocialLogin('Instagram')}>
                          <View
                            style={[
                              styles.socialIconButton,
                              styles.instagramButton,
                            ]}>
                            <View style={styles.instagramIcon} />
                          </View>
                        </TouchableOpacity>
                      </View>

                      {/* Sign Up Link */}
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