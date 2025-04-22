import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    gap: 12,
     backgroundColor: 'transparent',
     marginTop: 32,
     textAlign: 'left',
   },
  backButton: {
    alignSelf: 'flex-start',
    marginTop: 20,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: '#091522',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 29,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Orbitron-Bold',
    lineHeight: 45,
    marginTop: 22,
  },
  titleAlt: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Orbitron-Bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 30,
    marginTop: 40,
  },
  featureBlock: {
    flexDirection: 'row',
    marginBottom: 30,
     width: '100%',
  },
  featureBlocks: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 30,
    width: '100%',
  },
  
  featureImage: {
    width: 110,
    height:100,
    resizeMode: 'contain',
    marginRight: 15,
  },
  featureTextWrapper: {
     flex: 1,
  },
  
  featureImageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureTitle: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    fontFamily: 'Orbitron-Bold',
    lineHeight: 28,
  },
  featureDesc: {
    color: '#fff',
    fontSize: 14,
    marginTop:12,
  },
  footerText: {
    color: '#fff',
    fontSize: 21,
    textAlign: 'center',
    marginVertical: 30,
  },
  ctaButton: {
    backgroundColor: '#1F75FE',
    paddingVertical: 12,
    paddingHorizontal: 90,
    borderRadius: 30,
    marginBottom: 30,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
