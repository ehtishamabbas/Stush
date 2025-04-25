import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import styles from '../../css/centerpart';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type CenterPartNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

const CenterPart = () => {
    const { width, height } = Dimensions.get('window');
    const style = styles(width, height);
    const navigation = useNavigation<CenterPartNavigationProp>();

    const handleNavigate = () => {
        navigation.navigate('WelcomeStushScreen');
    };

    return (
        <View style={style.centerContainer}>
            <TouchableOpacity style={style.circleContainer} onPress={handleNavigate}>
                <View style={style.circle}>
                    <Text style={style.circleText}>
                        GET{'\n'}STARTED
                    </Text>
                    <Text style={style.clickHereText}>
                        Click here
                    </Text>
                </View>

                <TouchableOpacity style={style.goButton}>
                    <Text style={style.goText}>GO</Text>
                </TouchableOpacity>
            </TouchableOpacity>

            <View style={style.bottomNavContainer}>
                <FontAwesome5
                    name="home"
                    size={24}
                    color="#FFFFFF"
                    style={style.activeNavIcon}
                />
                <FontAwesome5
                    name="copy"
                    size={24}
                    color="#1F75FE"
                />
                <FontAwesome5
                    name="question-circle"
                    size={24}
                    color="#FFFFFF"
                />
                <FontAwesome5
                    name="bell"
                    size={24}
                    color="#FFFFFF"
                />
            </View>

            <View style={style.getPaidContainer}>
                <Text style={style.getPaidTitle}>GET PAID ANYTIME</Text>

                <View style={style.learnMoreContainer}>
                    <Text style={style.howDoesItWorkText}>How does Stush Pay work?</Text>
                    <TouchableOpacity>
                        <Text style={style.learnMoreText}>Learn More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default CenterPart;
