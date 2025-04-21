import { StyleSheet } from 'react-native';

const styles = (width: number, height: number) => {
    const scale = Math.min(width, height) / 375;
    const circleSize = Math.min(width * 0.85, height * 0.55);

    return StyleSheet.create({
        backgroundImage: {
            width: '100%',
            height: '100%',
            backgroundColor: '#091522',
        },
        container: {
            top: '10%',
            width: '100%',
            paddingHorizontal:  70,
            
        },
        contentContainer: {
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            
        },
        profile: {
            borderWidth: 6,
            borderColor: '#FFFFFF',
            alignSelf: 'flex-start',
            paddingHorizontal: 70,
            paddingVertical: 45,
            borderRadius: '50%'
        },
        socialIconsContainer: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',

            marginTop: 10,
        },
        socialIcons: {
            flexDirection: 'row',
            gap: 50,

        },
        tagline: {
            color: '#FFFFFF',
            textAlign: 'center',
            fontSize: 26 * scale,
            fontWeight: '500',
            lineHeight: 52 * scale,
            letterSpacing: 0.2,
            marginTop: '20%',
        },
        taglinee: {
            color: '#11DCE8',
            textAlign: 'center',
            fontSize: 16 * scale,
            fontWeight: '500',
            lineHeight: 22 * scale,
            letterSpacing: 0.2,
            marginTop: '0%',
        },
        tagContainer: {
            alignItems: 'center',
        },
        textContainer: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: 10,
         },
        tag: {
            color: '#FFFFFF',
            textAlign: 'center',
            fontSize: 26 * scale,
            fontWeight: '800',
             marginTop: '10%',
             
        }
        ,   tags: {
            color: '#FFFFFF',
            textAlign: 'left',
            fontSize: 16 * scale,
            fontWeight: '500',
            lineHeight: 52 * scale,
            letterSpacing: 0.2,
            marginTop: '5%',
             
        },
        tagss: {
            color: '#11DCE8',
            textAlign: 'left',
            fontSize: 16 * scale,
            fontWeight: '500',
            lineHeight: 52 * scale,
            letterSpacing: 0.2,
            marginTop: '5%',
            textDecorationLine: 'underline',
             
        },
        OrderContainer:{
            alignItems: 'flex-start',
         }

    });
};




export default styles;
