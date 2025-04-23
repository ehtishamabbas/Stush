import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../../css/Verificcation.styles';

interface CodeInputProps {
  code: string[];
  onCodeChange: (index: number, value: string) => void;
  numberOfDigits?: number;
}

const CodeInput: React.FC<CodeInputProps> = ({ 
  code, 
  onCodeChange,
  numberOfDigits = 6
}) => {
  const inputRefs = React.useRef<Array<TextInput | null>>([]);
  
  const handleCodeChange = (text: string, index: number) => {
    if (text.length === 1) {
      onCodeChange(index, text);
       if (index < numberOfDigits - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (text.length === 0) {
      onCodeChange(index, '');
       if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <View style={styles.codeContainer}>
      {Array.from({ length: numberOfDigits }).map((_, index) => (
        <TextInput
          key={index}
          ref={(ref) => { inputRefs.current[index] = ref; }}
          style={[styles.codeBox, code[index] ? styles.filledCodeBox : null]}
          maxLength={1}
          keyboardType="numeric"
          value={code[index] || ''}
          onChangeText={(text) => handleCodeChange(text, index)}
        />
      ))}
    </View>
  );
};

export default CodeInput;