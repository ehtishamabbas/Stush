import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
    Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import styles from '../../css/Disclouser';

const Disclouser = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <ImageBackground
            source={require('../../../assets/images/backgrounds.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    style={styles.backButton}
                    activeOpacity={0.8}
                    onPress={() => navigation.goBack()}
                    accessibilityLabel="Go back"
                    accessibilityRole="button">
                    <Image
                        source={require('../../../assets/images/back-arrow.png')}
                        style={styles.backIcon}
                    />
                </TouchableOpacity>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../../assets/images/stushlogo.png')}
                        style={styles.logoImage}
                        accessibilityLabel="Stush Logo"
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.formcontainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>GET PAID TODAY</Text>
                        <Text style={styles.title}>DISCLOSURES</Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. </Text>

                        <View style={styles.bulletContainer}>

                            <View style={styles.bulletRow}>
                                <FontAwesome5 name="check-circle" size={18} color="#fff" />
                                <Text style={styles.bulletText}>
                                    Lorem Ipsum is simply dummy text of  {"\n"} the printing and
                                </Text>
                            </View>
                            <View style={styles.bulletRow}>
                                <FontAwesome5 name="check-circle" size={18} color="#fff" />
                                <Text style={styles.bulletText}>
                                    Lorem Ipsum is simply dummy text of {"\n"}the printing and
                                </Text>
                            </View>
                            <View style={styles.bulletRow}>
                                <FontAwesome5 name="check-circle" size={18} color="#fff" />
                                <Text style={styles.bulletText}>
                                    Lorem Ipsum is simply dummy text of{"\n"}the printing and
                                </Text>
                            </View>
                        </View>




                    </View>
                </View>



                <TouchableOpacity
                    style={styles.continueButton}
                    onPress={() => navigation.navigate('MyJob')}
                >
                    <Text style={styles.continueText}>I Agree</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default Disclouser;
