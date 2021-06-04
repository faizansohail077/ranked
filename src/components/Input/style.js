import { StyleSheet } from 'react-native'
import { colors } from '../../style/color'

export const styles = StyleSheet.create({
    input__container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 20
    },
    input__field: {
        color: colors.white,
        marginHorizontal: 10,
        width: '80%',
        fontSize: 25,
        borderBottomWidth: 3,
        borderBottomColor: colors.white
    }
})
