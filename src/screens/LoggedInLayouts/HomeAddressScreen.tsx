import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import NavigateButton from '../../components/common/NavigateButton';
import FormInput from '../../components/common/FormInput';
import { Text } from 'react-native';


interface HomeAddressScreenProps {
    navigation: any;
}
const HomeAddressScreen: React.FC<HomeAddressScreenProps> = ({ navigation }) => {
    const [selectedJob, setSelectedJob] = useState('');

    const handleNext = () => {
        navigation.navigate('SetupSuccessScreen');
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
                        secondaryText="Confirm Home Address"
                        type="secondary"
                    />

                    <ContentText
                        text="Please enter your current home address. This helps us verify your information and ensure secure account management."
                    />
                    <ContentText
                        text="(Tip: Use the address where you receive important mail like bank statements.)"
                    />
                    <View style={styles.inputContainer}>
                        <Text style={styles.labelText}>Address:</Text>
                        <FormInput
                            placeholder="123 Main Street"
                            value={selectedJob}
                            onChangeText={setSelectedJob}
                            keyboardType="default"
                            autoCapitalize="none"
                            returnKeyType="done"
                            maxLength={100}
                            accessibilityLabel="Address"
                            accessibilityHint="Enter your address"
                        />
                        <Text style={styles.labelText}>Apt:</Text>
                        <FormInput
                            placeholder="4C"
                            value={selectedJob}
                            onChangeText={setSelectedJob}
                            keyboardType="default"
                            autoCapitalize="none"
                            returnKeyType="done"
                            maxLength={100}
                            accessibilityLabel="Apt"
                            accessibilityHint="Enter your apt"
                        />
                            <Text style={styles.labelText}>City, State, Zip</Text>
                        <FormInput
                            placeholder="Las Vegas, NV 10001"
                            value={selectedJob}
                            onChangeText={setSelectedJob}
                            keyboardType="default"
                            autoCapitalize="none"
                            returnKeyType="done"
                            maxLength={100}
                            accessibilityLabel="City, State, Zip"
                            accessibilityHint="Enter your city, state, zip"
                        />
                    </View>


                    <View style={styles.spacer} />

                    <NavigateButton
                        title="Next"
                        onPress={handleNext}
                        accessibilityLabel="CompanyInfo Screen"
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

export default HomeAddressScreen;