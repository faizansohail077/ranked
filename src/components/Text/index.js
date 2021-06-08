import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './style'
const Typo = ({ children, style }) => {
    return (
        <View>
            <Text style={[styles.typo__font, style]}>{children}</Text>
        </View>
    )
}

export default Typo

