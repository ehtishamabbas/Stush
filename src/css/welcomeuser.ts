import { StyleSheet } from 'react-native';

const welcomeUserStyles = (width: number, height: number) => {
   const scale = Math.min(width, height) / 375;
   const circleSize = Math.min(width * 0.8, height * 0.4);

  return StyleSheet.create({
    backgroundImage: {
      width: '100%',
      height: '100%',
      backgroundColor: '#050B18', 
    },
    containerr: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 0,
    },
    contentContainerr: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: height * 0.05,
      paddingBottom: height * 0.05,
    },
    welcomeText: {
      color: 'white',
      fontSize: 22 * scale,
      fontWeight: '400',
      marginTop: height * 0.02,
      marginBottom: height * 0.04,
      textAlign: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentContainer: {
      position: 'relative',
      width: circleSize,
      height: circleSize,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoImage: {
      position: 'relative',
      width: width,
      height: height,
      marginBottom: 16 * scale,
    },
    tagline: {
      position: 'absolute',
      color: '#FFFFFF',
      textAlign: 'center',
      fontSize: 16 * scale,
      fontWeight: '500',
      lineHeight: 22 * scale,
      letterSpacing: 0.2,
      marginTop: '20%',
    },
    circularTrack: {
     
    },
    circularProgress: {
    
     
    },
    featureList: {
      width: '85%',
      marginTop: height * 0.05,
      paddingHorizontal: width * 0.05,
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
  });
};

export default welcomeUserStyles;