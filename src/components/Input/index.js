import React from 'react'
import { TextInput, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { styles } from './style'
import { colors } from '../../style/color'

const Input = ({ placeholder, icon, customStyle }) => {
    return (
        <View style={styles.input__container}>
            {icon &&
                <SvgXml xml={icon} />}
            <TextInput placeholderTextColor={colors.placholder} placeholder={placeholder} style={[styles.input__field, customStyle]} />
        </View>
    )
}

export default Input

