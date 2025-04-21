import { StyleSheet, Platform,  } from 'react-native';


const normalize = (size: number) => Math.round(size);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#080C21',
    },
    container: {
        flex: 1,
    },
 
    contentContainer: {
        top: '20%',
        width: '100%',
        height: '75%',
        paddingHorizontal: normalize(24),
        paddingTop: normalize(30),
        flexDirection: 'column',
        gap: normalize(25),

    },
    coinimage:{
        width: normalize(60),
        height: normalize(55),
    },
    balance:{
        fontSize: normalize(20),
        fontWeight: '700',
        color: '#3ADA7F',
    },
    profile: {
        flexDirection: 'row',
        gap: normalize(20),

    },
    secondPart:{
        flexDirection: 'column',
        gap: normalize(5),
    },
    firstParts:{
        flexDirection: 'row',
        gap: normalize(35),
    },
    active:{
        fontSize: normalize(16),
        fontWeight: '800',
        color: '#4CE444',
    },
 
    profileName: {
        flexDirection: 'column',
        gap: normalize(10),
        alignItems: 'center',

    },
    sendmoney:{
        width: normalize(25),
        height: normalize(17),
    },
    referearn:{
        flexDirection: 'row',
        gap: normalize(20),
        justifyContent: 'center',
     },
     refer:{
        flexDirection: 'row',
        gap: normalize(10),
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#4AE17C',
        borderRadius: normalize(8),
        paddingHorizontal: normalize(10),
        paddingVertical: normalize(5),
     },
     earn:{
        fontSize: normalize(12),
        fontWeight: '900',
        color: '#4AE17C',
     },
    firstPart: {
        flexDirection: 'row',

        justifyContent: 'space-between',
    },
    title: {
        fontSize: normalize(14),
        fontWeight: '600',
        color: '#FFFFFF',



    },
    titel:{
        fontSize: normalize(20),
        fontWeight: '400',
        color: '#FFFFFF',
    },
    balancee:{
        fontSize: normalize(20),
        fontWeight: '400',
        color: '#11DCE8',
    },

    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '20%',
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
    


});

export default styles;