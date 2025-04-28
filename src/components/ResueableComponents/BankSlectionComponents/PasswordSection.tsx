 import React from 'react';
import { View, Text } from 'react-native';
import FormInput from '../../common/FormInput';
import ContentText from '../ContenetText';
import SharedStyles from '../../../css/LocalStyle';

type PasswordSectionProps = {
    password: string;
    setPassword: (text: string) => void;
};

const PasswordSection = ({ password, setPassword }: PasswordSectionProps) => {
    return (
        <View style={SharedStyles.secondaryContainer}>
            <Text style={SharedStyles.text}>Enter your password</Text>
            <ContentText
                text={"Login to securely re-link your account\nUser ID: abs.........."}
            />
            <View style={SharedStyles.inputContainer}>
                <Text style={SharedStyles.labelText}>Password</Text>
                <FormInput
                    placeholder="**********"
                    value={password}
                    onChangeText={setPassword}
                    keyboardType="default"
                    autoCapitalize="none"
                    returnKeyType="done"
                    maxLength={100}
                    accessibilityLabel="Password"
                    accessibilityHint="Enter your password"
                />
            </View>
        </View>
    );
};

export default PasswordSection;