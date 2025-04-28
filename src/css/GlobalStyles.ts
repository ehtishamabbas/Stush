 import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

 const normalize = (size: number) => {
  const scale = SCREEN_WIDTH / 375;
  return Math.round(size * scale);
};

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  
  contentContainer: {
    flex: 1,
    paddingHorizontal: normalize(20),
    marginTop: SCREEN_HEIGHT * 0.25,
    paddingBottom: normalize(20),
  },
  
  headerContainer: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.20,
    borderBottomLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
    backgroundColor: 'rgba(49, 46, 46, 0.17)',
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
  
  primaryHeadingText: {
    fontSize: normalize(16),
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: normalize(8),
    textTransform: 'uppercase',
  },
  secondaryHeadingText: {
    fontSize: normalize(24),
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: normalize(20),
    lineHeight: normalize(30),
  },
  contentText: {
    fontSize: normalize(14),
    color: '#FFFFFF',
    marginBottom: normalize(15),
    lineHeight: normalize(20),
  },
  
  buttonContainer: {
    width: '100%',
    marginVertical: normalize(8),
  },
  primaryButton: {
    backgroundColor: '#2B7DF7',
    borderRadius: normalize(8),
    paddingVertical: normalize(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    backgroundColor: '#5A5A5A',
    borderRadius: normalize(8),
    paddingVertical: normalize(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenButton: {
    backgroundColor: '#4CD964',
    borderRadius: normalize(8),
    paddingVertical: normalize(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: normalize(16),
    fontWeight: '600',
  },
  
  inputContainer: {
    marginVertical: normalize(15),
    width: '100%',
  },
  inputLabel: {
    fontSize: normalize(14),
    color: '#FFFFFF',
    marginBottom: normalize(10),
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: normalize(8),
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(12),
    color: '#FFFFFF',
    fontSize: normalize(16),
  },
  
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(10),
  },
  checkbox: {
    width: normalize(24),
    height: normalize(24),
    borderRadius: normalize(12),
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: normalize(15),
  },
  checkedCheckbox: {
    backgroundColor: '#2B7DF7',
    borderColor: '#2B7DF7',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: normalize(14),
    fontWeight: 'bold',
  },
  checkboxText: {
    color: '#FFFFFF',
    fontSize: normalize(14),
    flex: 1,
    lineHeight: normalize(18),
  },
  
  spacer: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: normalize(20),
  },
  footerText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: normalize(12),
    textAlign: 'center',
    lineHeight: normalize(18),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  locationHeader: {
    marginTop: normalize(10),
    marginBottom: normalize(20),
  },
  locationMainText: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: normalize(20),
  },
  hoursInput: {
    fontSize: normalize(16),
    color: '#FFFFFF',
    paddingVertical: normalize(12),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
  },
  
  depositButtonsContainer: {
    flexDirection: 'row',
    marginVertical: normalize(15),
  },
  depositButton: {
    flex: 1,
    paddingVertical: normalize(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(8),
    marginHorizontal: normalize(5),
  },
  depositButtonActive: {
    backgroundColor: '#2B7DF7',
  },
  depositButtonInactive: {
    backgroundColor: '#5A5A5A',
  },
  depositButtonText: {
    color: '#FFFFFF',
    fontSize: normalize(16),
    fontWeight: '600',
  },
});

export default GlobalStyles;