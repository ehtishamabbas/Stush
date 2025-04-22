import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import styles from '../../css/welcomestush';

const WelcomeStush = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <ImageBackground
      source={require('../../../assets/images/backgrounds.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton}>
            <FontAwesome5 name="arrow-left" size={18} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.title}>WELCOME TO{"\n"}STUSH PAY</Text>
        </View>

        <Text style={styles.subtitle}>Your Money, When you need it.</Text>
        <Text style={styles.info}>
          This is an Earned Income Payout Service{"\n"}- NOT a loan!
        </Text>

        <View style={styles.bulletContainer}>

          <View style={styles.bulletRow}>
            <FontAwesome5 name="check-circle" size={18} color="#fff" />
            <Text style={styles.bulletText}>
              We verify your completed work and{"\n"}pay you instantly.
            </Text>
          </View>
          <View style={styles.bulletRow}>
            <FontAwesome5 name="check-circle" size={18} color="#fff" />
            <Text style={styles.bulletText}>
              No waiting for payday – Get access to{"\n"}the money you’ve already earned.
            </Text>
          </View>
          <View style={styles.bulletRow}>
            <FontAwesome5 name="check-circle" size={18} color="#fff" />
            <Text style={styles.bulletText}>
              Simple, transparent fees – No{"\n"}surprises, just fair access to your{"\n"}money.
            </Text>
          </View>
        </View>



        <Text style={styles.footerText}>
          YOU WORKED FOR IT.{"\n"}NOW GET PAID FASTER.
        </Text>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('Wedifferent')}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WelcomeStush;
