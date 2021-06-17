import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import analytics from '../../assets/analytics'
import analyticsdark from '../../assets/analyticsdark'
import ranked from '../../assets/ranked'
import rankedlight from '../../assets/rankedLight'
import { Typo } from '../../components'

const CustomBottom = ({ state }) => {
    const navigation = useNavigation()

    return (
        <View style={{ height: 50, paddingVertical: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate("Ranked")}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: '50%' }}>
                        {state.index == 0 ? <SvgXml xml={ranked} /> : <SvgXml xml={rankedlight} />}
                        {state.index == 0 && <Typo children="Ranked" style={{ color: 'black', fontSize: 14, paddingLeft: 5 }} />}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ height: 40 }} activeOpacity={0.9} onPress={() => navigation.navigate("Analytics")}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: '50%' }}>
                        {state.index == 1 ? <SvgXml xml={analyticsdark} /> : <SvgXml xml={analytics} />}
                        {state.index == 1 && <Typo children="analytics" style={{ color: 'black', fontSize: 14, paddingLeft: 5 }} />}
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default CustomBottom

const styles = StyleSheet.create({})
