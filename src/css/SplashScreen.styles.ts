import { StyleSheet } from 'react-native';

const splashScreenStyles = (width: number, height: number) => {
   const scale = Math.min(width, height) / 375;
   const circleSize = Math.min(width * 0.85, height * 0.55);

  return StyleSheet.create({
    backgroundImage: {
      width: '100%',
      height: '100%',
      backgroundColor: '#091522', 
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
  });
};

export default splashScreenStyles;
