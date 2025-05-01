import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch,
} from 'react-native';
import styles from '../../css/CreateAccount';
import FormInput from '../../components/common/FormInput';
import baseStyles from '../../css/BaseStyles';
import AppScreen from '../../components/common/AppScreen';


interface CreatePasswordScreenProps {
  navigation?: any;
}

const CreatePasswordScreen: React.FC<CreatePasswordScreenProps> = ({
  navigation,
}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [enablePIN, setEnablePIN] = useState(true);
  const [enableFaceID, setEnableFaceID] = useState(false);

  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' });
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const clearError = () => {
    setErrors({ email: '', password: '', confirmPassword: '' });
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '', confirmPassword: '' };

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    }
    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }
    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
      isValid = false;
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };
  const handleNext = () => {
    if (validateForm()) {
      navigation.navigate('AccountSuccess');
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <AppScreen showBackButton={true} enableKeyboardAvoid={true} showLogo={false}>

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>


          <View style={styles.contentContainer}>
            <Text style={styles.heading}>CREATE{'\n'}PASSWORD</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.labelText}>Username:</Text>
              <FormInput
                placeholder="NeilArm30@gmail.com"
                value={email}
                onChangeText={setEmail}
                error={errors.email}
                clearError={clearError}
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="done"
                maxLength={100}
                accessibilityLabel="Email Address"
                accessibilityHint="Enter your email address"
              />
            </View>

            <View style={styles.inputContainer}>
              <FormInput
                placeholder="Enter New Password"
                value={password}
                onChangeText={setPassword}
                error={errors.password}
                clearError={clearError}
                keyboardType="default"
                autoCapitalize="none"
                returnKeyType="done"
                maxLength={100}
                accessibilityLabel="Email Address"
                accessibilityHint="Enter your new password"
              />
            </View>

            <View style={styles.inputContainer}>
              <FormInput
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                error={errors.confirmPassword}
                clearError={clearError}
                keyboardType="default"
                autoCapitalize="none"
                returnKeyType="done"
                maxLength={100}
                accessibilityLabel="Confirm New Password"
                accessibilityHint="Enter your Confirm new password again"
              />
            </View>

            <Text style={styles.passwordRequirements}>
              At least 12 characters long, but 14 or more is better.
              A combination of uppercase letters, lowercase
              letters, numbers, and symbols.
            </Text>

            <View style={styles.toggleContainer}>
              <Text style={styles.toggleText}>Enable PIN</Text>
              <Switch
                style={styles.switch}
                trackColor={{ false: '#333', true: '#32CD32' }}
                thumbColor={enablePIN ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#333"
                onValueChange={() => setEnablePIN(!enablePIN)}
                value={enablePIN}
              />
            </View>

            <View style={styles.toggleContainer}>
              <Text style={styles.toggleText}>Enable Face ID</Text>
              <Switch
                style={styles.switch}
                trackColor={{ false: '#333', true: '#32CD32' }}
                thumbColor={enableFaceID ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#333"
                onValueChange={() => setEnableFaceID(!enableFaceID)}
                value={enableFaceID}
              />
            </View>
            <View style={styles.bottonContainer}>

              <TouchableOpacity
                style={styles.nextButton}
                onPress={handleNext}>
                <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </SafeAreaView>
    </AppScreen>
  );
};

export default CreatePasswordScreen;