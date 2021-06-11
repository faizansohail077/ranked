import { StyleSheet } from 'react-native'
import { colors } from '../../../style/color'

export const styles = StyleSheet.create({
    modal__container: {
        marginHorizontal: 20,
        backgroundColor: colors.lightwhite,
        height: 400,
        width: 300,
        borderRadius: 50,
        alignItems: 'center'
    },
    modal__chips: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    modal__btnContainer: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 30,
    },
    modal__chipStyle: {
        backgroundColor: colors.gray,
        margin: 5
    }
})
