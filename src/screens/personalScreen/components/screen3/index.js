import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import camera from '../../../../assets/camera'
import { SvgXml } from 'react-native-svg'
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

const Screen3 = () => {
    const navigation = useNavigation()

    const uploadImage = () => {
        launchImageLibrary({ noData: true }, (response) => {
            if (response && response?.assets && response?.assets[0]?.uri) {
                navigation.navigate('screen4', { uri: response?.assets[0]?.uri })
            }
        });
    };

    return (
        <TouchableOpacity style={styles.screen3__touchableOpacity} onPress={uploadImage}>
            <View>
                <SvgXml xml={camera} />
            </View>
        </TouchableOpacity>
    )
}

export default Screen3

