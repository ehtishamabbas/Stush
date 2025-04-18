import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../css/ContactInfo.styles';

const CodeVerify = ({}) => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <TouchableOpacity
        style={styles.backButton}
        activeOpacity={0.8}
        onPress={handleBack}
        accessibilityLabel="Go back"
        accessibilityRole="button">
        <Image
          source={require('../../../assets/images/back-arrow.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.title}>Verification</Text>

        {/* Instruction */}
        <Text style={styles.instruction}>
          Please enter 6-digit code we have sent you at +1234567890{' '}
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
            <Text style={styles.verifyText}>Verify Phone Number</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CodeVerify;
