 import React from 'react';
import { View, Text, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { BankItem } from './Types';
import SharedStyles from '../../../css/LocalStyle';

type BankIconProps = {
    item: BankItem;
};

const BankIcon = ({ item }: BankIconProps) => {
    if (item.image) {
        return (
            <View style={[SharedStyles.iconContainer, { backgroundColor: item.iconBg }]}>
                <Image
                    source={item.image}
                    style={[SharedStyles.bankIcon, item.style]}
                    resizeMode="contain"
                />
            </View>
        );
    } else if (item.iconText) {
        return (
            <View style={[SharedStyles.iconContainer, { backgroundColor: item.iconBg }]}>
                <Text style={SharedStyles.iconText}>
                    {item.iconText}
                </Text>
            </View>
        );
    } else if (item.icon) {
        return (
            <View style={[SharedStyles.iconContainer, { backgroundColor: item.iconBg }]}>
                <FontAwesome5
                    name={item.icon}
                    size={22}
                    color="#FFFFFF"
                />
            </View>
        );
    }
    
    return <View style={[SharedStyles.iconContainer, { backgroundColor: item.iconBg }]} />;
};

export default BankIcon;