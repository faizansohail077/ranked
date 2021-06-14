import { StyleSheet } from 'react-native'
import { colors } from '../../style/color'

export const styles = StyleSheet.create({
    home__container: {
        position: 'relative',
        flex: 1,
        backgroundColor: colors.white
    },
    home__carousel: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        // borderColor: colors.black,
        // borderWidth: 1,
        overflow: 'hidden',
        borderRadius: 100,
        backgroundColor: 'black'
    },
    home__carouselImage: {
        height: '100%',
        width: '100%',
        // borderWidth: 4,
        // borderColor: colors.black
    },
    home__Image: {
        width: '100%',
        height: '100%',
        position: "absolute",
        top: 50
    },
    hone__header: {
        marginHorizontal: 15,
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingBottom: 20,
        alignItems: 'center'
    },
    home__subHeader: {
        alignItems: 'flex-end'
    },
    home__subHeaderIcon: {
        marginHorizontal: 10,
        marginVertical: 5,
        height: 30,
        width: 30
    },

    home__bottomImageView: {
        height: '45%',
        width: '100%',
        position: 'relative',
    },
    home__bottomImage: {
        // height: '100%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        zIndex: 1
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: colors.white,
    },
    home__bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        position: 'relative'

    },
    home__subBottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 1
    },
    home__bottomView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20
    },
    home__bottomButton: {
        width: '60%',
        marginLeft: 30,
        backgroundColor: 'transparent',
        borderWidth: 2, borderColor: colors.white
    }

})
