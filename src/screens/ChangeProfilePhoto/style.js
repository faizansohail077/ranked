import { Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../style/color'
const height = Dimensions.get("screen").height

export const styles = StyleSheet.create({
    change__profileContainer: {
        flex: 1,
        position: 'relative'
    },

    profile__headerLeft: {
        width: '15%',
        padding: 15,
        borderBottomRightRadius: 40,
        backgroundColor: colors.analyticsBg,
    },

    profilr__backgroundImage: {
        height: '100%',
        width: '100%'
    },
    change__profileBottomView: {
        backgroundColor: colors.lightanalyticsBg,
        alignItems: 'center',
        height: height / 6,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        position: 'relative',
    },
    change__profileBottomImage: {
        position: 'absolute',
        bottom: '13%',
        left: '40%',
        right:'41%',
        zIndex: 1,
        backgroundColor: colors.red,
        height: 80,
        width: 80,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    change__profileBottomText: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }

})
