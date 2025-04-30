import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import Input from '../../components/common/Input';
import ContentText from '../../components/ResueableComponents/ContenetText';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/common/Button';

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

                <View style={styles.container}>
                    <View style={styles.contentContainer}>
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
                                        <View style={styles.listItem}>
                                            <Text style={styles.bullet}>•</Text>
                                            <Text style={styles.listItemText}>
                                                <Text style={{ fontWeight: 'bold', color: 'white' }}>{match}</Text>
                                                {`: ${restText}`}
                                            </Text>
                                        </View>
                                    );
                                }

                                return (
                                    <View style={styles.listItem}>
                                        <Text style={styles.bullet}>•</Text>
                                        <Text style={styles.listItemText}>{item}</Text>
                                    </View>
                                );
                            }}
                            style={styles.unorderedList}
                        />

                        <View style={styles.spacer} />

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 30,
        marginTop: '50%',
        marginBottom: 40,
    },
    unorderedList: {
        marginVertical: 10,
    },
    inputContainer: {
        marginTop: 20,
    },
    labelText: {
        fontSize: 14,
        marginBottom: 5,
        color: '#FFFFFF',
        paddingBottom: 10,
    },
    spacer: {
        flex: 1,
        marginBottom: 20,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 5,
    },
    bullet: {
        color: '#FFFFFF',
        fontSize: 19,
        marginRight: 8,
    },
    listItemText: {
        color: '#FFFFFF',
        fontSize: 14,
        flex: 1,
        flexWrap: 'wrap',
    },
});

export default PaySheduleScreen;
