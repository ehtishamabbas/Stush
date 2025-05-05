import React from 'react';
import { View, StyleSheet } from 'react-native';

import MainScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import ReferralContent from '../../components/ResueableComponents/Referal';
import NavigateButton from '../../components/common/NavigateButton';
import { style } from '../../css/SharedStyle';

interface BonusScreenProps {
  navigation: any;
}

const BonusScreen: React.FC<BonusScreenProps> = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('WelcomeUser');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <MainScreen>
      <View style={style.container}>
        <Header navigation={navigation} onBackPress={handleBack} />
        <View style={style.contentContainer}>
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

 

export default BonusScreen;