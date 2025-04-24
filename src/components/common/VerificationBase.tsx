import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
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
  const screenHeight = Dimensions.get('window').height;
  
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={[styles.backgroundImage, { minHeight: screenHeight }]}
        resizeMode="cover">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
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
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              showsVerticalScrollIndicator={false}
              bounces={false}
              keyboardShouldPersistTaps="handled">
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
            </ScrollView>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  );
};

export default VerificationBase;