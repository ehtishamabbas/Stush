// src/css/VerifyEmail.styles.ts
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
  logoContainer: {
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 60 : 80, // Adjusted based on Figma spacing
  },
  logoImage: {
    width: 140, // Exact width from Figma
    height: 45, // Exact height from Figma
    resizeMode: 'contain',
  },
  contentContainer: {
    width: '100%',
    backgroundColor: 'rgba(9, 22, 37, 0.85)',
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(30),
    paddingHorizontal: normalize(45),
    paddingTop: normalize(50),
    paddingBottom: normalize(20),
    height: '100%',
  },
  heading: {
    fontSize: normalize(26),
    fontWeight: '700',
    letterSpacing: 1.2,
    color: '#FFFFFF',
    marginBottom: normalize(30),
    textAlign: 'center',
    lineHeight: normalize(41),
    fontFamily: 'Aquire',
  },
  subText: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: normalize(12),
    color: '#FFFFFF',
    lineHeight: normalize(24),
  },
  warningText: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: normalize(12),
    color: '#FFFFFF',
    lineHeight: normalize(37),
    marginTop: normalize(10),
  },
  continueButton: {
    backgroundColor: '#1F75FE',
    borderRadius: normalize(25),
    height: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(110),
    width: '100%',
   },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: normalize(17),
    fontWeight: '700',
    lineHeight: normalize(22),
  },
  signInContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: '20%',
   },
  signInText: {
    color: '#AAAAAA',
    fontSize: normalize(18),
  },
  signInLink: {
    color: '#1F75FE',
    fontWeight: '600',
  },
});

export default styles;
