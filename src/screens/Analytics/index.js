import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import filter from '../../assets/filter2'
import { Typo } from '../../components'
import { styles } from './style'
import * as Progress from 'react-native-progress';

const Analytics = () => {
    const width = Dimensions.get("screen").width
    const height = Dimensions.get("screen").height

    return (
        <View style={{ flex: 1, backgroundColor: '#011629' }}>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, marginHorizontal: 20 }}>
                <View>
                </View>
                <View>
                    <Typo children={"Analytics"} style={{ fontSize: 38 }} />
                </View>
                <View>
                    <SvgXml xml={filter} />
                </View>
            </View>
            <View style={{ height: height / 2.7, alignItems: 'center' }}>
                <View style={{ borderWidth: 4, borderColor: 'rgba(169,169,169,0.7)', backgroundColor: 'white', flex: 1, width: width / 1.2, borderRadius: 200, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ position: 'relative', flexDirection: 'row', alignItems: 'flex-end' }}>
                        <Typo style={{ color: '#011629', fontSize: 200 }} children={"8"} />
                        <View style={{ position: 'absolute', left: 110, flexDirection: 'row', bottom: 30 }}>
                            <Typo style={{ color: '#011629', fontSize: 35, fontWeight: 'bold' }} children={'/'} />
                            <Typo style={{ color: '#011629', fontSize: 35, fontWeight: 'bold' }} children={'10'} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginVertical: 20 }}>
                <Typo style={{ color: 'white', textAlign: 'center' }} children={'Overall score'} />
            </View>
            {/* <Progress.Pie progress={1} size={50} /> */}
        </View>
    )
}

export default Analytics

