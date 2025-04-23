import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../css/Verificcation.styles';

interface KeypadProps {
  onKeyPress: (key: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ onKeyPress }) => {
  const renderKey = (value: string, displayValue?: string) => {
    if (value === 'forgot') {
      return (
        <TouchableOpacity
          style={styles.keypadButtons}
          onPress={() => onKeyPress(value)}
          activeOpacity={0.7}
        >
          <Text style={styles.forgotText}>Forgot?</Text>
        </TouchableOpacity>
      );
    } else if (value === 'backspace') {
      return (
        <TouchableOpacity
          style={styles.keypadButton}
          onPress={() => onKeyPress(value)}
          activeOpacity={0.7}
        >
          <Text style={styles.backspaceText}>⌫</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.keypadButton}
          onPress={() => onKeyPress(value)}
          activeOpacity={0.7}
        >
          <Text style={styles.keypadText}>{displayValue || value}</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.keypadContainer}>
      <View style={styles.keypadRow}>
        {renderKey('1')}
        {renderKey('2')}
        {renderKey('3')}
      </View>
      <View style={styles.keypadRow}>
        {renderKey('4')}
        {renderKey('5')}
        {renderKey('6')}
      </View>
      <View style={styles.keypadRow}>
        {renderKey('7')}
        {renderKey('8')}
        {renderKey('9')}
      </View>
      <View style={styles.keypadRow}>
        {renderKey('forgot')}
        {renderKey('0')}
        {renderKey('backspace')}
      </View>
    </View>
  );
};

export default Keypad;