import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, ScrollView, Switch } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import Button from '../../components/common/Button';
import { normalize } from '../../css/Success';



interface HoursAccuracyScreenProps {
    navigation: any;
}

const HoursAccuracyScreen: React.FC<HoursAccuracyScreenProps> = ({ navigation }) => {
    const [enablePIN, setEnablePIN] = useState(true);
    const [enableFaceID, setEnableFaceID] = useState(false);
    const handleNext = () => {
        navigation.navigate('SuccessfullyCreated');
    };

    const handleBack = () => {
        navigation.goBack();
    };

    const listItems = [
        'No personal conversation or private data are stored.',
        'Only work-related patterns are analyzed to confirm active hours.',
    ];

    return (
        <BaseScreen>
            <ScrollView>
                <Header navigation={navigation} onBackPress={handleBack} />

                <View style={styles.container}>
                    <View style={styles.contentContainer}>


                        <Heading
                            secondaryText={"ENHANCE YOUR WORK\NHOUR ACCURACY"}
                            type="secondary"
                        />

                        <ContentText
                            text="To ensure you get paid for every minute/hour worked, Stush Pay uses advanced verification methods to track your hours with maximum accuracy!"
                        />

                        <ContentText
                            text="These features are not mandatory but enabling them helps us track your hours more precisely, so you get paid for all the time you have worked."
                        />
                        <View style={{ padding: normalize(25) }}>
                            <View style={styles.toggleContainer}>
                                <Text style={styles.toggleText}>Work Behaviour Analysis</Text>
                                <Switch
                                    style={styles.switch}
                                    trackColor={{ false: '#333', true: '#32CD32' }}
                                    thumbColor={enablePIN ? '#f4f3f4' : '#f4f3f4'}
                                    ios_backgroundColor="#333"
                                    onValueChange={() => setEnablePIN(!enablePIN)}
                                    value={enablePIN}
                                />
                            </View>

                            <View style={styles.toggleContainer}>
                                <Text style={styles.toggleText}>Ambient Sound Verification</Text>
                                <Switch
                                    style={styles.switch}
                                    trackColor={{ false: '#333', true: '#32CD32' }}
                                    thumbColor={enableFaceID ? '#f4f3f4' : '#f4f3f4'}
                                    ios_backgroundColor="#333"
                                    onValueChange={() => setEnableFaceID(!enableFaceID)}
                                    value={enableFaceID}
                                />
                            </View>
                            <View style={styles.toggleContainer}>
                                <Text style={styles.toggleText}>Smart Equipment Interaction</Text>
                                <Switch
                                    style={styles.switch}
                                    trackColor={{ false: '#333', true: '#32CD32' }}
                                    thumbColor={enableFaceID ? '#f4f3f4' : '#f4f3f4'}
                                    ios_backgroundColor="#333"
                                    onValueChange={() => setEnableFaceID(!enableFaceID)}
                                    value={enableFaceID}
                                />
                            </View>
                            <View style={{ padding: normalize(25) }}>
                                <Text style={styles.PrivacyText}>YOUR PRIVACY MATTERS!</Text>
                                <FlatList
                                    data={listItems}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => (
                                        <View style={styles.listItem}>
                                            <Text style={styles.bullet}>•</Text>
                                            <Text style={styles.listItemText}>{item}</Text>
                                        </View>
                                    )}
                                    style={styles.unorderedList}
                                />
                                                                <Text style={styles.PrivacyText}>Learn More</Text>

                            </View>
                        </View>
                    </View>
 
                    <Button
                        title="Continue"
                        onPress={handleNext}
                        accessibilityLabel="Success Screen"
                    />
                </View>
            </ScrollView>
        </BaseScreen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 45,
    },
    PrivacyText: {
        fontSize: normalize(21),
        color: '#FFFFFF',
        fontWeight: 400,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: '55%',
        marginBottom: 15,
    },
    unorderedList: {
        marginVertical: 10,
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
    },
    readMoreText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        marginTop: 26,
    },
    spacer: {
        flex: 1,
    },
    agreeButton: {
        backgroundColor: '#3B82F6',
        borderRadius: 25,
        paddingVertical: 15,
    },
    agreeButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    passwordRequirements: {
        fontSize: normalize(14),
        color: '#AAAAAA',
        marginTop: normalize(0),
        marginBottom: normalize(2),
        lineHeight: normalize(18),
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: normalize(12),
    },
    toggleText: {
        fontSize: normalize(16),
        color: '#FFFFFF',
    },
    switch: {
        transform: [{ scale: 1.6 }],
    },
    bottonContainer: {
        width: '100%',
        marginTop: normalize(45),
    },
});

export default HoursAccuracyScreen;