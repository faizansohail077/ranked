import React, { useState } from 'react'
import { ActivityIndicator, ScrollView, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button, Typo } from '../../components'
import { useNavigation } from '@react-navigation/native';
import { styles } from './style'
import { SvgXml } from 'react-native-svg'
import arrow from '../../assets/arrow'
import emailIcon from '../../assets/message2'
import edit from '../../assets/edit2'
import feedback from '../../assets/feedback2'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions'
const FeedBack = () => {
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
            action.askQuery(message.trim())
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
        <View style={styles.feedback__container}>
            <View style={{ marginBottom: 15 }}>
                <View style={styles.feedback__header}>
                    <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.goBack()}>
                        <View>
                            <SvgXml xml={arrow} />
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Typo children={"Feedback"} />
                    </View>
                    <View>
                    </View>
                </View>
            </View>

            <View style={{ marginVertical: 30 }}>
                <ScrollView>
                    <View style={styles.feedback__centerTop}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <SvgXml xml={emailIcon} />
                            <TextInput value={email} onChangeText={(e) => setEmail(e)} style={{ width: '80%' }} placeholder="Johalex@gmail.com" />
                        </View>
                        <View style={styles.feedback__centerTopIcon}>
                            <SvgXml xml={edit} />
                        </View>
                    </View>
                    <View style={styles.feedback__centerCenter}>
                        <TextInput value={message} onChangeText={(e) => setMessage(e)} multiline={true} numberOfLines={10} textAlignVertical={'top'} style={{ justifyContent: 'flex-start', height: 150 }} />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button disable={disable} onClick={() => submit()} text={loader ? <ActivityIndicator size="small" color="white" /> : "Submit"} />
                    </View>
                </ScrollView>
            </View>
            <View style={{ alignItems: 'center' }}>
                <SvgXml xml={feedback} />
            </View>
        </View>
    )
}

export default FeedBack

