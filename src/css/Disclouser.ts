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
    },
    logoContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    logoImage: {
        width: 140,
        height: 45,
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        marginVertical: 20,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 21,
        fontWeight: 'bold',
        lineHeight: 28,
    },
    description: {
        color: '#FFFFFF',
        fontSize: 14,
        lineHeight: 20,
        marginVertical: 10,
    },
    bulletContainer: {
        marginTop: 20,
    },
    bulletRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    bulletText: {
        color: '#FFFFFF',
        fontSize: 13,
        marginLeft: 10,
        flex: 1,
    },
    continueButton: {
        backgroundColor: '#1F7FFE',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginVertical: 20,
    },
    continueText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerContainer: {
        padding: 35,
        backgroundColor: 'transparent',
    },
    headerTitleContainer: {
        alignItems: 'center',
        top: 0,
        paddingVertical: 60,
        marginBottom: 20,
        backgroundColor: 'rgba(4, 30, 45, 0.17)',  
        borderBottomWidth: 0,
        borderRadius: 25,  
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
    iconSpacings: {
        backgroundColor: '#1F7FFE',
        borderRadius: 50,
        paddingHorizontal: 8,
         paddingVertical: 6,
      },
    coinImageContainer: {
        alignItems: 'flex-start',
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
        color: 'white',
        fontSize: 17,
        opacity: 0.7,
        fontWeight: '400',
    },
    balanceAmount: {
        color: '#3EDA7F',
        fontSize: 20,
         fontWeight: '700',
    },
    statusContainer: {
        alignItems: 'flex-end',
    },
    statusLabel: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '400',
            },
    statusValue: {
        color: '#4CE444',
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
        fontWeight: '400',
      },
    periodValue: {
        color: '#11DCE8',
        fontSize: 16,
        fontWeight: 'bold',
    },
    workHoursContainer: {
        alignItems: 'flex-end',
    },
    hoursLabel: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '400',
    },
    hoursValue: {
        color: '#11DCE8',
        fontSize: 16,
        fontWeight: 'bold',
    },
    rateValue: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '400',
    },
    referContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(128, 0, 128, 0.6)',
        borderRadius: 10,
        paddingHorizontal: 50,
        paddingVertical: 15,
         justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 40,
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