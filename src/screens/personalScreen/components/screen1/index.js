import React, { useState } from 'react'
import { ScrollView, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { styles } from './style'
import { Button, Input, Typo } from '../../../../components'
import zip from '../../../../assets/zip'
import profile from '../../../../assets/profile'
import path from '../../../../assets/path'
import location from '../../../../assets/location'
import calender from '../../../../assets/calender'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../../store/actions'

const Screen1 = ({ onPress }) => {
    const [country, setCountry] = useState("")
    const [username, setUserName] = useState("")
    const [city, setCity] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [error, setError] = useState("")
    const [disable, setDisable] = useState(false)
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(1999 + "/" + 9 + "/" + 28)
    const [loader, setLoader] = useState(false)
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

    const dispatch = useDispatch()
    const action = bindActionCreators(actions, dispatch)

    const onChange = (event, selectedDate) => {
        let myDate = new Date(selectedDate)
        let date_date = myDate.getDate()
        let date_year = myDate.getFullYear()
        let date_month = myDate.getMonth()

        let fullDate = `${date_year}/${months[date_month]}/${date_date}`

        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(fullDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const submit = () => {
        let zipReg = /^\d{5}(?:[-\s]\d{4})?$/
        if (username == "" || username.trim()) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        }
        if (country == '' || country.trim()) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
        }
        if (city == '' || city.trim()) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
        }
        if (zipCode == "" || zipReg.test(zipCode) == false) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        }
        if (date == 1999 + "/" + 9 + "/" + 28) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        }
        else {
            setDisable(true)
            setLoader(true)
            action.profileData(username, date, country, city, zipCode)
                .then((res) => {
                    console.log("TCL ~ file: index.js ~ line 81 ~ action.profileData ~ res", res)
                    setDisable(false)
                    setLoader(false)
                    onPress()
                })
                .catch(err => {
                    setDisable(false)
                    setLoader(false)
                    console.log("TCL ~ file: index.js ~ line 85 ~ submit ~ err", err)
                })
        }
    }


    return (
        <View style={styles.screen1__container}>
            <ScrollView style={{ flex: 1 }}>
                <Input value={username} onChangeText={(e => setUserName(e))} customContainerStyle={{ marginVertical: 30 }} icon={profile} placeholder={'Full Name'} />
                <TouchableOpacity onPress={showDatepicker} activeOpacity={0.9}>
                    <Input editable={false} value={`${date}`} customContainerStyle={{ marginVertical: 30 }} icon={calender} placeholder={'Date of birth'} />
                </TouchableOpacity>
                <Input value={country} onChangeText={(e => setCountry(e))} customContainerStyle={{ marginVertical: 30 }} icon={path} placeholder={'Country'} />
                <View style={{ flexDirection: 'row' }}>
                    <Input value={city} onChangeText={(e => setCity(e))} customStyle={{ width: '60%' }} customContainerStyle={{ width: '50%' }} icon={location} placeholder={'City'} />
                    <Input value={zipCode} onChangeText={(e) => setZipCode(e)} customStyle={{ width: '65%' }} customContainerStyle={{ width: '50%' }} icon={zip} placeholder={'Zip code'} />
                </View>
                <View style={styles.screen1__btnContainer}>
                    {/* {error && <Typo children={"Next"} />} */}
                    <Button disable={disable} customStyle={{ width: '60%' }} onClick={() => submit()} text={<Typo children={loader ? <ActivityIndicator color="white" size="small" /> : "Next"} />} />
                </View>
                {show && (
                    <DateTimePicker
                        testID="datePicker"
                        value={new Date(date)}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
            </ScrollView>
        </View>
    )
}
export default Screen1

