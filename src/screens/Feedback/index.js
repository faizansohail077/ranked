import React, { useEffect } from 'react'
import { ScrollView, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button, Typo } from '../../components'
import { useNavigation } from '@react-navigation/native';
import { styles } from './style'
import { SvgXml } from 'react-native-svg'

import arrow from '../../assets/arrow'
import email from '../../assets/message2'
import edit from '../../assets/edit'
import feedback from '../../assets/feedback2'

const FeedBack = () => {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.dangerouslyGetParent().setOptions({
            tabBarVisible: false
        })
    })

    return (
        <View style={styles.feedback__container}>
            <View style={{ marginBottom: 15 }}>
                <View style={styles.feedback__header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View>
                            <SvgXml xml={arrow} />
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Typo children={"FeedBack"} />
                    </View>
                    <View>
                    </View>
                </View>
            </View>

            <View style={{ marginVertical: 30 }}>
                <ScrollView>
                    <View style={styles.feedback__centerTop}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <SvgXml xml={email} />
                            <TextInput style={{ width: '80%' }} placeholder="Johalex@gmail.com" />
                        </View>
                        <View style={styles.feedback__centerTopIcon}>
                            <SvgXml xml={edit} />
                        </View>
                    </View>
                    <View style={styles.feedback__centerCenter}>
                        <TextInput multiline={true} numberOfLines={10} textAlignVertical={'top'} style={{ justifyContent: 'flex-start', height: 150 }} placeholder="hello" />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button text={"Submit"} />
                    </View>
                </ScrollView>
            </View>
            <View>
                <SvgXml xml={feedback} />
            </View>
        </View>
    )
}

export default FeedBack

