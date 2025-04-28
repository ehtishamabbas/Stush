import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import BaseScreen from '../../components/ResueableComponents/DisclouerMainScreen';
import Heading from '../../components/ResueableComponents/Heading';
 import styles from '../../css/Disclouser';
 import LocalStyles from '../../css/LocalStyle';
 import NavigateButton from '../../components/common/NavigateButton';

type BankItem = {
    title: string;
    iconBg: string;
    text?: string;
    iconText?: string;
    icon?: string;
    image?: ImageSourcePropType;
    style?: StyleProp<ViewStyle>;
};

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

    const handleAgree = () => {
        navigation.navigate('SecondBankSelectScreen');
    };

    const handleBack = () => {
        navigation.goBack();
    };

    const renderBankIcon = (item: BankItem) => {
        if (item.image) {
            return (
                <Image
                    source={item.image}
                    style={LocalStyles.bankIcon}
                    resizeMode="contain"
                />
            );
        } else if (item.iconText) {
            return (
                <Text style={LocalStyles.iconText}>
                    {item.iconText}
                </Text>
            );
        } else if (item.icon) {
            return (
                <FontAwesome5
                    name={item.icon}
                    size={22}
                    color="#FFFFFF"
                />
            );
        }
        return null;
    };

    const renderBankItems = () => {
        return bankItems.map((item: BankItem, index: number) => (
            <TouchableOpacity key={index} style={LocalStyles.bankRow}>
                <View style={[LocalStyles.iconContainer, { backgroundColor: item.iconBg }]}>
                    {renderBankIcon(item)}
                </View>
                <View style={LocalStyles.textContainers}>
                    <Text style={LocalStyles.bankTitle}>
                        {item.title}
                    </Text>
                    {item.text && (
                        <Text style={LocalStyles.bankSubtitle}>
                            {item.text}
                        </Text>
                    )}
                </View>
            </TouchableOpacity>
        ));
    };

    return (
        <BaseScreen onBackPress={handleBack} showBackButton={false} showLogo={true}>
            <ScrollView>
                <View style={LocalStyles.contentContainers}>
                    <Heading
                        primaryText="GET PAID TODAY"
                        secondaryText={"Select Your Payroll Or\nWork Hours Provider"}
                        type="both"
                    />

                    <Text style={styles.description}>
                    Select or select the system your employer uses to process payroll or track work hours. 
                    </Text>

                    <View style={LocalStyles.banksContainer}>
                        {renderBankItems()}
                    </View>

                    <View style={LocalStyles.spacers} />
                    
                </View>
                
                <NavigateButton
                        title="Continue"
                        onPress={handleAgree}

                    />
                    <Text style={LocalStyles.loginText}>Login with different credentials</Text>
            </ScrollView>
        </BaseScreen>
    );
};

 
export default PayrollProviderScreen;