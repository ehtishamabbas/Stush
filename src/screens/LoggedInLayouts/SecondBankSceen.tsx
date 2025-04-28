import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import NavigateButton from '../../components/common/NavigateButton';

interface MyJobScreenProps {
  navigation: any;
}
const SecondBankSceen: React.FC<MyJobScreenProps> = ({ navigation }) => {

  const handleNext = () => {
    navigation.navigate('SuccessfullyCreated');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <BaseScreen>
      <Header navigation={navigation} onBackPress={handleBack} />

      <View style={styles.container}>


        <View style={styles.contentContainer}>
          <Heading
            primaryText="GET PAID TODAY"
            type="primary"
          />

          <Heading
            secondaryText="BANK ACCOUNT AUTHORIZATION"
            type="secondary"
          />

          <ContentText
            text="By connecting your bank account, you authorize Stush to securely access: "
          />

          <ContentText
            text={"Your account balances\nYour deposit history\n Your spending history and transaction details"}

          />
          <ContentText
            text="This information helps us confirm your income, verify your pay frequency, and provide you with personalized features like the Spend Analyzer. We never move money or share your information without your explicit consent."
          />
          
 
          <ContentText
            text="Read More"

          />

          <View style={styles.spacer} />

          <NavigateButton
            title="I Agree"
            onPress={handleNext}
            accessibilityLabel=" Success Screen"
          />
        </View>
      </View>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: '50%',
    marginBottom: 40,
  },
  inputContainer: {
    marginTop: 20,
  },
  labelText: {
    fontSize: 14,
    marginBottom: 5,
    color: '#FFFFFF',
    paddingBottom: 10,
  },
  spacer: {
    flex: 1,
  },
});

export default SecondBankSceen;