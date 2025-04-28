import React, { useState, useEffect } from 'react';
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
import FormInput from '../../components/common/FormInput';
import NavigateButton from '../../components/common/NavigateButton';
import ContentText from '../../components/ResueableComponents/ContenetText';




type BankItem = {
    title: string;
    iconBg: string;
    text?: string;
    iconText?: string;
    icon?: string;
    image?: ImageSourcePropType;
    style?: StyleProp<ViewStyle>;
};

const BankSelectedScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [selectedJob, setSelectedJob] = useState<string>('');

    const bankItems: BankItem[] = [

        {
            title: 'Bank of America',
            iconBg: 'none',
            image: require('../../../assets/images/america.png'),

        }


    ];

    const handleAgree = () => {
        navigation.navigate('AnotherBankScreen');
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
        <BaseScreen onBackPress={handleBack} showBackButton={true} showLogo={true}>
            <ScrollView>
                <View style={LocalStyles.contentContainers}>


                    <Heading
                        primaryText="GET PAID TODAY"
                        secondaryText="Select Your Bank"
                        type="both"
                    />

                    <Text style={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.
                    </Text>
                    <View style={LocalStyles.selectedBankContainer}>
                        <View style={LocalStyles.banksContainer}>
                            {renderBankItems()}
                        </View>



                    </View>
                    <View style={LocalStyles.secondaryContainer}>
                        <Text style={LocalStyles.text}>Enter your password</Text>
                        <ContentText
                            text={"Login to securely re-link your account\nUser ID: abs.........."}
                        />
                        <View style={LocalStyles.inputContainer}>
                            <Text style={LocalStyles.labelText}>Password</Text>
                            <FormInput
                                placeholder="**********"
                                value={selectedJob}
                                onChangeText={setSelectedJob}
                                keyboardType="default"
                                autoCapitalize="none"
                                returnKeyType="done"
                                maxLength={100}
                                accessibilityLabel="Password"
                                accessibilityHint="Enter your password"
                            />
                        </View>
                    </View>

                    <NavigateButton
                        title="Continue"
                        onPress={handleAgree}

                    />
                    <Text style={LocalStyles.loginText}>Login with different credentials</Text>


                </View>

            </ScrollView>
        </BaseScreen>
    );
};


export default BankSelectedScreen;