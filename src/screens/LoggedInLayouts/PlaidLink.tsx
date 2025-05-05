import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import NavigateButton from '../../components/common/NavigateButton';
import { Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GlobalStyles from '../../css/GlobalStyles';
import style from '../../css/SharedStyle';




interface PlaidLinkScreenProps {
    navigation: any;
}
const PlaidLinkScreen: React.FC<PlaidLinkScreenProps> = ({ navigation }) => {
    const [selectedJob, setSelectedJob] = useState('');

    const handleNext = () => {
        navigation.navigate('SelectBankScreen');
    };

    const handleBack = () => {
        navigation.goBack();
    };

    const bulletItems = [
        {
            title: 'Secure',
            text: 'Transfer of your bank date is encryoted end-to-end',
            isBlueTitle: true
        },
        {
            title: 'Private',
            text: 'This application will never be able to access your credentials',
            isBlueTitle: true
        },

    ];





    const renderBulletPoints = () => {
        return bulletItems.map((item, index) => (
            <View key={index} style={style.bulletRow}>
                <View style={[
                    GlobalStyles.checkbox,
                    { backgroundColor: 'white' }
                ]}>
                    {item.isBlueTitle && (
                        <FontAwesome5
                            name="check"
                            size={11}
                            color="#1F75FE"
                        />
                    )}
                </View>

                <View style={style.textContainer}>
                    {item.title && (
                        <Text style={item.isBlueTitle ? style.blueTitle : style.whiteTitle}>
                            {item.title}
                        </Text>
                    )}
                    <Text style={style.bulletText}>
                        {item.text}
                    </Text>
                </View>
            </View>
        ));
    };

    return (
        <BaseScreen>
            <Header navigation={navigation} onBackPress={handleBack} />

            <View style={style.container}>


                <View style={style.innerContainer}>
                    <Heading
                        primaryText="THIS APPLICATION"
                        type="primary"
                    />

                    <Heading
                        secondaryText={"USES PLAID TO LINK YOUR\nBANK"}

                        type="secondary"
                    />

                    <ContentText
                        text="Now Lets Add Your Bank account(s) that you use to receive your pay"
                    />

                    <View style={style.bulletContainer}>
                        {renderBulletPoints()}
                    </View>

                    <ContentText
                        text="By selecting “Continue” you agree to the 
                            Plaid End User Privacy Policy and SMS terms"
                    />
                    <NavigateButton
                        title="Next"
                        onPress={handleNext}
                        accessibilityLabel="Next Screen"
                    />


                </View>
            </View>
        </BaseScreen>
    );
};
 
export default PlaidLinkScreen;