import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GlobalStyles from '../../css/GlobalStyles';

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
        checked && GlobalStyles.checkedCheckbox
      ]}>
        {checked && <Text style={GlobalStyles.checkmark}>✓</Text>}
      </View>
      <Text style={GlobalStyles.checkboxText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
