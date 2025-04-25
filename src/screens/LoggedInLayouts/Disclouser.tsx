import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import BaseScreen from '../../components/ResueableComponents/DisclouerMainScreen';
import Heading from '../../components/ResueableComponents/Heading';
import NavButton from '../../components/common/NavigateButton';
import styles from '../../css/Disclouser';
import Header from '../../components/common/Header';

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

   const renderBulletPoints = () => {
    return bulletItems.map((item, index) => (
      <View key={index} style={localStyles.bulletRow}>
        <FontAwesome5 
          name="check-circle" 
          size={18} 
          color={item.isBlueTitle ? '#1F7FFE' : '#FFFFFF'} 
        />
        <View style={localStyles.textContainer}>
          {item.title && (
            <Text style={item.isBlueTitle ? localStyles.blueTitle : localStyles.whiteTitle}>
              {item.title}
            </Text>
          )}
          <Text style={localStyles.bulletText}>
            {item.text}
          </Text>
        </View>
      </View>
    ));
  };

  return (
    <BaseScreen onBackPress={handleBack} showBackButton={true} showLogo={true}>
      <ScrollView>
        <View style={localStyles.contentContainer}>
          <Heading
            primaryText="GET PAID TODAY"
            secondaryText="Disclosures"
            type="both"
          />

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.
          </Text>

           <View style={localStyles.bulletContainer}>
            {renderBulletPoints()}
          </View>

          <View style={localStyles.spacer} />

          <NavButton
            title="I Agree"
            onPress={handleAgree}
          />
        </View>
      </ScrollView>
    </BaseScreen>
  );
};

const localStyles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    marginTop: '40%',
  },
  spacer: {
    flex: 1,
    minHeight: 40,
  },
  bulletContainer: {
    marginTop: 30,
    marginBottom: 45,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 15,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  bulletText: {
     color: '#FFFFFF',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 5,
    borderRadius: 3,
    fontSize: 14,
    lineHeight: 20,
  },
  blueTitle: {
    color: '#1F7FFE',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  whiteTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default DisclosuresScreen;