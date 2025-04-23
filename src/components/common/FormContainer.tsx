import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import baseStyles from '../../css/BaseStyles';


interface FormContainerProps {
  children: ReactNode;
  heading?: string;
}

const FormContainer: React.FC<FormContainerProps> = ({ children, heading }) => {
  return (
    <View style={baseStyles.formContainer}>
      <View style={baseStyles.formSubContainer}>
        {heading && <Text style={baseStyles.heading}>{heading}</Text>}
        {children}
      </View>
    </View>
  );
};

export default FormContainer;