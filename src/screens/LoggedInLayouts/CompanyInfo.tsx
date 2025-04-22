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
const MyJob = () => {
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
                        <Text style={styles.title}>MY JOB</Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. </Text>


                    </View>

                    <View style={styles.subcontainer}>
                        <Text style={styles.titlel}>Your Employement</Text>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder=" Number"
                                placeholderTextColor="#999999"
                                secureTextEntry
                            />

                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder=" Number"
                                placeholderTextColor="#999999"
                                secureTextEntry
                            />

                        </View>

                        <TouchableOpacity style={styles.ctaButton}
                            onPress={() => navigation.navigate('InfoAbouCompany')}
                        >

                            <Text style={styles.ctaButtonText}> Next</Text>
                        </TouchableOpacity>

                    </View>


                </View>


            </ScrollView>
        </ImageBackground >
    );
};

export default MyJob;
