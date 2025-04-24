import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

interface ReferralContentProps {
  title?: string;
  amount?: string;
  bulletPoints?: string[];
  customStyle?: object;
}

const ReferralContent: React.FC<ReferralContentProps> = ({
  title = 'REFER A FRIEND AND GET PAID',
  amount = '$7,500',
  bulletPoints = [
    'Earn Bonuses for Referrals',
    'Get $5 minimum for each referral'
  ],
  customStyle = {},
}) => {
  return (
    <View style={[styles.container, customStyle]}>
      <View style={styles.borderedContainer}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/images/Cashcoins.png')}
            style={styles.moneyImage}
            accessibilityLabel="Money Stack"
          />
        </View>

        <Text style={styles.earnText}>EARN UP TO</Text>
        <Text style={styles.amountText}>{amount}</Text>

        <View style={styles.bulletContainer}>
          {bulletPoints.map((point, index) => (
            <View key={index} style={styles.bulletPoint}>
              <Text style={styles.bulletText}><FontAwesome5Icon name="dot-circle" /> {point}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  borderedContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
    position: 'relative',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  moneyImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  earnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
  },
  amountText: {
    color: '#00FF47',
    fontSize: 42,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  bulletContainer: {
    width: '100%',
    marginTop: 15,
    paddingHorizontal: 20,
  },
  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
   },
  bulletText: {
    color: '#FFFFFF',
    fontSize: 14,
   },
});

export default ReferralContent;