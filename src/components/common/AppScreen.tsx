import React, { ReactNode } from 'react';
import {
  View,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import baseStyles from '../../css/BaseStyles';

interface AppScreenProps {
  children: ReactNode;
  showBackButton?: boolean;
  showLogo?: boolean;
  dismissKeyboardOnTouch?: boolean;
  enableKeyboardAvoid?: boolean;
  scrollable?: boolean;
}

const AppScreen: React.FC<AppScreenProps> = ({
  children,
  showBackButton = true,
  showLogo = true,
  dismissKeyboardOnTouch = true,
  enableKeyboardAvoid = false,
  scrollable = true
}) => {
  const navigation: any = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const content = (
    <View style={baseStyles.container}>
      {showBackButton && (
        <TouchableOpacity
          style={baseStyles.backButton}
          activeOpacity={0.8}
          onPress={handleBack}
          accessibilityLabel="Go back"
          accessibilityRole="button">
          <Image
            source={require('../../../assets/images/back-arrow.png')}
            style={baseStyles.backIcon}
          />
        </TouchableOpacity>
      )}

      {showLogo && (
        <View style={baseStyles.logoContainer}>
          <Image
            source={require('../../../assets/images/stushlogo.png')}
            style={baseStyles.logoImage}
            resizeMode="contain"
            accessibilityLabel="Stush Logo"
          />
        </View>
      )}

      {children}
    </View>
  );

  const mainContent = scrollable ? (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      {content}
    </ScrollView>
  ) : (
    content
  );

  const wrappedContent = dismissKeyboardOnTouch ? (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <ImageBackground
          source={require('../../../assets/images/background.png')}
          style={baseStyles.backgroundImage}
          resizeMode="cover">
          <SafeAreaView style={baseStyles.safeArea}>
            {mainContent}
          </SafeAreaView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={baseStyles.backgroundImage}
        resizeMode="cover">
        <SafeAreaView style={baseStyles.safeArea}>
          {mainContent}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );

  if (enableKeyboardAvoid) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, backgroundColor: '#000000' }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
        {wrappedContent}
      </KeyboardAvoidingView>
    );
  }

  return wrappedContent;
};

export default AppScreen;