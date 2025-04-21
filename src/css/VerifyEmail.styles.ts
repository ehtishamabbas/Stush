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
    marginTop: Platform.OS === 'ios' ? 50 : 40,
    width: '100%',
  },
  logoImage: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: normalize(30),
    paddingTop: normalize(10),
  },
  heading: {
    fontSize: normalize(24),
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: normalize(40),
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  subText: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: normalize(14),
    color: '#FFFFFF',
    lineHeight: normalize(22),
    marginTop: normalize(15),
    marginHorizontal: normalize(20),
  },
  imageContainer: {
    marginTop: normalize(50),
    marginBottom: normalize(20),
    alignItems: 'center',
  },
  walletImage: {
    width: normalize(120),
    height: normalize(100),
    resizeMode: 'contain',
  },
  resendText: {
    textAlign: 'center',
    fontSize: normalize(12),
    color: '#AAAAAA',
    marginTop: normalize(15),
  },
  whatsNextContainer: {
    marginTop: 'auto',
    width: '100%',
    alignItems: 'center',
    marginBottom: normalize(20),
  },
  whatsNextHeading: {
    fontSize: normalize(16),
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: normalize(5),
  },
  credentialsText: {
    fontSize: normalize(14),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
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