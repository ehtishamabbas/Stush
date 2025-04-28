import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Header from './Header';

interface ScreenProps {
  children: React.ReactNode;
  navigation?: any;
  onBackPress?: () => void;
}

const Screen: React.FC<ScreenProps> = ({ children, navigation, onBackPress }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Header navigation={navigation} onBackPress={onBackPress} />
      <View style={styles.content}>
        {children}
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
  },
});

export default Screen;