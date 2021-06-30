import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'
import arrow from '../../../assets/arrow-right'
import { Typo } from '../../../components'
import { styles } from './style'

const HelpComponent = ({ text, subText, where,to }) => {
    const navigation = useNavigation()
    return (
        <>
        {to? <TouchableOpacity  onPress={to} activeOpacity={0.5}>
            <View style={styles.help__container}>
                <Typo style={{ margin: 15, fontSize: 17 }} children={text} />
                <Typo style={styles.help__subtext} children={subText} />
                <SvgXml style={styles.help__arrowIcon} xml={arrow} />
            </View>
        </TouchableOpacity>
        :
        <TouchableOpacity  onPress={() => navigation.navigate(where ? where : "")} activeOpacity={0.5}>
            <View style={styles.help__container}>
                <Typo style={{ margin: 15, fontSize: 17 }} children={text} />
                <Typo style={styles.help__subtext} children={subText} />
                <SvgXml style={styles.help__arrowIcon} xml={arrow} />
            </View>
        </TouchableOpacity>
        }
        </>
    )
}

export default HelpComponent

