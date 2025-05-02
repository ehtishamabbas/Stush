import React, { useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Alert,
    Keyboard
} from 'react-native';
import styles from '../../css/UserIdentification.';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import Header from '../../components/common/Header';

const UserIdentification = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const [phoneNumber, setPhoneNumber] = useState('');
    const [errors, setErrors] = useState({ phoneNumber: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const clearError = () => {
        if (errors.phoneNumber) {
            setErrors({ ...errors, phoneNumber: '' });
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { phoneNumber: '' };

        if (!phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required';
            isValid = false;
        } else {
            const phoneRegex = /^[0-9]{10,15}$/;

            if (!phoneRegex.test(phoneNumber.trim())) {
                newErrors.phoneNumber = 'Please enter a valid 10-15 digit phone number';
                isValid = false;
            }
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleNext = () => {
        Keyboard.dismiss();
        if (validateForm()) {
            setIsSubmitting(true);

            console.log('Phone number details:', {
                phoneNumber: phoneNumber.trim(),
                timestamp: new Date().toISOString(),
            });

            setTimeout(() => {
                setIsSubmitting(false);
                navigation.navigate('HomeAddressScreen');
            }, 500);
        } else {
            setIsSubmitting(false);
        }
    };

    return (
        <ImageBackground
            source={require('../../../assets/images/backgrounds.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <Header />

                <View style={styles.formcontainer}>
                    <Heading primaryText="GET PAID TODAY" type="primary" />
                    <Heading secondaryText="VERIFY YOUR IDENTITY" type="secondary" />

                    <ContentText
                        text="To keep your account secure and comply with the law, we need your Social Security Number (SSN). This is NOT A CREDIT CHECK. We use your SSN only to verify your identity. Your information is secure and encrypted. Your privacy and security is our top priority."
                    />

                    <View style={styles.subcontainer}>
                        <Text style={styles.titlel}>Social Security Number</Text>

                        <View style={styles.inputContainer}>
                            {errors.phoneNumber !== '' && (
                                <Text style={{ color: 'red' }}>{errors.phoneNumber}</Text>
                            )}

                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter number"
                                placeholderTextColor="#999999"
                                keyboardType="numeric"
                                value={phoneNumber}
                                onChangeText={(text) => {
                                    setPhoneNumber(text);
                                    clearError();
                                }}
                             />

                            <View style={styles.inputpart}>
                                <FontAwesome5 name="check-square" size={24} color="#FFFFFF" />
                                <Text style={styles.titlell}>
                                    Authorization for the Social Security Administration to Disclose Your Social Security Number Verification
                                </Text>
                            </View>
                        </View>

                        <View style={styles.loremdescriptions}>
                            <Text style={styles.loremdescription}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.                            </Text>
                            <Text style={styles.loremdescription}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit.                             </Text>
                        </View>

                        <TouchableOpacity
                            style={styles.ctaButton}
                            onPress={handleNext}
                            disabled={isSubmitting}
                        >
                            <Text style={styles.ctaButtonText}>Next</Text>
                        </TouchableOpacity>

                        <View style={{ marginBottom: 16 }} />
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default UserIdentification;
