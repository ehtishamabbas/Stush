 import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Screen from '../../components/common/Screen';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import GlobalStyles from '../../css/GlobalStyles';

interface EarnedIncomeScreenProps {
  navigation: any;
}

const EarnedIncomeScreen: React.FC<EarnedIncomeScreenProps> = ({ navigation }) => {
  const [hours, setHours] = useState('');
  const [directDeposit, setDirectDeposit] = useState<string | null>(null);

  const handleContinue = () => {
    navigation.navigate('AddEmployerScreen');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const setYesDeposit = () => {
    setDirectDeposit('yes');
  };

  const setNoDeposit = () => {
    setDirectDeposit('no');
  };

  return (
    <Screen navigation={navigation} onBackPress={handleBack}>
      <View style={GlobalStyles.contentContainer}>
        <Heading
          secondaryText="EARNED INCOME\nPAYOUT"
          type="secondary"
        />
        
        <ContentText>
          Do you get direct deposit?
        </ContentText>
        
        <View style={styles.depositButtonsRow}>
          <Button
            title="YES"
            onPress={setYesDeposit}
            style={[
              styles.depositButton,
              directDeposit === 'yes' ? styles.activeButton : styles.inactiveButton
            ]}
          />
          <View style={styles.buttonSpacer} />
          <Button
            title="NO"
            onPress={setNoDeposit}
            style={[
              styles.depositButton,
              directDeposit === 'no' ? styles.activeButton : styles.inactiveButton
            ]}
          />
        </View>
        
        <Input
          label="How many hours have you worked for current Work Period?"
          placeholder="XXX"
          value={hours}
          onChangeText={setHours}
          keyboardType="numeric"
          accessibilityLabel="Hours worked"
          accessibilityHint="Enter hours worked"
        />
        
        <View style={GlobalStyles.spacer} />
        
        <Button
          title="Continue"
          onPress={handleContinue}
          variant="primary"
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  depositButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  depositButton: {
    flex: 1,
  },
  buttonSpacer: {
    width: 10,
  },
  activeButton: {
    backgroundColor: '#2B7DF7',
  },
  inactiveButton: {
    backgroundColor: '#5A5A5A',
  },
});

export default EarnedIncomeScreen;