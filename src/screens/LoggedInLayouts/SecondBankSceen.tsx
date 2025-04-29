import React from 'react';
import { View, StyleSheet, Text, FlatList, ScrollView } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import Button from '../../components/common/Button';

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
          <View style={styles.contentContainer}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: '55%',
    marginBottom: 40,
  },
  unorderedList: {
    marginVertical: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  bullet: {
    color: '#FFFFFF',
    fontSize: 19,
    marginRight: 8,
  },
  listItemText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  readMoreText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 26,
  },
  spacer: {
    flex: 1,
  },
  agreeButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 25,
    paddingVertical: 15,
  },
  agreeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SecondBankSceen;