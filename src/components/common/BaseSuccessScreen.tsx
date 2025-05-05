import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  ImageBackground,
  View,
} from 'react-native';
import styles from '../../css/Success';
import Header from '../../components/common/Header';
import SuccessContent from '../../components/common/SuccessContent';
import FormButton from '../../components/common/FormButton';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { NavigationProp } from '@react-navigation/native';

interface BaseSuccessScreenProps {
  navigation: NavigationProp<RootStackParamList>;
  title: string;
  subtitle?: string | React.ReactNode;
  subtitlel?: string | React.ReactNode;
  imageSource: any;
  imageSize?: 'small' | 'large';
  resendText?: string | React.ReactNode;
  buttonText: string | React.ReactNode;
  nextScreen: keyof RootStackParamList;
  whatsNextText?: string | React.ReactNode;
  whatsNextSubtext?: string | React.ReactNode;
  onBackPress?: () => void;
}

const BaseSuccessScreen: React.FC<BaseSuccessScreenProps> = ({
  navigation,
  title,
  subtitle,
  subtitlel,
  imageSource,
  resendText,
  buttonText,
  nextScreen,
  whatsNextText,
  whatsNextSubtext,
  onBackPress,
}) => {
  const handleNext = () => {
    navigation.navigate('Login')
  };

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
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <Header navigation={navigation} onBackPress={onBackPress} />

            <SuccessContent
              title={title}
              subtitle={subtitle}
              imageSource={imageSource}
              resendText={resendText}
              whatsNextText={whatsNextText}
              whatsNextSubtext={whatsNextSubtext}
            />
          </View>


          <View style={styles.buttonContainer}>
            <FormButton
              onPress={handleNext}
              title={buttonText}
              buttonStyle={styles.nextButton}
              textStyle={styles.nextButtonText}
            />

          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default BaseSuccessScreen;