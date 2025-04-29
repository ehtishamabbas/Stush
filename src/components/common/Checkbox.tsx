import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GlobalStyles from '../../css/GlobalStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface CheckboxProps {
  checked: boolean;
  label: string;
  onPress?: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, label, onPress }) => {
  return (
    <TouchableOpacity 
    onPress={onPress} 
    style={GlobalStyles.checkboxContainer}
    activeOpacity={0.8}
  >
    <View style={[
      GlobalStyles.checkbox, 
      { backgroundColor: 'white' } 
    ]}>
      {checked && (
        <FontAwesome5 
          name="check" 
          size={14} 
          color="#1F75FE" 
        />
      )}
    </View>
    <Text style={GlobalStyles.checkboxText}>{label}</Text>
  </TouchableOpacity>
  );
};

export default Checkbox;
