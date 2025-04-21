import React, { useRef, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    Animated,
    Dimensions,

} from 'react-native';
import styles from '../../css/centerpart';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SocialIcons from '../../components/SocialMediaIcons';


const CenterPart = () => {


    const { width, height } = Dimensions.get('window');
    const style = styles(width, height);

    return (
        <>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />
            <ImageBackground
                source={require('../../../assets/images/backgrounds.png')}
                style={style.backgroundImage}
                resizeMode="cover">
                <SafeAreaView style={style.container}>
                    <View style={style.contentContainer}>
                        <View style={style.profile} >

                            <Text style={style.tagline}>
                                GET{'\n'}STARTED
                            </Text>
                            <Text style={style.taglinee}>
                                Click here
                            </Text>

                        </View>
                        <View style={style.socialIconsContainer} >

                            <View style={style.socialIcons}>
                                <FontAwesome5
                                    name={'home'}
                                    size={22}
                                    color={'#FFFFFF'}
                                    brand
                                />
                                <FontAwesome5
                                    name={'copy'}
                                    size={22}
                                    color={'#1F75FE'}
                                    brand
                                />

                            </View>


                            <View style={style.socialIcons}>

                                <FontAwesome5
                                    name={'question-circle'}
                                    size={22}
                                    color={'#FFFFFF'}
                                    brand
                                />
                                <FontAwesome5
                                    name={'bell'}
                                    size={22}
                                    color={'#FFFFFF'}
                                    brand
                                />
                            </View>

                        </View>
                        <View style={style.tagContainer}>
                            <Text style={style.tag} >GET PAID ANYTHING</Text>
                        </View>
                        <View style={style.textContainer}>
                            <Text style={style.tags} >How does Stush Pay work?</Text>
                            <Text style={style.tagss} >Learn More</Text>

                        </View>
                        <View style={style.OrderContainer}>
                            <Text style={style.tag} >stush pay benefits:</Text>
                        </View>
                    </View>



                </SafeAreaView>
            </ImageBackground>
        </>
    );
};

export default CenterPart;