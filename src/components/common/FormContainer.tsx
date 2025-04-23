import React, { ReactNode } from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import baseStyles from '../../css/BaseStyles';

interface FormContainerProps {
  children: ReactNode;
  heading?: string;
  style?: StyleProp<ViewStyle>;
}

const FormContainer: React.FC<FormContainerProps> = ({ children, heading, style }) => {
  return (
    <View style={[baseStyles.formContainer, style]}>
      <View style={baseStyles.formSubContainer}>
        {heading && <Text style={baseStyles.heading}>{heading}</Text>}
        {children}
      </View>
    </View>
  );
};

export default FormContainer;