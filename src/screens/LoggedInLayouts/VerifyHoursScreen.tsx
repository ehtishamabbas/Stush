import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import NavigateButton from '../../components/common/NavigateButton';

interface MyJobScreenProps {
    navigation: any;
}
const VerifyHoursScreen: React.FC<MyJobScreenProps> = ({ navigation }) => {
    const handleNext = () => {
        navigation.navigate('AlmostCompleteScreen');
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <BaseScreen>
            <Header navigation={navigation} onBackPress={handleBack} />

            <View style={styles.container}>


                <View style={styles.contentContainer}>

                    <Heading
                        secondaryText={"VERIFY\nPAST HOURS"}
                        type="secondary"
                    />
                    <ContentText>
                        Since this is your first time accessing Stush Pay.<Text style={{ fontWeight: 'bold' }}>. LETS CHECK TO SEE IF WE CAN PAY YOU FOR PREVIOUS WOR</Text> completed. If eligible, you’ll get instant access to your earnings!
                    </ContentText>
                    <View style={{ height: 30 }} />


                    <ContentText>
                        <Text style={{ fontWeight: '800', lineHeight: 20, letterSpacing: 1 }}>If We Can’t Verify, Don’t Worry!</Text>
                    </ContentText>
                    <View style={styles.innerContainer}>

                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../../../assets/images/LastHours.png')}
                                resizeMode="cover"
                                style={styles.image}
                            />
                            <Text style={styles.imageText}>Your work hours will be tracked automatically.</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../../../assets/images/LastHours.png')}
                                resizeMode="cover"
                                style={styles.image}
                            />
                            <Text style={styles.imageText}>Your  available balance will update automatically</Text>
                        </View>
                    </View>

                    <View>
                        <View style={styles.imageContainerr}>
                            <Image
                                source={require('../../../assets/images/LastHours.png')}
                                resizeMode="cover"
                                style={styles.image}
                            />
<Text style={styles.imageText}>
  Your available balance will update automatically {'\n '}
  <Text style={{ color: 'white', fontWeight: '900' }}>STUSH  PAY</Text>
</Text>
                        </View>
                    </View>



                    <NavigateButton
                        title="Check Previous Work Hours"
                        onPress={handleNext}
                        accessibilityLabel="AlmostComplete Screen"
                    />
                </View>
            </View>
        </BaseScreen>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: '50%',
        marginBottom: 40,
    },
    image: {
        width: 54,
        height: 54,
    },
    imageContainer: {
        flexDirection: 'column',
        gap: 10,
        color: '#FFFFFF',
    },
    imageText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 20,

    },
    innerContainer: {
        padding: 20,
        width: '50%',
        flexDirection: 'row',
        gap: 40,
    },
    imageContainerr: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        color: '#FFFFFF',
    },

});

export default VerifyHoursScreen;