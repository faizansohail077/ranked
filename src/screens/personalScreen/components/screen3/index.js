import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import camera from '../../../../assets/camera'
import { SvgXml } from 'react-native-svg'
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../../store/actions'
import { ActivityIndicator } from 'react-native-paper'
const Screen3 = () => {
    const [loader, setLoader] = useState(false)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const action = bindActionCreators(actions, dispatch)

    const uploadImage = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, async (response) => {
            if (response && response?.assets && response?.assets[0]?.uri) {
                setLoader(true)
                let navigate = await navigation.navigate('screen4', { uri: response?.assets[0]?.uri })
                setLoader(false)
                console.log('work completed')


            }
        });
    };

    return (
        <TouchableOpacity style={styles.screen3__touchableOpacity} onPress={uploadImage}>
            <View>
                {loader ? <ActivityIndicator size="large" color="white" /> : <SvgXml xml={camera} />}
            </View>
        </TouchableOpacity>
    )
}

export default Screen3

