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
    top: 0,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#080C21', // Dark blue/black background
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    top: 0,
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
  contentContainer: {
    flex: 1,
    paddingHorizontal: normalize(45),
    paddingTop: normalize(80),
  },
  heading: {
    fontSize: normalize(28),
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: normalize(40),
    textTransform: 'uppercase',
  },
  labelText: {
    fontSize: normalize(14),
    color: '#FFFFFF',
    marginBottom: normalize(8),
  },
  inputContainer: {
    marginBottom: normalize(36),
  },
  textInput: {
    backgroundColor: '#091522',
    borderRadius: normalize(25),
    height: normalize(50),
    paddingHorizontal: normalize(20),
    color: '#FFFFFF',
    fontSize: normalize(14),
    borderWidth: 1,
    borderColor: '#3A3A42',
  },
  passwordRequirements: {
    fontSize: normalize(12),
    color: '#AAAAAA',
    marginTop: normalize(16),
    marginBottom: normalize(25),
    lineHeight: normalize(18),
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: normalize(15),
  },
  toggleText: {
    fontSize: normalize(14),
    color: '#FFFFFF',
  },
  switch: {
    transform: [{scale: 1.4}],
  },
  nextButton: {
    backgroundColor: '#1F75FE',
    borderRadius: normalize(25),
    height: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 'auto',
    marginBottom: normalize(60),
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: normalize(16),
    fontWeight: '600',
  },
});

export default styles;
