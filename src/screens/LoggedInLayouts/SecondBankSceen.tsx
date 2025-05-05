import React from 'react';
import { View, StyleSheet, Text, FlatList, ScrollView } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import Button from '../../components/common/Button';
import styles from '../../css/SharedStyle';

interface MyJobScreenProps {
  navigation: any;
}

const SecondBankSceen: React.FC<MyJobScreenProps> = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('SuccessfullyCreated');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const listItems = [
    'Your account balances',
    'Your deposit history',
    'Your spending history and transaction details'
  ];

  return (
    <BaseScreen>
      <ScrollView>
        <Header navigation={navigation} onBackPress={handleBack} />

        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Heading
              primaryText="GET PAID TODAY"
              type="primary"
            />

            <Heading
              secondaryText="Bank Account Authorization"
              type="secondary"
            />

            <ContentText
              text="By connecting your bank account, you authorize Slush to securely access:"
            />

            <FlatList
              data={listItems}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listItemText}>{item}</Text>
                </View>
              )}
              style={styles.unorderedList}
            />

            <ContentText
              text="This information helps us confirm your income, verify your pay frequency, and provide you with personalized features like the Spend Analyzer."
            />

            <ContentText
              text="We never move money or share your information without your explicit consent."
            />

            <Text style={styles.readMoreText}>Read More</Text>

            <View style={styles.spacer} />


          </View>
          <View style={{ height: 45 }} />

          <Button
            title="I Agree"
            onPress={handleNext}
            accessibilityLabel="Success Screen"
          />
        </View>
      </ScrollView>
    </BaseScreen>
  );
};

export default SecondBankSceen;