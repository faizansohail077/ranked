import { StyleSheet } from 'react-native'
import { colors } from '../../style/color'

export const styles = StyleSheet.create({
    edit__container: {
        backgroundColor: colors.analyticsBg,
        flex: 1
    },
    edit__btnContainer: {
        marginVertical: 50,
        alignItems: 'center'
    },
    edit__header:
    {
        flexDirection: 'row'
        , justifyContent: 'space-between', marginVertical: 10
    }
})