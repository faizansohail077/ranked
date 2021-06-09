import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
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

const EditProfile = () => {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.dangerouslyGetParent().setOptions({
            tabBarVisible: false
        });
    }, [])

    return (
        <View style={styles.edit__container}>
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
                        <View>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', marginVertical: 20 }}>
                        <SvgXml xml={edit} />
                    </View>
                    <Input customContainerStyle={{ marginVertical: 30 }} icon={profile} placeholder={'Full Name'} />
                    <Input customContainerStyle={{ marginVertical: 30 }} icon={calender} placeholder={'Date of birth'} />
                    <Input customContainerStyle={{ marginVertical: 30 }} icon={path} placeholder={'Country'} />
                    <View style={{ flexDirection: 'row' }}>
                        <Input customStyle={{ width: '60%' }} customContainerStyle={{ width: '50%' }} icon={location} placeholder={'City'} />
                        <Input customStyle={{ width: '65%' }} customContainerStyle={{ width: '50%' }} icon={zip} placeholder={'Zip code'} />
                    </View>
                    <View style={styles.edit__btnContainer}>
                        <Button onClick={() => onPress()} text={<Typo children={"Update"} />} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default EditProfile

