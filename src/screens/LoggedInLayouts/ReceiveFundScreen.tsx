import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Screen from '../../components/common/Screen';
import Button from '../../components/common/Button';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import GlobalStyles from '../../css/GlobalStyles';
import Input from '../../components/common/Input';
 interface ReceiveFundScreenProps { 
    navigation: any;
}

const ReceiveFundScreen: React.FC<ReceiveFundScreenProps> = ({ navigation }) => {
    const handleEnableLocation = () => {
        navigation.navigate('UnlimitedAccess');
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <Screen navigation={navigation} onBackPress={handleBack}>
            <ScrollView>
            <View style={GlobalStyles.contentContainer}>
                <Heading
                    secondaryText={"WHERE TO RECEIVE\nFUNDS"}
                    type="secondary"
                />

                <ContentText>
                    Choose an account to deposit your funds. You can use an existing account or add a new one.        </ContentText>

                <View style={{ paddingHorizontal: 25, paddingTop: 25 }}>
                    <Input
                        label="Your linked accounts:"
                        placeholder="-- Select Bank --"
                        value={""}
                        keyboardType="default"
                        accessibilityLabel="Pay Period Ends On"
                        accessibilityHint="Enter Pay Period Ends On"
                    />
                    <Text style={{ paddingVertical: 25, color: "#FFFFFF", textAlign: "center", fontSize: (16) }}>
                        OR
                    </Text>
                    <Button
                        title="Add New Account"
                        onPress={handleEnableLocation}
                        variant="primary"
                    />

                </View>
                <View style={{ height: 55 }} />
                <Text style={{ paddingTop: 55, color: "#FFFFFF", textAlign: "center", fontSize: (14), lineHeight: (20) }}>
                    Make sure your account is active to receive your funds quickly.                     </Text>
                <Button
                    title="Continue"
                    onPress={handleEnableLocation}
                    variant="primary"
                />
                
            </View>
                 
            </ScrollView>
        </Screen>
    );
};

export default ReceiveFundScreen;