import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { styles } from './style'
import guy from '../../assets/guy.png'
import logo from '../../assets/logo'
import { Button, Input } from '../../components'
import { SvgXml } from 'react-native-svg'
import person from '../../assets/person'
import password from '../../assets/password'
import email from '../../assets/email'
import confirm from '../../assets/confirmPassword'
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.signpup__container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.signpup__top}>
                    <Image style={styles.signpup__image} source={guy} />
                    <View style={styles.signpup__logo}>
                        <SvgXml xml={logo} />
                    </View>
                    <Text style={styles.signpup__heading}>Sign Up</Text>
                    <View style={styles.signpup__inputContainer}>
                        <Input customStyle={{ width: '90%' }} icon={person} placeholder={"Username"} />
                        <Input customStyle={{ width: '90%' }} icon={email} placeholder={"Email"} />
                        <Input customStyle={{ width: '90%' }} icon={password} placeholder={"Password"} />
                        <Input customStyle={{ width: '90%' }} icon={confirm} placeholder={"Confirm Password"} />
                        <View style={styles.signpup__button}>
                            <Button customStyle={{ width: '70%' }} onClick={() => navigation.navigate("personalData")} text="Register" />
                            <Text style={styles.signpup__Text}>Already have an accoung?</Text>
                            <Text style={styles.signpup__subText}>Register</Text>
                            <Text style={styles.signpup__signInText}>Sign In</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default SignUp
