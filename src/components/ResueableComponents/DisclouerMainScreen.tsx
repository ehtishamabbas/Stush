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
import Header from '../common/Header';
interface DisclouserMainScreenProps {
  children: React.ReactNode;
  onBackPress?: () => void;
  showBackButton?: boolean;
  showLogo?: boolean;
  customStyles?: object;
}

const DisclouserMainScreen: React.FC<DisclouserMainScreenProps> = ({
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
        {showLogo && <Header />}
        <SafeAreaView style={[styles.safeArea, customStyles]}>
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
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 60 : 50,
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 60,
    left: 29,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: '50%',
    borderColor: '#091522',
    borderWidth: 1,
  },
  backIcon: {
    width: 31,
    height: 33,
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

export default DisclouserMainScreen;