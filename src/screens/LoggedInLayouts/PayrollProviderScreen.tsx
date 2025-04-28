import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import BankSelectionComponent, { BankItem } from '../../components/ResueableComponents/BankSlectionComponents/BankSelectionComponent';
 
const PayrollProviderScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const bankItems: BankItem[] = [
        {
            title: 'Gusto',
            iconBg: 'none',
            image: require('../../../assets/images/Gusto.png'),
        },
        {
            title: 'Paycom',
            iconBg: 'none',
            image: require('../../../assets/images/Paycom.png'),
            style: {
                width: '60%',
                height: '60%',
            },
        },
        {
            title: 'Paychex',
            iconBg: 'none',
            image: require('../../../assets/images/PayChex.png'),
        },
        {
            title: 'ADP',
            iconBg: 'none',
            image: require('../../../assets/images/ADP.png'),
        },
        {
            title: 'Other Providers',
            iconBg: 'none',
            image: require('../../../assets/images/other.png'),
        },
    ];

    return (
        <BankSelectionComponent
            primaryText="GET PAID TODAY"
            secondaryText="Select Your Payroll Or\nWork Hours Provider"
            description="Select or select the system your employer uses to process payroll or track work hours."
            bankItems={bankItems}
            showBackButton={false}
            navigateTo="SecondBankSelectScreen"
            showContinueButton={true}
            showLoginWithDifferentCredentials={true}
        />
    );
};

export default PayrollProviderScreen;
