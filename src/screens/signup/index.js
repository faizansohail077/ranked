import React, { useState } from 'react'
import { Text, View, Image, ScrollView, ActivityIndicator } from 'react-native'
import { styles } from './style'
import guy from '../../assets/guy.png'
import logo from '../../assets/logo'
import { Button, Input, Typo } from '../../components'
import { SvgXml } from 'react-native-svg'
import person from '../../assets/person'
import passwordIcon from '../../assets/password'
import emailIcon from '../../assets/email'
import confirm from '../../assets/confirmPassword'
import { useNavigation } from '@react-navigation/native';
import * as actions from '../../store/actions'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'

const SignUp = () => {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState(false)
    const [disable, setDisable] = useState(false)
    const [loader, setLoader] = useState(false)
    const dispatch = useDispatch()
    const action = bindActionCreators(actions, dispatch)
    const navigation = useNavigation()

    const SignUp = () => {
        let reg = /^\s*$/
        let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (username == '' || reg.test(username)) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        }
        if (email == '' || emailReg.test(email) === false) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        }
        if (password == '' || password.length > 10) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        }
        if (confirmPassword == '' || confirmPassword !== password) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        }
        else {
            setDisable(true)
            setLoader(true)
            action.signUp(email, password, username).then(() => {
                setDisable(false)
                setLoader(false)
                setUserName("")
                setConfirmPassword("")
                setPassword("")
                setEmail("")
                navigation.navigate("personalData")
                console.log('working')
            }).catch(e => {
                setDisable(false)
                setLoader(false)
                console.log("TCL ~ file: index.js ~ line 63 ~ action.signUp ~ e", e)
            })
        }
    }


    return (
        <View style={styles.signpup__container}>
            <ScrollView style={{ flex: 1 }}>
                {error && alert('something went wrong')}
                <View style={styles.signpup__top}>
                    <View style={{ flex: 1, backgroundColor: 'black', opacity: 0.7 }}>
                        <Image style={styles.signpup__image} source={guy} />
                        <View style={styles.signpup__logo}>
                            <SvgXml xml={logo} />
                        </View>
                        <Text style={styles.signpup__heading}>Sign Up</Text>
                        <View style={styles.signpup__inputContainer}>
                            <Input value={username} onChangeText={(e) => setUserName(e)} customStyle={{ width: '90%' }} icon={person} placeholder={"Username"} />
                            <Input value={email} onChangeText={(e) => setEmail(e)} customStyle={{ width: '90%' }} icon={emailIcon} placeholder={"Email"} />
                            <Input value={password} onChangeText={(e) => setPassword(e)} customStyle={{ width: '90%' }} icon={passwordIcon} placeholder={"Password"} />
                            <Input value={confirmPassword} onChangeText={(e) => setConfirmPassword(e)} customStyle={{ width: '90%' }} icon={confirm} placeholder={"Confirm Password"} />
                            <View style={styles.signpup__button}>
                                <Button disable={disable} customStyle={{ width: '70%' }} onClick={() => SignUp()} text={<Typo children={loader ? <ActivityIndicator color="white" size="large" /> : "Register"} />} />
                                <Text style={styles.signpup__Text}>Already have an accoung?</Text>
                                <Text style={styles.signpup__signInText}>Sign In</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default SignUp