import React, { useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import NavigateButton from '../../components/common/NavigateButton';
import FormInput from '../../components/common/FormInput';
import style from '../../css/SharedStyle';

interface HomeAddressScreenProps {
    navigation: any;
}

const HomeAddressScreen: React.FC<HomeAddressScreenProps> = ({ navigation }) => {
    const [address, setAddress] = useState('');
    const [apt, setApt] = useState('');
    const [cityStateZip, setCityStateZip] = useState('');
    const [errors, setErrors] = useState({
        address: '',
        apt: '',
        cityStateZip: '',
    });
    const clearError = (field: 'address' | 'apt' | 'cityStateZip') => {
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };
    const validateForm = () => {
        let isValid = true;
        const newErrors = { address: '', apt: '', cityStateZip: '' };

        if (!address.trim()) {
            newErrors.address = 'Address is required';
            isValid = false;
        }

        if (!apt.trim()) {
            newErrors.apt = 'Apt is required';
            isValid = false;
        }

        if (!cityStateZip.trim()) {
            newErrors.cityStateZip = 'City, State, Zip is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleBack = () => {
        navigation.goBack();
    };

    const handleNext = () => {
        if (validateForm()) {
            navigation.navigate('SetupSuccessScreen');
        }
    };
    return (
        <BaseScreen>
            <Header navigation={navigation} onBackPress={handleBack} />
            <KeyboardAvoidingView
                style={style.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
                contentContainerStyle={style.subContainer}
            >
                <ScrollView>
                    <View style={style.subContainer}>
                        <Heading primaryText="GET PAID TODAY" type="primary" />
                        <Heading secondaryText="Confirm Home Address" type="secondary" />

                        <ContentText text="Please enter  your current home address. This help us verify your information and ensure secure account management." />
                        <ContentText text="(Tip: Use the address where you receive important mail like bank statements.)" />

                        <View style={style.inputContainer}>
                            <Text style={style.labelText}>Address:</Text>
                            <FormInput
                                placeholder="123 Main Street"
                                value={address}
                                onChangeText={setAddress}
                                keyboardType="default"
                                autoCapitalize="none"
                                returnKeyType="done"
                                maxLength={100}
                                accessibilityLabel="Address"
                                accessibilityHint="Enter your address"

                                clearError={() => clearError('address')}
                            />
                            {errors.address ? <Text style={style.errorText}>{errors.address}</Text> : null}

                            <Text style={style.labelText}>Apt:</Text>
                            <FormInput
                                placeholder="4C"
                                value={apt}
                                onChangeText={setApt}
                                keyboardType="default"
                                autoCapitalize="none"
                                returnKeyType="done"
                                maxLength={100}
                                accessibilityLabel="Apartment"
                                accessibilityHint="Enter your apartment or unit number"
                                clearError={() => clearError('apt')}
                            />
                            {errors.apt ? <Text style={style.errorText}>{errors.apt}</Text> : null}

                            <Text style={style.labelText}>City, State, Zip</Text>
                            <FormInput
                                placeholder="Las Vegas, NV 10001"
                                value={cityStateZip}
                                onChangeText={setCityStateZip}
                                keyboardType="default"
                                autoCapitalize="none"
                                returnKeyType="done"
                                maxLength={100}
                                accessibilityLabel="City, State, Zip"
                                accessibilityHint="Enter your city, state, and zip code"
                                clearError={() => clearError('cityStateZip')}
                            />
                            {errors.cityStateZip ? <Text style={style.errorText}>{errors.cityStateZip}</Text> : null}
                        </View>

                        <View style={style.space} />

                        <NavigateButton
                            title="Next"
                            onPress={handleNext}
                            accessibilityLabel="Go to Setup Success Screen"
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </BaseScreen>
    );
};
 
export default HomeAddressScreen;