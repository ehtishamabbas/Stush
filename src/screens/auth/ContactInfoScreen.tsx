import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import styles from '../../css/ContactInfo.styles';

const ContactInfoScreen = ({}) => {
  return (
    <ImageBackground
    source={require('../../../assets/images/stushlogo.png')}
    style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>EMAIL</Text>
        <Text style={styles.title}>VERIFICATION</Text>

        {/* Instruction */}
        <Text style={styles.instruction}>
          Please enter the 5-digit code we have sent{'\n'}you on your email
        </Text>
        

        {/* Code input boxes */}
        <View style={styles.codeContainer}>
          <TextInput
            style={[styles.codeBox, styles.filledCodeBox]}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.codeBox}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.codeBox}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.codeBox}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.codeBox}
            maxLength={1}
            keyboardType="numeric"
          />
        </View>

        {/* Resend timer */}
        <View style={styles.resendButton}>
          <Text style={styles.resendText}>Resend in 00:48</Text>
        </View>

        {/* Keypad container */}
        <View style={styles.keypadContainer}>
          {/* Row 1 */}
          <View style={styles.keypadRow}>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadText}>3</Text>
            </TouchableOpacity>
          </View>

          {/* Row 2 */}
          <View style={styles.keypadRow}>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadText}>6</Text>
            </TouchableOpacity>
          </View>

          {/* Row 3 */}
          <View style={styles.keypadRow}>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadText}>9</Text>
            </TouchableOpacity>
          </View>

          {/* Row 4 */}
          <View style={styles.keypadRow}>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.forgotText}>Forgot?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.backspaceText}>⌫</Text>
            </TouchableOpacity>
          </View>

          {/* Verify button */}
          <TouchableOpacity style={styles.verifyButton}>
            <Text style={styles.verifyText}>Verify Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ContactInfoScreen;
