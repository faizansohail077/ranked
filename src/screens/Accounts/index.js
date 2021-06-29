import React, { useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'
import auth from '@react-native-firebase/auth';

import { styles } from './style'
import { Button, Input, Typo } from '../../components'
import arrow from '../../assets/arrow'
import account from '../../assets/account'
import PasswordIcon from '../../assets/password'
import ConfirmPassword from '../../assets/confirmPassword'
import { ActivityIndicator } from 'react-native-paper';

const Accounts = () => {
    const navigation = useNavigation()
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loader, setLoader] = useState(false)
    const [disable, setDisable] = useState(false)

    const [error, setError] = useState(false)
    const user = auth().currentUser
    const submit = () => {
        if (password == '') {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
        }
        if (confirmPassword == '' || confirmPassword !== password) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
        }
        else {
            setDisable(true)
            setLoader(true)
            user?.updatePassword(password)
                .then(() => {
                    alert("Password Updated")
                    navigation.navigate("Ranked")
                    setDisable(false)
                    setLoader(false)
                })
                .catch(err => {
                    console.log("TCL ~ file: index.js ~ line 39 ~ submit ~ err", err?.message)
                    if(err.code === 'auth/requires-recent-login'){
                        console.log("🚀 ~ file: index.js ~ line 51 ~ submit ~ err.code", err.code)
                        setDisable(false)
                        setLoader(false)
                    }
                    setDisable(false)
                    setLoader(false)
                })
        }
    }

    return (
        <View style={styles.account__container}>
            <ScrollView style={{ flex: 1 }}>
                {error && alert("Password does not match")}
                <View style={{ marginBottom: 15 }}>
                    <View style={styles.account__header}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View>
                                <SvgXml xml={arrow} />
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Typo children={"Account"} />
                        </View>
                        <View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 20, alignItems: 'center' }}>
                    <SvgXml xml={account} />
                    <Typo style={{ marginTop: 20, fontSize: 18 }} children="Update Your Password" />
                </View>
                <View style={{ margin: 20 }}>
                    <View style={{ marginVertical: 30 }}>
                        <Input secure={true} value={password} onChangeText={(e) => setPassword(e)} icon={PasswordIcon} placeholder="New Password" />
                    </View>
                    <Input secure={true} value={confirmPassword} onChangeText={(e) => setConfirmPassword(e)} icon={ConfirmPassword} placeholder="Confirm Password" />
                </View>
                <View style={{ marginVertical: 30, width: '100%', alignItems: 'center' }}>
                    <Button disable={disable} onClick={() => submit()} text={loader ? <ActivityIndicator size="small" color="white" /> : "Update"} />
                </View>
            </ScrollView>
        </View>

    )
}

export default Accounts


