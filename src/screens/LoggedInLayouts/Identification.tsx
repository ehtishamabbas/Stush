import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import styles from '../../css/UserIdentification.';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
const UserIdentification = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <ImageBackground
            source={require('../../../assets/images/backgrounds.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                <TouchableOpacity
                    style={styles.backButton}
                    activeOpacity={0.8}
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
                        <Text style={styles.description}>To Keep your account secure and comply with the law, we need your Social Security Number (SSN). This is  <Text style={{ fontWeight: 'bold', color: '#1E8BF8' }}>NOT A CREDIT CHECK</Text> . We use your SSN only to verify your identity. Your information is secure and encrypted.
                            Your Privacy and security is our top priority.</Text>


                    </View>

                    <View style={styles.subcontainer}>
                        <Text style={styles.titlel}>Social Security Number</Text>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder=" Number"
                                placeholderTextColor="#999999"
                                secureTextEntry
                            />
                            <View style={styles.inputpart}>
                                <FontAwesome5
                                    name="check-square"
                                    size={24}
                                    color="#FFFFFF"
                                />
                                <Text style={styles.titlell}>Authorization for the Social Security Administration to Disclose Your Social Security Number Verification</Text>

                            </View>
                        </View>

                        <View style={styles.loremdescriptions}>
                            <Text style={styles.loremdescription}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.
                            </Text>
                            <Text style={styles.loremdescription}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.Lorem ipsum dolor sit amet, consectetur adipiscing elit.                           </Text>

                        </View>
                        <TouchableOpacity style={styles.ctaButton}
                            onPress={() => navigation.navigate('Disclouser')}
                        >

                            <Text style={styles.ctaButtonText}> Next</Text>
                        </TouchableOpacity>

                    </View>


                </View>


            </ScrollView>
        </ImageBackground >
    );
};

export default UserIdentification;
