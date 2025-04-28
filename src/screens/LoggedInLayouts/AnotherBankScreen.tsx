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

    const handleNavigate = () => {
        navigation.navigate('AuthorizationScreen');
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
        <BaseScreen onBackPress={handleBack} showBackButton={false} showLogo={true}>
            <ScrollView>
                <View style={LocalStyles.contentContainers}>
                    <Heading
                        primaryText="GET PAID TODAY"
                        secondaryText="Add another Bank"
                        type="both"
                    />

                    <Text style={styles.description}>
                    If you have additional bank accounts where your paycheck is deposited, please connect them now. If you’ve already added all relevant accounts, simply select 'No More Banks to Add' to continue                    </Text>

                    <View style={LocalStyles.banksContainer}>
                        {renderBankItems()}
                    </View>

                    <View style={LocalStyles.spacers} />
                    <NavigateButton
                        title="No More Banks to Add"
                        onPress={() => navigation.navigate('AuthorizationScreen')}
                        accessibilityLabel="No More Banks to Add"
                    />
                    
                </View>
            </ScrollView>
        </BaseScreen>
    );
};

 
export default AnotherBankScreen;