import { StyleSheet } from 'react-native'
import { colors } from '../../../../style/color'

export const styles = StyleSheet.create({
    screen4__container: {
        flex: 1,
        position: 'relative'
    },
    screen4__imageView: {
        height: '100%',
        width: '100%',
        position: 'relative',
        zIndex: 10
    },
    screen4__image: {
        height: '100%',
        width: '100%',
        position: 'absolute'
    },
    screen4__bottomImageView: {
        height: '40%',
        width: '100%',
        position: 'relative'
    },
    screen4__bottomImage: {
        height: '100%',
        width: '100%',
        position: 'absolute'
    },
    screen4__bottomViewText: {
        margin: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.white,
        fontSize: 30
    }
})
