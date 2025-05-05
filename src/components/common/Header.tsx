import React from 'react';
import { View, Image, TouchableOpacity, Platform } from 'react-native';
import styles from '../../css/Success';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { NavigationProp } from '@react-navigation/native';

interface HeaderProps {
  navigation?: NavigationProp<RootStackParamList>;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  navigation,
  showBackButton = true,
  onBackPress
}) => {
  const handleBack = () => {
    if (onBackPress) {
      onBackPress();
    } else if (navigation) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.headerContainer}>
      {showBackButton && (
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.8}
          onPress={handleBack}
          accessibilityLabel="Go back"
          accessibilityRole="button">
          <Image
            source={require('../../../assets/images/back-arrow.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      )}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/images/stushlogo.png')}
          style={styles.logoImage}
          accessibilityLabel="Slush Logo"
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Header;