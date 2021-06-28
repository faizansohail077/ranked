import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import filter from '../../assets/filterWhite'
import { Typo } from '../../components'
import { styles } from './style'
import * as Progress from 'react-native-progress';
import other from '../../assets/other2'
import multiple from '../../assets/multiple'
import calender from '../../assets/starCalender'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions'
import About from '../About'

const Analytics = () => {
    const navigation = useNavigation()
    const [rating, setRating] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const [selfScore, setSelfScore] = useState("")
    const { analytics } = useSelector(state => state?.authReducer)
    const [largest, setLargest] = useState("")
    const [gender, setGender] = useState("")

    console.log("TCL ~ file: index.js ~ line 24 ~ Analytics ~ largest", largest)
    console.log("🚀 ~ file: index.js ~ line 23 ~ Analytics ~ data", analytics)

    const dispatch = useDispatch()
    const action = bindActionCreators(actions, dispatch)
    console.log(openModal, openModal)

    useEffect(() => {
        action.getAnalytics().then((res) => {
            console.log("TCL ~ file: index.js ~ line 33 ~ action.getAnalytics ~ res", res)
            setSelfScore(res?.self_score)
        })
    }, [])

    useEffect(() => {
        console.log('useEffect started')
        if (analytics && analytics.docData && analytics.docData.length) {
            let age = analytics?.docData?.map((doc) => doc.age)
            let largest = Math.max(...age)
            let self = analytics?.docData?.map((doc) => doc?.rating)
            let gender = analytics?.docData?.map((doc) => doc?.gender)
            console.log("TCL ~ file: index.js ~ line 44 ~ useEffect ~ gender", gender[0])
            let count = 0
            self.map(item => {
                count += item
            })
            let avg = count / self.length + 1
            setRating(Math.floor(avg))
            setLargest(largest)
            setGender(gender[0])
        }
        else {
            console.log("analytics not found")
        }
    }, [openModal, analytics])

    return (
        <View style={styles.analytics__container}>
            <View style={styles.analytics__top}>
                <View>
                </View>
                <View>
                    <Typo children={"Analytics"} style={{ fontSize: 38 }} />
                </View>
                <View>
                    <SvgXml onPress={() => setOpenModal(!openModal)} xml={filter} />
                </View>
            </View>
            <View style={styles.analytics__view}>
                <View style={styles.analytics__viewMain}>
                    <View style={styles.analytics__viewInside}>
                        <Typo style={styles.analytics__viewText} children={analytics?.rating && analytics?.rating ? analytics?.rating : rating && rating ? rating : 0} />
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
                    <View>
                        <Progress.Circle thickness={5} unfilledColor="gray" fill="white" color="yellow" textStyle={{ color: 'black', textAlign: 'center' }} formatText={() => `${selfScore}`} borderColor="gray" showsText={true} progress={selfScore} size={110} />
                    </View>
                </View>
            </View>

            <View style={styles.analytics__bottomView}>
                <View style={styles.analytics__bottomSubView}>
                    <View style={styles.analytics__bottomViewBottom}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <SvgXml xml={other} />
                            <Typo children={gender && gender ? `${gender}` : "default"} style={{ fontSize: 16 }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <SvgXml xml={calender} />
                            <Typo children={largest && largest ? `<${largest}` : "default"} style={{ paddingLeft: 2, fontSize: 16 }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <SvgXml xml={multiple} />
                            <Typo children="50 Miles" style={{ paddingLeft: 2, fontSize: 12 }} />
                        </View>
                    </View>
                </View>
            </View>

            <About openModal={openModal} modalToggle={() => setOpenModal(!openModal)} />

        </View>
    )
}

export default Analytics
