import React, { useState } from 'react'
import { Text, View, Image } from 'react-native'
import { Typo, Button } from '../../../../components'
import all from '../../../../assets/all.png'
import other from '../../../../assets/other2.png'
import male from '../../../../assets/male2.png'
import female from '../../../../assets/female2.png'
import ToggleSwitch from 'toggle-switch-react-native'
import { styles } from './style'

const Screen1 = () => {
    const [toggle, setToggle] = useState(true)
    const [disable, setDisable] = useState(true)
    return (
        <>
            <View style={styles.screen1__top}>
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
            <View style={toggle ? styles.screen1__center : styles.screen1__disable}>
                <Typo style={styles.screen1__centerHeading} children={"Who can rank you?"} />
                <View style={styles.screen1__centerView}>
                    <View style={styles.screen1__imageView}>
                        <Image style={styles.screen1Img} source={all} />
                        <Typo children="All" style={{ fontSize: 18, textAlign: 'center' }} />
                    </View>
                    <View style={styles.screen1__imageView}>
                        <Image style={styles.screen1Img} source={male} />
                        <Typo children="Male" style={{ fontSize: 18, textAlign: 'center' }} />
                    </View>
                    <View style={styles.screen1__imageView}>
                        <Image style={styles.screen1Img} source={female} />
                        <Typo children="Female" style={{ fontSize: 18, textAlign: 'center' }} />
                    </View>
                    <View style={styles.screen1__imageView}>
                        <Image style={styles.screen1Img} source={other} />
                        <Typo children="Other" style={{ fontSize: 18, textAlign: 'center' }} />
                    </View>
                </View>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Button disable={!toggle && disable} customStyle={{ marginTop: 10 }} text="Done" />
                </View>
            </View>
        </>
    )
}

export default Screen1

