import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import BaseScreen from '../../components/ResueableComponents/MainScreen';
import Header from '../../components/common/Header';
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import NavigateButton from '../../components/common/NavigateButton';
import { style } from '../../css/SharedStyle';

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

            <View style={style.container}>


                <View style={style.innerContainer}>

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
                    <View style={style.outercontainer}>

                        <View style={style.imageContainer}>
                            <Image
                                source={require('../../../assets/images/LastHours.png')}
                                resizeMode="cover"
                                style={style.image}
                            />
                            <Text style={style.imageText}>Your work hours will be tracked automatically.</Text>
                        </View>
                        <View style={style.imageContainer}>
                            <Image
                                source={require('../../../assets/images/LastHours.png')}
                                resizeMode="cover"
                                style={style.image}
                            />
                            <Text style={style.imageText}>Your  available balance will update automatically</Text>
                        </View>
                    </View>

                    <View>
                        <View style={style.imageContainerr}>
                            <Image
                                source={require('../../../assets/images/LastHours.png')}
                                resizeMode="cover"
                                style={style.image}
                            />
<Text style={style.imageText}>
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
export default VerifyHoursScreen;