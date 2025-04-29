import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import BankSelectionComponent, { BankItem } from '../../components/ResueableComponents/BankSlectionComponents/BankSelectionComponent';

const SecondBankSelectScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const selectedBank: BankItem = {
        title: 'ADP',
        iconBg: 'none',
        image: require('../../../assets/images/ADP.png'),
    };

    return (
        <BankSelectionComponent
            primaryText="GET PAID TODAY"
            secondaryText="Select Your Bank"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in."
            bankItems={[]}
            selectedBank={selectedBank}
            showBackButton={false}
            showPasswordInput={true}
            showContinueButton={true}
            continueButtonText="Continue"
            showLoginWithDifferentCredentials={true}
            navigateTo="AddPayrollScreen"
        />
    );
};

export default SecondBankSelectScreen;