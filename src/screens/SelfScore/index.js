import React, { useEffect, useState } from 'react'
import { ImageBackground, Text, View, Image, Slider } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Button, Typo } from '../../components'
import { styles } from './style'
import arrow from '../../assets/arrow'
import bg from '../../assets/roundbg.png'
import SliderComponent from '../../components/Slider';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions'
import { ActivityIndicator } from 'react-native-paper';
import { bindActionCreators } from 'redux'

const SelfScore = ({ route }) => {

    const navigation = useNavigation()
    const [score, setScore] = useState(2)
    const [url, setUrl] = useState('')
    const { user } = useSelector(state => state.authReducer)
    const [disable, setDisable] = useState(false)
    const [loader, setLoader] = useState(false)
    const dispatch = useDispatch()
    const action = bindActionCreators(actions, dispatch)
    console.log(user?.profile_picture)
    useEffect(() => {
        if (route?.params && route?.params?.uri) {
            const { uri } = route?.params
            setUrl(uri)
        }
        else {
            setUrl(user?.profile_picture)
        }
    }, [])


    const submit = () => {
        setDisable(true)
        setLoader(true)
        action.profileImage(url, score)
            .then((res) => {
                setLoader(false)
                setDisable(false)
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'bottomTab' }],
                    })
                );
            })
            .catch(err => {
                console.log("TCL ~ file: index.js ~ line 23 ~ submit ~ err", err)
                setLoader(false)
                setDisable(false)
            })
    }

    return (
        <View style={styles.change__profileContainer}>
            <ImageBackground style={styles.selfScore__backgroundImage} source={{ uri: url }}>
                <View style={{ height: '100%', justifyContent: 'space-between' }}>
                    <View >
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.selfScore__headerLeft}>
                                <SvgXml xml={arrow} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.selfScore__bottomImageView}>
                        <Image style={styles.selfScore__bottomImage} source={bg} />
                        <Text style={styles.selfScore__bottomViewText} >Score your self</Text>
                        <View style={{ marginBottom: 30 }}>
                            <SliderComponent Score={score} setSelfScore={(id) => setScore(id)} />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Button disable={disable} onClick={() => submit()} customTextStyle={{ fontSize: 20 }} customStyle={{ width: '50%' }} text={<Typo children={loader ? <ActivityIndicator color="white" size="small" /> : "Update"} />} />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default SelfScore

