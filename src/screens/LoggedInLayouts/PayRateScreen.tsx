import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import Input from '../../components/common/Input';
import ContentText from '../../components/ResueableComponents/ContenetText';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/common/Button';

interface PayRateScreenProps {
    navigation: any;
}

const PayRateScreen: React.FC<PayRateScreenProps> = ({ navigation }) => {
    const [hours, setHours] = useState('');

    const listItems = [
        {
            title: 'Understand Your Access:',
            items: ['Your Stush wage access is directly linked to the hourly rate confirmed here.']
        },
        {
            title: 'Accuracy Ensures Proper Access:',
            items: ['Accurate information is essential for correctly calculating the funds you can access.']
        }
    ];
    const handleNext = () => {
        navigation.navigate('EmploymentStatusScreen');
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
                            secondaryText={"HOURLY PAY RATE\nCONFIRMATION"}
                            type="secondary"
                        />

                        <ContentText>
                            Based on the information you provided; we have determined your hourly pay rate as follows. This rate will be used to calculate your Stush wage access.                        </ContentText>

                        <View style={{ padding: 25 }}>
                            <Input
                                label="Hourly Rate:"
                                placeholder="$20.00/hr"
                                value={hours}
                                onChangeText={setHours}
                                keyboardType="default"
                                accessibilityLabel="Hourly Rate"
                                accessibilityHint="Enter Hourly Rate"
                            />

                            <FlatList
                                data={listItems}
                                renderItem={({ item }) => (
                                    <View style={styles.listSection}>
                                        <Text style={styles.sectionTitle}>{item.title}</Text>
                                        {item.items.map((itemText, itemIndex) => (
                                            <View key={itemIndex} style={styles.listItem}>
                                                <Text style={styles.bullet}>•</Text>
                                                <Text style={styles.listItemText}>{itemText}</Text>
                                            </View>
                                        ))}
                                    </View>
                                )}
                                style={styles.unorderedList}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>

                        <ContentText>
                           <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Note:</Text> These details might not be 100% accurate at first, but as you use Stush Pay, we will automatically adjust them for precision. </ContentText>



                        <View style={styles.spacer} />

                        <Button
                            title="Confirm Rate"
                            onPress={handleNext}
                            accessibilityLabel="EmploymentStatusScreen Screen"
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
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 10
    },
    listSection: {
        marginBottom: 15,
    },
    listSectionText: {
        color: '#FFFFFF',
        fontSize: 14,
        flex: 1,
        flexWrap: 'wrap',
    },
});

export default  PayRateScreen;