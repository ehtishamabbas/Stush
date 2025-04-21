import {StyleSheet, Dimensions, Platform,  } from 'react-native';

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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
    paddingTop: Platform.OS === 'ios' ? normalize(50) : normalize(40),
    paddingBottom: normalize(10),
  },
  logo: {
    fontSize: normalize(24),
    color: '#FFFFFF', 
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
 
  closeButton: {
    width: normalize(30),
    height: normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  closeIcon: {
    width: normalize(15),
    height: normalize(15),
    resizeMode: 'contain',
    tintColor: '#FFFFFF',
  },
  contentContainer: {
    position: 'absolute',
    top: '27%', 
    width: '100%',
    height: '75%', 
    alignItems: 'center',
    paddingHorizontal: normalize(24),
    paddingTop: normalize(30),
     borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  title: {
    fontSize: normalize(16),
    fontWeight: '600',
    color: '#FFFFFF', 
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: normalize(40),
    textAlign: 'left',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: normalize(30),
    marginTop: normalize(65),
  },
  moneyImage: {
    width: normalize(150),
    height: normalize(100),
    resizeMode: 'contain',
  },
  earnText: {
    fontSize: normalize(19),
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
    color: '#FFFFFF',
    fontSize: normalize(14),
    flex: 1,
    marginLeft: normalize(10), 
  },
  buttonContainer: {
    backgroundColor: '#1F75FE',
    borderRadius: normalize(25),
    height: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: normalize(40),
    
  },
  nextButtonText: {
    color: '#FFFFFF', 
    fontSize: normalize(16),
    fontWeight: '600',
  },
 
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
 logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '25%', 
    width: '100%',
    backgroundColor: 'rgba(9, 21, 34, 0.42)',
    borderRadius: normalize(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    position: 'absolute', 
    top: 0, 
    paddingTop: Platform.OS === 'ios' ? normalize(30) : normalize(10),
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
 
  logoImage: {
    width: 140,
    height: 45,
    resizeMode: 'contain',
  },
});

export default styles;