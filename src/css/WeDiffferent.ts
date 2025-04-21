import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  backIcon: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Orbitron-Bold',
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
  },
  featureBlock: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'center',
    width: '100%',
  },
  featureImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 15,
  },
  featureTextWrapper: {
    flex: 1,
  },
  featureTitle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Orbitron-Bold',
  },
  featureDesc: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 30,
  },
  ctaButton: {
    backgroundColor: '#1F75FE',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
