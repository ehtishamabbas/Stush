import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BankItem as BankItemType } from './Types';
import BankIcon from './BankIcon';
import SharedStyles from '../../../css/LocalStyle';

type BankItemProps = {
    item: BankItemType;
    onPress?: () => void;
    disabled?: boolean;
};


const BankItemComponent = ({ item, onPress, disabled = false }: BankItemProps) => {
    return (
        <TouchableOpacity 
            style={SharedStyles.bankRow}
            onPress={disabled ? undefined : onPress}
            disabled={disabled}
        >
            <BankIcon item={item} />
            <View style={SharedStyles.textContainers}>
                <Text style={SharedStyles.bankTitle}>
                    {item.title}
                </Text>
                {item.text && (
                    <Text style={SharedStyles.bankSubtitle}>
                        {item.text}
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    );
};

export default BankItemComponent;