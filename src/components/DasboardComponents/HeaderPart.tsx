import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    StatusBar,
    SafeAreaView,
} from 'react-native';
import styles from '../../css/Dashboard.styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HeaderPart = () => {
    return (
        <View  >
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />

            <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>DASHBOARD</Text>
            </View>
            <View style={styles.headerContainer}>
                <View style={styles.userInfoContainer}>
                    <View style={styles.userInfo}>
                        <View style={styles.userIconContainer}>
                            <FontAwesome5
                                name="user-alt"
                                size={24}
                                color="#FFFFFF"
                            />
                        </View>
                        <View style={styles.userNameContainer}>
                            <Text style={styles.helloText}>Hello!</Text>
                            <Text style={styles.userName}>JOHN DOE</Text>
                        </View>
                    </View>

                    <View style={styles.headerIcons}>
                        <FontAwesome5
                            name="sliders-h"
                            size={22}
                            color="#FFFFFF"
                            style={styles.iconSpacing}
                        />
                        <FontAwesome5
                            name="bell"
                            size={13}
                            color="#FFFFFF"
                            style={styles.iconSpacings}

                        />
                    </View>
                </View>

                <View style={styles.coinImageContainer}>
                    <Image
                        source={require('../../../assets/images/coins.png')}
                        style={styles.coinImage}
                    />
                </View>

                <View style={styles.balanceContainer}>
                    <View style={styles.balanceInfo}>
                        <Text style={styles.balanceLabel}>Stush Wage Balance:</Text>
                        <Text style={styles.balanceAmount}>$00.00</Text>
                    </View>
                    <View style={styles.statusContainer}>
                        <Text style={styles.statusLabel}>Status:</Text>
                        <Text style={styles.statusValue}>Active</Text>
                    </View>
                </View>

                <View style={styles.payPeriodContainer}>
                    <View style={styles.periodInfo}>
                        <Text style={styles.periodLabel}>Current Pay Period:</Text>
                        <Text style={styles.periodValue}>TBD</Text>
                    </View>
                    <View style={styles.workHoursContainer}>
                        <Text style={styles.hoursLabel}>Work Hours:</Text>
                        <Text style={styles.hoursValue}>00:00 HRS</Text>
                        <Text style={styles.rateValue}>@ $20.00/hr</Text>
                    </View>
                </View>

                <View style={styles.referContainer}>
                    <Image
                        source={require('../../../assets/images/sendmoney.png')}
                        style={styles.referIcon}
                    />
                    <Text style={styles.referText}>Refer & Earn $7,500</Text>
                </View>

            </View>


        </View>
    );
};

export default HeaderPart;