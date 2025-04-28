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

type BankItem = {
    title: string;
    iconBg: string;
    text?: string;
    iconText?: string;
    icon?: string;
    image?: ImageSourcePropType;
    style?: StyleProp<ViewStyle>;
};

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

    const handleNavigate = () => {
        navigation.navigate('BankSelectedScreen');
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
            <TouchableOpacity key={index} style={LocalStyles.bankRow} onPress={handleNavigate}>
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
        <BaseScreen onBackPress={handleBack} showBackButton={true} showLogo={true}>
            <ScrollView>
                <View style={LocalStyles.contentContainers}>
                    <Heading
                        primaryText="GET PAID TODAY"
                        secondaryText="Select Your Bank"
                        type="both"
                    />

                    <Text style={styles.description}>
                    Please add all bank accounts where you receive or deposit your paycheck. Be sure to include any accounts your employer uses for direct deposit
                    </Text>

                    <View style={LocalStyles.banksContainer}>
                        {renderBankItems()}
                    </View>

                    <View style={LocalStyles.spacers} />
                    
                </View>
            </ScrollView>
        </BaseScreen>
    );
};

 
export default SelectBankScreen;