import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import HeaderPart from '../../components/DasboardComponents/HeaderPart';
import styles from '../../css/Dashboard.styles';

const Dashboard = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <HeaderPart />
             
        </SafeAreaView>
    );
};

export default Dashboard;