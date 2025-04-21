 import {StyleSheet, Dimensions, Platform} from 'react-native';

const {height} = Dimensions.get('window');

const registerScreenStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#091522',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
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
    marginTop: Platform.OS === 'ios' ? 60 : 80, 
  },
  logoImage: {
    width: 140, 
    height: 45, 
    resizeMode: 'contain',
  },

  formContainer: {
    marginTop: height * 0.15, 
    height: height * 0.85, 
    paddingHorizontal: 36,
    backgroundColor: 'rgba(9, 21, 34, 0.16)',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.115,
    shadowRadius: 1,
    elevation: 4,
    paddingTop: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.06)',
    borderLeftColor: 'rgba(255, 255, 255, 0.12)',
  },
  formSubContainer: {
    elevation: 0,
  },

  heading: {
    fontSize: 24,
    fontFamily: 'Aquire',
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 30,
    textAlign: 'left',
    letterSpacing: 1.5,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 56,
    backgroundColor: '#091522', 
    borderRadius: 44,
    paddingHorizontal: 16,
    color: '#FFFFFF',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)', 
  },
  inputError: {
    borderColor: '#FF3B30', 
    borderWidth: 1,
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 16,
  },
  nextButton: {
    height: 56,
    backgroundColor: 'rgba(31, 117, 254, 1)',
    borderRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.15, 
    shadowColor: '#2E5CFF',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  nextButtonDisabled: {
    backgroundColor: 'rgba(31, 117, 254, 0.6)', 
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
    marginBottom: 30, 
  },
  signInText: {
    color: 'rgba(255, 255, 255, 1)', 
    fontSize: 14,
  },
  signInLink: {
    color: 'rgba(31, 117, 254, 1)',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});

export default registerScreenStyles;
