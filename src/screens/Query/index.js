import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'
import arrow from '../../assets/arrow'
import edit from '../../assets/edit2'
import emailIcon from '../../assets/message2'
import * as actions from '../../store/actions'

import { Button, Typo } from '../../components'
import { styles } from './style'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

const Query = () => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loader, setLoader] = useState(false)
    const [disable, setDisable] = useState(false)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const action = bindActionCreators(actions, dispatch)

    const submit = () => {
        if (email == '' || message == "") {
            alert("kindly provide valid details")
        }
        else {
            setLoader(true)
            setDisable(true)
            action.askQuery(message)
                .then(res => {
                    setDisable(false)
                    setLoader(false)
                    setMessage("")
                    setEmail("")
                    alert("Successfully Submitted")
                }).catch(err => {
                    setDisable(false)
                    setLoader(false)
                })
        }
    }


    return (
        <View style={styles.query__container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ marginBottom: 15 }}>
                    <View style={styles.query__header}>
                        <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.goBack()}>
                            <View>
                                <SvgXml xml={arrow} />
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Typo children={"Ask a query"} />
                        </View>
                        <View>
                        </View>
                    </View>
                </View>

                <View style={{ marginVertical: 30 }}>
                    <View style={styles.query__centerTop}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <SvgXml xml={emailIcon} />
                            <TextInput value={email} onChangeText={(e) => setEmail(e)} style={{ width: '80%' }} placeholder="Johalex@gmail.com" />
                        </View>
                        <View style={styles.query__centerTopIcon}>
                            <SvgXml xml={edit} />
                        </View>
                    </View>
                    <View style={styles.query__centerCenter}>
                        <TextInput value={message} onChangeText={(e) => setMessage(e)} multiline={false} numberOfLines={20} textAlignVertical={'top'} style={{ justifyContent: 'flex-start' }} />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button disable={disable} onClick={() => submit()} text={loader ? <ActivityIndicator size="small" color="white" /> : "Submit"} />
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

export default Query

