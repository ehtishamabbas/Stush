import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import NavigateButton from '../../components/common/NavigateButton';
import FormInput from '../../components/common/FormInput';
import { Text } from 'react-native';
import style from '../../css/SharedStyle';


interface CompanyInfoProps {
    navigation: any;
}
const WorkFrequency: React.FC<CompanyInfoProps> = ({ navigation }) => {
    const [selectedJob, setSelectedJob] = useState('');

    const handleNext = () => {
        navigation.navigate('EarnedFirst');
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <BaseScreen>
            <Header navigation={navigation} onBackPress={handleBack} />

            <View style={style.container}>


                <View style={style.innerContainer}>


                    <Heading
                        secondaryText={"Work\ninformation"}
                        type="secondary"
                    />



                    <View style={style.inputContainer}>
                        <Text style={style.labelText}>Pay Frequency:</Text>
                        <FormInput
                            placeholder="-- Select --"
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
                        <Text style={style.labelText}>Next Pay Date:</Text>
                        <FormInput
                            placeholder="-- Select --"
                            value={selectedJob}
                            onChangeText={setSelectedJob}
                            keyboardType="default"
                            autoCapitalize="none"
                            returnKeyType="done"
                            maxLength={100}
                            accessibilityLabel="Next Pay Date"
                            accessibilityHint="EarnedFirst"
                        />
                    </View>
                    <ContentText
            text="We’ll confirm your pay frequency and date through payroll records. If you’ve had any recent changes, they might not show up right away"
          />
                    <View style={style.spacer} />

                    <NavigateButton
                        title="Continue"
                        onPress={handleNext}
                        accessibilityLabel="EarnedFirst"
                    />
                </View>
            </View>
        </BaseScreen>
    );
}; 
export default WorkFrequency;