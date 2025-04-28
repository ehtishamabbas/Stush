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


interface MyJobScreenProps {
    navigation: any;
}
const EarnedPayoutScreen: React.FC<MyJobScreenProps> = ({ navigation }) => {
    const [selectedJob, setSelectedJob] = useState('');

    const handleNext = () => {
        navigation.navigate('PlaidLink');
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
                        secondaryText="Add Another Employer"
                        type="secondary"
                    />

                    <ContentText
                        text="If you have income from another employer, please add their details now. If you've added all your employers, simply select 'No More Employers to Add' to continue"
                    />

                    <View style={styles.spacer} />

                    <NavigateButton
                        title="No More Employers to Add"
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

export default EarnedPayoutScreen;