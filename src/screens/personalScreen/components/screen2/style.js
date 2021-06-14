import { StyleSheet } from 'react-native'
import { colors } from '../../../../style/color'

export const styles = StyleSheet.create({
    screen2__container: {
        flex: 1,
        margin: 10,
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
    screen2_textFont: {
        color: colors.gray,
        textAlign: 'center',
        fontFamily: 'MyriadPro-LightSemiCn',
        fontSize: 18
    },
    screen2__dropDown: {
        backgroundColor: colors.transparent,
        borderBottomWidth: 2,
        borderBottomColor: colors.white,
        width: '80%',
        borderColor: colors.black
    },
    screen2__orContainer: {
        width: '90%',
        marginVertical: 30,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    screen2__orContainerTop: {
        flexGrow: 0.5,
        borderWidth: 0.8,
        borderColor: colors.white,
        marginRight: 10
    },
    screen2__orContainerCenter: {
        color: colors.white,
        fontSize: 20
    },
    screen2__orContainerBottom: {
        flexGrow: 0.5,
        borderWidth: 0.8,
        borderColor: colors.white,
        marginLeft: 10
    },
})
