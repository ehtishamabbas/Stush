
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

import DisclouserMainScreen from '../../components/ResueableComponents/DisclouerMainScreen';
import BulletPoints from '../../components/ResueableComponents/BulletPoints';
import NavButton from '../../components/common/NavigateButton';
import styles from '../../css/Disclouser';

const WelcomeStushScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const bulletItems = [
    {
      text: 'We verify your completed work and pay you instantly.'
    },
    {
      text: 'No waiting for payday – Get access to the money you\'ve already earned.'
    },
    {
      text: 'Simple, transparent fees – No surprises, just fair access to your money.'
    }
  ];

  const handleContinue = () => {
    navigation.navigate('Wedifferent');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <DisclouserMainScreen onBackPress={handleBack} showBackButton={true} showLogo={false}>
      <View style={localStyles.contentContainer}>
        <Text style={localStyles.title}>WELCOME TO{"\n"}STUSH PAY</Text>

        <Text style={styles.subtitle}>Your Money, When you need it.</Text>

        <Text style={styles.info}>
          This is an Earned Income Payout Service{"\n"}- NOT a loan!
        </Text>

        <BulletPoints items={bulletItems} />

        <Text style={styles.footerText}>
          YOU WORKED FOR IT.{"\n"}NOW GET PAID FASTER.
        </Text>

        <NavButton
          title="Continue"
          onPress={handleContinue}
        />
      </View>
    </DisclouserMainScreen>
  );
};

const localStyles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingTop: 35,
    paddingHorizontal: 20,
    marginBottom: '15%',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 36,
  },
});

export default WelcomeStushScreen;