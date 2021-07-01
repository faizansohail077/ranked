import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { useEffect } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'
import arrow from '../../assets/arrow'
import calender from '../../assets/calender'
import edit from '../../assets/editProfile'
import location from '../../assets/location'
import path from '../../assets/path'
import profile from '../../assets/profile'
import zip from '../../assets/zip'
import { Button, Input, Typo } from '../../components'
import { styles } from './style'
import { useSelector } from 'react-redux'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions'
import moment from 'moment'
const EditProfile = ({ route }) => {
    const navigation = useNavigation()
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const { user } = useSelector(state => state.authReducer)
    const [dob,setDob]=useState(user?.dob.toDate())
    const [showdate, setShowDate] = useState(`${moment(dob).format("YYYY/M/DD")}`)
    const [username, setUserName] = useState(user?.fullname)
    const [country, setCountry] = useState(user?.country)
    const [city, setCity] = useState(user?.city)
    const [zipCode, setZipCode] = useState(user?.zipCode)
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false)
    const [disable, setDisable] = useState(false)
    const dispatch = useDispatch()
    const action = bindActionCreators(actions, dispatch)

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        let todaydate = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        let newDate = year + "/" + month + "/" + todaydate
        setShowDate(newDate)
        hideDatePicker();
    };

    const submit = () => {
        let zipReg = /^\d{5}(?:[-\s]\d{4})?$/
        if (username == '') {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
        }
        if (country == '') {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
        }
        if (city == "") {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
        }
        if (zipCode == '' || zipReg.test(zipCode) == false) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
        }
        else {
            setDisable(true)
            setLoader(true)
            action.profileData(username,new Date(showdate), country, city, zipCode)
                .then(() => {
                    action.getUser().then(()=>{
                        navigation.navigate("Ranked")
                    })
                    
                    setDisable(false)
                    setLoader(false)
                })
                .catch(err => {
                    setDisable(false)
                    setLoader(false)
                    console.log("TCL ~ file: index.js ~ line 85 ~ submit ~ err", err)
                })
        }
    }

    return (
        <View style={styles.edit__container}>
            {error && console.log("Kindly check input fields")}
            <ScrollView style={{ flex: 1 }}>
                <View style={{ margin: 15 }}>
                    <View style={styles.edit__header}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={{ padding: 10 }}>
                                <SvgXml xml={arrow} />
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Typo children={"Edit Profile"} />
                        </View>
                        <View style={{ padding: 10,width:13.5 }}>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', marginVertical: 20 }}>
                        <SvgXml xml={edit} />
                    </View>
                    <Input value={username} onChangeText={(e) => setUserName(e)} customContainerStyle={{ marginVertical: 30 }} icon={profile} placeholder={'John Alex'} />
                    <TouchableOpacity activeOpacity={0.9} onPress={() => showDatePicker()}>
                        <Input editable={false} value={showdate} customContainerStyle={{ marginVertical: 30 }} icon={calender} placeholder={`${moment(dob).format("YYYY/M/DD")}`} />
                    </TouchableOpacity>
                    <Input value={country} onChangeText={(e) => setCountry(e)} customContainerStyle={{ marginVertical: 30 }} icon={path} placeholder={'United States of America'} />
                    <View style={{ flexDirection: 'row' }}>
                        <Input onChangeText={(e) => setCity(e)} value={city} customStyle={{ width: '60%' }} customContainerStyle={{ width: '50%' }} icon={location} placeholder={'New York'} />
                        <Input onChangeText={(e) => setZipCode(e)} value={zipCode} customStyle={{ width: '65%' }} customContainerStyle={{ width: '50%' }} icon={zip} placeholder={'1 0 0 0 1 '} />
                    </View>
                    <View style={styles.edit__btnContainer}>
                        <Button disable={disable} onClick={() => submit()} text={<Typo children={loader ? <ActivityIndicator size="large" color="white" /> : "Update"} />} />
                    </View>
                </View>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </ScrollView>
        </View>
    )
}

export default EditProfile

