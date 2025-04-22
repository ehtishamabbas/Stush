import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputLabel: {
        color: '#FFFFFF',
        marginBottom: 8,
        fontFamily: 'Urbanist',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: 0,

    },
    input: {
        backgroundColor: 'rgba(9, 21, 34, 1)',
        borderRadius: 25,
        height: 50,
        paddingHorizontal: 20,
        color: '#FFFFFF',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.15)',
    },
    inputFocused: {
        backgroundColor: 'rgba(9, 21, 34, 1)',
        borderRadius: 25,
        height: 50,
        paddingHorizontal: 20,
        color: '#FFFFFF',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 1)',
    },
    inputError: {
        borderColor: 'rgba(255, 59, 48, 0.7)',
      },
      errorText: {
        color: 'rgba(255, 59, 48, 0.9)',
        fontSize: 12,
        marginTop: -12,
        marginBottom: 12,
        marginLeft: 4,
      }
});

export default commonStyles;


