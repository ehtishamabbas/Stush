import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/AppNavigator';

import BaseScreen from '../DisclouerMainScreen';
import Heading from '../Heading';
import NavigateButton from '../../common/NavigateButton';
import SharedStyles from '../../../css/LocalStyle';
import BankList from './BankList';
import PasswordSection from './PasswordSection';
import { BankItem } from './Types';

type BankSelectionProps = {
    primaryText: string;
    secondaryText: string;
    description: string;
    bankItems: BankItem[];
    showBackButton?: boolean;
    navigateTo?: keyof RootStackParamList;
    showContinueButton?: boolean;
    continueButtonText?: string;
    showLoginWithDifferentCredentials?: boolean;
    showPasswordInput?: boolean;
    showNoMoreBanksButton?: boolean;
    selectedBank?: BankItem;
    onBackPress?: () => void;
    onItemPress?: (item: BankItem) => void;
    onContinuePress?: () => void;
    onNoMoreBanksPress?: () => void;
};

const BankSelectionComponent = ({
    primaryText,
    secondaryText,
    description,
    bankItems,
    showBackButton = true,
    navigateTo,
    showContinueButton = false,
    continueButtonText = "Continue",
    showLoginWithDifferentCredentials = false,
    showPasswordInput = false,
    showNoMoreBanksButton = false,
    selectedBank,
    onBackPress,
    onItemPress,
    onContinuePress,
    onNoMoreBanksPress,
}: BankSelectionProps) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [password, setPassword] = useState<string>('');

    const handleBack = () => {
        if (onBackPress) {
            onBackPress();
        } else {
            navigation.goBack();
        }
    };

    const handleItemPress = (item: BankItem) => {
        if (onItemPress) {
            onItemPress(item);
        } else if (navigateTo) {
            navigation.navigate(navigateTo as any);
        }
    };

    const handleContinue = () => {
        if (onContinuePress) {
            onContinuePress();
        } else if (navigateTo) {
            navigation.navigate(navigateTo as any);
        }
    };

    const handleNoMoreBanks = () => {
        if (onNoMoreBanksPress) {
            onNoMoreBanksPress();
        } else {
            navigation.navigate('AuthorizationScreen' as any);
        }
    };

    return (
        <BaseScreen onBackPress={handleBack} showBackButton={showBackButton} showLogo={true}>
            <ScrollView>
                <View style={SharedStyles.contentContainers}>
                    <Heading
                        primaryText={primaryText}
                        secondaryText={secondaryText}
                        type="both"
                    />

                    <Text style={SharedStyles.description}>
                        {description}
                    </Text>

                    <BankList
                        items={bankItems}
                        onItemPress={handleItemPress}
                        selectedBank={selectedBank}
                    />
                    <View style={{ height: 40 }} />

                    {showPasswordInput && (
                        <PasswordSection
                            password={password}
                            setPassword={setPassword}
                        />
                    )}

                    {showNoMoreBanksButton && (
                        <NavigateButton
                            title="No More Banks to Add"
                            onPress={handleNoMoreBanks}
                            accessibilityLabel="No More Banks to Add"
                        />
                    )}

                    {showContinueButton && (
                        <NavigateButton
                            title={continueButtonText}
                            onPress={handleContinue}
                        />
                    )}

                    {showLoginWithDifferentCredentials && (
                        <Text style={SharedStyles.loginText}>Login with different credentials</Text>
                    )}

                    <View style={SharedStyles.spacers} />
                </View>
            </ScrollView>
        </BaseScreen>
    );
};

export default BankSelectionComponent;
export type { BankItem } from './Types';