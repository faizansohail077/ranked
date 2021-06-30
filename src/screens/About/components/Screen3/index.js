import React, { useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Typo, Button } from '../../../../components'
import ToggleSwitch from 'toggle-switch-react-native'
import { styles } from './style'
import miles from '../../../../assets/miles2.png'
import { SvgXml } from 'react-native-svg'
import minus2 from '../../../../assets/minus2'
import plus2 from '../../../../assets/plus2'

const Screen3 = () => {
    const [toggle, setToggle] = useState(false)
    const [disable, setDisable] = useState(true)
    const [value,setValue] =useState(10) 

    const minus = () =>{ 
        if(value > 0 ){
            setValue(value -1 )
        }
    }
    const plus = ()=>{
        if(value >= 0 ){
            setValue(value +1 )
        }
    }

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
                <View  style={{position:'relative',marginTop:20}}>
                <View>
                    <Image resizeMode="contain" source={miles} />
                </View>
                <View>
                    <View style={styles.screen3__milesView}>
                        <Typo children={value} style={styles.screen3__milesViewText} />
                        <Typo children={"Miles"}style={styles.screen3__milesViewText2} />
                    </View>

                    <View style={{position:'absolute',bottom:15,left:80}}>
                    <TouchableOpacity onPress={()=>minus()} >
                    <SvgXml onPress={()=>minus()} xml={minus2} />
                    </TouchableOpacity>
                    </View>

                    <View style={{position:'absolute',bottom:15,right:80}}>
                    <TouchableOpacity onPress={()=>plus()}>
                    <SvgXml xml={plus2} />
                    </TouchableOpacity>
                    </View>
                </View>
                
                </View>
                <View style={{ marginTop: 20,width:'100%',alignItems:'center' }}>
                    <Button disable={!toggle && disable} customStyle={{ marginTop: 10 }} text="Done" />
                </View>
            </View>
        </>
    )
}

export default Screen3

