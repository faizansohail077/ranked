import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { styles } from './style'
import { Button, Input } from '../../../../components'
import zip from '../../../../assets/zip'
import profile from '../../../../assets/profile'
import path from '../../../../assets/path'
import location from '../../../../assets/location'
import calender from '../../../../assets/calender'

const Screen1 = ({ onPress }) => {
    return (
        <View style={styles.screen1__container}>
            <ScrollView style={{ flex: 1 }}>
                <Input customContainerStyle={{ marginVertical: 30 }} icon={profile} placeholder={'Full Name'} />
                <Input customContainerStyle={{ marginVertical: 30 }} icon={calender} placeholder={'Date of birth'} />
                <Input customContainerStyle={{ marginVertical: 30 }} icon={path} placeholder={'Country'} />
                <View style={{ flexDirection: 'row' }}>
                    <Input customStyle={{ width: '60%' }} customContainerStyle={{ width: '50%' }} icon={location} placeholder={'City'} />
                    <Input customStyle={{ width: '65%' }} customContainerStyle={{ width: '50%' }} icon={zip} placeholder={'Zip code'} />
                </View>
                <View style={styles.screen1__btnContainer}>
                    <Button onClick={() => onPress()} text="Next" />
                </View>
            </ScrollView>
        </View>
    )
}
export default Screen1

