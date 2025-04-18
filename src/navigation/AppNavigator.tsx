// src/navigation/AppNavigator.tsx
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {RootState} from '../store';

// Import screens
import SplashScreen from '../screens/auth/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import HomeScreen from '../screens/LoggedInLayouts/HomeScreen';
import About from '../screens/auth/About';
import EmailInputScreen from '../screens/auth/EmailInputScreen';
import VerifyEmail from '../screens/auth/VerifyEmailScreen';
import ContactInfoScreen from '../screens/auth/ContactInfoScreen';
import CodeVerify from '../screens/auth/CodeVerifyScreen';



const Stack = createStackNavigator();

const AppNavigator = () => {
  const {isAuthenticated} = useSelector((state: RootState) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  // This effect is just to ensure that the splash screen logic in the component
  // controls navigation, not this navigator
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    // While loading, just show the splash screen
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isAuthenticated ? (
        // Auth Stack
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="EmailInput" component={EmailInputScreen} />
          <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
          <Stack.Screen name="ContactInfo" component={ContactInfoScreen} />
          <Stack.Screen name="CodeVerify" component={CodeVerify} />




        </>
      ) : (
        // Main App Stack
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* Add other authenticated screens */}
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
