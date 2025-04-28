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
const CompanyInfo: React.FC<CompanyInfoProps> = ({ navigation }) => {
    const [selectedJob, setSelectedJob] = useState('');

    const handleNext = () => {
        navigation.navigate('InfoAboutCompany');
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

<ContentText
            text="We respect your privacy. We will never contact your workplace without your permission, and in most cases, contacting your employer is not necessary."
          />

                    <View style={styles.inputContainer}>
                        <Text style={styles.labelText}>Company Name:</Text>
                        <FormInput
                            placeholder="XYZ, LLC"
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
                        <Text style={styles.labelText}>Company Address:</Text>
                        <FormInput
                            placeholder="123 Main St, City, State, Zip"
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
                        <Text style={styles.labelText}>Phone:</Text>
                        <FormInput
                            placeholder=" +1 (111) 123-1234"
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
                        accessibilityLabel="InfoAboutCompany"
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

export default CompanyInfo;