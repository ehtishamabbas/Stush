import {StyleSheet, Dimensions, Platform, StatusBar} from 'react-native';

const {width, height} = Dimensions.get('window');

const baseWidth = 414;
const baseHeight = 896;

const widthScale = width / baseWidth;
const heightScale = height / baseHeight;
const scale = Math.min(widthScale, heightScale);

const normalize = (size: number) => Math.round(size * scale);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#091522',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 60 : 40, 
    width: '100%',
  },
  logoImage: {
    width: 140,
    height: 45,
    resizeMode: 'contain',
  },
  contentContainer: {
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor:
      'linear-gradient(90deg, rgba(153, 153, 153, 0.2) 0%, rgba(255, 255, 255, 0.2) 49%, rgba(153, 153, 153, 0) 100%)',
    backgroundColor: 'rgba(1, 5, 10, 0.16)',
  },
  contentContainerr: {
    top: '10%',
    width: '100%',
    height: '80%',
    alignItems: 'center',
    paddingHorizontal: normalize(24),
    paddingTop: normalize(40),
    backgroundColor: 'rgba(1, 1, 19, 0.16)',
  },

  heading: {
    fontSize: normalize(28),
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: normalize(20),
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  subText: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: normalize(14),
    color: '#FFFFFF',
    lineHeight: normalize(20),
    marginTop: normalize(10),
    marginHorizontal: normalize(20),
  },
  imageContainer: {
    marginTop: normalize(40),
    marginBottom: normalize(20),
    alignItems: 'center',
  },
  walletImage: {
    width: normalize(150),
    height: normalize(120),
    resizeMode: 'contain',
  },
  imageContainerr: {
    marginTop: normalize(40),
    marginBottom: normalize(20),
    alignItems: 'center',
  },
  walletImagee: {
    width: normalize(290),
    height: normalize(220),
    resizeMode: 'contain',
  },
  resendText: {
    textAlign: 'center',
    fontSize: normalize(12),
    color: '#AAAAAA',
    marginTop: normalize(10),
    fontWeight: '700',
  },
  whatsNextContainer: {
    marginTop: '42%',
    width: '100%',
    alignItems: 'center',
  },
  whatsNextHeading: {
    fontSize: normalize(16),
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: normalize(8),
    lineHeight: normalize(24),
  },
  credentialsText: {
    fontSize: normalize(16),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingHorizontal: normalize(20),
    marginBottom: normalize(80),
  },
  nextButton: {
    backgroundColor: '#1F75FE',
    borderRadius: normalize(25),
    height: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: normalize(16),
    fontWeight: '600',
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 40,
    left: 16,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 1)',
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  title: {
    fontSize: normalize(16),
    fontWeight: '600',
    color: '#FFFFFF', // White color to ensure visibility
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: normalize(40),
    textAlign: 'center',
  },
  moneyImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: normalize(30),
  },
  moneyImage: {
    width: normalize(150),
    height: normalize(100),
    resizeMode: 'contain',
  },
  earnText: {
    fontSize: normalize(14),
    color: '#FFFFFF', // White color to ensure visibility
    marginBottom: normalize(10),
    textAlign: 'center',
  },
  amountText: {
    fontSize: normalize(36),
    fontWeight: 'bold',
    color: '#00FF87', // Bright green
    textAlign: 'center',
    marginBottom: normalize(40),
  },
  bulletContainer: {
    alignSelf: 'flex-start',
    paddingLeft: normalize(10),
    marginBottom: normalize(20),
    width: '100%',
  },
  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: normalize(10),
  },
  bulletText: {
    color: '#FF0000', // Red color as requested
    fontSize: normalize(14),
    flex: 1,
    marginLeft: normalize(10), // Add left margin to simulate bullet point indentation
  },
});

export default styles;
