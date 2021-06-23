import { StyleSheet } from 'react-native'
import { colors } from '../../../../style/color'

export const styles = StyleSheet.create({
    screen3__top: {
        padding: 10,
        alignItems: 'flex-end'
    },
    screen3__center: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems:'center'
    },
    screen3__disable: {
        flex: 0.8,
        justifyContent: 'center',
        backgroundColor: 'black',
        alignItems:'center',
        opacity: 0.5
    },
    screen3__centerHeading: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 30
    },
    screen3__milesView:  {
        borderColor: colors.white,
        position:'absolute',
        borderWidth:2,
        bottom:20,
        left:90,
        backgroundColor:'#E8DEDE',
        height:130,
        width:130,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'},
        
    screen3__milesViewText:{
        color:'#011629',
        fontSize:55,
        fontFamily:'unicodeimpact',
    },
    screen3__milesViewText2:{
        color:'#011629',
        fontSize:25,
        fontFamily:'unicodeimpact',
    }
})
