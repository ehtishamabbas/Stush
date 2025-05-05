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
import style from '../../css/SharedStyle';


interface CompanyInfoProps {
    navigation: any;
}
const WorkInfo: React.FC<CompanyInfoProps> = ({ navigation }) => {
    const [selectedJob, setSelectedJob] = useState('');

    const handleNext = () => {
        navigation.navigate('WorkFrequency');
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
                        <Text style={style.labelText}>How long been employed?</Text>
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
                        <Text style={style.labelText}>Hourly wage:</Text>
                        <FormInput
                            placeholder="$25.00"
                            value={selectedJob}
                            onChangeText={setSelectedJob}
                            keyboardType="default"
                            autoCapitalize="none"
                            returnKeyType="done"
                            maxLength={100}
                            accessibilityLabel="Hourly wage"
                            accessibilityHint="Enter your hourly wage"
                        />
                    </View>
                    <ContentText
            text="We’ll verify your hourly rate through payroll records. If you’ve had any recent changes, they might not show up right away"
          />
                    <View style={style.spacer} />

                    <NavigateButton
                        title="Continue"
                        onPress={handleNext}
                        accessibilityLabel="WorkFrequency"
                    />
                </View>
            </View>
        </BaseScreen>
    );
};
export default WorkInfo;