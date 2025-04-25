import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    scrollContainer: {
        flexGrow: 1,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    formcontainer: {
        flex: 1,
        padding: 30,
    },
    backButton: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 50 : 40,
        left: 16,
        zIndex: 10,
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    backIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        tintColor: 'white',
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 60 : 50,
        marginBottom: 20,
    },
    logoImage: {
        width: 140,
        height: 45,
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        marginVertical: 20,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 28,
        textTransform: 'uppercase',
    },
    subtitle: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 20,
    },
    description: {
        color: '#FFFFFF',
        fontSize: 14,
        lineHeight: 20,
        marginVertical: 10,
        opacity: 0.8,
    },
    info: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 20,
    },
    bulletContainer: {
        marginTop: 20,
    },
    bulletRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 15,
    },
    bulletText: {
        color: '#FFFFFF',
        fontSize: 14,
        marginLeft: 15,
        flex: 1,
        lineHeight: 20,
    },
    bulletTextBlue: {
        color: '#1F7FFE',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    bulletDescription: {
        color: '#FFFFFF',
        fontSize: 14,
        marginLeft: 15,
        marginTop: 5,
        opacity: 0.8,
    },
    continueButton: {
        backgroundColor: '#1F7FFE',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 20,
    },
    continueText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerContainer: {
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 60 : 50,
        paddingHorizontal: 30,
    },
    footerText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 130,
        lineHeight: 28,
    },
    secondaryTitle: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    underline: {
        height: 2,
        backgroundColor: '#1F7FFE',
        width: '100%',
        marginBottom: 15,
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});