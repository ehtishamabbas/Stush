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
import styles from '../../css/SuccessScreen.styles';

interface SuccessSignupProps {
  navigation?: any;
}

const SuccessSignup: React.FC<SuccessSignupProps> = ({navigation}) => {
  const handleNext = () => {
    // Navigate to the CreatePassword screen
    // Use the exact name as registered in your navigation stack
    navigation.navigate('CreatePassword'); // Changed from 'CreatePasswordScreen'
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
              <Text style={styles.heading}>SUCCESS!</Text>

              <Text style={styles.subText}>
                Your phone has been verified.{'\n'}
                Your Stush Pay account is now secure{'\n'}
                and ready to use.
              </Text>

              <View style={styles.imageContainer}>
                <Image
                  source={require('../../../assets/images/wallet-success.png')}
                  style={styles.walletImage}
                  accessibilityLabel="Success Image"
                />
              </View>

              <Text style={styles.resendText}>
                Resend Verification if Needed
              </Text>

              <View style={styles.whatsNextContainer}>
                <Text style={styles.whatsNextHeading}>What's Next?</Text>
                <Text style={styles.credentialsText}>
                  Create Login Credentials
                </Text>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.nextButton}
                  onPress={handleNext}>
                  <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default SuccessSignup;
