import React from 'react';
import { View, StyleSheet } from 'react-native';

import MainScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import ReferralContent from '../../components/ResueableComponents/Referal';
import NavigateButton from '../../components/common/NavigateButton';

interface ReferFriendScreenProps {
  navigation: any;
}

const ReferFriendScreen: React.FC<ReferFriendScreenProps> = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('WelcomeUser');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <MainScreen>
      <View style={styles.container}>
        <Header navigation={navigation} onBackPress={handleBack} />
        <View style={styles.contentContainer}>
          <ReferralContent
            title="REFER A FRIEND AND GET PAID"
            amount="$7,500"
            bulletPoints={[
              'Earn Bonuses for Referrals',
              'Get $5 minimum for each referral'
            ]}
          />

 
          <NavigateButton
            title="Next"
            onPress={handleNext}
            accessibilityLabel="Next Screen"
            
          />
        </View>
      </View>
    </MainScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 1,
    paddingBottom: '32%',
  },
  spacer: {
    flex: 1,
  },
});

export default ReferFriendScreen;