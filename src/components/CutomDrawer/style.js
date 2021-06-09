import { StyleSheet } from 'react-native'
import { colors } from '../../style/color'
export const styles = StyleSheet.create({
    drawer__top: {
        backgroundColor: colors.borderGray,
        flex: 0.3,
        borderTopRightRadius: 50
    },
    drawer__topImage: {
        backgroundColor: colors.white,
        width: 100,
        height: 100,
        marginTop: 30,
        marginHorizontal: 10,
        borderRadius: 20
    },
    drawer__topText: {
        fontSize: 18,
        margin: 10
    },
    drawer__bottom: {
        backgroundColor: colors.analyticsBg,
        flex: 0.7,
        borderBottomRightRadius: 50
    },
    drawer__bottomView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 7,
        alignItems: 'center'
    },
    drawer__bottomViewText: {
        fontFamily: 'MyriadPro-LightSemiCn',
        fontSize: 15,
        paddingLeft: 10
    }

})

