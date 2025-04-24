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

  const clearError = () => {
    if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
  };

  const handleNext = () => {
    navigation.navigate('AccountSuccess');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
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
      </ImageBackground>
    </>
  );
};

export default CreatePasswordScreen;