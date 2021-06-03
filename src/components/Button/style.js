import { StyleSheet } from 'react-native'
import { colors } from '../../style/color'

export const styles = StyleSheet.create({
    button__container: {
        backgroundColor: colors.red,
        width: "40%",
        borderRadius: 50,
        alignItems: 'center'
    },
    button__text: {
        textAlign: 'center',
        padding: 10,
        fontSize: 18,
        color: colors.white,
        fontWeight: 'bold'
    }
})
