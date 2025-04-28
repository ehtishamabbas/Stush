import React, { useState } from 'react';
import { Keyboard, Image, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppScreen from '../../components/common/AppScreen';
import NavigateButton from '../../components/common/NavigateButton';
import baseStyles from '../../css/BaseStyles';
import ContentText from '../../components/ResueableComponents/ContenetText';
const SetupSuccessScreen = () => {
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
            navigation.navigate('DisclosuresScreen');
        }, 500);
    }


    return (
        <AppScreen showBackButton={true} enableKeyboardAvoid={true}>
            <View style={baseStyles.formContainers}>
                <View style={baseStyles.successImageContainer}>
                    
                    <Text style={baseStyles.headings}>Success!</Text>
                    <ContentText
                        text="You're all set! We've successfully verified your identity. Let's continue setting up your account to get you full access to Stush Pay."
                    />
                       <ContentText
                        text="(Tap 'Continue' to move forward.)"
                    />
                </View>



                <NavigateButton
                    title="Continue"
                    onPress={handleNext}
                    accessibilityLabel="Disclosures Screen"


                />

             </View>
        </AppScreen>
    );
};

export default SetupSuccessScreen;