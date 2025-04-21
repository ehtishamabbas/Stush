import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../../css/ContactInfo.styles';

type RootStackParamList = {
  CodeVerify: { phoneNumber: string };
};

const ContactInfoScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleVerify = () => {
     navigation.navigate('CodeVerify', { phoneNumber });
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.container}>
      <TouchableOpacity
              style={styles.backButton}
              activeOpacity={0.8}
              onPress={handleBack}
              accessibilityLabel="Go back"
              accessibilityRole="button">
              <Image
                source={require('../../../assets/images/back-arrow.png')}
                style={styles.backIcon}
              />
            </TouchableOpacity>
         <Text style={styles.title}>Phone</Text>
        <Text style={styles.title}>Number</Text>

         <Text style={styles.instruction}>
          Enter your phone number below. It will be used for verification and
          updates.
        </Text>

         <View style={styles.phoneInputContainer}>
          <View style={styles.countrySelector}>
            <Image 
              style={styles.flagIcon} 
            />
            <Text style={styles.countryCode}>+1</Text>
            <View style={styles.dropdownIcon}>
              <Text>▼</Text>
            </View>
          </View>
          <View style={styles.phoneNumberInput}>
            <TextInput
              style={styles.phoneInput}
              placeholder="Phone Number"
              placeholderTextColor="#8D8E99"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
        </View>

         <View style={styles.keypadContainer}>
           <View style={styles.keypadRow}>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadText}>3</Text>
            </TouchableOpacity>
          </View>

           <View style={styles.keypadRow}>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadText}>6</Text>
            </TouchableOpacity>
          </View>

           <View style={styles.keypadRow}>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadText}>9</Text>
            </TouchableOpacity>
          </View>

           <View style={styles.keypadRow}>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.forgotText}>Forgot?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.backspaceText}>⌫</Text>
            </TouchableOpacity>
          </View>

           <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
            <Text style={styles.verifyText}>Verify Phone Number</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ContactInfoScreen;