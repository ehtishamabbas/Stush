import React, { useEffect, useRef } from 'react';
import { Text, View, Image, ImageBackground, useWindowDimensions, Animated, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';


type WelcomeUser = {
  navigation?: NavigationProp<RootStackParamList>;
};

const WelcomeUser: React.FC<WelcomeUser> = ({ navigation }) => {
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
    navigation?.navigate('Dashboard');
};

  return (
    <ImageBackground
      source={require('../../../assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <SafeAreaView style={styles.containerr} >
        <Animated.View style={[styles.contentContainerr, { opacity: fadeAnim }]}>
          <Text style={styles.welcomeText}>Welcome, John</Text>

          <SafeAreaView style={styles.container }>
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
          </SafeAreaView>

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































 