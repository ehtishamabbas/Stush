import React, { useEffect, useRef } from 'react';
import { Text, View, Image, ImageBackground, useWindowDimensions, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type WelcomeUser = {
    navigation: StackNavigationProp<any>;
};

const WelcomeUser: React.FC<WelcomeUser> = ({ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const rotateAnim = useRef(new Animated.Value(0)).current;

    const { width, height } = useWindowDimensions();
    // Dynamically import styles with current dimensions
    const styles = require('../../css/welcomeuser').default(width, height);
    const dispatch = useDispatch();

    useEffect(() => {
        // Fade-in animation
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        // Rotation animation for the circle
        Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 15000,
            useNativeDriver: true,
        }).start();
    }, [navigation, dispatch, fadeAnim, rotateAnim]);

    // Calculate rotation for the circle
    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return (
        <ImageBackground
            source={require('../../../assets/images/background.png')}
            style={styles.backgroundImage}
            resizeMode="cover">
            <SafeAreaView style={styles.containerr}>
                <Animated.View style={[styles.contentContainerr, { opacity: fadeAnim }]}>
                    <Text style={styles.welcomeText}>Welcome, John</Text>

                    <SafeAreaView style={styles.container}>
                        <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
                            {/* Circular track (static) */}
                            <View style={styles.circularTrack} />
                            
                            {/* Animated circular progress */}
                            <Animated.View 
                                style={[
                                    styles.circularProgress, 
                                    { transform: [{ rotateZ: spin }] }
                                ]} 
                            />
                            
                            {/* Logo in center */}
                            <Text style={{
                                color: 'white',
                                fontSize: Math.min(width, height) * 0.12,
                                fontWeight: '600',
                            }}>
                                Slush
                            </Text>
                        </Animated.View>
                    </SafeAreaView>

                    {/* Feature list */}
                    <View style={styles.featureList}>
                        <View style={styles.featureItem}>
                            <FontAwesome5
                                name="chevron-right"
                                size={15}
                                color="#00D0FF"
                            />
                            <Text style={styles.featureText}>Instant Wage Access</Text>
                        </View>

                        <View style={styles.featureItem}>
                            <FontAwesome5
                                name="chevron-right"
                                size={15}
                                color="#00D0FF"
                            />
                            <Text style={styles.featureText}>Global Money Transfers</Text>
                        </View>

                        <View style={styles.featureItem}>
                            <FontAwesome5
                                name="chevron-right"
                                size={15}
                                color="#00D0FF"
                            />
                            <Text style={styles.featureText}>Earn $7,500 Referral Rewards</Text>
                        </View>
                    </View>
                </Animated.View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default WelcomeUser;