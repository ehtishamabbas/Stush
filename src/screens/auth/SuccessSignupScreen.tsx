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
     navigation.navigate('CreatePassword');
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require('../../../assets/images/backgrounds.png')}
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
               <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'stretch',
              }}>
                 <View style={{
                  width: 20,
                  alignItems: 'flex-end',
                }}>
                  <View style={{
                    width: 1,
                    height: '70%',
                    backgroundColor: '#FFFFFF',
                    opacity: 0.13,
                    marginTop: 40,
                  }} />
                </View>
                
                 <View style={{
                  flex: 1,
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  maxWidth: '95%',
                }}>
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
                  
                   <View style={{
                    marginTop: '40%',
                    width: '100%',
                    alignItems: 'center',
                  }}>
                    <Text style={styles.whatsNextHeading}>What's Next?</Text>
                    <Text style={styles.credentialsText}>
                      Create Login Credentials
                    </Text>
                  </View>
                </View>
                
                 <View style={{
                  width: 20,
                  alignItems: 'flex-start',
                }}>
                  <View style={{
                    width: 1,
                    height: '70%',
                    backgroundColor: '#FFFFFF',
                    opacity: 0.13,
                    marginTop: 40,
                  }} />
                </View>
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