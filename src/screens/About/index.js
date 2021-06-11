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

const screens = [
    {
        name: 'screen1',
        image: img1,
        active: true

    },
    {
        name: 'screen3',
        image: img3,
        active: false
    },
    {
        name: 'screen2',
        image: img2,
        active: false
    }
]

const About = () => {
    const navigation = useNavigation()
    const [activescreen, setActiveScreen] = useState("screen1")
    const [activeTrue, setActiveTrue] = useState('screen1')
    useEffect(() => {
        navigation.dangerouslyGetParent().setOptions({
            tabBarVisible: false
        })
    }, [])

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
            <View style={{ padding: 20 }}>
                <SvgXml onPress={() => navigation.goBack()} xml={arrow} />
            </View>
            <View style={styles.about__top}>
                {
                    screens.map((screen) => (
                        <TouchableOpacity style={{ position: 'relative' }} onPress={() => {
                            setActiveTrue(screen.name)
                            setActiveScreen(screen.name)
                        }
                        }>
                            <View>
                                <View style={{ height: 110 }}>
                                    {screen.name === activeTrue ?
                                        <Image style={{ height: '100%' }} resizeMode={"contain"} source={screen?.image} /> :
                                        <Image source={screen?.image} />
                                    }
                                </View>
                                <View style={{ position: 'absolute', top: 15, left: 20 }}>
                                    {screen.name === activeTrue && <SvgXml xml={checkbox} />}
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

