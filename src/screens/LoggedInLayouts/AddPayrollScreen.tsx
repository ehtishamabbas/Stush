 import React from 'react';
import { View } from 'react-native';
import Screen from '../../components/common/Screen';
import Button from '../../components/common/Button';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import GlobalStyles from '../../css/GlobalStyles';

interface AddPayrollScreenProps {
  navigation: any;
}

const AddPayrollScreen: React.FC<AddPayrollScreenProps> = ({ navigation }) => {
  const handleAddPayroll = () => {
     navigation.navigate('PayrollFormScreen');
  };

  const handleNoMorePayroll = () => {
    navigation.navigate('FinishScreen');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Screen navigation={navigation} onBackPress={handleBack}>
      <View style={GlobalStyles.contentContainer}>
        <Heading
          primaryText="GET PAID TODAY"
          secondaryText="Add Another Payroll Provider"
          type="both"
        />
        
        <ContentText>
          If you receive paychecks from more than one employer, please add your next payroll provider below.
        </ContentText>
        
        <ContentText>
          If not, just tap 'No More to Add' to continue.
        </ContentText>
        
        <View style={GlobalStyles.spacer} />
        
        <Button
          title="Add Payroll Provider"
          onPress={handleAddPayroll}
          variant="green"
        />
        
        <View style={{ height: 10 }} />
        
        <Button
          title="No More Payroll to Add"
          onPress={handleNoMorePayroll}
          variant="primary"
        />
      </View>
    </Screen>
  );
};

export default AddPayrollScreen;