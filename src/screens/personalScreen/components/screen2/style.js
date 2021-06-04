import { StyleSheet } from 'react-native'
import { colors } from '../../../../style/color'

export const styles = StyleSheet.create({
    screen2__container: {
        flex: 1,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    screen2__dropDownContainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0,
        width: '90%',
        alignSelf: 'center'
    },
    screen2__dropDown: {
        backgroundColor: colors.transparent,
        borderBottomWidth: 2,
        borderBottomColor: colors.gray,
        width: '80%',
    },
    screen2__orContainer: {
        width: '90%',
        marginVertical: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    screen2__orContainerTop: {
        flexGrow: 1,
        borderWidth: 0.8,
        borderColor: colors.white,
        marginRight: 10
    },
    screen2__orContainerCenter: {
        color: colors.white,
        fontSize: 20
    },
    screen2__orContainerBottom: {
        flexGrow: 1,
        borderWidth: 0.8,
        borderColor: colors.white,
        marginLeft: 10
    },
})
