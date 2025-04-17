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
} from 'react-native';
import styles from '../../css/VerifyEmail.styles';

interface VerifyEmailScreenProps {
  navigation?: any;
}

const VerifyEmailScreen: React.FC<VerifyEmailScreenProps> = ({navigation}) => {
  const handleContinue = () => {
    // Navigate to next screen
    navigation.navigate('ContactInfo'); // Replace with your actual next screen
  };

  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  const handleBack = () => {
    navigation.goBack();
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

            {/* Content */}
            <View style={styles.contentContainer}>
              <Text style={styles.heading}>
                VERIFY YOUR EMAIL{'\n'}
                FOR FULL ACCESS
              </Text>

              <Text style={styles.subText}>
                Please verify your email within 24-48 hours to unlock all{'\n'}
                features and enhance your security.
              </Text>

              <Text style={styles.warningText}>
                Without verification, some features may be limited.
              </Text>

              <TouchableOpacity
                style={styles.continueButton}
                onPress={handleContinue}>
                <Text style={styles.continueButtonText}>
                  Continue & Verify Later
                </Text>
              </TouchableOpacity>

              <View style={styles.signInContainer}>
                <Text style={styles.signInText}>
                  Already have an account?{' '}
                  <Text style={styles.signInLink} onPress={handleSignIn}>
                    Sign In
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default VerifyEmailScreen;
