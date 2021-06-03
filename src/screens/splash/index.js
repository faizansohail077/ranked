import React, { useEffect } from 'react'
import { Image, View } from 'react-native'
import guy from '../../assets/guy.png'
import logo from '../../assets/logo'
import { SvgXml } from 'react-native-svg'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("login")
        }, 1000)
    }, [])
    return (
        <View style={styles.splash__container}>
            <View style={styles.splash__imageContainer}>
                <Image style={styles.splash__backgroundImage} source={guy} />
                <View style={styles.splash__logo}>
                    <SvgXml xml={logo} />
                </View>
            </View>
        </View>
    )
}

export default Splash

