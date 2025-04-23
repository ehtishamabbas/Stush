import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import styles from '../../css/Verificcation.styles';

interface PhoneInputProps {
  phoneNumber: string;
  onPhoneNumberChange: (text: string) => void;
  countryCode?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  phoneNumber,
  onPhoneNumberChange,
  countryCode = '+1'
}) => {
  return (
    <View style={styles.phoneInputContainer}>
      <View style={styles.countrySelector}>
        <Image 
           style={styles.flagIcon} 
        />
        <Text style={styles.countryCode}>{countryCode}</Text>
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
          onChangeText={onPhoneNumberChange}
        />
      </View>
    </View>
  );
};

export default PhoneInput;