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
const InfoAboutCompany: React.FC<CompanyInfoProps> = ({ navigation }) => {
    const [selectedJob, setSelectedJob] = useState('');

    const handleNext = () => {
        navigation.navigate('WorkInfo');
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
                        secondaryText={"Company\ninformation"}
                        type="secondary"
                    />
                    <ContentText
                        text="Reminder: We will not contact your employer without your permission."
                    />

                    <View style={style.inputContainer}>
                        <Text style={style.labelText}>Email Address (Supervisor):</Text>
                        <FormInput
                            placeholder="abc@gmail.com"
                            value={selectedJob}
                            onChangeText={setSelectedJob}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            returnKeyType="done"
                            maxLength={100}
                            accessibilityLabel="Email Address"
                            accessibilityHint="Enter your email address"
                        />
                    </View>
                    <View style={style.inputContainer}>
                        <Text style={style.labelText}>Name of Supervisor:</Text>
                        <FormInput
                            placeholder="John Doe"
                            value={selectedJob}
                            onChangeText={setSelectedJob}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            returnKeyType="done"
                            maxLength={100}
                            accessibilityLabel="Name of Supervisor"
                            accessibilityHint="Enter the name of your supervisor"
                        />
                    </View>
                    <View style={style.inputContainer}>
                        <Text style={style.labelText}>Supervisor’s Phone:</Text>
                        <FormInput
                            placeholder="209-000-000"
                            value={selectedJob}
                            onChangeText={setSelectedJob}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            returnKeyType="done"
                            maxLength={100}
                            accessibilityLabel="Email Address"
                            accessibilityHint="Enter your email address"
                        />
                    </View>
                    <View style={style.spacer} />

                    <NavigateButton
                        title="Continue"
                        onPress={handleNext}
                        accessibilityLabel="WorkInfo"
                    />
                </View>
            </View>
        </BaseScreen>
    );
};
 
export default InfoAboutCompany;