import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import { SvgXml } from 'react-native-svg'

const Button = ({ icon, onClick, text, customStyle }) => {
    return (
        <TouchableOpacity onPress={onClick} style={[styles.button__container, customStyle]} >
            {icon && icon ?
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <SvgXml xml={icon} />
                    <View>
                        <Text style={styles.button__text}>{text}</Text>
                    </View>
                </View> : <View>
                    <Text style={styles.button__text}>{text}</Text>
                </View>
            }
        </TouchableOpacity>
    )
}

export default Button

