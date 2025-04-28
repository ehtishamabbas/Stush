import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import BankSelectionComponent, { BankItem } from '../../components/ResueableComponents/BankSlectionComponents/BankSelectionComponent';

const SelectBankScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const bankItems: BankItem[] = [
        {
            title: 'First Platypus Bank',
            text: 'Previously linked',
            iconBg: '#7353E1',
            iconText: 'FPB',
        },
        {
            title: 'Bank of America',
            iconBg: 'none',
            image: require('../../../assets/images/america.png'),
        },
        {
            title: 'Chase Bank',
            iconBg: 'none',
            image: require('../../../assets/images/chasebank.png'),
            style: {
                width: '60%',
                height: '60%',
            },
        },
        {
            title: 'Citibank',
            iconBg: 'none',
            image: require('../../../assets/images/citibank.png'),
        },
        {
            title: 'Other Bank',
            iconBg: '#1E88E5',
            icon: 'university',
        }
    ];

    return (
        <BankSelectionComponent
            primaryText="GET PAID TODAY"
            secondaryText="Select Your Bank"
            description="Please add all bank accounts where you receive or deposit your paycheck. Be sure to include any accounts your employer uses for direct deposit"
            bankItems={bankItems}
            showBackButton={false}
            navigateTo="BankSelectedScreen"
        />
    );
};

export default SelectBankScreen;