// src/screens/LocationVerificationScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import Screen from '../../components/common/Screen';
import Button from '../../components/common/Button';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import GlobalStyles from '../../css/GlobalStyles';

interface LocationVerificationScreenProps {
  navigation: any;
}

const LocationVerificationScreen: React.FC<LocationVerificationScreenProps> = ({ navigation }) => {
  const handleEnableLocation = () => {
    navigation.navigate('EarnedIncomeScreen');
  };

  const handleNotNow = () => {
    navigation.navigate('EarnedIncomeScreen');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Screen navigation={navigation} onBackPress={handleBack}>
      <View style={GlobalStyles.contentContainer}>
        <Heading
          secondaryText={"ENABLE\nLOCATION"}
          type="secondary"
        />
        
        <ContentText>
          Enable location to verify work hours.
        </ContentText>
        
        <ContentText>
          To ensure you get paid for the hours you work, Slush needs to verify your location while you're on the job.
        </ContentText>
        
        <View style={GlobalStyles.spacer} />
        
        <Button
          title="Enable Location"
          onPress={handleEnableLocation}
          variant="primary"
        />
        
        <View style={{ height: 10 }} />
        
        <Button
          title="Not Now"
          onPress={handleNotNow}
          variant="secondary"
        />
        
        <View style={GlobalStyles.footer}>
          <Text style={GlobalStyles.footerText}>
            By enabling location, you agree to our [Privacy Policy] and [Terms of Service]. You can change this anytime in your settings.
          </Text>
        </View>
      </View>
    </Screen>
  );
};

export default LocationVerificationScreen;