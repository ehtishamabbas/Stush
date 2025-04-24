import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const { width: SCREEN_WIDTH } = Dimensions.get('window');

const baseWidth = 414;
const baseHeight = 896;

const widthScale = width / baseWidth;
const heightScale = height / baseHeight;
const scale = Math.min(widthScale, heightScale);

export const normalize = (size: number) => Math.round(size * scale);

const SharedStyles = StyleSheet.create({
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

  headerContainer: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.20,
    borderBottomLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
    backgroundColor: 'rgba(49, 46, 46, 0.48)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '25%',
    width: '100%',

    top: 40,
    paddingTop: Platform.OS === 'ios' ? normalize(30) : normalize(10),
  },
  logoImage: {
    width: 140,
    height: 45,
    resizeMode: 'contain',
    marginTop: normalize(40),
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 60,
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

  contentMainContainer: {
    backgroundColor: 'rgba(1, 5, 10, 0.16)',
    top: '10%',
    width: '100%',
    height: '80%',
    alignItems: 'center',
    paddingHorizontal: normalize(24),
    paddingTop: normalize(77),
  },
 
  heading: {
    fontSize: normalize(28),
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: normalize(20),
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: normalize(10),
  },
  subText: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: normalize(16),
    color: '#FFFFFF',
    lineHeight: normalize(20),
    marginTop: normalize(10),
    marginHorizontal: normalize(20),
  },
  subTexts: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: normalize(24),
    color: '#FFFFFF',
    marginTop: normalize(25),
    marginHorizontal: normalize(20),
    lineHeight: normalize(30),
  },
  imageContainer: {
    marginTop: normalize(40),
    marginBottom: normalize(20),
    alignItems: 'center',
  },
  contentImage: {
    width: normalize(270),
    height: normalize(220),
    resizeMode: 'contain',
  },
  smallImage: {
    width: normalize(150),
    height: normalize(120),
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
    marginTop: normalize(120),
    width: '100%',
    alignItems: 'center',
  },
  whatsNextHeading: {
    fontSize: normalize(18),
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: normalize(8),
    lineHeight: normalize(26),
  },
  credentialsText: {
    fontSize: normalize(16),
    color: '#FFFFFF',
    textAlign: 'center',
  },

  buttonContainer: {
    alignItems: 'center',
    paddingHorizontal: normalize(20),
    marginBottom: normalize(10),
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  nextButton: {
    backgroundColor: '#1F75FE',
    borderRadius: normalize(25),
    height: normalize(55),
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
   },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: normalize(16),
    fontWeight: '600',
  },

  title: {
    fontSize: normalize(16),
    fontWeight: '600',
    color: '#FFFFFF',
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
    color: '#FFFFFF',
    marginBottom: normalize(10),
    textAlign: 'center',
  },
  amountText: {
    fontSize: normalize(36),
    fontWeight: 'bold',
    color: '#00FF87',
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
    color: '#FF0000',
    fontSize: normalize(14),
    flex: 1,
    marginLeft: normalize(10),
  },
});

export default SharedStyles;