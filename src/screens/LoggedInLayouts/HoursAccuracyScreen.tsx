import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, ScrollView, Switch } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import Button from '../../components/common/Button';
import { normalize } from '../../css/Success';
import style from '../../css/SharedStyle';

interface HoursAccuracyScreenProps {
    navigation: any;
}
const HoursAccuracyScreen: React.FC<HoursAccuracyScreenProps> = ({ navigation }) => {
    const [enablePIN, setEnablePIN] = useState(true);
    const [enableFaceID, setEnableFaceID] = useState(false);
    const handleNext = () => {
        navigation.navigate('WorkDetailsScreen');
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

                <View style={style.outerContainer}>
                    <View style={style.subcontainer}>
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
                            <View style={style.toggleContainer}>
                                <Text style={style.toggleText}>Work Behaviour Analysis</Text>
                                <Switch
                                    style={style.switch}
                                    trackColor={{ false: '#333', true: '#32CD32' }}
                                    thumbColor={enablePIN ? '#f4f3f4' : '#f4f3f4'}
                                    ios_backgroundColor="#333"
                                    onValueChange={() => setEnablePIN(!enablePIN)}
                                    value={enablePIN}
                                />
                            </View>

                            <View style={style.toggleContainer}>
                                <Text style={style.toggleText}>Ambient Sound Verification</Text>
                                <Switch
                                    style={style.switch}
                                    trackColor={{ false: '#333', true: '#32CD32' }}
                                    thumbColor={enableFaceID ? '#f4f3f4' : '#f4f3f4'}
                                    ios_backgroundColor="#333"
                                    onValueChange={() => setEnableFaceID(!enableFaceID)}
                                    value={enableFaceID}
                                />
                            </View>
                            <View style={style.toggleContainer}>
                                <Text style={style.toggleText}>Smart Equipment Interaction</Text>
                                <Switch
                                    style={style.switch}
                                    trackColor={{ false: '#333', true: '#32CD32' }}
                                    thumbColor={enableFaceID ? '#f4f3f4' : '#f4f3f4'}
                                    ios_backgroundColor="#333"
                                    onValueChange={() => setEnableFaceID(!enableFaceID)}
                                    value={enableFaceID}
                                />
                            </View>
                            <View style={{ padding: normalize(25) }}>
                                <Text style={style.PrivacyText}>YOUR PRIVACY MATTERS!</Text>
                                <FlatList
                                    data={listItems}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => (
                                        <View style={style.listItem}>
                                            <Text style={style.bullet}>•</Text>
                                            <Text style={style.listItemText}>{item}</Text>
                                        </View>
                                    )}
                                    style={style.unorderedList}
                                />
                                <Text style={style.PrivacyText}>Learn More</Text>

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

export default HoursAccuracyScreen;