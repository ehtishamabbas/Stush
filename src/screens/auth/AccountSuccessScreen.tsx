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
import styles from '../../css/AccountSucces';

interface SuccessSignupProps {
  navigation?: any;
}

const AccountSuccess: React.FC<SuccessSignupProps> = ({navigation}) => {
  const handleNext = () => {
    navigation.navigate('BonusScreen');
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
        source={require('../../../assets/images/backgrounds.png')}
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
            <View style={styles.contentContainerr}>
              <View style={styles.contentContainer}>
                <Text style={styles.heading}>SUCCESS!</Text>
                <Text style={styles.heading}>
                  Your account has been created!
                </Text>

                <View style={styles.imageContainerr}>
                  <Image
                    source={require('../../../assets/images/Crypto.png')}
                    style={styles.walletImagee}
                    accessibilityLabel="Success Image"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default AccountSuccess;
