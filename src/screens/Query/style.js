import { StyleSheet } from 'react-native'
import { colors } from '../../style/color'

export const styles = StyleSheet.create({
    query__container: {
        flex: 1,
        backgroundColor: colors.black,
        justifyContent: 'space-between'
    },
    query__header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    query__centerTop: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderRadius: 50
    },
    query__centerTopIcon: {
        height: 35,
        backgroundColor: colors.red,
        justifyContent: 'center',
        width: 35,
        borderRadius: 100,
        alignItems: 'center'
    },
    query__centerCenter: {
        backgroundColor: colors.white,
        margin: 10,
        borderRadius: 20,
        borderWidth: 1,
        padding: 5
    },
})
