import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const scale = SCREEN_WIDTH / 375;

const normalize = (size: number) => {
  const scale = SCREEN_WIDTH / 375;
  return Math.round(size * scale);
};

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 1,
    paddingBottom: '32%',
  },
  spacer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  outercontainer: {
    padding: 20,
    width: '50%',
    flexDirection: 'row',
    gap: 40,
},
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: '50%',
    marginBottom: 40,
  },
  inputContainer: {
    marginTop: 20,
  },
  labelText: {
    fontSize: 14,
    marginBottom: 5,
    color: '#FFFFFF',
    paddingBottom: 10,
  },
  subContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: '50%',
    marginBottom: 40,
  },
  depositButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  depositButton: {
    flex: 1,
  },
  buttonSpacer: {
    width: 10,
  },
  activeButton: {
    backgroundColor: '#2B7DF7',
  },
  inactiveButton: {
    backgroundColor: '#5A5A5A',
  },
  space: {
    flex: 1,
    marginTop: 40,
  }, errorText: {
    color: 'red',
    fontSize: 12,
    marginVertical: 5,
  },
  objectContainer: {
    flex: 1,
    paddingTop: 35,
    paddingHorizontal: 20,
    marginBottom: '18%',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 36,
  },


  bulletContainer: {
    marginTop: 30,
    marginBottom: 45,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 15,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  bulletText: {
    color: '#FFFFFF',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 5,
    borderRadius: 3,
    fontSize: 14,
    lineHeight: 20,
  },
  blueTitle: {
    color: '#1F7FFE',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  whiteTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,

  }
  ,
  image: {
    width: 54,
    height: 54,
},
imageContainer: {
    flexDirection: 'column',
    gap: 10,
    color: '#FFFFFF',
},
imageText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 20,

},
 
imageContainerr: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    color: '#FFFFFF',
},









  outerContainer: {
    flex: 1,
    marginBottom: 45,
  },
  PrivacyText: {
    fontSize: normalize(21),
    color: '#FFFFFF',
    fontWeight: 400,
  },
  subcontainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: '55%',
    marginBottom: 15,
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
  },
  readMoreText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 26,
  },
  agreeButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 25,
    paddingVertical: 15,
  },
  agreeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  passwordRequirements: {
    fontSize: normalize(14),
    color: '#AAAAAA',
    marginTop: normalize(0),
    marginBottom: normalize(2),
    lineHeight: normalize(18),
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: normalize(12),
  },
  toggleText: {
    fontSize: normalize(16),
    color: '#FFFFFF',
  },
  switch: {
    transform: [{ scale: 1.6 }],
  },
  bottonContainer: {
    width: '100%',
    marginTop: normalize(45),
  },


 
 

















  spac: {
    flex: 1,
    marginBottom: 20,
  },



  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10
  },
  listSection: {
    marginBottom: 15,
  },
  listSectionText: {
    color: '#FFFFFF',
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
  },




});
export default style;