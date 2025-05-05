import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import NavigateButton from '../../components/common/NavigateButton';
import FormInput from '../../components/common/FormInput';
import { Text } from 'react-native';
import style from '../../css/SharedStyle';

interface CompanyInfoProps {
    navigation: any;
}
const EarnedSecond: React.FC<CompanyInfoProps> = ({ navigation }) => {
    const [selectedJob, setSelectedJob] = useState('');
    const handleNext = () => {
        navigation.navigate('AddEmployerScreen');
    };
    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <BaseScreen>
            <Header navigation={navigation} onBackPress={handleBack} />
            <View style={style.container}>
                <View style={style.subContainer}>
                    <Heading
                        secondaryText={"EARNED INCOME\nPAYOUT"}
                        type="secondary"
                    />
                    <View style={style.inputContainer}>
                        <Text style={style.labelText}>How many hours do you want to get paid for?</Text>
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
                    <View style={style.inputContainer}>
                        <Text style={style.labelText}>Total amount requested: (hours X hourly wage)</Text>
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
                    <View style={style.spacer} />

                    <NavigateButton
                        title="Continue"
                        onPress={handleNext}
                        accessibilityLabel="PlaidLink screen"
                    />
                </View>
            </View>
        </BaseScreen>
    );
};

export default EarnedSecond;