import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from '../../css/WeDiffferent';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
const WeDifferent = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <ImageBackground
      source={require('../../../assets/images/backgrounds.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton}>
            <FontAwesome5 name="arrow-left" size={18} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.title}>WE ARE {"\n"}DIFFERENT</Text>
        </View>

        <Text style={styles.subtitle}>Why Stush Pay is Different?</Text>

        <View style={styles.featureBlock}>
          <View style={styles.featureTextWrapper}>
            <View style={styles.featureImageWrapper}>
              <Text style={styles.featureTitle}>NO{"\n"}INTEREST</Text>
              <Image
                source={require('../../../assets/images/interest.png')}
                style={styles.featureImage}
              />
            </View>

            <Text style={styles.featureDesc}>Pay only a flat service fee.</Text>

          </View>

        </View>


        <View style={styles.featureBlocks}>
          <View style={styles.featureTextWrapper}>
            <View style={styles.featureImageWrapper}>
              <Text style={styles.featureTitle}>NO{"\n"}CREDIT{"\n"}CHECKS</Text>
              <Image
                source={require('../../../assets/images/credit.png')}
                style={styles.featureImage}
              />
            </View>

            <Text style={styles.featureDesc}>Your credit score {"\n"} doesn’t matter</Text>

          </View>

        </View>

        <View style={styles.featureBlock}>
          <View style={styles.featureTextWrapper}>
            <View style={styles.featureImageWrapper}>
              <Text style={styles.featureTitle}>NO{"\n"}TRADITIONAL {"\n"}LOANS</Text>
              <Image
                source={require('../../../assets/images/loan.png')}
                style={styles.featureImage}
              />
            </View>

            <Text style={styles.featureDesc}>This is not a payday loan. {"\n"} You’re simply accessing {"\n"}your own money, sooner.</Text>

          </View>

        </View>

        <Text style={styles.footerText}>Your earnings. Your control.</Text>

        <TouchableOpacity style={styles.ctaButton}
          onPress={() => navigation.navigate('UserIdentification')}
        >
          <Text style={styles.ctaButtonText}>Get Started</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground >
  );
};

export default WeDifferent;
