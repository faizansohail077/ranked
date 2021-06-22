import { StyleSheet } from 'react-native'
import { colors } from '../../style/color'

export const styles = StyleSheet.create({
    splash__container: {
        flex: 1,
        position: 'relative'
    },
    splash__imageContainer: {
        height: '100%',
        width: '100%',
        // backgroundColor: colors.black,
        // opacity: 0.7
    },
    splash__backgroundImage: {
        backgroundColor: colors.black,
        position: 'absolute',
        height: '100%',
        width: '100%',
        opacity: 0.1
    },
    splash__logo: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.8
    }
})
