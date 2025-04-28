import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import BaseScreen from '../../components/ResueableComponents/DisclouerMainScreen';
import Heading from '../../components/ResueableComponents/Heading';
import NavButton from '../../components/common/NavigateButton';
import styles from '../../css/Disclouser';
import LocalStyles from '../../css/LocalStyle';

const DisclosuresScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const bulletItems = [
    {
      title: 'Access to Earnings',
      text: 'Stush provides early access to your earned wages. We do not offer loans, charge interest, or require credit checks. Read More.',
      isBlueTitle: true
    },
    {
      title: 'Data Privacy & Security',
      text: 'Your personal and banking information is securely encrypted. We never sell your data. Read More.',
      isBlueTitle: true
    },
    {
      title: 'Income Verification Consent',
      text: 'By continuing, you allow Stush to verify your income and deposits through secure connections to your payroll or bank. Read More',
      isBlueTitle: true
    }
  ];

  const handleAgree = () => {
    navigation.navigate('MyJob');
  };

  const handleBack = () => {
    navigation.goBack();
  };

   const renderBulletPoints = () => {
    return bulletItems.map((item, index) => (
      <View key={index} style={LocalStyles.bulletRow}>
        <FontAwesome5 
          name="check-circle" 
          size={18} 
          color={item.isBlueTitle ? '#FFFFFF' : '#FFFFFF'} 
        />
        <View style={LocalStyles.textContainer}>
          {item.title && (
            <Text style={item.isBlueTitle ? LocalStyles.blueTitle : LocalStyles.whiteTitle}>
              {item.title}
            </Text>
          )}
          <Text style={LocalStyles.bulletText}>
            {item.text}
          </Text>
        </View>
      </View>
    ));
  };

  return (
    <BaseScreen onBackPress={handleBack} showBackButton={false} showLogo={true}>
      <ScrollView>
        <View style={LocalStyles.contentContainers}>
          <Heading
            primaryText="GET PAID TODAY"
            secondaryText="Disclosures"
            type="both"
          />

          <Text style={styles.description}>
          Before we get started, here’s what you should know. We believe in being clear, upfront, and simple. Please take a moment to review these important  points about how Stush works:
          </Text>

           <View style={LocalStyles.bulletContainer}>
            {renderBulletPoints()}
          </View>

          <View style={LocalStyles.spacers} />

          <NavButton
            title="I Agree"
            onPress={handleAgree}
          />
        </View>
      </ScrollView>
    </BaseScreen>
  );
};

 

export default DisclosuresScreen;