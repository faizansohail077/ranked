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
        marginVertical: 20,
        marginHorizontal: 20
    },
    analytics__view: {
        height: height / 2.7,
        alignItems: 'center'
    },
    analytics__viewMain: {
        borderWidth: 4,
        borderColor: colors.borderGray,
        backgroundColor: 'white',
        flex: 1,
        width: width / 1.2,
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
        fontSize: 200
    },
    analytics__subTextView: {
        position: 'absolute',
        left: 110,
        flexDirection: 'row',
        bottom: 30
    },
    analytics__subText: {
        color: colors.analyticsBg,
        fontSize: 35,
        fontWeight: 'bold'
    },
    analytics__progrssView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: 20,
        marginBottom: 10
    },
    analytics__porgressTop: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '30%'
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
        width: 80,
        height: 10
    },
    analytics__bottomView: {
        position: 'relative',
        flexDirection: 'row',
        flex: 1
    },
    analytics__bottomViewBottom: {
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        justifyContent: 'space-around'
    }































})
