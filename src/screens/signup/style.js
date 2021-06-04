import { StyleSheet } from 'react-native'
import { colors } from '../../style/color'

export const styles = StyleSheet.create({
    signpup__container: {
        flex: 1,
        position: 'relative',
    },
    signpup__top: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.black
    },
    signpup__image: {
        position: 'absolute',
        opacity: 0.3,
        backgroundColor: colors.black,
        height: '100%',
        width: '100%',
    },
    signpup__logo: {
        alignItems: 'center',
        marginTop: 50
    },
    signpup__heading: {
        fontSize: 38,
        textAlign: 'center',
        color: colors.white,
        fontWeight: 'bold',
        marginTop: 30
    },
    signpup__inputContainer: {
        alignItems: 'center',
        width: '80%',
        alignSelf: 'center'
    },
    signpup__button: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20
    },
    signpup__Text: {
        color: colors.white,
        textAlign: 'center',
        marginVertical: 20
    },
    signpup__subText: {
        color: colors.white,
        textAlign: 'center',
        borderBottomWidth: 2,
        borderBottomColor: colors.white
    },
    signpup__signInText: {
        fontSize: 28,
        marginVertical: 20,
        color: colors.white,
        borderBottomColor: colors.white,
        borderBottomWidth: 2
    }
})
