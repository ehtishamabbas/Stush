import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppScreen from '../../components/common/AppScreen';
import FormContainer from '../../components/common/FormContainer';
import FormInput from '../../components/common/FormInput';
import FormButton from '../../components/common/FormButton';
import SignInLink from '../../components/common/SignInLink';

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
    <AppScreen>
      <FormContainer heading="TELL US ABOUT YOURSELF">
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
        
        <FormButton
          title="Next"
          onPress={handleNext}
          isLoading={isSubmitting}
        />
        
        <SignInLink />
      </FormContainer>
    </AppScreen>
  );
};

export default AboutScreen;