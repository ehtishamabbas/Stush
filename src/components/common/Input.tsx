import React from 'react';
import { View, TextInput, Text, TextInputProps } from 'react-native';
import GlobalStyles from '../../css/GlobalStyles';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  accessibilityLabel,
  accessibilityHint,
  style,
  ...rest
}) => {
  return (
    <View style={GlobalStyles.inputContainer}>
      {label && <Text style={GlobalStyles.inputLabel}>{label}</Text>}
      <TextInput
        style={[GlobalStyles.input, style]}
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        {...rest}
      />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
    </View>
  );
};

export default Input;