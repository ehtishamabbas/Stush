import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import baseStyles from '../../css/BaseStyles';

interface SignUpLinkProps {
  text?: string;
  linkText?: string;
  navigateTo?: string;
}

const SignUpLink: React.FC<SignUpLinkProps> = ({
  text = 'Already have an account?',
  linkText = 'Sign In',
  navigateTo = 'Login'
}) => {
  const navigation: any = useNavigation();

  const handlePress = () => {
    navigation.navigate(navigateTo);
  };

  return (
    <View style={baseStyles.signInContainers}>
      <Text style={baseStyles.signInTexts}>
        {text}{' '}
        <Text
          style={baseStyles.signInLinks}
          onPress={handlePress}
          accessibilityRole="link"
          accessibilityHint={`Go to ${linkText} screen`}>
          {linkText}
        </Text>
      </Text>
    </View>
  );
};

export default SignUpLink;