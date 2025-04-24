import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import styles from '../../css/Email.Screen';
import NavigateButton from '../../components/common/NavigateButton';
import SignUpLink from '../../components/common/SignUpLink';
import { useNavigation } from '@react-navigation/native';
import AppScreen from '../../components/common/AppScreen';
import baseStyles from '../../css/BaseStyles';


const VerifyEmailScreen: React.FC = () => {
  const navigation: any = useNavigation();
  const handleContinue = () => {
    navigation.navigate('PhoneNumberScreen');
  };

  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  return (
<AppScreen showBackButton={true} enableKeyboardAvoid={true}>      
      <View style={baseStyles.formContainer}>

        <Text style={styles.heading}>
          VERIFY YOUR EMAIL{'\n'}
          FOR FULL ACCESS
        </Text>

        <Text style={styles.subText}>
          Please verify your email within 24-48 hours to unlock all
          features and enhance your security.
        </Text>

        <Text style={styles.warningText}>
          Without verification, some features may be limited.
        </Text>

        <NavigateButton
          title="Next"
          onPress={handleContinue}
        />

        <SignUpLink />
      </View>
    </AppScreen>
  );
};

export default VerifyEmailScreen;