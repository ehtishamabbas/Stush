import {StyleSheet, Dimensions, Platform} from 'react-native';

 const {width, height} = Dimensions.get('window');

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
  },
  instruction: {
    fontSize: moderateScale(15),
    color: 'rgba(255, 255, 255, 0.7)',
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
    paddingHorizontal: horizontalScale(20),
    marginBottom: verticalScale(20),
  },
  codeBox: {
    width: horizontalScale(50),
    height: verticalScale(50),
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
  codeText: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: 'white',
  },
  resendButton: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(25),
    borderRadius: moderateScale(20),
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    marginBottom: verticalScale(20),
  },
  resendText: {
    fontSize: moderateScale(14),
    color: 'rgba(255, 255, 255, 0.7)',
  },
  keypadContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: 30,
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  keypadButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keypadText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '400',
  },
  forgotText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  backspaceText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  verifyButton: {
    width: '85%',
    height: verticalScale(35),
    borderRadius: moderateScale(45),
    backgroundColor: '#1F75FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(20),
    elevation: 3,
    shadowColor: '#2374E1',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  verifyText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    maxWidth: '80%',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 25,
    marginBottom: 20,
    overflow: 'hidden',
  },
  countrySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
    height: '100%',
    paddingLeft: 15,
    borderRightWidth: 1,
    borderRightColor: '#091522',
    backgroundColor: '#091522',

  },
  flagIcon: {
    width: 24,
    height: 16,
    marginRight: 5,
  },
  countryCode: {
    color: '#FFFFFF',
    fontSize: 16,
    marginRight: 5,
    
  },
  dropdownIcon: {
    marginLeft: 'auto',
    marginRight: 10,
  },
  phoneNumberInput: {
    flex: 1,
    justifyContent: 'center',
  },
  phoneInput: {
    color: '#091522',
    fontSize: 16,
    paddingHorizontal: 15,
    height: '100%',
    backgroundColor: '#091522',
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
});
