import React, { useState } from 'react';
import { Keyboard, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppScreen from '../../components/common/AppScreen';
import FormContainer from '../../components/common/FormContainer';
import FormInput from '../../components/common/FormInput';
import NavigateButton from '../../components/common/NavigateBotton';
import SignUpLink from '../../components/common/SignUpLink';
import baseStyles from '../../css/BaseStyles';

const AboutScreen = () => {
  const navigation: any = useNavigation();

  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({
    dob: '',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearError = (field: 'dob' | 'address') => {
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { dob: '', address: '' };


    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    Keyboard.dismiss();
    if (validateForm()) {
      setIsSubmitting(true);
      console.log('About details:', {
        dob: dob.trim(),
        address: address.trim(),
        timestamp: new Date().toISOString(),
      });

      setTimeout(() => {
        setIsSubmitting(false);
        navigation.navigate('EmailInput');
      }, 500);
    }
  };

  return (
    <AppScreen showBackButton={false} enableKeyboardAvoid={true}>
      <View style={baseStyles.formContainer}>
        <Text style={baseStyles.heading}>Tell Us About Yourself</Text>
        <FormInput
          placeholder="Date of Birth"
          value={dob}
          onChangeText={setDob}
          error={errors.dob}
          clearError={() => clearError('dob')}
        />

        <FormInput
          placeholder="Home Address"
          value={address}
          onChangeText={setAddress}
          error={errors.address}
          clearError={() => clearError('address')}
        />

        <NavigateButton
          title="Next"
          onPress={handleNext}
          isLoading={isSubmitting}
        />

        <SignUpLink />
      </View>
    </AppScreen>
  );
};

export default AboutScreen;