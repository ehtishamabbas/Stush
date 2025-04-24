import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

 import BaseScreen from '../../components/ResueableComponents/DisclouerMainScreen';
import Heading from '../../components/ResueableComponents/Heading';
import BulletPoints from '../../components/ResueableComponents/BulletPoints';
import NavButton from '../../components/common/NavigateButton';
import styles from '../../css/Disclouser';

const DisclosuresScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const bulletItems = [
    {
      title: 'Disclosure 1',
      text: 'Lorem Ipsum is simply dummy text of the printing and',
      isBlueTitle: true
    },
    {
      title: 'Disclosure 2',
      text: 'Lorem Ipsum is simply dummy text of the printing and',
      isBlueTitle: true
    },
    {
      title: 'Disclosure 3',
      text: 'Lorem Ipsum is simply dummy text of the printing and',
      isBlueTitle: true
    }
  ];

  const handleAgree = () => {
    navigation.navigate('MyJob');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <BaseScreen onBackPress={handleBack} showBackButton={true} showLogo={true}>
      <View style={localStyles.contentContainer}>
        <Heading
          primaryText="GET PAID TODAY"
          secondaryText="Disclosures"
          type="both"
        />
        
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.
        </Text>

        <BulletPoints items={bulletItems} />
        
        <View style={localStyles.spacer} />
        
        <NavButton 
          title="I Agree" 
          onPress={handleAgree}
        />
      </View>
    </BaseScreen>
  );
};

const localStyles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  spacer: {
    flex: 1,
  },
});

export default DisclosuresScreen;