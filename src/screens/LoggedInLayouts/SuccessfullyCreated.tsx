import React, { useState } from 'react';
import { Keyboard, Image, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppScreen from '../../components/common/AppScreen';
import NavigateButton from '../../components/common/NavigateButton';
import SignUpLink from '../../components/common/SignUpLink';
import baseStyles from '../../css/BaseStyles';
import Heading from '../../components/ResueableComponents/Heading';

const SuccessfullyCreated = () => {
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
            navigation.navigate('VerifyEmail');
        }, 500);
    }


    return (
        <AppScreen showBackButton={true} enableKeyboardAvoid={true}>
            <View style={baseStyles.formContainers}>
                <Image
                    source={require('../../../assets/images/successman.png')}
                    style={baseStyles.successImage}
                />

                <Text style={baseStyles.headings}>Success!</Text>
                <Heading
                    secondaryText={"Your account has successfully been\nlinked to this application"}
                    type="secondary"
                />

                <NavigateButton
                    title="Next"
                    onPress={handleNext}
                    isLoading={isSubmitting}
                />

                <SignUpLink />
            </View>
        </AppScreen>
    );
};

export default SuccessfullyCreated;