import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
} from 'react-native';
import styles from '../../css/Dashboard.styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const HeaderPart = () => {

    return (
        <>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />
            <ImageBackground
                source={require('../../../assets/images/backgrounds.png')}
                style={styles.backgroundImage}
                resizeMode="cover">
                <SafeAreaView style={styles.safeArea}>
                    <View style={styles.container}>

                        <View style={styles.logoContainer}>
                            <Text style={styles.title}>   Dashboard</Text>
                        </View>

                        <View style={styles.contentContainer}>
                            <View style={styles.firstPart}>
                                <View style={styles.profile}>
                                    <View>
                                        <FontAwesome5
                                            name="user-alt"
                                            size={30}
                                            color="#FFFFFF"
                                        />
                                    </View>
                                    <View style={styles.profileName}>
                                        <Text style={styles.title}>Hello!  </Text>
                                        <Text style={styles.title}>JOHN DEO  </Text>

                                    </View>

                                </View>

                                <View style={styles.profile}>
                                    <View>
                                        <FontAwesome5
                                            name="sliders-h"
                                            size={30}
                                            color="#FFFFFF"
                                        />
                                    </View>

                                    <View>
                                        <FontAwesome5
                                            name="bell"
                                            size={30}
                                            color="#FFFFFF"
                                        />
                                    </View>

                                </View>
                            </View>
                            <View style={styles.firstPart}>
                                

                                <View style={styles.profile}>
                                    <View>
                                        <Text style={styles.title}>Logout</Text>
                                     </View>

                                  

                                </View>
                            </View>
                            


                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </>
    );
};

export default HeaderPart;