import React from 'react';
import {
  ImageBackground,
  StatusBar,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';

interface BaseScreenProps {
  children: React.ReactNode;
  onBackPress?: () => void;
  showBackButton?: boolean;
  showLogo?: boolean;
  customStyles?: object;
}

const BaseScreen: React.FC<BaseScreenProps> = ({
  children,
  onBackPress,
  showBackButton = true,
  showLogo = false,
  customStyles = {},
}) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require('../../../assets/images/backgrounds.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <SafeAreaView style={[styles.safeArea, customStyles]}>
          {showBackButton && (
            <TouchableOpacity
              style={styles.backButton}
              activeOpacity={0.8}
              onPress={onBackPress}
              accessibilityLabel="Go back"
              accessibilityRole="button">
              <Image
                source={require('../../../assets/images/back-arrow.png')}
                style={styles.backIcon}
              />
            </TouchableOpacity>
          )}
          
          {showLogo && (
            <View style={styles.logoContainer}>
              <Image
                source={require('../../../assets/images/stushlogo.png')}
                style={styles.logoImage}
                accessibilityLabel="Stush Logo"
                resizeMode="contain"
              />
            </View>
          )}
          
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
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 40,
    left: 16,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 60 : 50,
    marginBottom: 10,
  },
  logoImage: {
    width: 140,
    height: 45,
    resizeMode: 'contain',
  },
});

export default BaseScreen;