import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import NavigateButton from '../../components/common/NavigateButton';

interface MyJobScreenProps {
    navigation: any;
}
const PayrollAuthorizationScreen: React.FC<MyJobScreenProps> = ({ navigation }) => {

    const handleNext = () => {
        navigation.navigate('LinkedSuccessScreen');
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <BaseScreen>
            <Header navigation={navigation} onBackPress={handleBack} />

            <View style={styles.container}>


                <View style={styles.contentContainer}>
                    <Heading
                        primaryText="GET PAID TODAY"
                        type="primary"
                    />

                    <Heading
                        secondaryText={"Payroll Provider\nAuthorization"}
                        type="secondary"
                    />

                    <ContentText
                        text="To verify your income and provide you with early access to your earned wages, we need your authorization to connect with your payroll provider. This allows us to securely access your payment data and ensure accurate deductions. "
                    />

                    <ContentText
                        text="By proceeding, you give us permission to link your payroll account and retrieve necessary payroll information. Read More."
                    />
                    <View style={styles.spacer} />

                    <NavigateButton
                        title="I Agree"
                        onPress={handleNext}
                        accessibilityLabel="No More Employers to Add screen"
                    />
                </View>
            </View>
        </BaseScreen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: '50%',
        marginBottom: 40,
    },
    inputContainer: {
        marginTop: 20,
    },
    labelText: {
        fontSize: 14,
        marginBottom: 5,
        color: '#FFFFFF',
        paddingBottom: 10,
    },
    spacer: {
        flex: 1,
    },
});

export default PayrollAuthorizationScreen;