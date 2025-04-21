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
                                        <Text style={styles.titel}>JOHN DEO  </Text>
                                    </View>
                                </View>

                                <View style={styles.profile}>
                                    <View>
                                        <FontAwesome5
                                            name="sliders-h"
                                            size={25}
                                            color="#FFFFFF"
                                        />
                                    </View>

                                    <View>
                                        <FontAwesome5
                                            name="bell"
                                            size={25}
                                            color="#FFFFFF"
                                        />
                                    </View>

                                </View>
                            </View>
                            <View style={styles.firstPart}>


                                <View style={styles.profile}>
                                    <View>
                                        <Image
                                            source={require('../../../assets/images/coins.png')}
                                            style={styles.coinimage}
                                        />
                                    </View>

                                </View>
                            </View>
                            <View style={styles.firstPart}>


                                <View style={styles.profile}>

                                    <View style={styles.profileName}>
                                        <Text style={styles.titel}>Stush Wage Balance:  </Text>
                                        <Text style={styles.balance}>$00.00 </Text>
                                    </View>
                                </View>
                                <View style={styles.secondPart}>
                                    <Text style={styles.titel}>Status:  </Text>
                                    <Text style={styles.active}>
                                        Active </Text>
                                </View>
                            </View>


                            <View style={styles.firstParts}>


                                <View style={styles.profile}>

                                    <View style={styles.profileName}>
                                        <Text style={styles.titel}>Current Pay Period:  </Text>
                                        <Text style={styles.balancee}>TBD </Text>
                                    </View>
                                </View>
                                <View style={styles.secondPart}>
                                    <Text style={styles.titel}>Work Hours: </Text>
                                    <Text style={styles.balancee}>
                                        00:00 HRS </Text>
                                    <Text style={styles.titel}>@ $20.00/hr  </Text>

                                </View>
                            </View>

                            <View style={styles.referearn}>


                                <View style={styles.refer}>
                                    <Image
                                        source={require('../../../assets/images/sendmoney.png')}
                                        style={styles.sendmoney}
                                    />

                                    <View style={styles.profileName}>
                                        <Text style={styles.earn}>Refer & Earn $7,500  </Text>
                                    </View>
                                </View>

                            </View>

                            {/* <CenterPart/> */}




                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </>
    );
};

export default HeaderPart;