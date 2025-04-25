import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../../css/Verificcation.styles';

interface CodeInputProps {
  code: string[];
}

const CodeInput: React.FC<CodeInputProps> = ({
 }) => {
  return (
    <View style={styles.codeContainer}>
      {Array.from({ length: 6 }).map((_, index) => (
        <TextInput
          style={[styles.codeBox, styles.filledCodeBox]}
          maxLength={1}
          keyboardType="numeric"
        />
      ))}
    </View>
  );
};

export default CodeInput;