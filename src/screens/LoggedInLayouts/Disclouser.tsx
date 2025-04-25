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
import LocalStyles from '../../css/LocalStyle';

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
      <View key={index} style={LocalStyles.bulletRow}>
        <FontAwesome5 
          name="check-circle" 
          size={18} 
          color={item.isBlueTitle ? '#FFFFFF' : '#FFFFFF'} 
        />
        <View style={LocalStyles.textContainer}>
          {item.title && (
            <Text style={item.isBlueTitle ? LocalStyles.blueTitle : LocalStyles.whiteTitle}>
              {item.title}
            </Text>
          )}
          <Text style={LocalStyles.bulletText}>
            {item.text}
          </Text>
        </View>
      </View>
    ));
  };

  return (
    <BaseScreen onBackPress={handleBack} showBackButton={true} showLogo={true}>
      <ScrollView>
        <View style={LocalStyles.contentContainers}>
          <Heading
            primaryText="GET PAID TODAY"
            secondaryText="Disclosures"
            type="both"
          />

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.
          </Text>

           <View style={LocalStyles.bulletContainer}>
            {renderBulletPoints()}
          </View>

          <View style={LocalStyles.spacers} />

          <NavButton
            title="I Agree"
            onPress={handleAgree}
          />
        </View>
      </ScrollView>
    </BaseScreen>
  );
};

 

export default DisclosuresScreen;