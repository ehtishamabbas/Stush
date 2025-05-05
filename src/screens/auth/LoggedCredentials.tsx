import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Switch,
} from 'react-native';
import styles from '../../css/CreateAccount';
import FormInput from '../../components/common/FormInput';
import AppScreen from '../../components/common/AppScreen';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { FlatList } from 'react-native';
import ContentText from '../../components/ResueableComponents/ContenetText';
import Button from '../../components/common/Button';
interface LoggedCredentialsProps {
    navigation?: NavigationProp<RootStackParamList>;
}
const LoggedCredentials: React.FC<LoggedCredentialsProps> = ({
    navigation,
}) => {
    const [password, setPassword] = useState('');
    const [enablePIN, setEnablePIN] = useState(true);
    const [enableFaceID, setEnableFaceID] = useState(false);
    const listItems = [
        'Forgot Password?',
        'Don’t have an account? [Sign Up]',
        'Need Help? [Contact Support]'
    ];
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const clearError = () => {
        setErrors({ email: '', password: '' });
    };
    const validateForm = () => {
        let isValid = true;
        const newErrors = { email: '', password: '' };

        if (!email) {
            newErrors.email = 'Email is required';
            isValid = false;
        }
        if (!emailRegex.test(email)) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        }
        if (!password) {
            newErrors.password = 'Password is required';
            isValid = false;
        }
        if (!passwordRegex.test(password)) {
            newErrors.password = 'At least 12 characters and combination of uppercase ,lowercase letters, numbers, and special characters.';
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };
    const handleNext = () => {
        if (validateForm()) {
            navigation?.navigate('WelcomeBackScreen');
        }
    };
    return (
        <AppScreen showBackButton={false} enableKeyboardAvoid={true} showLogo={false}>

            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>


                    <View style={styles.contentContainer}>
                        <Text style={styles.heading}>LOGIN</Text>

                        <View style={styles.inputContainer}>
                            <Text style={styles.labelText}>Username:</Text>
                            <FormInput
                                placeholder="NeilArm30@gmail.com"
                                value={email}
                                onChangeText={setEmail}
                                error={errors.email}
                                clearError={clearError}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                returnKeyType="done"
                                maxLength={100}
                                accessibilityLabel="Email Address"
                                accessibilityHint="Enter your email address"
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <FormInput
                                placeholder="Enter New Password"
                                value={password}
                                onChangeText={setPassword}
                                error={errors.password}
                                clearError={clearError}
                                keyboardType="default"
                                autoCapitalize="none"
                                returnKeyType="done"
                                maxLength={100}
                                accessibilityLabel="Email Address"
                                accessibilityHint="Enter your new password"
                            />
                        </View>
                        <FlatList
                            data={listItems}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.listItem}>
                                    <Text style={styles.bullet}>•</Text>
                                    <Text style={styles.listItemText}>{item}</Text>
                                </View>
                            )}
                            style={styles.unorderedList}
                        />
                        <View style={styles.toggleContainer}>
                            <Text style={styles.toggleText}>Enable PIN</Text>
                            <Switch
                                style={styles.switch}
                                trackColor={{ false: '#333', true: '#32CD32' }}
                                thumbColor={enablePIN ? '#f4f3f4' : '#f4f3f4'}
                                ios_backgroundColor="#333"
                                onValueChange={() => setEnablePIN(!enablePIN)}
                                value={enablePIN}
                            />
                        </View>
                        <View style={styles.toggleContainer}>
                            <Text style={styles.toggleText}>Enable Face ID</Text>
                            <Switch
                                style={styles.switch}
                                trackColor={{ false: '#333', true: '#32CD32' }}
                                thumbColor={enableFaceID ? '#f4f3f4' : '#f4f3f4'}
                                ios_backgroundColor="#333"
                                onValueChange={() => setEnableFaceID(!enableFaceID)}
                                value={enableFaceID}
                            />
                        </View>

                        <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: '700' }}>Security Note:</Text>
                        <ContentText
                            text="Your login is secure and encrypted. We’ll never share your data."
                        ></ContentText>
                        <View style={styles.bottonContainer}>

                            <Button
                                title="Login"
                                onPress={handleNext}
                                accessibilityLabel="Logged Credentials"
                            />
                        </View>

                    </View>
                </View>
            </SafeAreaView>
        </AppScreen>
    );
};

export default LoggedCredentials;