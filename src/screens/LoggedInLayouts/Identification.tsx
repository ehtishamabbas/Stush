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
import Heading from '../../components/ResueableComponents/Heading';
import ContentText from '../../components/ResueableComponents/ContenetText';
import NavigateButton from '../../components/common/NavigateButton';
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
                    <Heading
                        primaryText="GET PAID TODAY"
                        type="primary"
                    />

                    <Heading
                        secondaryText="VERIFY YOUR IDENTITY"
                        type="secondary"
                    />

                    <ContentText
                        text="To Keep your account secure and comply with the law, we need your Social Security Number (SSN). This is NOT A CREDIT CHECK. We use your SSN only to verify your identity. Your information is secure and encrypted.
Your Privacy and security is our top priority."
                    />

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
