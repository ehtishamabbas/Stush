import React from 'react';
import { View, TextInput, Text, SafeAreaView } from 'react-native';
import styles from '../../css/Verificcation.styles';

interface CodeInputProps {
  code: string[];
  onCodeChange: (code: string[]) => void;
  error?: string;
}

const CodeInput: React.FC<CodeInputProps> = ({ code, onCodeChange, error }) => {
  return (
    <SafeAreaView>
 
    <View style={styles.codeContainer}>
      {Array.from({ length: 6 }).map((_, index) => (
        <TextInput
          key={index}
          style={[styles.codeBox, code[index] ? styles.filledCodeBox : null]}
          maxLength={1}
          keyboardType="numeric"
          value={code[index]}
          onChangeText={(value) => {
            const newCode = [...code];
            newCode[index] = value;
            onCodeChange(newCode);
          }}
        />
      ))}
     </View>
    </SafeAreaView>
  );
};

export default CodeInput;