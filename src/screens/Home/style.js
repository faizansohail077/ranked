import { StyleSheet } from 'react-native'
import { colors } from '../../style/color'

export const styles = StyleSheet.create({
    home__container: {
        // position: 'relative',
        flex: 1,
        backgroundColor: colors.white
    },
    home__carousel: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderColor: colors.white,
        borderWidth: 2,
        overflow: 'hidden',
        borderRadius: 100,
        backgroundColor: 'black',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        // marginHorizontal: 50
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

        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    home__subHeader: {
        // alignItems: 'flex-end',
        position : 'absolute',
        right : -6,
        top : 60
    },
    home__subHeaderIcon: {
        marginHorizontal: 10,
        marginVertical: 5,
        height: 30,
        width: 30
    },

    home__bottomImageView: {
        // height: '40%',
        // width: '100%',
        // position: 'relative',
    },
    home__bottomImage: {
        // height: '100%',
        width: '100%',
        height: 200,
        resizeMode: 'stretch',
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
        position: 'absolute',
        bottom: 0,
        width: '100%'

    },
    home__subBottomContainer: {
        flex: 1,
        // width: '100%',
        zIndex: 1
    },
    home__bottomView: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 7,
        justifyContent: 'center'

    },
    home__bottomButton: {
        backgroundColor: 'transparent',
        minWidth: 170,
        height: 50,
        borderWidth: 2, borderColor: colors.white
    }

})
