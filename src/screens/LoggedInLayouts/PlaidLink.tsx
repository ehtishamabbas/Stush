import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import NavigateButton from '../../components/common/NavigateButton';
import { Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




interface PlaidLinkScreenProps {
    navigation: any;
}
const PlaidLinkScreen: React.FC<PlaidLinkScreenProps> = ({ navigation }) => {
    const [selectedJob, setSelectedJob] = useState('');

    const handleNext = () => {
        navigation.navigate('SuccessfullyCreated');
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

    const handleAgree = () => {
        navigation.navigate('MyJob');
    };



    const renderBulletPoints = () => {
        return bulletItems.map((item, index) => (
            <View key={index} style={localStyles.bulletRow}>
                <FontAwesome5
                    name="check-circle"
                    size={22}
                    color={item.isBlueTitle ? '#FFFFFF' : '#FFFFFF'}
                 />
                <View style={localStyles.textContainer}>
                    {item.title && (
                        <Text style={item.isBlueTitle ? localStyles.blueTitle : localStyles.whiteTitle}>
                            {item.title}
                        </Text>
                    )}
                    <Text style={localStyles.bulletText}>
                        {item.text}
                    </Text>
                </View>
            </View>
        ));
    };

    return (
        <BaseScreen>
            <Header navigation={navigation} onBackPress={handleBack} />

            <View style={styles.container}>


                <View style={styles.contentContainer}>
                    <Heading
                        primaryText="THIS APPLICATION"
                        type="primary"
                    />

                    <Heading
                        secondaryText="USES PLAID TO LINK YOUR\nBANK"
                        type="secondary"
                    />

                    <ContentText
                        text="Now Lets Add Your Bank account(s) that you use to receive your pay"
                    />

                    <View style={localStyles.bulletContainer}>
                        {renderBulletPoints()}
                    </View>

                    <ContentText
                        text="By selecting “Continue” you agree to the 
                            Plaid End User Privacy Policy and SMS terms"
                    />
                    <NavigateButton
                        title="Next"
                        onPress={handleNext}
                        accessibilityLabel="SuccessfullyCreated"
                    />


                </View>
            </View>
        </BaseScreen>
    );
};

const localStyles = StyleSheet.create({
    bulletContainer: {
        marginTop: 30,
        marginBottom: 45,
    },
    bulletRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 15,
    },
    textContainer: {
        flex: 1,
        marginLeft: 15,
    },
    bulletText: {
        color: '#FFFFFF',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        padding: 5,
        borderRadius: 3,
        fontSize: 14,
        lineHeight: 20,
    },
    blueTitle: {
        color: '#1F7FFE',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    whiteTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    }
 
      
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: '50%',
        marginBottom: 40,
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
    },
});

export default PlaidLinkScreen;