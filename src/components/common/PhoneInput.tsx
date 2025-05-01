import React from 'react';
import { View, Text, TextInput, Image, SafeAreaView } from 'react-native';
import styles from '../../css/Verificcation.styles';

interface PhoneInputProps {
  phoneNumber: string;
  onPhoneNumberChange: (text: string) => void;
  error?: string | null;
}
 
const PhoneInput: React.FC<PhoneInputProps> = ({ phoneNumber, onPhoneNumberChange, error: propError }) => {
  const [error, setError] = React.useState<string | null>(null);

   React.useEffect(() => {
    setError(null);
  }, [phoneNumber]);

   React.useEffect(() => {
    if (propError) {
      setError(propError);
    }
  }, [propError]);

  return (
    <SafeAreaView>
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
            onChangeText={(text) => {
              onPhoneNumberChange(text);
              setError(null);  
            }}
            placeholder="Phone Number"
            placeholderTextColor="#8D9E99"
            keyboardType="phone-pad"
            maxLength={15}
            editable={true}
          />
        </View>
        
      </View>
      
    </SafeAreaView>
  );
};
export default PhoneInput;
