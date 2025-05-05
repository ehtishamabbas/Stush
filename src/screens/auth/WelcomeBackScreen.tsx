import React, { useEffect, useRef } from 'react';
import { Text, View, Image, ImageBackground, useWindowDimensions, Animated, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import Button from '../../components/common/Button';
import { RootStackParamList } from '../../navigation/AppNavigator';
type WelcomeUser = {
    navigation: StackNavigationProp<RootStackParamList>;
};
const WelcomeBackScreen: React.FC<WelcomeUser> = ({ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const rotateAnim = useRef(new Animated.Value(0)).current;
    const { width, height } = useWindowDimensions();
    const styles = require('../../css/welcomeuser').default(width, height);
    const handleNavigate = () => {
        navigation.navigate('Dashboard');
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <ImageBackground
            source={require('../../../assets/images/background.png')}
            style={styles.backgroundImage}
            resizeMode="cover">
            <SafeAreaView style={styles.containerr} >

                <View style={{ height: 110 }} />

                <SafeAreaView style={styles.container}>
                    <View style={styles.featureLisst}>
                        <Text style={styles.feature} >WELCOME BACK,{'\n '}JOHN DOE!</Text>
                        <Text style={styles.featureTexts} >We've updated your Stush wage line based on the latest information. </Text>
                    </View>
                    <Image
                        source={require('../../../assets/images/cryptowallet.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <Text style={{color:'#FFFFFF',fontSize:22,fontWeight:'500' }}>Good News...</Text>
                    <Text style={{color:'#FFFFFF',fontSize:18,fontWeight:'400' }}>You're eligible for funding!</Text>
                    <Button style={styles.button} title="Request" onPress={handleNavigate} accessibilityLabel="Welcome BackScreen" />

                 </SafeAreaView>
 
                <Button
                    title="Next"
                    onPress={handleNavigate}
                    accessibilityLabel="AlmostComplete Screen"
                />
            </SafeAreaView>

        </ImageBackground>
    );
};

export default WelcomeBackScreen;































