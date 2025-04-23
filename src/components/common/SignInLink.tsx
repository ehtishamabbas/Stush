import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import baseStyles from '../../css/BaseStyles';

interface SignInLinkProps {
  text?: string;
  linkText?: string;
  navigateTo?: string;
}

const SignInLink: React.FC<SignInLinkProps> = ({
  text = 'Already have an account?',
  linkText = 'Sign In',
  navigateTo = 'Login'
}) => {
  const navigation: any = useNavigation();

  const handlePress = () => {
    navigation.navigate(navigateTo);
  };

  return (
    <View style={baseStyles.signInContainer}>
      <Text style={baseStyles.signInText}>
        {text}{' '}
        <Text
          style={baseStyles.signInLink}
          onPress={handlePress}
          accessibilityRole="link"
          accessibilityHint={`Go to ${linkText} screen`}>
          {linkText}
        </Text>
      </Text>
    </View>
  );
};

export default SignInLink;