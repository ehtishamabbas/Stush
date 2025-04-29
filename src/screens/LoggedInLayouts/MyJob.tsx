import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import NavigateButton from '../../components/common/NavigateButton';
import FormInput from '../../components/common/FormInput';
import { Text } from 'react-native';
import baseStyles from '../../css/BaseStyles';


interface MyJobScreenProps {
  navigation: any;
}
const MyJobScreen: React.FC<MyJobScreenProps> = ({ navigation }) => {
  const [selectedJob, setSelectedJob] = useState('');

  const handleNext = () => {
    navigation.navigate('CompanyInfo');
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
            secondaryText="Employment Status"
            type="secondary"
          />

          <ContentText
            text="Choose the option that best fits you so we can personalize your Stush experience."
          />

          <View style={styles.inputContainer}>
            <Text style={styles.labelText}>Your Employement</Text>
            <FormInput
              placeholder="- Select -"
 
              value={selectedJob}
              onChangeText={setSelectedJob}
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="done"
              maxLength={100}
              accessibilityLabel="Email Address"
              accessibilityHint="Enter your email address"
            />
              <Text style={styles.labelText}>How Many Employers do you have?</Text>
            <FormInput
              placeholder="- Select -"
              value={selectedJob}
              onChangeText={setSelectedJob}
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="done"
              maxLength={100}
              accessibilityLabel="Email Address"
              accessibilityHint="Enter your email address"
            />
          </View>


          <View style={styles.spacer} />

          <NavigateButton
            title="Next"
            onPress={handleNext}
            accessibilityLabel="CompanyInfo"
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

export default MyJobScreen;