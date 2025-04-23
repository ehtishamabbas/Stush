import React, { ReactNode, useState, useEffect } from 'react';
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
  ScrollView,
  Dimensions,
  LayoutAnimation,
  UIManager
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import baseStyles from '../../css/BaseStyles';

 if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

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
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const { height: screenHeight } = Dimensions.get('window');

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

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

      {showLogo && !keyboardVisible && (
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

   const scrollViewRef = React.useRef<ScrollView>(null);

  const mainContent = scrollable ? (
    <ScrollView
      ref={scrollViewRef}
      contentContainerStyle={{ 
        flexGrow: 1, 
        paddingBottom: keyboardVisible ? 120 : 50 
      }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      keyboardDismissMode="interactive"
      bounces={false}
      onContentSizeChange={() => {
         if (keyboardVisible) {
          scrollViewRef.current?.scrollToEnd({ animated: true });
        }
      }}>
      {content}
    </ScrollView>
  ) : (
    content
  );

  const wrappedContent = dismissKeyboardOnTouch ? (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <ImageBackground
          source={require('../../../assets/images/background.png')}
          style={[baseStyles.backgroundImage, { height: screenHeight }]}
          resizeMode="cover">
          <SafeAreaView style={[baseStyles.safeArea, { flex: 1 }]}>
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
        style={[baseStyles.backgroundImage, { height: screenHeight }]}
        resizeMode="cover">
        <SafeAreaView style={[baseStyles.safeArea, { flex: 1 }]}>
          {mainContent}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );

  if (enableKeyboardAvoid) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1, backgroundColor: '#000000' }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
        {wrappedContent}
      </KeyboardAvoidingView>
    );
  }

  return wrappedContent;
};

export default AppScreen;