import {StyleSheet, Dimensions} from 'react-native';

// Get screen dimensions for responsive design
const {width, height} = Dimensions.get('window');

// Calculate scale based on screen size (using iPhone 8 as baseline)
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
    backgroundColor: '#050B18', // Fallback dark blue color
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
    fontSize: moderateScale(14),
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    marginTop: verticalScale(20),
    marginBottom: verticalScale(30),
    lineHeight: verticalScale(20),
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
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(2),
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: horizontalScale(240),
    marginBottom: verticalScale(10),
  },
  keypadButton: {
    width: horizontalScale(60),
    height: horizontalScale(60),
    borderRadius: horizontalScale(30),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  keypadText: {
    fontSize: moderateScale(20),
    fontWeight: '500',
    color: 'white',
  },
  forgotText: {
    fontSize: moderateScale(14),
    color: 'rgba(255, 255, 255, 0.7)',
  },
  backspaceText: {
    fontSize: moderateScale(20),
    color: 'white',
  },
  verifyButton: {
    width: '85%',
    height: verticalScale(45),
    borderRadius: moderateScale(25),
    backgroundColor: '#2374E1',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(20),
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
});