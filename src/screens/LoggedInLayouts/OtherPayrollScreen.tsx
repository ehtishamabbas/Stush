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
const  OtherPayrollScreen: React.FC<MyJobScreenProps> = ({ navigation }) => {
    const [selectedJob, setSelectedJob] = useState('');

    const handleNext = () => {
        navigation.navigate('PayrollAuthorizationScreen');
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
                        secondaryText={"Add Another Payroll\nProvider"}
                        type="secondary"
                    />

                    <ContentText
                        text="If you receive paychecks from more than one employer, please add your next payroll provider below."
                    />

   <ContentText
                        text="If not, just tap 'No More to Add' to continue."
                    />
                    <View style={styles.spacer} />

                    <NavigateButton
                        title="No More Payroll to Add"
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

export default  OtherPayrollScreen;