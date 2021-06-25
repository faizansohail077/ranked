import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'
import arrow from '../../assets/arrow'
import moment from 'moment'
import { styles } from './style'
import * as actions from '../../store/actions'

import { Typo } from '../../components'
import { bindActionCreators } from 'redux'
import { useNavigation } from '@react-navigation/core'
import { useDispatch } from 'react-redux'
import { ActivityIndicator } from 'react-native-paper'

const ProfileHistory = () => {
    const [response, setResponse] = useState("")
    const [loader, setLoader] = useState(true)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const action = bindActionCreators(actions, dispatch)

    useEffect(() => {
        console.log("working effet")
        action.getProfilePhoto()
            .then((res) => {
                console.log("TCL ~ file: index.js ~ line 32 ~ .then ~ res", res.length)
                if (res.length && res.length > 0) {
                    setLoader(false)
                    console.log("TCL ~ file: index.js ~ line 31 ~ action.getProfilePhoto ~ res", res)
                    setResponse(res)
                }
                else {
                    setLoader(false)
                }
            }).catch(err => {
                console.log("TCL ~ file: index.js ~ line 38 ~ .then ~ err", err)

            })

    }, [])


    return (
        <View style={styles.profile__container}>
            <View style={{ marginBottom: 15 }}>
                <View style={styles.profile__header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.profile__headerLeft}>
                            <SvgXml xml={arrow} />
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Typo children={"Profile"} />
                    </View>
                    <View>
                    </View>
                </View>
            </View>
            {loader ? <ActivityIndicator size="large" color="white" /> :
                <FlatList numColumns={2} keyExtractor={(item) => item.id} data={response} renderItem={({ item }) => {
                    moment().format("MMM Do YY")
                    return (
                        <View style={styles.profile__ImageContainer}>
                            <Image style={styles.profile__image} resizeMode={"cover"} source={{ uri: item?.selfie_url }} />
                            <View>
                                <Typo style={styles.profile__topText} children={`UPDATED,      ${moment(item?.created_at).format("Do MMM YY")}`} />
                            </View>
                            <View style={styles.profile__bottomConatiner}>
                                <View style={styles.profile__bottomLeft}>
                                    <Typo style={styles.profilt__bottomText} children={item?.self_score} />
                                </View>
                                <View style={styles.profile__bottomRight}>
                                    <Typo style={styles.profilt__bottomText} children={item?.self_score} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', width: '90%', position: 'absolute', bottom: 20, left: 5 }}>
                                <View style={{ flexGrow: 1 }}>
                                    <Typo style={{ textAlign: 'center', fontSize: 10 }} children={'Overall Score'} />
                                </View>
                                <View style={{ flexGrow: 0 }}>
                                    <Typo style={{ textAlign: 'center', fontSize: 10 }} children={'Self Score'} />
                                </View>
                            </View>
                        </View>
                    )
                }} />
            }
        </View>
    )
}

export default ProfileHistory

