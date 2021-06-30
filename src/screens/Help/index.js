import React, { useEffect } from 'react'
import { Text, View,Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';
import arrow from '../../assets/arrow';
import { Typo } from '../../components';
import HelpComponent from './component';
import { styles } from './style';

const Help = () => {
    const navigation = useNavigation()
    const phoneNumber = +921234567890
    return (
        <View style={styles.help__container}>
            <View style={styles.help__containerTop}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{ padding: 10 }}>
                        <SvgXml xml={arrow} />
                    </View>
                </TouchableOpacity>
                <View>
                    <Typo children={"Need a help ?"} />
                </View>
                <View>
                </View>
            </View>
            <HelpComponent where="query" text={"Ask a query"} subText={"Ask a query through our application"} />
            <HelpComponent to={()=> Linking.openURL(`tel:${phoneNumber}`)}  text={"Call Us"} subText={"Our agent will talk you about your problem"} />
            <HelpComponent to={()=> Linking.openURL('mailto:support@example.com')} text={"Email Us"} subText={"Let us know about your problem through email"} />


        </View>
    )
}

export default Help

