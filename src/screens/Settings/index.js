import React, { useEffect } from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'
import { Typo } from '../../components'
import arrow from '../../assets/arrow'
import { useNavigation } from '@react-navigation/core'
import { styles } from './style'
import Help from '../Help/component'
const Settings = () => {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.dangerouslyGetParent().setOptions({
            tabBarVisible: false
        })
    })

    return (
        <View style={styles.setting__container}>
            <View style={{ marginBottom: 15 }}>
                <View style={styles.setting__header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View>
                            <SvgXml xml={arrow} />
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Typo children={"Setting"} />
                    </View>
                    <View>
                    </View>
                </View>
                <Help where={"accounts"} subText={"Update your password"} text={"Accounts"} />
                <Help where={"selfscore"} subText={"Update Your Profile Self Score"} text={"Self Score"} />

            </View>
        </View>
    )
}

export default Settings
