import React, { useState } from 'react';
import { Keyboard, Alert, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppScreen from '../../components/common/AppScreen';
import FormInput from '../../components/common/FormInput';
import FormButton from '../../components/common/FormButton';
import SignInLink from '../../components/common/SignInLink';
import baseStyles from '../../css/BaseStyles';

const RegisterScreen = () => {
  const navigation: any = useNavigation();
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearError = (field: 'firstName' | 'lastName') => {
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { firstName: '', lastName: '' };

    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    } else if (firstName.trim().length < 2) {
      newErrors.firstName = 'First name is too short';
      isValid = false;
    } else if (!/^[a-zA-Z\s'-]+$/.test(firstName.trim())) {
      newErrors.firstName = 'First name contains invalid characters';
      isValid = false;
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    } else if (lastName.trim().length < 2) {
      newErrors.lastName = 'Last name is too short';
      isValid = false;
    } else if (!/^[a-zA-Z\s'-]+$/.test(lastName.trim())) {
      newErrors.lastName = 'Last name contains invalid characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    Keyboard.dismiss();
    if (validateForm()) {
      setIsSubmitting(true);
      
       setTimeout(() => {
        console.log('Registration details:', {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          timestamp: new Date().toISOString(),
        });
        
        setIsSubmitting(false);
        navigation.navigate('About');
      }, 500);
    }
  };

  return (
    <AppScreen>
      <View style={baseStyles.formContainer}>
        <Text style={baseStyles.heading}>LET'S GET STARTED</Text>
        
        <FormInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          error={errors.firstName}
          clearError={() => clearError('firstName')}
          autoCapitalize="words"
          returnKeyType="next"
        />
        
        <FormInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          error={errors.lastName}
          clearError={() => clearError('lastName')}
          autoCapitalize="words"
          returnKeyType="done"
        />
        
        <FormButton
          title="Next"
          onPress={handleNext}
          isLoading={isSubmitting}
        />
        
        <SignInLink />
      </View>
    </AppScreen>
  );
};

export default RegisterScreen;