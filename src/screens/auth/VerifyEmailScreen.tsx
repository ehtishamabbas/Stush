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
import styles from '../../css/Email.Screen';

interface VerifyEmailScreenProps {
  navigation?: any;
}

const VerifyEmailScreen: React.FC<VerifyEmailScreenProps> = ({navigation}) => {
  const handleContinue = () => {
     navigation.navigate('PhoneNumberScreen');  
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
                accessibilityLabel="Stush Logo"
                resizeMode="contain"
              />
            </View>

            <View style={styles.contentContainer}>
              <Text style={styles.heading}>
                VERIFY YOUR EMAIL{'\n'}
                FOR FULL ACCESS
              </Text>

              <Text style={styles.subText}>
                Please verify your email within 24-48 hours to unlock all
                features and enhance your security.
              </Text>

              <Text style={styles.warningText}>
                Without verification, some features may be limited.
              </Text>

              <TouchableOpacity
                style={styles.nextButton}
                onPress={handleContinue}>
                <Text style={styles.nextButtonText}>
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