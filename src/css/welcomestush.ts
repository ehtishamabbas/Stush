import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 4,
    flexDirection: 'column',
  },
  headerContainer: {
    flexDirection: 'row',
    gap: 22,
    backgroundColor: 'transparent',
    marginTop: 32,
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
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Orbitron-Bold',
    lineHeight: 45,
    marginTop: 22,
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 36,
  },
  info: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'System',
    marginTop: 36,

  },
  bulletContainer: {
    marginTop: 66,
    flexDirection: 'column',
    gap: 19,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 16,
    gap: 12,
  },
  bulletText: {
    color: '#fff',
    fontSize: 13,
    lineHeight: 20,
    flex: 1,
    fontFamily: 'System',
  },
  footerText: {
    color: '#fff',
    fontSize: 21,
    textAlign: 'center',
    fontWeight: '500',
    marginVertical: 120,
    fontFamily: 'Orbitron-Bold',
  },
  continueButton: {
    backgroundColor: '#1F75FE',
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 40,
    marginBottom: 30,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default styles;
