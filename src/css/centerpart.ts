import { StyleSheet } from 'react-native';

const styles = (width: number, height: number) => StyleSheet.create({
    centerContainer: {
        paddingTop: 15,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },

    circleContainer: {
        alignItems: 'center',
        marginVertical: 20,
        position: 'relative',
    },
    circle: {
        width: width * 0.7,
        height: width * 0.7,
        borderRadius: width * 0.35,
        borderWidth: 7,
        borderColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 1,
    },
    clickHereText: {
        color: '#11DCE8',
        fontSize: 16,
        marginTop: 5,
    },
    goButton: {
        position: 'absolute',
        bottom: -20,
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: '#0965F6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    goText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },

    bottomNavContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',

        marginTop: 0,
        marginBottom: 20,
    },
    activeNavIcon: {
        color: '#FFFFFF',
    },

    getPaidContainer: {
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 30,
    },
    getPaidTitle: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    learnMoreContainer: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'left',
    },
    howDoesItWorkText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    learnMoreText: {
        color: '#11DEE8',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
});

export default styles;