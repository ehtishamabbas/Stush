import React, { useEffect, useRef } from 'react';
import { Text, View, Image, ImageBackground, useWindowDimensions, Animated, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

type WelcomeUser = {
    navigation: StackNavigationProp<any>;
};
const AlmostCompleteScreen: React.FC<WelcomeUser> = ({ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const rotateAnim = useRef(new Animated.Value(0)).current;

    const { width, height } = useWindowDimensions();
    const styles = require('../../css/welcomeuser').default(width, height);
    const dispatch = useDispatch();

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 15000,
            useNativeDriver: true,
        }).start();
    }, [navigation, dispatch, fadeAnim, rotateAnim]);

    const handleNavigate = () => {
        navigation.navigate('CongratulationScreen');
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
                <Header navigation={navigation} onBackPress={handleBack} />

                <Animated.View style={[styles.contentContainerr, { opacity: fadeAnim }]}>
                    <View style={{ height: 110 }} />
 
                    <SafeAreaView style={styles.container}>
 
                        <Pressable onPress={handleNavigate} >
                            <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]} >
                                <View style={styles.circularTrack} />

                                <Animated.View
                                    style={[
                                        styles.circularProgress,
                                        { transform: [{ rotate: rotateAnim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] }) }] },
                                    ]}
                                />

                                <Image
                                    source={require('../../../assets/images/stush-logo.png')}
                                    style={styles.logoImage}
                                    resizeMode="contain"
                                />
                            </Animated.View>
                        </Pressable>

                        <View style={styles.featureLisst}>
                            <Text style={styles.feature} >WE ARE ALMOST{'\n '}COMPLETE</Text>
                            <Text style={styles.featureTexts} >We are currently checking your work software activity and location data to see if we can retrieve  any previous  work hours</Text>
                        </View>


                    </SafeAreaView>

                </Animated.View>
                <Button
                    title="Next"
                    onPress={handleNavigate}
                    accessibilityLabel="AlmostComplete Screen"


                />
            </SafeAreaView>

        </ImageBackground>
    );
};

export default AlmostCompleteScreen;































