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
     navigation.navigate('WelcomeUser');
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

            <View style={styles.contentContainer}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
                }}>
                 <View
                  style={{
                    width: 5,
                    alignItems: 'flex-end',
                  }}>
                  <View
                    style={{
                      width: 1,
                      height: '70%',
                      backgroundColor: '#FFFFFF',
                      opacity: 0.13,
                      marginTop: 40,
                    }}
                  />
                </View>

                 <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    maxWidth: '95%',
                  }}>
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
                      <Text style={styles.bulletText}>
                        • Earn Bonuses for Referrals
                      </Text>
                    </View>
                    <View style={styles.bulletPoint}>
                      <Text style={styles.bulletText}>
                        • Get $5 minimum for each referral
                      </Text>
                    </View>
                  </View>
                </View>

                 <View
                  style={{
                    width: 5,
                    alignItems: 'flex-start',
                  }}>
                  <View
                    style={{
                      width: 1,
                      height: '70%',
                      backgroundColor: '#FFFFFF',
                      opacity: 0.13,
                      marginTop: 40,
                    }}
                  />
                </View>
              </View>

              <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={handleNext}
                activeOpacity={0.8}
                accessibilityLabel="Go to Welcome screen"
                accessibilityRole="button">
                <View>
                  <Text style={styles.nextButtonText}>Next</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default BonusScreen;