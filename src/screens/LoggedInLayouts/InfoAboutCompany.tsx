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

            <View style={styles.container}>


                <View style={styles.contentContainer}>


                    <Heading
                        secondaryText={"Company\ninformation"}
                        type="secondary"
                    />



                    <View style={styles.inputContainer}>
                        <Text style={styles.labelText}>Email Address (Supervisor):</Text>
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
                    <View style={styles.inputContainer}>
                        <Text style={styles.labelText}>Name of Supervisor:</Text>
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
                    <View style={styles.inputContainer}>
                        <Text style={styles.labelText}>Supervisor’s Phone:</Text>
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
                    <View style={styles.spacer} />

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

export default InfoAboutCompany;