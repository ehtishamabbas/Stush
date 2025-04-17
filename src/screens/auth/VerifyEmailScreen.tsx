// src/screens/auth/VerifyEmailScreen.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  BackHandler,
  Alert,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styles from '../../css/RegisterScreen.styles';

const { width } = Dimensions.get('window');

// Additional styles needed for VerifyEmail screen
const verifyEmailStyles = StyleSheet.create({
  messageContainer: {
    marginBottom: 20,
  },
  messageText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  warningText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  emailIconContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  emailIcon: {
    width: width * 0.3,
    height: width * 0.3,
    tintColor: 'rgba(31, 117, 254, 0.9)',
  },
  resendContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  resendText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 14,
  },
  resendLink: {
    color: 'rgba(31, 117, 254, 1)',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});

const VerifyEmailScreen: React.FC = () => {
  const navigation: any = useNavigation();

  // Handle hardware back button to show confirmation
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert(
          'Confirm',
          'Are you sure you want to go back? Your progress will be saved.',
          [
            { text: 'Cancel', style: 'cancel', onPress: () => {} },
            { text: 'Yes', onPress: () => navigation.goBack() }
          ]
        );
        return true; // Prevent default behavior
      };

      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => subscription.remove();
    }, [navigation])
  );

  const handleContinue = () => {
    // Navigate to the next screen after email verification
    navigation.navigate('Dashboard'); // Replace with your actual next screen
  };

  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  return (
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
            <View style={styles.logoContainer}>
              <Image
                source={require('../../../assets/images/stushlogo.png')}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.formContainer}>
              <View style={styles.formSubContainer}>
                <Text style={styles.heading}>VERIFY YOUR EMAIL FOR FULL ACCESS</Text>
                
                <View style={verifyEmailStyles.messageContainer}>
                  <Text style={verifyEmailStyles.messageText}>
                    Please verify your email within 24-48 hours to unlock all features and enhance your security.
                  </Text>
                  <Text style={verifyEmailStyles.warningText}>
                    Without verification, some features may be limited.
                  </Text>
 
                </View>

                <TouchableOpacity
                  style={styles.nextButton}
                  activeOpacity={0.8}
                  onPress={handleContinue}
                  accessibilityLabel="Continue button"
                  accessibilityHint="Continue to the app without verifying now">
                  <Text style={styles.nextButtonText}>Continue & Verify Later</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={verifyEmailStyles.resendContainer}
                  onPress={() => Alert.alert('Success', 'Verification email has been resent successfully!')}>
                  <Text style={verifyEmailStyles.resendText}>
                    Didn't receive the email? <Text style={verifyEmailStyles.resendLink}>Resend</Text>
                  </Text>
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
  );
};

export default VerifyEmailScreen;