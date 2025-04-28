 import React from 'react';
import { View } from 'react-native';
import { BankItem as BankItemType } from './Types';
import BankItemComponent from './BankItem';
import SharedStyles from '../../../css/LocalStyle';

type BankListProps = {
    items: BankItemType[];
    onItemPress?: (item: BankItemType) => void;
    selectedBank?: BankItemType;
};

const BankList = ({ items, onItemPress, selectedBank }: BankListProps) => {
    const bankItems = selectedBank ? [selectedBank] : items;
    const containerStyle = selectedBank ? 
        SharedStyles.selectedBankContainer : 
        SharedStyles.banksContainer;

    return (
        <View style={containerStyle}>
            <View style={SharedStyles.banksContainer}>
                {bankItems.map((item, index) => (
                    <BankItemComponent
                        key={index}
                        item={item}
                        onPress={() => onItemPress && onItemPress(item)}
                        disabled={!!selectedBank}
                    />
                ))}
            </View>
        </View>
    );
};

export default BankList;