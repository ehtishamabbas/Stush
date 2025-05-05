import React from 'react';
import { View } from 'react-native';
import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import NavigateButton from '../../components/common/NavigateButton';
import { style } from '../../css/SharedStyle';

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

      <View style={style.mainContainer}>


        <View style={style.innerContainer}>
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


          <View style={style.spacer} />

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
export default AnotherPayrollScreen;