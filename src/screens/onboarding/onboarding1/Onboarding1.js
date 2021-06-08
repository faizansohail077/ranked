import React from 'react'
import { Text, View, Image } from 'react-native'
import { Button, Typo } from '../../../components'
import { styles } from './style'

const Onboarding1 = ({ title, onPress, image, text }) => {
    return (
        <View style={styles.onboarding__container}>
            <Text style={styles.onboarding__heading}><Typo style={styles.typo__style} children={title} /></Text>
            <View style={styles.onboarding__image}>
                <Image source={image} />
            </View>
            <Text style={styles.onboarding__para}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione et eveniet voluptatibus repellendus. Saepe delectus molestiae deserunt, architecto assumenda temporibus explicabo!</Text>
            <View style={{ alignItems: 'center' }}>
                <Button onClick={onPress} text={<Typo children={text} />} />
            </View>
        </View>
    )
}

export default Onboarding1

