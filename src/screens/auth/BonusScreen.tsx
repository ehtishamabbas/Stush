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
import styles from '../../css/Bonus'; // Updated path with extension

interface ReferFriendScreenProps {
  navigation?: any;
}

const BonusScreen: React.FC<ReferFriendScreenProps> = ({navigation}) => {
  const handleNext = () => {
    // Navigate to next screen
    navigation.navigate('NextScreen'); // Replace with your actual next screen
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
            {/* Header */}
            <View style={styles.header}>
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
            </View>

            {/* Content */}
            <View style={styles.contentContainer}>
              <Text style={styles.title}>REFER A FRIEND AND GET PAID</Text>

              <View style={styles.imageContainer}>
                <Image
                  source={require('../../../assets/images/Cashcoins.png')}
                  style={styles.moneyImage}
                  accessibilityLabel="Money Stack"
                />
              </View>

              <Text style={styles.earnText}>EARN UP TO</Text>
              <Text style={styles.amountText}>$7,500</Text>

              <View style={styles.bulletContainer}>
                <View style={styles.bulletPoint}>
                  <Text style={styles.bulletText}>• Earn Bonuses for Referrals</Text>
                </View>
                <View style={styles.bulletPoint}>
                  <Text style={styles.bulletText}>• Get $5 minimum for each referral</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default BonusScreen;