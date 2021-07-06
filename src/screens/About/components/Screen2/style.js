import { StyleSheet } from 'react-native'
import { colors } from '../../../../style/color'

export const styles = StyleSheet.create({
    screen2__top: {
        padding: 10,
        alignItems: 'flex-end'
    },
    screen2__center: {
        flex: 0.8,
        justifyContent: 'center',
    },
    screen2__disable: {
        flex: 0.8,
        justifyContent: 'center',
        backgroundColor: 'black',
        opacity: 0.5
    },
    screen2__centerHeading: {
        textAlign: 'center',
        marginVertical: 0,
        fontSize: 30
    },
    screen2__centerHeading2: {
        textAlign: 'center',
        fontFamily: 'unicodeimpact',
        marginVertical: 10,
        fontSize: 30
    },
    slider__container: {
        position: 'relative',
        flexDirection: 'row',
        width: '90%',
        marginHorizontal: 10
    }
})
