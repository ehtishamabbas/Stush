import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import baseStyles from '../../css/BaseStyles';

interface NavigateButtonProps {
    onPress: () => void;
    title: string;
    isLoading?: boolean;
    disabled?: boolean;
    buttonStyle?: any;
    textStyle?: any;
}

const NavigateButton: React.FC<NavigateButtonProps> = ({
    onPress,
    title,
    isLoading = false,
    disabled = false,
    buttonStyle,
    textStyle
}) => {
    return (
        <TouchableOpacity
            style={[
                baseStyles.actionButtons,
                isLoading || disabled ? baseStyles.buttonDisabled : null,
                buttonStyle
            ]}
            activeOpacity={0.8}
            onPress={onPress}
            disabled={isLoading || disabled}
            accessibilityLabel={`${title} button`}
            accessibilityHint={`Press to ${title.toLowerCase()}`}>
            {isLoading ? (
                <ActivityIndicator color="#FFFFFF" />
            ) : (
                <Text style={[baseStyles.actionButtonTexts, textStyle]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

export default NavigateButton;