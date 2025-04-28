import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import BankSelectionComponent, { BankItem } from '../../components/ResueableComponents/BankSlectionComponents/BankSelectionComponent';

const BankSelectedScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const selectedBank: BankItem = {
        title: 'Bank of America',
        iconBg: 'none',
        image: require('../../../assets/images/america.png'),
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
            navigateTo="AnotherBankScreen"
        />
    );
};

export default BankSelectedScreen;