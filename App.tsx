import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { store } from './src/store';
import { UserProvider } from './src/globalState';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <UserProvider>
            <AppNavigator />
          </UserProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </ReduxProvider>
  );
};

export default App;