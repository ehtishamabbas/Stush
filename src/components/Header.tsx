import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import styles from '../css/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
;
const Header = ({ }) => {
    return (
        <>
            <View>
                <ScrollView contentContainerStyle={styles.container}>
                    <Header />

                    <TouchableOpacity
                        style={styles.backButton}
                        activeOpacity={0.8}
                        accessibilityLabel="Go back"
                        accessibilityRole="button">
                        <Image
                            source={require('../../../assets/images/back-arrow.png')}
                            style={styles.backIcon} />
                    </TouchableOpacity>
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../../../assets/images/stushlogo.png')}
                            style={styles.logoImage}
                            accessibilityLabel="Stush Logo"
                            resizeMode="contain" />
                    </View>


                </ScrollView>

            </View>
        </>

    );
};

export default Header;
