import { Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../style/color'
const height = Dimensions.get("screen").height

export const styles = StyleSheet.create({
    change__profileContainer: {
        flex: 1,
        position: 'relative'
    },

    selfScore__headerLeft: {
        width: '15%',
        padding: 15,
        borderBottomRightRadius: 40,
        backgroundColor: colors.analyticsBg,
    },

    selfScore__backgroundImage: {
        height: '100%',
        width: '100%'
    },
    selfScore__bottomImageView: {
        height: '40%',
        width: '100%',
        position: 'relative'
    },
    selfScore__bottomImage: {
        height: '100%',
        width: '100%',
        position: 'absolute'
    },
    selfScore__bottomViewText: {
        marginTop: 30,
        marginBottom: 30,

        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.white,
        fontSize: 30
    }

})
