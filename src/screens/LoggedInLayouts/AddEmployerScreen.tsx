import React from 'react';
import { View } from 'react-native';
import Screen from '../../components/common/Screen';
import Button from '../../components/common/Button';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import GlobalStyles from '../../css/GlobalStyles';

interface AddEmployerScreenProps {
  navigation: any;
}

const AddEmployerScreen: React.FC<AddEmployerScreenProps> = ({ navigation }) => {
  const handleAddEmployer = () => {
    navigation.navigate('EmployerFormScreen');
  };

  const handleNoMoreEmployers = () => {
    navigation.navigate('PlaidLinkScreen');
  };

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Screen navigation={navigation} onBackPress={handleBack}>
      <View style={GlobalStyles.contentContainer}>
        <Heading
          primaryText="GET PAID TODAY"
          secondaryText="Add Another Employer"
          type="both"
        />

        <ContentText>
          If you have income from another employer, please add their details now. If you've added all your employers, simply select 'No More Employers to Add' to continue
        </ContentText>
        <Button
          title="Add Employer"
          onPress={handleAddEmployer}
          variant="green"
        />


        <View style={GlobalStyles.spacer} />


        <View style={{ height: 10 }} />

        <Button
          title="No More Employers to Add"
          onPress={handleNoMoreEmployers}
          variant="primary"
        />
        <View style={{ marginBottom: 16 }} />

      </View>
    </Screen>
  );
};

export default AddEmployerScreen;