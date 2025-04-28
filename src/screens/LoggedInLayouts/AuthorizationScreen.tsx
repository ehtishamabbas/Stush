import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import NavigateButton from '../../components/common/NavigateButton';



interface MyJobScreenProps {
  navigation: any;
}
const AuthorizationScreen: React.FC<MyJobScreenProps> = ({ navigation }) => {

  const handleNext = () => {
    navigation.navigate('SecondBankSceen');
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
            secondaryText={"Authorization to Deduct\nfrom Your Bank Account"}
            type="secondary"
          />

          <ContentText>
            By continuing, you authorize Stush to automatically deduct any and all funds from your linked bank account whenever you or your employer deposits your paycheck.
          </ContentText>

          <ContentText>
            These deductions will be for the agreed-upon services and reimbursement payments as outlined in our terms.
          </ContentText>
          <ContentText>
            Please review carefully before proceeding. <Text style={{ fontWeight: 'bold' }}>Read More.</Text>
          </ContentText>



          <View style={styles.spacer} />

          <NavigateButton
            title="I Agree"
            onPress={handleNext}
            accessibilityLabel="SecondBank  Screen "
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

export default AuthorizationScreen;