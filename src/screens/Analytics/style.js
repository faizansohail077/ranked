import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../style/color'

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height
export const styles = StyleSheet.create({
    analytics__container: {
        flex: 1,
        backgroundColor: colors.analyticsBg
    },
    analytics__top: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 20
    },
    analytics__view: {
        height: height / 3,
        alignItems: 'center'
    },
    analytics__viewMain: {
        borderWidth: 6,
        borderColor: colors.white,
        backgroundColor: '#E8DEDE',
        flex: 1,
        width: width - 90,
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    analytics__viewInside: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    analytics__viewText: {
        color: colors.analyticsBg,
        fontFamily: "unicodeimpact",
        fontSize: 130
    },
    analytics__subTextView: {
        position: 'absolute',
        left: '30%',
        flexDirection: 'row',
        fontFamily: "unicodeimpact",
        bottom: 25
    },
    analytics__subText: {
        color: colors.analyticsBg,
        fontSize: 35,
        fontFamily: "unicodeimpact",
    },
    analytics__progrssView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: 20,
        marginTop: 20
    },
    analytics__porgressTop: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '10%'
    },
    analytics__porgressTopLeft: {
        borderColor: colors.yellow,
        borderWidth: 2,
        width: 20,
        height: 20,
        borderRadius: 10
    },
    analytics__progressTopRight: {
        borderColor: colors.analyticsBg,
        borderBottomColor: colors.yellow,
        borderWidth: 2,
        width: 50,
    },
    analytics__bottomView: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 1,
        borderRadius: 30,
    },
    analytics__bottomSubView: {
        backgroundColor: colors.black2,
        borderTopLeftRadius: 50,
        height: '80%',
        alignSelf: 'flex-end',
        borderTopRightRadius: 50,
        width: '100%'
    },
    analytics__bottomViewBottom: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: '90%',
        width: '100%',
        justifyContent: 'space-around'
    }































})
