import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const scale = SCREEN_WIDTH / 375; 

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
    marginTop: SCREEN_HEIGHT * 0.22,
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
    textAlign: 'center',
  },

  buttonContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: normalize(10),
  },
  primaryButton: {
    backgroundColor: '#2B7DF7',
    borderRadius: normalize(38),
    paddingVertical: normalize(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    backgroundColor: 'rgba(90, 90, 90, 0.5)', borderRadius: normalize(38),
    paddingVertical: normalize(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenButton: {
    backgroundColor: '#4CD964',
    borderRadius: normalize(38),
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
    backgroundColor: '#091522',
    borderRadius: normalize(44),
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.15)',
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
    width: normalize(22),
    height: normalize(22),
    borderRadius: normalize(50),
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: normalize(15),
  },
  checkboxs: {
    width: normalize(15),
    height: normalize(15),
    borderRadius: normalize(30),
    borderWidth: 1,
    borderColor: 'green',
    padding: normalize(1),
    
   
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
    color: 'rgba(9, 21, 34, 1)',
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
    padding: normalize(30),
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
  popupContainer: {
    position: 'absolute',
    zIndex: 9,
    width: '100%',
      top: '50%',
    left: '50%',
    transform: [{ translateX: '-45%' }, { translateY: '-52%' }],
    backgroundColor: 'rgba(255, 255, 255, 0.97)',
    paddingHorizontal: normalize(35),
    paddingVertical: normalize(50),
    borderRadius: normalize(40),
    justifyContent: 'center',
  },
  dollertext: {
    color: '#FFFFFF',
    fontSize: normalize(12),
    fontWeight: '600',
  },
  dollersign: {
    color: '#FFFFFF',
    fontSize: normalize(21),
    lineHeight: normalize(28),
 
  },
  featureList: {
    width: '85%',
    marginTop: SCREEN_HEIGHT * 0.01,
   },
  featureLists: {
    width: '85%',
    marginTop: SCREEN_HEIGHT * 0.05,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8 * scale,
  },
  featureText: {
    color: '#FFFFFF',
    fontSize: 16 * scale,
    fontWeight: '400',
    marginLeft: 10 * scale,
  },
  feature:{
    color: '#FFFFFF',
    fontSize: 22 * scale,
    fontWeight: '600',
    textAlign: 'center',
    marginLeft: 30 * scale,
    marginTop: 10 * scale,
    lineHeight: 28 * scale,
  },

  featureTexts:{
    color: '#FFFFFF',
    fontSize: 16 * scale,
    fontWeight: '400',
    textAlign: 'center',
    marginLeft: 30 * scale,
    marginTop: 15 * scale,
    lineHeight: 20 * scale,
  },
  na:{
    color: '#FFFFFF',
    fontSize: 22 * scale,
    fontWeight: '600',
    textAlign: 'right',
    right: 0 * scale,
    position:'absolute'
  
  },
  labelText: {
    fontSize: 14,
    marginBottom: 5,
    color: '#FFFFFF',
    paddingBottom: 10,
},
unorderedList: {
  marginVertical: 10,
},
listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 5,
},
bullet: {
    color: '#FFFFFF',
    fontSize: 19,
    marginRight: 8,
},
listItemText: {
    color: '#FFFFFF',
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
},
});

export default GlobalStyles;