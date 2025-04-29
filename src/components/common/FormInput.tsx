import React, { forwardRef } from 'react';
import { View, TextInput, Text, TextInputProps } from 'react-native';
import baseStyles from '../../css/BaseStyles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

interface FormInputProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  clearError?: () => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad';
}

const FormInput = forwardRef<TextInput, FormInputProps>(
  ({ placeholder, value, onChangeText, error, clearError, secureTextEntry = false, keyboardType = 'default', ...props }, ref) => {
    const handleTextChange = (text: string) => {
      onChangeText(text);
      if (clearError) {
        clearError();
      }
    };

    return (
      <View style={baseStyles.inputContainer}>
        <TextInput
          ref={ref}
          placeholder={placeholder}
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          style={[baseStyles.input, error ? baseStyles.inputError : null]}
          value={value}
          onChangeText={handleTextChange}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          {...props}
          accessibilityLabel={placeholder}
          accessibilityHint="Enter your text"
          accessibilityRole="text"

        />
        {error ? <Text style={baseStyles.errorText}>{error}</Text> : null}
      </View>
    );
  }
);

export default FormInput;
