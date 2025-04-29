import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import type { BankItem } from '../../components/ResueableComponents/BankSlectionComponents/Types';
import BankSelectionComponent from '../../components/ResueableComponents/BankSlectionComponents/BankSelectionComponent';

const AnotherBankScreen = () => {
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
        }
    ];

    return (
        
        <BankSelectionComponent
             
            primaryText="GET PAID TODAY"
            secondaryText="Add another Bank"
            description="If you have additional bank accounts where your paycheck is deposited, please connect them now. If you've already added all relevant accounts, simply select 'No More Banks to Add' to continue"
            bankItems={bankItems}
            showBackButton={false}
            navigateTo="AuthorizationScreen"
            showNoMoreBanksButton={true}
        />
    );
};

export default AnotherBankScreen;