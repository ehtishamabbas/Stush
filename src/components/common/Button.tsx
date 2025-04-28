import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import GlobalStyles from '../../css/GlobalStyles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'green';
  accessibilityLabel?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  title, 
  variant = 'primary', 
  accessibilityLabel,
  style,
  ...rest 
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return GlobalStyles.primaryButton;
      case 'secondary':
        return GlobalStyles.secondaryButton;
      case 'green':
        return GlobalStyles.greenButton;
      default:
        return GlobalStyles.primaryButton;
    }
  };

  return (
    <TouchableOpacity
      style={[GlobalStyles.buttonContainer, getButtonStyle(), style]}
      accessibilityLabel={accessibilityLabel || title}
      accessibilityRole="button"
      activeOpacity={0.8}
      {...rest}
    >
      <Text style={GlobalStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;