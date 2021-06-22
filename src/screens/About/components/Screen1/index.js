import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Typo, Button } from '../../../../components'
import LinearGradient from 'react-native-linear-gradient';
import ToggleSwitch from 'toggle-switch-react-native'
import { styles } from './style'
import { SvgXml } from 'react-native-svg';
import othersvg from '../../../../assets/othersvg'
import maleSvg from '../../../../assets/maleSvg'
import femalesvg from '../../../../assets/femalesvg'
import allsvg from '../../../../assets/allsvg'

const Screen1 = () => {
    const [toggle, setToggle] = useState(true)
    const [disable, setDisable] = useState(true)
    const [activeMale, setActiveMale] = useState(false)
    const [activeFemale, setActiveFemale] = useState(false)
    const [activeOther, setActiveOther] = useState(false)
    const [activeAll, setActiveAll] = useState(false)

    const selectAll = () => {
        setActiveAll(!activeAll)
        if (!activeAll) {
            setActiveMale(true)
            setActiveFemale(true)
            setActiveOther(true)
        }
        else {
            setActiveMale(false)
            setActiveFemale(false)
            setActiveOther(false)
        }
    }

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
                <Typo children={!toggle ? "disable" : 'Applied'} style={{ fontSize: 10, paddingTop: 10 }} />
            </View>
            <View style={toggle ? styles.screen1__center : styles.screen1__disable}>
                <Typo style={styles.screen1__centerHeading} children={"Who can rank you?"} />
                <View style={styles.screen1__centerView}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => selectAll()}>
                        <View style={styles.screen1__imageView}>
                            <LinearGradient start={{ x: 0.1, y: 0.55 }} end={{ x: 0.5, y: 1.0 }}
                                locations={[0.5, 0.6]} colors={activeAll ? ['#00a6d1', '#00a6d1'] : ['#676a6b', '#565859']} style={{ height: '100%', borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                                <SvgXml xml={allsvg} />
                            </LinearGradient>
                            <Typo children="All" style={{ fontSize: 18, textAlign: 'center' }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveMale(!activeMale)}>
                        <View style={styles.screen1__imageView}>
                            <LinearGradient start={{ x: 0.1, y: 0.55 }} end={{ x: 0.5, y: 1.0 }}
                                locations={[0.5, 0.6]} colors={activeMale ? ['#00a6d1', '#00a6d1'] : ['#676a6b', '#565859']} style={{ height: '100%', borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                                <SvgXml xml={maleSvg} />
                            </LinearGradient>
                            <Typo children="Male" style={{ fontSize: 18, textAlign: 'center' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveFemale(!activeFemale)}>
                        <View style={styles.screen1__imageView}>
                            <LinearGradient start={{ x: 0.1, y: 0.55 }} end={{ x: 0.5, y: 1.0 }}
                                locations={[0.5, 0.6]} colors={activeFemale ? ['#00a6d1', '#00a6d1'] : ['#676a6b', '#565859']} style={{ height: '100%', borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                                <SvgXml xml={femalesvg} />
                            </LinearGradient>
                            <Typo children="Female" style={{ fontSize: 18, textAlign: 'center' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => setActiveOther(!activeOther)}>
                        <View style={styles.screen1__imageView}>
                            <LinearGradient start={{ x: 0.1, y: 0.55 }} end={{ x: 0.5, y: 1.0 }}
                                locations={[0.5, 0.6]} colors={activeOther ? ['#00a6d1', '#00a6d1'] : ['#676a6b', '#565859']} style={{ height: '100%', borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                                <SvgXml xml={othersvg} />
                            </LinearGradient>
                            <Typo children="Other" style={{ fontSize: 18, textAlign: 'center' }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Button disable={!toggle && disable} customStyle={{ marginTop: 10 }} text="Done" />
                </View>
            </View>
        </>
    )
}

export default Screen1

