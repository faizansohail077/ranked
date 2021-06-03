import { StyleSheet } from 'react-native'
import { colors } from '../../style/color'

export const styles = StyleSheet.create({
    login__container: {
        flex: 1,
        position: 'relative',
        // backgroundColor: 'red',
    },
    login__top: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.black
    },
    login__image: {
        position: 'absolute',
        opacity: 0.3,
        backgroundColor: colors.black,
        height: '100%',
        width: '100%'
    },
    login__logo: {
        alignItems: 'center',
        marginTop: 50
    },
    login__heading: {
        fontSize: 38,
        textAlign: 'center',
        color: colors.white,
        fontWeight: 'bold',
        marginTop: 30
    },
    login__inputContainer: {
        alignItems: 'center',
        width: '80%',
        alignSelf: 'center'
    },
    login__button: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 20
    },
    login__Text: {
        color: colors.white,
        textAlign: 'center',
        marginTop: 20
    },
    login__subText: {
        color: colors.white,
        textAlign: 'center',
        borderBottomWidth: 2,
        borderBottomColor: colors.white
    },

    login__orContainer: {
        width: '50%',
        marginVertical: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    login__orContainerTop: {
        flexGrow: 1,
        borderWidth: 0.8,
        borderColor: colors.white,
        marginRight: 10
    },
    login__orContainerCenter: {
        color: colors.white
    },
    login__orContainerBottom: {
        flexGrow: 1,
        borderWidth: 0.8,
        borderColor: colors.white,
        marginLeft: 10
    },
    login__fbButton: {
        width: '100%',
        padding: 10,
        backgroundColor: colors.blue
    }

})
