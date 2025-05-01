import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import baseStyles from '../../css/BaseStyles';

interface FormButtonProps {
  onPress: () => void;
  title: string | React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  buttonStyle?: any;
  textStyle?: any;
}

const FormButton: React.FC<FormButtonProps> = ({
  onPress,
  title,
  isLoading = false,
  disabled = false,
  buttonStyle,
  textStyle
}) => {
  return (
    <TouchableOpacity
      style={[
        baseStyles.actionButton,
        isLoading || disabled ? baseStyles.buttonDisabled : null,
        buttonStyle
      ]}
      activeOpacity={0.8}
      onPress={onPress}
      disabled={isLoading || disabled}
      accessibilityLabel={`Button`}
      accessibilityHint={`Press to proceed`}>
      {isLoading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        typeof title === 'string' ? (
          <Text style={[baseStyles.actionButtonText, textStyle]}>{title}</Text>
        ) : (
          title
        )
      )}
    </TouchableOpacity>
  );
};

export default FormButton;