import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
// import HeaderPart from '../../components/DasboardComponents/HeaderPart';
import CenterPart from '../../components/DasboardComponents/CenterPart';
import styles from '../../css/Dashboard.styles';

const Dashboard = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            {/* <HeaderPart /> */}
             <CenterPart/>

             
        </SafeAreaView>
    );
};

export default Dashboard;