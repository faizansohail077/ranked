import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { TextInput, View, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'
import arrow from '../../assets/arrow'
import edit from '../../assets/edit'
import email from '../../assets/message2'

import { Button, Typo } from '../../components'
import { styles } from './style'

const Query = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.query__container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ marginBottom: 15 }}>
                    <View style={styles.query__header}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View>
                                <SvgXml xml={arrow} />
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Typo children={"Ask a query"} />
                        </View>
                        <View>
                        </View>
                    </View>
                </View>

                <View style={{ marginVertical: 30 }}>
                    <View style={styles.query__centerTop}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <SvgXml xml={email} />
                            <TextInput style={{ width: '80%' }} placeholder="Johalex@gmail.com" />
                        </View>
                        <View style={styles.query__centerTopIcon}>
                            <SvgXml xml={edit} />
                        </View>
                    </View>
                    <View style={styles.query__centerCenter}>
                        <TextInput multiline={false} numberOfLines={20} textAlignVertical={'top'} style={{ justifyContent: 'flex-start' }} placeholder="hello" />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button text={"Submit"} />
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

export default Query

