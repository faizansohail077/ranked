import React from 'react'
import { ImageBackground, Text, View, Image, Slider } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native';
import { Button, Typo } from '../../components'
import { styles } from './style'
import arrow from '../../assets/arrow'
import image from '../../assets/Rectangle76.png'
import bg from '../../assets/roundbg.png'
import SliderComponent from '../../components/Slider';


const SelfScore = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.change__profileContainer}>
            <ImageBackground style={styles.selfScore__backgroundImage} source={image}>
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
                            <SliderComponent />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Button customTextStyle={{ fontSize: 20 }} customStyle={{ width: '50%' }} text={<Typo children="Update" />} />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default SelfScore

