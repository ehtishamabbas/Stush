import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import Input from '../../components/common/Input';
import ContentText from '../../components/ResueableComponents/ContenetText';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/common/Button';
import { style } from '../../css/SharedStyle';
interface PaySheduleScreenProps {
    navigation: any;
}

const PaySheduleScreen: React.FC<PaySheduleScreenProps> = ({ navigation }) => {
    const [hours, setHours] = useState('');

    const listItems = [
        'Stay Informed: Keep track of your pay schedule to manage your finances better.',
        'Accuracy Matters: If this information changes, please update your details to keep your access uninterrupted.',
    ];

    const handleNext = () => {
        navigation.navigate('PayRateScreen');
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <BaseScreen>
            <ScrollView>
                <Header navigation={navigation} onBackPress={handleBack} />

                <View style={style.container}>
                    <View style={style.innerContainer}>
                        <Heading
                            secondaryText={"PAY SCHEDULE\nCONFIRMATION"}
                            type="secondary"
                        />

                        <ContentText>
                            We’ve confirmed your pay schedule based on recent deposit activity. Here are the details:
                        </ContentText>

                        <View style={{ padding: 25 }}>
                            <Input
                                label="Pay Period Ends On:"
                                placeholder="12/05/2027"
                                value={hours}
                                onChangeText={setHours}
                                keyboardType="default"
                                accessibilityLabel="Pay Period Ends On"
                                accessibilityHint="Enter Pay Period Ends On"
                            />
                            <Input
                                label="Payment Frequency:"
                                placeholder="Bi-Weekly"
                                value={hours}
                                onChangeText={setHours}
                                keyboardType="default"
                                accessibilityLabel="Payment Frequency"
                                accessibilityHint="Enter Payment Frequency"
                            />
                            <Input
                                label="Next Pay Date:"
                                placeholder="13/05/2027"
                                value={hours}
                                onChangeText={setHours}
                                keyboardType="default"
                                accessibilityLabel="Next Pay Date"
                                accessibilityHint="Enter Next Pay Date"
                            />
                        </View>

                        <FlatList
                            data={listItems}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => {
                                const highlightPhrases = ['Stay Informed', 'Accuracy Matters'];
                                const match = highlightPhrases.find((phrase) =>
                                    item.startsWith(`${phrase}:`)
                                );

                                if (match) {
                                    const restText = item.slice(match.length + 1).trim();
                                    return (
                                        <View style={style.listItem}>
                                            <Text style={style.bullet}>•</Text>
                                            <Text style={style.listItemText}>
                                                <Text style={{ fontWeight: 'bold', color: 'white' }}>{match}</Text>
                                                {`: ${restText}`}
                                            </Text>
                                        </View>
                                    );
                                }

                                return (
                                    <View style={style.listItem}>
                                        <Text style={style.bullet}>•</Text>
                                        <Text style={style.listItemText}>{item}</Text>
                                    </View>
                                );
                            }}
                            style={style.unorderedList}
                        />
                        <View style={style.spacer} />

                        <Button
                            title="Confirm Schedule"
                            onPress={handleNext}
                            accessibilityLabel="PayShedule Screen"
                        />
                    </View>
                </View>
            </ScrollView>
        </BaseScreen>
    );
};
export default PaySheduleScreen;
