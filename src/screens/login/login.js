import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { styles } from './style'
import guy from '../../assets/guy.png'
import logo from '../../assets/logo'
import { Button, Input, Typo } from '../../components'
import { SvgXml } from 'react-native-svg'
import person from '../../assets/person'
import facebook from '../../assets/facebook'

import password from '../../assets/password'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.login__container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.login__top}>
                    <Image style={styles.login__image} resizeMode={"cover"} source={guy} />
                    <View style={styles.login__logo}>
                        <SvgXml xml={logo} />
                    </View>
                    <Text style={styles.login__heading}><Typo style={{ fontSize: 32 }} children={"Sign In"} /></Text>
                    <View style={styles.login__inputContainer}>
                        <Input icon={person} placeholder={"Username"} />
                        <Input icon={password} placeholder={"Password"} />
                        <View style={styles.login__button}>
                            <Button onClick={() => navigation.navigate('signup')} customStyle={{ width: '70%' }} text={<Typo children={"Login"} />} />
                            <Text style={styles.login__Text}>Don't have an accoung?</Text>
                            <Text onPress={() => navigation.navigate('signup')} style={styles.login__subText}>Register</Text>
                            <View style={styles.login__orContainer}>
                                <View style={styles.login__orContainerTop} />
                                <View>
                                    <Text style={styles.login__orContainerCenter}>OR</Text>
                                </View>
                                <View style={styles.login__orContainerBottom} />
                            </View>
                            <Button icon={facebook} customStyle={styles.login__fbButton} text={<Typo children={"Login with facebook"} />} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Login
