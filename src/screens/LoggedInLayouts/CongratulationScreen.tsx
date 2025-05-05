import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import Input from '../../components/common/Input';
import ContentText from '../../components/ResueableComponents/ContenetText';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/common/Button';
import styles from '../../css/Dashboard.styles';
import { style } from '../../css/SharedStyle';

interface CongratulationScreenProps {
    navigation: any;
}

const CongratulationScreen: React.FC<CongratulationScreenProps> = ({ navigation }) => {
    const [hours, setHours] = useState('');

    const listItems = [
        'Stay Informed: Keep track of your pay schedule to manage your finances better.',
        'Accuracy Matters: If this information changes, please update your details to keep your access uninterrupted.',
    ];

    const handleNext = () => {
        navigation.navigate('ReceiveFundScreen');
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <BaseScreen>
            <ScrollView>
                <Header navigation={navigation} onBackPress={handleBack} />

                <View style={styles.container}>
                    <View style={style.subContainer}>
                        <Heading
                            secondaryText="CONGRATULATIONS"
                            type="secondary"
                        />

                        <View style={styles.Container}>
                            <View style={styles.balanceInfo}>
                                <Text style={styles.balanceLabel}>Work Hours</Text>
                                <Text style={styles.balanceAmount}>00.00 HRS</Text>
                            </View>
                            <View style={styles.statusContainer}>
                                <Text style={styles.statusLabel}>Avg. Hourly Pay</Text>
                                <Text style={styles.statusValue}>$00.00/HR</Text>
                            </View>
                        </View>
                        <ContentText>
                            Based on the work , bank account history, and location services, you have been APPROVED to receive early wage access for previous work completed.                        </ContentText>

                        <View style={{ paddingTop: 25 }}>
                            <Input
                                label="Amount"
                                placeholder="$300"
                                value={hours}
                                onChangeText={setHours}
                                keyboardType="default"
                                accessibilityLabel="Pay Period Ends On"
                                accessibilityHint="Enter Pay Period Ends On"
                            />
                            <Input
                                label="Select Your Amount"
                                placeholder="$200"
                                value={hours}
                                onChangeText={setHours}
                                keyboardType="default"
                                accessibilityLabel="Payment Frequency"
                                accessibilityHint="Enter Payment Frequency"
                            />

                        </View>



                        <View style={style.spacer} />

                        <Button
                            title="Confirm Schedule"
                            onPress={handleNext}
                            accessibilityLabel="ReceiveFund Screen"
                        />
                    </View>
                </View>
            </ScrollView>
        </BaseScreen>
    );
};
 
export default CongratulationScreen;
