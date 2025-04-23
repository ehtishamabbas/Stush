import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from '../../css/Verificcation.styles';

interface PhoneInputProps {
  phoneNumber: string;
  onPhoneNumberChange: (text: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ phoneNumber, onPhoneNumberChange }) => {
  return (
    <View style={styles.phoneInputContainer}>
      <View style={styles.countrySelector}>
        <Image
           style={styles.flagIcon}
        />
        <Text style={styles.countryCode}>+1</Text>
        <View style={styles.dropdownIcon}>
          <Text style={{ color: 'white' }}>▼</Text>
        </View>
      </View>
      <View style={styles.phoneNumberInput}>
        <TextInput
          style={styles.phoneInput}
          value={phoneNumber}
          onChangeText={onPhoneNumberChange}
          placeholder="Phone Number"
          placeholderTextColor="#8D9E99"
          keyboardType="phone-pad"
          maxLength={15}
          editable={false}  
        />
      </View>
    </View>
  );
};

export default PhoneInput;