import { StyleSheet, Platform, } from 'react-native';


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

    },
    profile: {
        flexDirection: 'row',
        gap: normalize(20),

    },
    profileName: {
        flexDirection: 'column',

    },
    firstPart: {
        flexDirection: 'row',

        justifyContent: 'space-between',
    },
    title: {
        fontSize: normalize(22),
        fontWeight: '600',
        color: '#FFFFFF',



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