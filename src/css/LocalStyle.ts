import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const { width: SCREEN_WIDTH } = Dimensions.get('window');

const baseWidth = 414;
const baseHeight = 896;

const widthScale = width / baseWidth;
const heightScale = height / baseHeight;
const scale = Math.min(widthScale, heightScale);

export const normalize = (size: number) => Math.round(size * scale);

const LocalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: '50%',
        marginBottom: 40,
    },
    inputContainer: {
        marginTop: 20,
    },
    labelText: {
        fontSize: 14,
        marginBottom: 5,
        color: '#FFFFFF',
        paddingBottom: 10,
    },
    spacer: {
        flex: 1,
    },
    contentContainers: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        marginTop: '40%',
      },
      spacers: {
        flex: 1,
        minHeight: 40,
      },
      bulletContainer: {
        marginTop: 30,
        marginBottom: 45,
      },
      bulletRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 15,
      },
      textContainer: {
        flex: 1,
        marginLeft: 15,
      },
      bulletText: {
         color: '#FFFFFF',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        padding: 5,
        borderRadius: 3,
        fontSize: 14,
        lineHeight: 20,
      },
      blueTitle: {
        color: '#1F7FFE',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      whiteTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
      },
      safeArea: {
        flex: 1,
        width: '100%',
        height: '100%',
      },
      containers: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 20,
        marginTop: Platform.OS === 'ios' ? 60 : 50,
      },
      backButton: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 50 : 60,
        left: 29,
        zIndex: 10,
        width: 40,
        height: 40,
        borderRadius: '50%',
        borderColor: '#091522',
        borderWidth: 1,
      },
      backIcon: {
        width: 31,
        height: 33,
        resizeMode: 'contain',
        tintColor: 'white',
      },
      logoContainer: {
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 60 : 50,
        marginBottom: 10,
      },
      logoImage: {
        width: 140,
        height: 45,
        resizeMode: 'contain',
      },
      banksContainer: {
        marginTop: 20,
        width: '100%',
    },
    bankRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        paddingVertical: 8,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    textContainers: {
        flex: 1,
    },
    bankTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    bankSubtitle: {
        color: '#AAAAAA',
        fontSize: 14,
        marginTop: 3,
    },
    bankIcon: {
        width: '100%',
        height: '100%',
    },
    iconText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    imageStyle: {
        width: '60%',
        height: '60%',
    },
    selectedBankContainer: {
        marginTop: '20%',
        marginBottom: '5%',
        paddingLeft: '13%',
        width: '100%',
    },
    loginText: {
        color: '#FFFFFF',
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 18,
        letterSpacing: 0.5,
        fontWeight: '700',
    },
    secondaryContainer: {
         marginBottom: '10%',
         width: '100%',
    },
});

export default LocalStyles;