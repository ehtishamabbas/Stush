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
    justifyContent: 'center',
    height: '25%', // Changed from 20% to 10%
    width: '100%',
    backgroundColor: 'rgba(9, 21, 34, 0.55)',
    borderRadius: normalize(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    position: 'absolute', // Added position absolute
    top: 0, // Position at the top of the screen
    paddingTop: Platform.OS === 'ios' ? normalize(30) : normalize(10),
  },
  logoImage: {
    width: normalize(140),
    height: normalize(45),
    resizeMode: 'contain',
  },
  contentContainer: {
    height: '75%', // Takes 70% of screen height
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: normalize(24),
    paddingTop: normalize(30),
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(30),
    marginTop: '50%', // Changed from 10% to 20% (10% logo + 10% gap)
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
    marginTop: normalize(30),
    marginBottom: normalize(20),
    alignItems: 'center',
  },
  walletImage: {
    width: normalize(150),
    height: normalize(120),
    resizeMode: 'contain',
  },
  resendText: {
    textAlign: 'center',
    fontSize: normalize(14),
    color: '#AAAAAA',
    marginTop: normalize(40),
    fontWeight: '700',
  },
  whatsNextContainer: {
    marginTop: normalize(100),
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
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
    marginTop: 'auto',
    marginBottom: normalize(30),
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
});

export default styles;