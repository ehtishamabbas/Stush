import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';
import styles from '../../css/Verificcation.styles';

interface VerificationBaseProps {
  title: string;
  instruction: string;
  onBackPress?: () => void;
  showBackButton?: boolean;
  children: React.ReactNode;
  buttonText?: string;
  onButtonPress?: () => void;
}

const VerificationBase: React.FC<VerificationBaseProps> = ({
  title,
  instruction,
  onBackPress,
  showBackButton = false,
  children,
  buttonText,
  onButtonPress,
}) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
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
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.instruction}>{instruction}</Text>
            
            {children}
            {buttonText && onButtonPress && (
              <TouchableOpacity
                style={styles.verifyButton}
                activeOpacity={0.8}
                onPress={onButtonPress}
              >
                <Text style={styles.verifyText}>{buttonText}</Text>
              </TouchableOpacity>
            )}
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default VerificationBase;