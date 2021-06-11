import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    about__container: {
        flex: 1,
        backgroundColor: 'black',
    },
    about__top: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        marginBottom: 10
    },
    about__screens: {
        flex: 1,
        margin: 10,
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 5
    }
})
