import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../css/Verificcation.styles';

interface KeypadProps {
  onKeyPress: (key: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ onKeyPress }) => {
  return (
    <View style={styles.keypadContainer}>
      <View style={styles.keypadRow}>
        <TouchableOpacity style={styles.keypadButton} onPress={() => onKeyPress('1')}>
          <Text style={styles.keypadText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keypadButton} onPress={() => onKeyPress('2')}>
          <Text style={styles.keypadText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keypadButton} onPress={() => onKeyPress('3')}>
          <Text style={styles.keypadText}>3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.keypadRow}>
        <TouchableOpacity style={styles.keypadButton} onPress={() => onKeyPress('4')}>
          <Text style={styles.keypadText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keypadButton} onPress={() => onKeyPress('5')}>
          <Text style={styles.keypadText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keypadButton} onPress={() => onKeyPress('6')}>
          <Text style={styles.keypadText}>6</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.keypadRow}>
        <TouchableOpacity style={styles.keypadButton} onPress={() => onKeyPress('7')}>
          <Text style={styles.keypadText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keypadButton} onPress={() => onKeyPress('8')}>
          <Text style={styles.keypadText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keypadButton} onPress={() => onKeyPress('9')}>
          <Text style={styles.keypadText}>9</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.keypadRow}>
        <TouchableOpacity style={styles.keypadButtons} onPress={() => onKeyPress('forgot')}>
          <Text style={styles.forgotText}>Forgot?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keypadButton} onPress={() => onKeyPress('0')}>
          <Text style={styles.keypadText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.keypadButton} onPress={() => onKeyPress('backspace')}>
          <Text style={styles.backspaceText}>⌫</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default  Keypad;