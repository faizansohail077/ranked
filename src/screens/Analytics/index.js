import React, { useEffect, useState } from 'react'
import {  View } from 'react-native'
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
    const [rating,setRating ] = useState("")
    const [openModal,setOpenModal]=useState(false)
    const [selfScore,setSelfScore]=useState("")
    const navigation = useNavigation()
    const {analytics} = useSelector(state=>state?.authReducer)
    console.log("🚀 ~ file: index.js ~ line 23 ~ Analytics ~ data", analytics) 
    const dispatch = useDispatch()
    const action = bindActionCreators(actions,dispatch)
    console.log(openModal,openModal)
  
    useEffect(()=>{
        let resArray =[]
           action.getAnalytics().then((res)=>{
            setSelfScore(res?.self_score)
            resArray.push(res)
            let count = 0
            resArray.map(item=>{ 
                count += item?.rating
            })
            let avg = count / resArray.length +1
            setRating(Math.floor(avg))
        })

    },[])

    return (
        <View style={styles.analytics__container}>
            <View style={styles.analytics__top}>
                {analytics?.docData?.map((item)=>{
                console.log("🚀 ~ file: index.js ~ line 47 ~ {analytics?.docData?.map ~ item", item?.age )
                    
                })}
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
                        <Typo style={styles.analytics__viewText} children={analytics?.rating && analytics?.rating ? analytics?.rating :  rating && rating ? rating:0} />
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
                            <Typo children={analytics &&  analytics?.gender ? `${analytics?.gender}` : "default"} style={{ fontSize: 16 }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <SvgXml xml={calender} />
                            <Typo children={analytics &&  analytics?.age ? `<${analytics?.age}` : "default"} style={{ paddingLeft: 2, fontSize: 16 }} />
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
