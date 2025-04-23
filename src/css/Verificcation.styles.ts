import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const baseWidth = 375;
const baseHeight = 667;
const horizontalScale = (size: number): number => (width / baseWidth) * size;
const verticalScale = (size: number): number => (height / baseHeight) * size;
const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#050B18',
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: verticalScale(55),
    paddingHorizontal: horizontalScale(20),
  },
  
  title: {
    fontSize: moderateScale(24),
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    letterSpacing: horizontalScale(2),
    lineHeight: verticalScale(28),
    marginBottom: verticalScale(5),
  },
  instruction: {
    fontSize: moderateScale(15),
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: verticalScale(20),
    marginBottom: verticalScale(30),
    lineHeight: verticalScale(22),
    opacity: 0.8,
    maxWidth: '80%',
  },
  
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: horizontalScale(0),
    marginBottom: verticalScale(20),
  },
  codeBox: {
    width: horizontalScale(50),
    height: verticalScale(40),
    borderRadius: moderateScale(8),
    backgroundColor: '#091522',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    fontSize: moderateScale(18),
    fontWeight: '600',
    textAlign: 'center',
  },
  filledCodeBox: {
    backgroundColor: '#091522',
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  
  resendButton: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(25),
    borderRadius: moderateScale(20),
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    marginBottom: verticalScale(20),
    alignSelf: 'center',
  },
  resendText: {
    fontSize: moderateScale(14),
    color: 'rgba(255, 255, 255, 0.7)',
  },
  
  keypadContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(20),
    marginBottom: verticalScale(30),
    paddingLeft: horizontalScale(15),
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: verticalScale(20),
  },
  keypadButton: {
    width: horizontalScale(60),
    height: horizontalScale(60),
    borderRadius: horizontalScale(30),
    backgroundColor: 'rgba(9, 21, 34, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keypadButtons: {
    width: horizontalScale(60),
    height: horizontalScale(60),
    borderRadius: horizontalScale(30),
    backgroundColor: 'rgba(9, 21, 34, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keypadText: {
    color: '#FFFFFF',
    fontSize: moderateScale(24),
    fontWeight: '400',
  },
  forgotText: {
    color: '#FFFFFF',
    fontSize: moderateScale(14),
  },
  backspaceText: {
    color: '#FFFFFF',
    fontSize: moderateScale(24),
  },
  
  verifyButton: {
    width: '85%',
    height: verticalScale(35),
    borderRadius: moderateScale(25),
    backgroundColor: '#1F75FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(5),
     elevation: 3,
    shadowColor: '#2374E1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  verifyText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: 'white',
  },
  
  phoneInputContainer: {
    flexDirection: 'row',
    width: '85%',
    height: verticalScale(40),
    backgroundColor: '#091522',
    borderRadius: moderateScale(25),
    marginBottom: verticalScale(20),
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  countrySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
    height: '100%',
    paddingLeft: horizontalScale(15),
    borderRightWidth: 1,
    borderRightColor: 'rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(9, 21, 34, 0.5)',
  },
  flagIcon: {
    width: horizontalScale(24),
    height: verticalScale(16),
    marginRight: horizontalScale(5),
  },
  countryCode: {
    color: '#FFFFFF',
    fontSize: moderateScale(16),
    marginRight: horizontalScale(5),
  },
  dropdownIcon: {
    marginLeft: 'auto',
    marginRight: horizontalScale(10),
  },
  phoneNumberInput: {
    flex: 1,
  },
  phoneInput: {
    color: '#FFFFFF',
    fontSize: moderateScale(12),
    paddingHorizontal: horizontalScale(15),
    height: '100%',
  },
  
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? verticalScale(50) : verticalScale(55),
    left: horizontalScale(16),
    zIndex: 10,
    width: horizontalScale(40),
    height: horizontalScale(40),
    borderRadius: horizontalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  backIcon: {
    width: horizontalScale(24),
    height: verticalScale(24),
    resizeMode: 'contain',
    tintColor: 'white',
  },
});