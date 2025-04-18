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
    position: 'absolute',
    top: '20%',
    width: '100%',
    height: '80%',
     alignItems: 'center',
    paddingHorizontal: normalize(24),
    paddingTop: normalize(40),
    shadowColor: 'rgba(32, 90, 170, 0.85)',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
    marginTop: 'auto',
    marginBottom: normalize(60),
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
