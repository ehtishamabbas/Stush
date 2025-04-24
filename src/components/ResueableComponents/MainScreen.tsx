import React from 'react';
import {
  ImageBackground,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

interface MainScreenProps {
  children: React.ReactNode;
  statusBarColor?: string;
  statusBarStyle?: 'default' | 'light-content' | 'dark-content';
}

const MainScreen: React.FC<MainScreenProps> = ({
  children,
  statusBarColor = 'transparent',
  statusBarStyle = 'light-content',
}) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={statusBarColor}
        barStyle={statusBarStyle}
      />
      <ImageBackground
        source={require('../../../assets/images/backgrounds.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            {children}
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
   },
});

export default MainScreen;