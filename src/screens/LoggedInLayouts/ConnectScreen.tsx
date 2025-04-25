import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import NavigateButton from '../../components/common/NavigateButton';
import FormInput from '../../components/common/FormInput';
import { Text } from 'react-native';
import baseStyles from '../../css/BaseStyles';
import LocalStyles from '../../css/LocalStyle'; 


interface ConnectScreenProps {
    navigation: any;
}
const ConnectScreen: React.FC<ConnectScreenProps> = ({ navigation }) => {
    const [selectedJob, setSelectedJob] = useState('');

    const handleNext = () => {
        navigation.navigate('PayrollProviderScreen');
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <BaseScreen>
            <Header navigation={navigation} onBackPress={handleBack} />

            <View style={LocalStyles.container}>


                <View style={LocalStyles.contentContainer}>
                    <Heading
                        primaryText="NOW LET'S CONNECT"
                        type="primary"
                    />

                    <Heading
                        secondaryText={"YOUR PAYROLL OR WORK HOURS PROVIDER"}
                        type="secondary"
                    />

                    <ContentText
                        text="This Application Uses Plaid to Access your Payroll or Work hours provider."
                    />

                    <ContentText
                        text="This helps us securely connect your account for instant access to your earnings."
                    />
                


                    <View style={LocalStyles.spacer} />

                    <NavigateButton
                        title="Next"
                        onPress={handleNext}
                        accessibilityLabel="PayrollProviderScreen"
                    />
                </View>
            </View>
        </BaseScreen>
    );
};
 

export default ConnectScreen;