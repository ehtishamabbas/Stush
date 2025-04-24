import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

 import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import NavigateButton from '../../components/common/NavigateButton';
// import CustomDropdown from '../../components/ResueableComponents/CustomDropdown';

interface MyJobScreenProps {
  navigation: any;
}

const MyJobScreen: React.FC<MyJobScreenProps> = ({ navigation }) => {
  const [selectedJob, setSelectedJob] = useState('');

  const handleNext = () => {
    navigation.navigate('NextScreen');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <BaseScreen>
      <View style={styles.container}>
      <Header navigation={navigation} onBackPress={handleBack} />


        <View style={styles.contentContainer}>
          <Heading 
            primaryText="GET PAID TODAY" 
            type="primary" 
          />
          
          <Heading 
            secondaryText="My Job" 
            type="secondary" 
          />
          
          <ContentText 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in." 
          />
          
          <View style={styles.inputContainer}>
            <ContentText 
              text="Your Employment" 
              customStyle={styles.labelText} 
            />
            
   
          </View>
          
          <View style={styles.spacer} />
          
          <NavigateButton 
            title="Next" 
            onPress={handleNext} 
            accessibilityLabel="Go to next screen"
          />
        </View>
      </View>
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
    paddingTop: 20,
  },
  inputContainer: {
    marginTop: 20,
  },
  labelText: {
    fontSize: 14,
    marginBottom: 5,
  },
  spacer: {
    flex: 1,
  },
});

export default MyJobScreen;