import {TextInput, Text, View} from 'react-native';
import commonStyles from '../../css/common.styles';
import {useState} from 'react';

interface TextInputProps {
  label?: string;
  placeholder: string;
  keyboardType:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'url'
    | 'number-pad'
    | 'decimal-pad';
  error?: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
  validate: () => void
  secureTextEntry: boolean
}

const TextInputComponent = ({
  label,
  placeholder,
  keyboardType,
  error,
  onChangeText,
  validate,
  secureTextEntry
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={commonStyles.inputContainer}>
      {label && <Text style={commonStyles.inputLabel}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        keyboardType={keyboardType}
        style={[commonStyles.input, isFocused ? commonStyles.inputFocused : error ? commonStyles.inputError : null]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          validate();
        }}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
      {error && <Text style={commonStyles.errorText}>{error}</Text>}
    </View>
  );
};

export default TextInputComponent;
