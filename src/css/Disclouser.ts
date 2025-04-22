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


    bulletContainer: {
        flexDirection: 'column',
        marginTop: 46,
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


    backIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '15%',
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
        marginTop: 40,

    },

    logoImage: {
        width: 140,
        height: 45,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
    },
    formcontainer: {
        color: '#fff',
        width: '100%',
        top: '15%',
        height: '85%',
        marginBottom: 30,
        padding: 30,
    },
    subcontainer: {
        marginBottom: 30,

        padding: 30,
    },
    textContainer: {
        flexDirection: 'column',
        gap: 20,
    },

    title: {
        color: '#fff',
        fontSize: 21,
        fontWeight: 'bold',
        fontFamily: 'Orbitron-Bold',
        lineHeight: 28,
    },
    textInput: {
        backgroundColor: '#091522',
        borderRadius: normalize(25),
        height: normalize(50),
        paddingHorizontal: normalize(20),
        color: '#FFFFFF',
        fontSize: normalize(14),
        borderWidth: 1,
        borderColor: '#3A3A42',
    },
    inputContainer: {
        marginTop: 20,
    },
    scrollContainer: {
        flexGrow: 1,
        marginBottom: 30,
    },
    titlel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Orbitron-Bold',
        lineHeight: 28,
    },
    description: {
        color: '#fff',
        fontSize: 14,
        marginTop: 12,
        lineHeight: 24,
        fontWeight: '500',
    },
    loremdescriptions: {
        padding: 20,
    },
    loremdescription: {
        color: '#fff',
        fontSize: 14,
        marginTop: 12,
        lineHeight: 24,
        fontWeight: '400',
    },
    inputpart: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 30,
    },
    titlell: {
        color: '#fff',
        fontSize: 14,
        marginTop: 0,
        lineHeight: 24,
        fontWeight: '400',
    },
    ctaButton: {
        backgroundColor: '#1F75FE',
        paddingVertical: 12,
        borderRadius: 30,
        marginBottom: 100,

    },
    ctaButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
