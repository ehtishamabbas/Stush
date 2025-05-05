import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import NavigateButton from '../../components/common/NavigateButton';
import FormInput from '../../components/common/FormInput';
import { Text } from 'react-native';
import baseStyles from '../../css/BaseStyles';
import style from '../../css/SharedStyle';


interface MyJobScreenProps {
    navigation: any;
}
const EarnedPayoutScreen: React.FC<MyJobScreenProps> = ({ navigation }) => {
    const [selectedJob, setSelectedJob] = useState('');

    const handleNext = () => {
        navigation.navigate('PlaidLink');
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <BaseScreen>
            <Header navigation={navigation} onBackPress={handleBack} />

            <View style={style.container}>


                <View style={style.subContainer}>
                    <Heading
                        primaryText="GET PAID TODAY"
                        type="primary"
                    />

                    <Heading
                        secondaryText="Add Another Employer"
                        type="secondary"
                    />

                    <ContentText
                        text="If you have income from another employer, please add their details now. If you've added all your employers, simply select 'No More Employers to Add' to continue"
                    />

                    <View style={style.spacer} />

                    <NavigateButton
                        title="No More Employers to Add"
                        onPress={handleNext}
                        accessibilityLabel="No More Employers to Add screen"
                    />
                </View>
            </View>
        </BaseScreen>
    );
};

export default EarnedPayoutScreen;