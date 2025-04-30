import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import BaseScreen from '../../components/ResueableComponents/DisclouerMainScreen';
import Heading from '../../components/ResueableComponents/Heading';
import NavButton from '../../components/common/NavigateButton';
import styles from '../../css/Disclouser';
import LocalStyles from '../../css/LocalStyle';
import ContentText from '../../components/ResueableComponents/ContenetText';

const WorkDetailsScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const bulletItems = [
        {
            title: 'Pay Schedule',
            text: 'How often you get paid?',
            isBlueTitlel: true
        },
        {
            title: 'Pay Rate',
            text: 'Your estimated earnings per hour',
            isBlueTitlel: true
        },
        {
            title: 'Employment Status',
            text: 'Verification of active employment',
            isBlueTitlel: true
        }
    ];

    const handleAgree = () => {
        navigation.navigate('PaySheduleScreen');
    };

    const handleBack = () => {
        navigation.goBack();
    };

    const renderBulletPoints = () => {
        return bulletItems.map((item, index) => (
            <View key={index} style={LocalStyles.bulletRow}>

                <Image
                    source={item.title === 'Pay Schedule' ? require('../../../assets/images/pay.png')
                        : item.title === 'Pay Rate' ? require('../../../assets/images/ReceiveCash.png')
                            : item.title === 'Employment Status' ? require('../../../assets/images/Resume.png')
                                : require('../../../assets/images/pay.png')}
                    style={LocalStyles.bulletImage}
                    resizeMode="contain"
                />
                <View style={LocalStyles.textContainer}>
                    {item.title && (
                        <Text style={item.isBlueTitlel ? LocalStyles.blueTitlel : LocalStyles.whiteTitle}>
                            {item.title}
                        </Text>
                    )}
                    <Text style={LocalStyles.bulletText}>
                        {item.text}
                    </Text>
                </View>
            </View>
        ));
    };

    return (
        <BaseScreen onBackPress={handleBack} showBackButton={false} showLogo={true}>
            <ScrollView>
                <View style={LocalStyles.contentContainers}>
                    <Heading
                        secondaryText="CONFIRM YOUR WORK & PAYMENT DETAILS"
                        type="both"
                    />
                    <ContentText>
                        Based on the information provided by your <Text style={{ color: '#FFFFFF2', fontWeight: 800 }}>bank</Text> and <Text style={{ color: 'white', fontWeight: 'bold' }}>work software,</Text>we will now confirm the following on next screens.
                    </ContentText>
                    <View style={{ height: 10 }} />

                    <View style={LocalStyles.bulletContainer}>
                        {renderBulletPoints()}
                    </View>
                    <View style={{ height: 10 }} />
                    <ContentText>
                        <Text style={{ color: '#FFFFFF2', fontWeight: 800 }}>Note:</Text> These details <Text style={{ color: 'white', fontWeight: 'bold' }}>  might not be 100% accurate at first, but as you use Stush Pay, we will automatically adjust them </Text>for precision.
                    </ContentText>


                    <View style={{ height: 40 }} />

                    <NavButton
                        title="Next"
                        onPress={handleAgree}
                    />
                </View>
            </ScrollView>
        </BaseScreen>
    );
};



export default WorkDetailsScreen;