import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import Header from './Header';

interface ScreenProps {
  children: React.ReactNode;
  navigation?: any;
  onBackPress?: () => void;
}

const Screen: React.FC<ScreenProps> = ({ children, navigation, onBackPress }) => {
  return (
    <ImageBackground
    source={require('../../../assets/images/backgrounds.png')}
    style={styles.background}
    resizeMode="cover"
  >
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Header navigation={navigation} onBackPress={onBackPress} />
      <View style={styles.content}>
        {children}
      </View>
    </SafeAreaView>
  </ImageBackground>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
   },
   background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
  },
});

export default Screen;