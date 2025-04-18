// src/navigation/AppNavigator.tsx
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import SplashScreen from '../screens/auth/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import About from '../screens/auth/AboutScreen';
import BankAccountSelectionScreen from '../screens/LoggedInLayouts/BankAccountSelectionScreen';
import SuccessScreen from '../screens/LoggedInLayouts/SuccessScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  // const { isAuthenticated } = useSelector((state: RootState) => state.auth);
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
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* {!isAuthenticated ? (
        // Auth Stack */}
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="BankAccountSelection" component={BankAccountSelectionScreen} />
          <Stack.Screen name="Success" component={SuccessScreen} />
        </>
    </Stack.Navigator>
  );
};

export default AppNavigator;
