import { StyleSheet } from 'react-native';

const styles = (width: number, height: number) => StyleSheet.create({
    centerContainer: {
        padding: 15,
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
        borderWidth: 2,
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
        color: '#00BFFF',
        fontSize: 16,
        marginTop: 5,
    },
    goButton: {
        position: 'absolute',
        bottom: -20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#00BFFF',
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
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 30,
        marginTop: 20,
        marginBottom: 20,
    },
    activeNavIcon: {
        color: '#FFFFFF',
    },
    
     getPaidContainer: {
        width: '100%',
        marginTop: 10,
    },
    getPaidTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    learnMoreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    howDoesItWorkText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    learnMoreText: {
        color: '#00BFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;