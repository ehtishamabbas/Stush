import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';
 
 const { width, height } = Dimensions.get('window');
const baseWidth = 414;
const baseHeight = 896;
const widthScale = width / baseWidth;
const heightScale = height / baseHeight;
const scale = Math.min(widthScale, heightScale);

const normalize = (size: number) => Math.round(size * scale);

export default StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
    },













    backIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '25%',
        width: '100%',
        backgroundColor: 'rgba(9, 21, 34, 0.42)',
        borderRadius: normalize(20),
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
        position: 'absolute',
        top: 0,
        paddingTop: Platform.OS === 'ios' ? normalize(30) : normalize(10),
    },
    backButton: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 50 : 40,
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

    logoImage: {
        width: 140,
        height: 45,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        width: '100%',
    },


    
});
