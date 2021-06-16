import React from 'react'
import { Text, View, Image, ActivityIndicator } from 'react-native'
import { Button, Typo } from '../../../../components'
import { styles } from './style'
import bg from '../../../../assets/roundbg.png'
import { useNavigation } from '@react-navigation/native';
import SliderComponent from '../../../../components/Slider'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../../store/actions'

const Screen4 = ({ route }) => {
    const { uri } = route?.params
    const [score, setScore] = useState("")
    const [loader, setLoader] = useState(false)
    console.log("TCL ~ file: index.js ~ line 13 ~ Screen4 ~ score", score)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const action = bindActionCreators(actions, dispatch)

    const submit = () => {
        setLoader(true)
        action.profileImage(uri, score)
            .then((res) => {
                setLoader(false)
                navigation.navigate("bottomTab")
                console.log("TCL ~ file: index.js ~ line 19 ~ action.profileImage ~ res", res)
            })
            .catch(err => {
                console.log("TCL ~ file: index.js ~ line 23 ~ submit ~ err", err)
                setLoader(false)

            })
    }


    return (
        <View style={styles.screen4__container}>
            <View style={styles.screen4__imageView}>
                <Image style={styles.screen4__image} source={{ uri: uri }} />
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={styles.screen4__bottomImageView}>
                        <Image style={styles.screen4__bottomImage} source={bg} />
                        <Text style={styles.screen4__bottomViewText} >Score your self</Text>
                        <View style={{ marginBottom: 50 }}>
                            <SliderComponent setSelfScore={(id) => setScore(id)} />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Button onClick={() => submit()} customTextStyle={{ fontSize: 20 }} customStyle={{ width: '50%' }} text={<Typo children={loader ? <ActivityIndicator color="black" size="large" /> : "Finish...!"} />} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Screen4

