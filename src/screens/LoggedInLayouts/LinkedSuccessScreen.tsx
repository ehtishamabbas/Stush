import React, { useState } from 'react';
import { Keyboard, Image, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppScreen from '../../components/common/AppScreen';
import NavigateButton from '../../components/common/NavigateButton';
import SignUpLink from '../../components/common/SignUpLink';
import baseStyles from '../../css/BaseStyles';
import ContentText from '../../components/ResueableComponents/ContenetText';
const LinkedSuccessScreen = () => {
    const navigation: any = useNavigation();


    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleNext = () => {
        Keyboard.dismiss();
        if (isSubmitting) {
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            navigation.navigate('Next Screen');
        }, 500);
    }


    return (
        <AppScreen showBackButton={true} enableKeyboardAvoid={true}>
            <View style={baseStyles.formContainers}>
                <View style={baseStyles.successImageContainer}>
                    <Image
                        source={require('../../../assets/images/successfulstartup.png')}
                        style={baseStyles.successImage}
                    />
                    <Text style={baseStyles.headings}>Success!</Text>
                    <ContentText
                        text="Your account has successfully been
linked to this application"
                    />
                </View>



                <NavigateButton
                    title="Next"
                    onPress={handleNext}
                    accessibilityLabel="Next Screen"
                />
                <SignUpLink />
            </View>
        </AppScreen>
    );
};

export default LinkedSuccessScreen;