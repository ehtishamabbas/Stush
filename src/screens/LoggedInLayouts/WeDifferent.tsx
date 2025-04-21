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

const Wedifferent= ({ }) => {
  return (
    <ImageBackground
      source={require('../../../assets/images/backgrounds.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backIcon}>
          <FontAwesome5 name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>WE ARE</Text>
        <Text style={styles.titleAlt}>DIFFERENT!</Text>

        <Text style={styles.subtitle}>Why Stush Pay is Different?</Text>

        <View style={styles.featureBlock}>
          <Image
            source={require('../../../assets/images/interest.png')}
            style={styles.featureImage}
          />
          <View style={styles.featureTextWrapper}>
            <Text style={styles.featureTitle}>NO{"\n"}INTEREST</Text>
            <Text style={styles.featureDesc}>Pay only a flat service fee.</Text>
          </View>
        </View>

        <View style={styles.featureBlock}>
          <Image
            source={require('../../../assets/images/credit.png')}
            style={styles.featureImage}
          />
          <View style={styles.featureTextWrapper}>
            <Text style={styles.featureTitle}>NO{"\n"}CREDIT{"\n"}CHECKS</Text>
            <Text style={styles.featureDesc}>Your credit score doesn’t matter</Text>
          </View>
        </View>

        <View style={styles.featureBlock}>
          <Image
            source={require('../../../assets/images/loan.png')}
            style={styles.featureImage}
          />
          <View style={styles.featureTextWrapper}>
            <Text style={styles.featureTitle}>NO{"\n"}TRADITIONAL{"\n"}LOANS</Text>
            <Text style={styles.featureDesc}>
              This is not a payday loan. You’re simply accessing your own money, sooner.
            </Text>
          </View>
        </View>

        <Text style={styles.footerText}>Your earnings. Your control.</Text>

        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Get Started</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default Wedifferent;
