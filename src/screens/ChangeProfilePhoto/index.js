import React, { useEffect, useState } from 'react'
import { View, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'
import arrow from '../../assets/arrow'
import camera from '../../assets/camera'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native';
import image from '../../assets/Rectangle76.png'
import { Typo } from '../../components'
import { launchImageLibrary } from 'react-native-image-picker';

const ChangeProfile = () => {
    const [photo, setPhoto] = useState("")
    console.log("TCL ~ file: index.js ~ line 15 ~ ChangeProfile ~ photo", photo)

    const navigation = useNavigation()
    useEffect(() => {
        navigation.dangerouslyGetParent().setOptions({
            tabBarVisible: false
        })
    }, [])

    const uploadImage = () => {
        launchImageLibrary({ noData: true }, (response) => {
            if (response && response?.assets && response?.assets[0]?.uri) {
                setPhoto(response?.assets[0]?.uri)
            }
        });
    };

    return (
        <View style={styles.change__profileContainer}>
            <ImageBackground style={styles.profilr__backgroundImage} source={image}>
                <View style={{ height: '100%', justifyContent: 'space-between' }}>
                    <View >
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.profile__headerLeft}>
                                <SvgXml xml={arrow} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.change__profileBottomView}>
                        <View style={styles.change__profileBottomImage}>
                            <TouchableOpacity onPress={() => uploadImage()}>
                                <SvgXml height={30} xml={camera} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.change__profileBottomText}>
                            <Typo children={"Change Profile Photo"} />
                        </View>
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}

export default ChangeProfile

