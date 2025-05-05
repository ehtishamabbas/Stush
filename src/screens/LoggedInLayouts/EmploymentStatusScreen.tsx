import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import NavigateButton from '../../components/common/NavigateButton';
import Input from '../../components/common/Input';
import ContentText from '../../components/ResueableComponents/ContenetText';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import style from '../../css/SharedStyle';
interface EmploymentStatusScreenProps {
    navigation: any;
}
const EmploymentStatusScreen: React.FC<EmploymentStatusScreenProps> = ({ navigation }) => {
    const [hours, setHours] = useState('');

    const handleNext = () => {
        navigation.navigate('VerifyHoursScreen');
    };
    const handleBack = () => {
        navigation.goBack();
    };
    return (
        <BaseScreen>
            <ScrollView>
                <Header navigation={navigation} onBackPress={handleBack} />

                <View style={style.container}>
                    <View style={style.subContainer}>
                        <Heading
                            secondaryText={"EMPLOYMENT STATUS\nCONFIRMATION"}
                            type="secondary"
                        />
                        <ContentText>
                            Please confirm your current employment status to continue using Stush's wage access services.
                        </ContentText>
                        <View style={{ padding: 25 }}>

                            <Input
                                label="Employer Name:"
                                placeholder="John Doe"
                                value={hours}
                                onChangeText={setHours}
                                keyboardType="default"
                                accessibilityLabel="Hours worked"
                                accessibilityHint="Enter hours worked"
                            />
                            <Input
                                label="Position:"
                                placeholder="Manager"
                                value={hours}
                                onChangeText={setHours}
                                keyboardType="default"
                                accessibilityLabel="Hours worked"
                                accessibilityHint="Enter hours worked"
                            />
                            <Input
                                label="Status:"
                                placeholder="Currently Employed"
                                value={hours}
                                onChangeText={setHours}
                                keyboardType="default"
                                accessibilityLabel="Hours worked"
                                accessibilityHint="Enter hours worked"
                            />
                        </View>
                        <ContentText>
                            <Text style={{ color: '#FFFFFF2', fontWeight: 800 }}>Legal Notice: "Acknowledgment of Truthfulness:</Text>By confirming your employment status, you declare that the information provided is accurate to the best of your knowledge. Please be aware that falsifying employment information is against the law and may result in penalties up to <Text style={{ color: 'white', fontWeight: 'bold' }}>$10,000</Text> or criminal prosecution.

                        </ContentText>
                        <View style={{ flexDirection: 'row', gap: 10, marginTop: 30, marginBottom: 66 }}>
                            <FontAwesome5
                                name="check-square"
                                size={17}
                                color="#FFFFFF"
                            />
                            <Text style={{ color: '#FFFFFF' }}>
                                I acknowledge that providing false information can lead to legal consequences.
                            </Text>
                        </View>
                        <View style={style.spacer} />
                        <NavigateButton
                            title="Continue"
                            onPress={handleNext}
                            accessibilityLabel="PlaidLink screen"
                        />
                        <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>
                            Your honesty is crucial for maintaining the integrity of the services we provide and ensuring compliance with legal standards.
                            Thank you for your cooperation.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </BaseScreen>
    );
};
export default EmploymentStatusScreen;