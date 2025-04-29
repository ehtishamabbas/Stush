import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Screen from '../../components/common/Screen';
import Button from '../../components/common/Button';
import Checkbox from '../../components/common/Checkbox';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import GlobalStyles from '../../css/GlobalStyles';

interface EnableLocationScreenProps {
  navigation: any;
}

const EnableLocationScreen: React.FC<EnableLocationScreenProps> = ({ navigation }) => {
  const [privacyOptions] = useState([
    { id: 1, text: "Your location is ONLY tracked while you're clocked in.", checked: true },
    { id: 2, text: "We do NOT track you outside of work.", checked: true },
    { id: 3, text: "Your privacy is 100% protected.", checked: true }
  ]);

  const handleEnableLocation = () => {
    navigation.navigate('HoursAccuracyScreen');
  };

  const handleContinueWithoutLocation = () => {
    navigation.navigate('HoursAccuracyScreen');
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
        <View style={GlobalStyles.popupContainer}>
          <Text style={[GlobalStyles.contentText, { fontWeight: 'bold', fontSize: 21, marginBottom: 25, lineHeight: 25, color: 'rgba(9, 21, 34, 1)' }]}>
            WE ONLY TRACK YOU{'\n'}WHILE YOU'RE WORKING
          </Text>

          <View style={{ marginBottom: 25 }}>
            {privacyOptions.map(option => (
              <Checkbox
                key={option.id}
                checked={option.checked}
                label={option.text}
              />
            ))}
          </View>

          <Button
            title="Enable Location"
            onPress={handleEnableLocation}
            variant="primary"
          />

          <View style={{ height: 10 }} />

          <Button
            title="Continue with Geolocation off"
            onPress={handleContinueWithoutLocation}
            variant="secondary"
          />
        </View>


        <View style={GlobalStyles.footer}>
          <Text style={GlobalStyles.footerText}>
            By enabling location, you agree to our [Privacy Policy] and [Terms of Service]. You can change this anytime in your settings.
          </Text>
        </View>
      </View>
    </Screen>
  );
};

export default EnableLocationScreen;