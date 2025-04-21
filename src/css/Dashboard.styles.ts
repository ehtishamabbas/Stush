import { StyleSheet } from 'react-native';

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
    
     headerContainer: {
        padding: 15,
        backgroundColor: 'transparent',
    },
    headerTitleContainer: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    
     userInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    userNameContainer: {
        justifyContent: 'center',
    },
    helloText: {
        color: '#FFFFFF',
        fontSize: 14,
        opacity: 0.7,
    },
    userName: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSpacing: {
        marginRight: 20,
    },
    
     coinImageContainer: {
        alignItems: 'center',
        marginBottom: 15,
    },
    coinImage: {
        width: 60,
        height: 60,
    },
    
     balanceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    balanceInfo: {
        flex: 1,
    },
    balanceLabel: {
        color: '#FFFFFF',
        fontSize: 14,
        opacity: 0.7,
    },
    balanceAmount: {
        color: '#00FF00',
        fontSize: 20,
        fontWeight: 'bold',
    },
    statusContainer: {
        alignItems: 'flex-end',
    },
    statusLabel: {
        color: '#FFFFFF',
        fontSize: 14,
        opacity: 0.7,
    },
    statusValue: {
        color: '#00FF00',
        fontSize: 16,
        fontWeight: 'bold',
    },
    
     payPeriodContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    periodInfo: {
        flex: 1,
    },
    periodLabel: {
        color: '#FFFFFF',
        fontSize: 14,
        opacity: 0.7,
    },
    periodValue: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    workHoursContainer: {
        alignItems: 'flex-end',
    },
    hoursLabel: {
        color: '#FFFFFF',
        fontSize: 14,
        opacity: 0.7,
    },
    hoursValue: {
        color: '#00BFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    rateValue: {
        color: '#FFFFFF',
        fontSize: 12,
        opacity: 0.7,
    },
    
     referContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(128, 0, 128, 0.6)',
        borderRadius: 25,
        padding: 10,
        justifyContent: 'center',
        marginBottom: 20,
    },
    referIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    referText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});