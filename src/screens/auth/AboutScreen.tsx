import React, { useState } from 'react';
import { Keyboard, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppScreen from '../../components/common/AppScreen';
import FormInput from '../../components/common/FormInput';
import NavigateButton from '../../components/common/NavigateButton';
import SignUpLink from '../../components/common/SignUpLink';
import baseStyles from '../../css/BaseStyles';
const dobRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
const AboutScreen = () => {
  const navigation: any = useNavigation();

  const [dob, setDob] = useState('');
  const [errors, setErrors] = useState({
    dob: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearError = (field: 'dob') => {
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };



  const handleNext = () => {
    Keyboard.dismiss();
    if (dob.trim() === '') {
      setErrors({ ...errors, dob: 'Date of birth is required' });
      return;
    }
    if (!dobRegex.test(dob.trim())) {
      setErrors({ ...errors, dob: 'Please enter a valid date of birth' });
      return;
    }
    setIsSubmitting(true);
    console.log('About details:', {
      dob: dob.trim(),
      timestamp: new Date().toISOString(),
    });

    setTimeout(() => {
      setIsSubmitting(false);
      navigation.navigate('EmailInput');
    }, 500);
  }

  return (
    <AppScreen showBackButton={true} enableKeyboardAvoid={true}>
      <View style={baseStyles.formContainer}>
        <Text style={baseStyles.heading}>Tell Us About Yourself</Text>
        <FormInput
          placeholder="Date of Birth"
          value={dob}
          onChangeText={setDob}
          error={errors.dob}
          clearError={() => clearError('dob')}
        />
        <NavigateButton
          title="Next"
          onPress={handleNext}
          isLoading={isSubmitting}
        />

        <SignUpLink />
      </View>
    </AppScreen>
  )
};
export default AboutScreen;