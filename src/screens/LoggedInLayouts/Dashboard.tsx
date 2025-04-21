import React from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, ImageBackground } from 'react-native';
import HeaderPart from '../../components/DasboardComponents/HeaderPart';
import CenterPart from '../../components/DasboardComponents/CenterPart';
import BottomPart from '../../components/DasboardComponents/FooterContent';
import styles from '../../css/Dashboard.styles';

const Dashboard = () => {
    return (
        <ImageBackground
            source={require('../../../assets/images/backgrounds.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <HeaderPart />
                    <CenterPart />
                    <BottomPart />
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default Dashboard;