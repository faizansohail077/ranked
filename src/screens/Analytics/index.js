import React from 'react'
import { Dimensions, View, Image } from 'react-native'
import { SvgXml } from 'react-native-svg'
import filter from '../../assets/filter2'
import { Typo } from '../../components'
import { styles } from './style'
import * as Progress from 'react-native-progress';
import bg from '../../assets/roundbg.png'
import other from '../../assets/other2'
import multiple from '../../assets/multiple'
import calender from '../../assets/starCalender'

const Analytics = () => {

    return (
        <View style={styles.analytics__container}>
            <View style={styles.analytics__top}>
                <View>
                </View>
                <View>
                    <Typo children={"Analytics"} style={{ fontSize: 38 }} />
                </View>
                <View>
                    <SvgXml xml={filter} />
                </View>
            </View>
            <View style={styles.analytics__view}>
                <View style={styles.analytics__viewMain}>
                    <View style={styles.analytics__viewInside}>
                        <Typo style={styles.analytics__viewText} children={"8"} />
                        <View style={styles.analytics__subTextView}>
                            <Typo style={styles.analytics__subText} children={'/'} />
                            <Typo style={styles.analytics__subText} children={'10'} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginVertical: 20 }}>
                <Typo style={{ color: 'white', textAlign: 'center' }} children={'Overall score'} />
            </View>
            <View style={styles.analytics__progrssView}>
                <View>
                    <Typo children={"Self Score"} />
                </View>

                <View style={styles.analytics__porgressTop}>
                    <View style={styles.analytics__porgressTopLeft}>
                    </View>
                    <View style={styles.analytics__progressTopRight}>
                    </View>
                </View>

                <View>
                    <Progress.Circle thickness={3} unfilledColor="gray" color="yellow" textStyle={{ color: 'white', textAlign: 'center' }} formatText={(progress) => `${progress}`} borderColor="gray" showsText={true} progress={0.3} size={110} />
                </View>
            </View>

            <View style={styles.analytics__bottomView}>
                <Image style={{ position: 'absolute' }} source={bg} />
                <View style={styles.analytics__bottomViewBottom}>
                    <SvgXml style={{ height: 30, width: 30 }} xml={other} />
                    <SvgXml xml={multiple} />
                    <SvgXml xml={calender} />
                </View>
            </View>



        </View>
    )
}

export default Analytics
