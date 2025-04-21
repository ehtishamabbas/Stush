import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Orbitron-Bold',
  },
  subtitle: {
    color: '#fff',
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'System',
  },
  info: {
    color: '#fff',
    marginTop: 12,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    fontFamily: 'System',
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
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 20,
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
  },
});

export default styles;
