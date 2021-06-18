import React, { useEffect, useState } from 'react'
import { View, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'
import arrow from '../../assets/arrow'
import camera from '../../assets/camera'
import { styles } from './style'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Typo } from '../../components'
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions'
import { ActivityIndicator } from 'react-native-paper'

const ChangeProfile = () => {
    const { user } = useSelector(state => state.authReducer)
    const [photo, setPhoto] = useState(user?.profile_picture)
    const [loader, setLoader] = useState(false)
    const dispatch = useDispatch()
    const action = bindActionCreators(actions, dispatch)



    console.log("TCL ~ file: index.js ~ line 19 ~ ChangeProfile ~ user", user?.profile_picture)
    const navigation = useNavigation()


    useEffect(() => {
        navigation.dangerouslyGetParent().setOptions({
            tabBarVisible: false
        })
    }, [])

    const uploadImage = () => {
        launchImageLibrary({ noData: true }, (response) => {
            if (response && response?.assets && response?.assets[0]?.uri) {
                setLoader(true)
                setPhoto(response?.assets[0]?.uri)
                action.profileImage(response?.assets[0]?.uri)
                    .then((res) => {
                        console.log("TCL ~ file: index.js ~ line 45 ~ .then ~ res", res)
                        setLoader(false)
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
                    })
            }
        });
    };




    return (
        <View style={styles.change__profileContainer}>
            <ImageBackground style={styles.profilr__backgroundImage} source={{ uri: photo ? photo : null }}>
                <View style={{ height: '100%', justifyContent: 'space-between' }}>
                    <View >
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.profile__headerLeft}>
                                <SvgXml xml={arrow} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.change__profileBottomView}>

                        <View style={styles.change__profileBottomText}>
                            <Typo children={"Change Profile Photo"} />
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.change__profileBottomImage}>
                {loader ? <ActivityIndicator size="large" color="white" /> :
                    <TouchableOpacity onPress={() => uploadImage()}>
                        <SvgXml height={30} xml={camera} />
                    </TouchableOpacity>}
            </View>
        </View>
    )
}

export default ChangeProfile

