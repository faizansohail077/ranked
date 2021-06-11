import React, { useState } from 'react'
import { View } from 'react-native'
import { Typo, Button } from '../../../../components'
import ToggleSwitch from 'toggle-switch-react-native'
import { styles } from './style'
import Slider from "react-native-slider";

const Screen2 = () => {
    const [toggle, setToggle] = useState(true)
    const [disable, setDisable] = useState(true)
    const [state, setState] = useState(0.2);
    return (
        <>
            <View style={styles.screen2__top}>
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
            <View style={toggle ? styles.screen2__center : styles.screen2__disable}>
                <Typo style={styles.screen2__centerHeading} children={"Who can rank you?"} />
                {/* <View style={{ margin: 20 }}>
                    <Slider
                        value={state}
                        // step={20}
                        onValueChange={value => setState(value)}
                    />
                    <Typo children={state} />

                </View> */}
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Button disable={!toggle && disable} customStyle={{ marginTop: 10 }} text="Done" />
                </View>
            </View>
        </>
    )
}

export default Screen2

