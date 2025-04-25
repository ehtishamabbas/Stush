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
import LocalStyles from '../../css/LocalStyle';
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
        style={LocalStyles.backgroundImage}
        resizeMode="cover">
        {showLogo && <Header />}
        {showBackButton && onBackPress && (
          <TouchableOpacity style={LocalStyles.backButton} onPress={onBackPress}>
            <Image source={require('../../../assets/images/back-arrow.png')} style={LocalStyles.backIcon} />
          </TouchableOpacity>
        )}
        <SafeAreaView style={[LocalStyles.safeArea, customStyles]}>
          <View style={LocalStyles.containers}>
            {children}
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};
 
export default DisclouserMainScreen;