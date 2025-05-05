import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Screen from '../../components/common/Screen';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import GlobalStyles from '../../css/GlobalStyles';
import { style } from '../../css/SharedStyle';

interface EarnedIncomeScreenProps {
    navigation: any;
}

const EarnedIncomeScreen: React.FC<EarnedIncomeScreenProps> = ({ navigation }) => {
    const [hours, setHours] = useState('');
    const [directDeposit, setDirectDeposit] = useState<string | null>(null);

    const handleContinue = () => {
        navigation.navigate('EarnedSecond');
    };

    const handleBack = () => {
        navigation.goBack();
    };

    const setYesDeposit = () => {
        setDirectDeposit('yes');
    };

    const setNoDeposit = () => {
        setDirectDeposit('no');
    };

    return (
        <Screen navigation={navigation} onBackPress={handleBack}>
            <View style={GlobalStyles.contentContainer}>
                <Heading
                    secondaryText={"EARNED INCOME\nPAYOUT"}
                    type="secondary"
                />

                <ContentText>
                    Do you get direct deposit?
                </ContentText>

                <View style={style.depositButtonsRow}>
                    <Button
                        title="YES"
                        onPress={setYesDeposit}
                        style={[
                            style.depositButton,
                            directDeposit === 'yes' ? style.activeButton : style.inactiveButton
                        ]}
                    />
                    <View style={style.buttonSpacer} />
                    <Button
                        title="NO"
                        onPress={setNoDeposit}
                        style={[
                            style.depositButton,
                            directDeposit === 'no' ? style.activeButton : style.inactiveButton
                        ]}
                    />
                </View>

                <Input
                    label="How many hours have you worked for current Work Period?"
                    placeholder="XXX"
                    value={hours}
                    onChangeText={setHours}
                    keyboardType="numeric"
                    accessibilityLabel="Hours worked"
                    accessibilityHint="Enter hours worked"
                />

                <View style={GlobalStyles.spacer} />

                <Button
                    title="Continue"
                    onPress={handleContinue}
                    variant="primary"
                />
            </View>
        </Screen>
    );
};
 
export default EarnedIncomeScreen;