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
const AnotherPayrollScreen: React.FC<MyJobScreenProps> = ({ navigation }) => {

  const handleNext = () => {
    navigation.navigate('PayrollProviderScreen');
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
            primaryText="NOW LETS CONNECT"
            type="primary"
          />

          <Heading
            secondaryText="Your Payroll or Work Hours Provider"
            type="secondary"
          />

          <ContentText>
            This Application Uses Plaid to Access your Payroll or Work hours provider.
          </ContentText>
          <ContentText>
            This helps us securely connect your account for instant access to your earnings.
          </ContentText>


          <View style={styles.spacer} />

          <NavigateButton
            title="Next"
            onPress={handleNext}
            accessibilityLabel="PayrollProvider Screen   "
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

export default AnotherPayrollScreen;