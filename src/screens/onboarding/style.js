import { StyleSheet } from 'react-native'
import { colors } from '../../style/color'

export const styles = StyleSheet.create({
    onboard__stepperActive:
    {
        backgroundColor: colors.red,
        height: 10,
        width: 10,
        borderRadius: 40
    },
    onboard__container: {
        backgroundColor: colors.bg,
        flex: 1,
        position: 'relative',
    },
    onboard__button: {
        position: 'absolute',
        right: 15,
        bottom: 15,
    },
    onboard__buttonText: {
        color: colors.white,
        padding: 10,
        fontSize: 20,

    }
})
