import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../../../../style/color'

export const styles = StyleSheet.create({
    screen1__top: {
        padding: 10,
        alignItems: 'flex-end'
    },
    screen1__center: {
        flex: 0.8,
        justifyContent: 'center',
    },
    screen1__disable: {
        flex: 0.8,
        justifyContent: 'center',
        backgroundColor: 'black',
        opacity: 0.5
    },
    screen1__centerHeading: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 30
    },
    screen1__centerView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    screen1__imageView: {
        height: 70,
        width: 70
    },
    screen1__screen1Img: {
        height: '100%',
        width: '100%'
    }
})
