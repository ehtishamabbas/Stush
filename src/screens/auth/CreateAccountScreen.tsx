import React, {useState} from 'react';
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

interface CreatePasswordScreenProps {
  navigation?: any;
}

const CreatePasswordScreen: React.FC<CreatePasswordScreenProps> = ({
  navigation,
}) => {
  const [username, setUsername] = useState('NeilArm30@gmail.com');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [enablePIN, setEnablePIN] = useState(true);
  const [enableFaceID, setEnableFaceID] = useState(false);

  const handleNext = () => {
    // Navigate to next screen
    navigation.navigate('AccountSuccess'); // Replace with your actual next screen
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
                <TextInput
                  style={styles.textInput}
                  value={username}
                  onChangeText={setUsername}
                  placeholder="Enter email"
                  placeholderTextColor="#999999"
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Enter New Password"
                  placeholderTextColor="#999999"
                  secureTextEntry
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="Confirm New Password"
                  placeholderTextColor="#999999"
                  secureTextEntry
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
                  trackColor={{false: '#333', true: '#32CD32'}}
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
                  trackColor={{false: '#333', true: '#32CD32'}}
                  thumbColor={enableFaceID ? '#f4f3f4' : '#f4f3f4'}
                  ios_backgroundColor="#333"
                  onValueChange={() => setEnableFaceID(!enableFaceID)}
                  value={enableFaceID}
                />
              </View>

              <TouchableOpacity
                style={styles.nextButton}
                onPress={handleNext}>
                <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default CreatePasswordScreen;