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

interface BaseSuccessScreenProps {
  navigation: any;
  title: string;
  subtitle?: string;
  subtitlel?: string;
  imageSource: any;
  imageSize?: 'small' | 'large';
  resendText?: string;
  buttonText: string;
  nextScreen: string;
  whatsNextText?: string;
  whatsNextSubtext?: string;
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
    navigation.navigate(nextScreen)};

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