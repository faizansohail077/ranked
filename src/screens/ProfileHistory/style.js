import { Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../style/color'

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

export const styles = StyleSheet.create({
    profile__container: {
        backgroundColor: 'black',
        flex: 1
    },
    profile__header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profile__headerLeft: {
        padding: 15,
        borderBottomRightRadius: 40,
        backgroundColor: colors.analyticsBg
    },
    profile__ImageContainer: {
        marginHorizontal: 15,
        marginVertical: 10,
        height: height / 2.8,
        width: width / 2.6,
        borderRadius: 30,
        position: 'relative',
    },
    profile__image: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        borderRadius: 50,
        borderTopLeftRadius: 60,

    },
    profile__topText: {
        fontSize: 11,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 25,
        padding: 7,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'red',
        width: '70%',
        height: "60%"
    },
    profile__bottomConatiner: {
        borderTopLeftRadius: 30,
        padding: 5,
        borderTopRightRadius: 30,
        backgroundColor: colors.lightanalyticsBg,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 0,
        height: height / 7,


    },
    profile__bottomLeft: {
        justifyContent: 'center',
        backgroundColor: colors.white,
        height: height / 13,
        width: width/8,
        borderRadius: 100,
        marginRight: 5,
        marginTop: 10,
    },
    profile__bottomRight: {
        justifyContent: 'center',
        backgroundColor: colors.white,
        height: height / 13,
        width: width/8,
        borderRadius: 100,
        marginTop: 10,

    },
    profilt__bottomText: {
        textAlign: 'center',
        fontSize: 30,
        color: colors.black,
        fontFamily: 'unicodeimpact'
    }

})
