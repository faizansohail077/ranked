import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { SvgXml } from 'react-native-svg'
import arrow from '../../assets/arrow'
import checkbox from '../../assets/Checkbox'
import { styles } from './style'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import Screen1 from './components/Screen1'
import Screen2 from './components/Screen3'
import Screen3 from './components/Screen2'
import checked1 from '../../assets/checked1.png'
import checked2 from '../../assets/checked2.png'
import checked3 from '../../assets/checked3.png'


const screens = [
    {
        name: 'screen1',
        image: img1,
        image2: checked1,
        active: true

    },
    {
        name: 'screen3',
        image: img3,
        active: false,
        image2: checked2,

    },
    {
        name: 'screen2',
        image: img2,
        image2: checked3,
        active: false
    }
]

const About = ({ route }) => {
    console.log("TCL ~ file: index.js ~ line 43 ~ About ~ route", route?.name)
    const navigation = useNavigation()
    const [activescreen, setActiveScreen] = useState("screen1")
    const [activeTrue, setActiveTrue] = useState('screen1')

    const _renderUIScreen = (screen) => {
        switch (screen) {
            case 'screen1':
                return <Screen1 />
            case 'screen2':
                return <Screen2 />
            default:
                return <Screen3 />
        }
    }

    return (
        <View style={styles.about__container}>
            <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()}>
                <View style={{ padding: 20, width: '10%' }}>
                    <SvgXml xml={arrow} />
                </View>
            </TouchableOpacity>
            <View style={styles.about__top}>
                {
                    screens.map((screen) => (
                        <TouchableOpacity activeOpacity={0.9} style={{ position: 'relative' }} onPress={() => {
                            setActiveTrue(screen.name)
                            setActiveScreen(screen.name)
                        }
                        }>
                            <View>
                                <View style={{ height: 110 }}>
                                    {screen.name === activeTrue ?
                                        <Image resizeMode={"contain"} source={screen?.image2} /> :
                                        <Image source={screen?.image} />
                                    }
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>

            <View style={styles.about__screens}>
                {
                    _renderUIScreen(activescreen)
                }
            </View>
        </View>
    )
}

export default About

