import React, { useState } from 'react'
import { View, Image } from 'react-native'
import { Typo, Button } from '../../../../components'
import ToggleSwitch from 'toggle-switch-react-native'
import { styles } from './style'
import miles from '../../../../assets/miles.png'
const Screen3 = () => {
    const [toggle, setToggle] = useState(true)
    const [disable, setDisable] = useState(true)
    return (
        <>
            <View style={styles.screen3__top}>
                <ToggleSwitch
                    isOn={toggle}
                    onColor="white"
                    offColor="white"
                    size='small'
                    thumbOnStyle={{ color: 'black', backgroundColor: '#E4576C' }}
                    thumbOffStyle={{ color: 'black', backgroundColor: 'gray', opacity: 0.3 }}
                    onToggle={isOn => setToggle(isOn)}
                />
                <Typo children={!toggle ? "disable" : 'Applied'} style={{ fontSize: 14, paddingTop: 10 }} />
            </View>
            <View style={toggle ? styles.screen3__center : styles.screen3__disable}>
                <Typo style={styles.screen3__centerHeading} children={"How far from you?"} />
                <View style={{ marginHorizontal: 10 }}>
                    <Image resizeMode="cover" source={miles} />
                </View>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Button disable={!toggle && disable} customStyle={{ marginTop: 10 }} text="Done" />
                </View>
            </View>
        </>
    )
}

export default Screen3

