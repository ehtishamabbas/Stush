import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;

const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(9, 21, 34, 1)',
    height: height,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtext: {
    color: '#fff',
    fontSize: 16,
  },

  subContainer: {
    height: height * 0.8,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logOutContainer: {
    height: height * 0.2,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(9, 21, 34, 1)',
  },
});

export default homeScreenStyles;
