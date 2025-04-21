import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/auth/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import EmailInputScreen from '../screens/auth/EmailInputScreen';
import VerifyEmail from '../screens/auth/VerifyEmailScreen';
import ContactInfoScreen from '../screens/auth/ContactInfoScreen';
import CodeVerify from '../screens/auth/CodeVerifyScreen';
import SuccessSignup from '../screens/auth/SuccessSignupScreen';
import CreatePasswordScreen from '../screens/auth/CreateAccountScreen';
import AccountSuccess from '../screens/auth/AccountSuccessScreen';
import BonusScreen from '../screens/auth/BonusScreen';
import WelcomeUser from '../screens/auth/welcomeUserScreen';
import BankAccountSelectionScreen from '../screens/LoggedInLayouts/BankAccountSelectionScreen';
import SuccessScreen from '../screens/LoggedInLayouts/SuccessScreen';
import About from '../screens/auth/AboutScreen';
import Dashboard from '../screens/LoggedInLayouts/Dashboard';
import WelcomeStush from '../screens/LoggedInLayouts/WelcomeStush';
import Wedifferent from '../screens/LoggedInLayouts/WeDifferent';


 export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  About: undefined;
  EmailInput: undefined;
  VerifyEmail: undefined;
  ContactInfo: undefined;
  CodeVerify: undefined;
  SuccessSignup: undefined;
  CreatePassword: undefined;
  AccountSuccess: undefined;
  BonusScreen: undefined;
  WelcomeUser: undefined;
  Dashboard: undefined;
  BankAccountSelection: undefined;
  Success: undefined;
  WelcomeStush: undefined;
  Wedifferent: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="EmailInput" component={EmailInputScreen} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      <Stack.Screen name="ContactInfo" component={ContactInfoScreen} />
      <Stack.Screen name="CodeVerify" component={CodeVerify} />
      <Stack.Screen name="SuccessSignup" component={SuccessSignup} />
      <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
      <Stack.Screen name="AccountSuccess" component={AccountSuccess} />
      <Stack.Screen name="BonusScreen" component={BonusScreen} />
      <Stack.Screen name="WelcomeUser" component={WelcomeUser} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="BankAccountSelection" component={BankAccountSelectionScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
      <Stack.Screen name="WelcomeStush" component={WelcomeStush} />
      <Stack.Screen name="Wedifferent" component={Wedifferent} />
    </Stack.Navigator>
  );
};

export default AppNavigator;