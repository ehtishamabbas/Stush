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


interface CompanyInfoProps {
    navigation: any;
}
const EarnedSecond: React.FC<CompanyInfoProps> = ({ navigation }) => {
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
                        secondaryText={"EARNED INCOME\nPAYOUT"}
                        type="secondary"
                    />




                    <View style={styles.inputContainer}>
                        <Text style={styles.labelText}>How many hours do you want to get paid for?</Text>
                        <FormInput
                            placeholder="10"
                            value={selectedJob}
                            onChangeText={setSelectedJob}
                            keyboardType="default"
                            autoCapitalize="none"
                            returnKeyType="done"
                            maxLength={100}
                            accessibilityLabel="How long been employed?"
                            accessibilityHint="Enter how long you have been employed"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.labelText}>Total amount requested: (hours X hourly wage)</Text>
                        <FormInput
                            placeholder="$200.00"
                            value={selectedJob}
                            onChangeText={setSelectedJob}
                            keyboardType="default"
                            autoCapitalize="none"
                            returnKeyType="done"
                            maxLength={100}
                            accessibilityLabel="Next Pay Date"
                            accessibilityHint="Enter next pay date"
                        />
                    </View>

                    <View style={styles.spacer} />

                    <NavigateButton
                        title="Continue"
                        onPress={handleNext}
                        accessibilityLabel="PlaidLink"
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
        paddingHorizontal: 30,
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

export default EarnedSecond;