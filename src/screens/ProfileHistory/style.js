import { Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../style/color'

const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

export const styles = StyleSheet.create({
    profile__ImageContainer: {
        marginHorizontal: 15,
        marginVertical: 10,
        height: height / 2.8,
        width: 150,
        borderRadius: 30
    },
    profile__image: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        borderRadius: 20
    },
    profile__topText: {
        fontSize: 16,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 20,
        padding: 3,
        backgroundColor: 'red',
        width: '70%',
        height: "60%"
    },
    profile__bottomConatiner: {
        borderTopLeftRadius: 30,
        padding: 5,
        borderTopRightRadius: 30,
        flex: 1,
        backgroundColor: colors.analyticsBg,
        opacity: 0.7,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    profile__bottomLeft: {
        justifyContent: 'center',
        backgroundColor: colors.white,
        height: height / 10,
        width: '50%',
        borderRadius: 100,
        marginRight: 5
    },
    profile__bottomRight: {
        justifyContent: 'center',
        backgroundColor: colors.white,
        height: height / 10,
        width: '50%',
        borderRadius: 100,
    },
    profilt__bottomText: {
        textAlign: 'center',
        fontSize: 40,
        color: colors.black
    }

})
