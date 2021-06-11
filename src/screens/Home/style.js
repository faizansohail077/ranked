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
        overflow: 'hidden',
        borderRadius: 100
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
        paddingBottom: 20,
        alignItems: 'center'
    },
    home__carouselImage: {
        height: '100%',
        width: '100%',
        borderWidth: 4,
        borderColor: colors.gray
    },
    home__bottomImageView: {
        height: '45%',
        width: '100%',
        position: 'relative',
        // borderTopRightRadius: 200,
        // borderTopLeftRadius: 200,
        // backgroundColor: colors.lightanalyticsBg2
    },
    home__bottomImage: {
        height: '100%',
        width: '100%',
        position: 'absolute'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: colors.white,
    },
    home__bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',

    },
    home__subBottomContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    home__bottomView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20
    },
    home__bottomButton:
    {
        width: '50%',
        marginLeft: 30,
        backgroundColor: 'transparent',
        borderWidth: 2, borderColor: colors.white
    }

})
