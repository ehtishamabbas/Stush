// src/css/BaseStyles.ts
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const baseStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: height * 0.06,
    marginBottom: height * 0.06,
  },
  logoImage: {
    width: 150,
    height: 60,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: height * 0.05,
    textTransform: 'uppercase',
  },
   formContainer: {
    width: '100%',
    flex: 1,
    marginTop: height * 0.07,  
  },
  formSubContainer: {
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    backgroundColor: 'rgba(26, 26, 26, 0.6)',  
    borderRadius: 30,  
    height: 55,  
    paddingHorizontal: 20,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',  
  },
  inputError: {
    borderWidth: 1,
    borderColor: '#FF4141',
  },
  errorText: {
    color: '#FF4141',
    fontSize: 12,
    marginTop: 5,
    marginLeft: 20,
  },
   actionButton: {
    backgroundColor: '#2673E5',  
    borderRadius: 30, 
    height: 55, 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    width: '100%',
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  signInText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 14,
    textAlign: 'center',
  },
  signInLink: {
    color: '#2673E5',
    fontWeight: '700',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPassword: {
    color: '#2673E5',
    fontSize: 14,
    fontWeight: '500',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  dividerText: {
    color: 'rgba(255, 255, 255, 0.5)',
    paddingHorizontal: 15,
    fontSize: 14,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
});

export default baseStyles;