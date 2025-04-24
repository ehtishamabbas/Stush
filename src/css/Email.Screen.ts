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
    backgroundColor: '#080C21',
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
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#FFFFFF',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 60 : 80,
    width: '100%',
  },
  logoImage: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
    marginTop: height * 0.13,  
    paddingHorizontal: 16,
    backgroundColor: 'rgba(9, 21, 34, 0.16)',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 4,
    paddingTop: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.15)',
  },
  heading: {
    fontSize: normalize(24),
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 1,
    textTransform: 'uppercase',
    lineHeight: normalize(30),
    marginTop: normalize(40),
  },
  subText: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: normalize(16),
    color: '#FFFFFF',
    lineHeight: normalize(30),
    marginTop: normalize(20),
    opacity: 0.8,
  },
  warningText: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: normalize(14),
    color: '#FFFFFF',
    marginTop: normalize(20),
    opacity: 0.7,
  },
  nextButton: {
     height: 56,
    backgroundColor: 'rgba(31, 117, 254, 1)',
    borderRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.25, // Adjusted spacing
    shadowColor: '#2E5CFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  nextButtonDisabled: {
    backgroundColor: 'rgba(31, 117, 254, 0.6)', // Lighter blue for disabled state
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  signInContainer: {
    marginTop: height * 0.04,
    alignItems: 'center',
    marginBottom: 30, // Added bottom margin for better spacing
  },
  signInText: {
    color: 'rgba(255, 255, 255, 1)', // Slightly transparent white
    fontSize: 14,
  },
  signInLink: {
    color: 'rgba(31, 117, 254, 1)',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});

export default styles;