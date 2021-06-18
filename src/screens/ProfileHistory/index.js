import React, { useEffect } from 'react'
import { Dimensions, FlatList, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'
import arrow from '../../assets/arrow'
import person1 from '../../assets/guy.png'
import person2 from '../../assets/bgPic.png'
import { styles } from './style'


import { Typo } from '../../components'
import { useNavigation } from '@react-navigation/core'

const ProfileHistory = () => {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.addListener(() => {
            dangerouslyGetParent().setOptions({
                tabBarVisible: false
            });
        })
    }, [])


    const data = [{ id: 1, tag: 'Updated 1st Dec ,2020', image: person1, score: 1, subscore: 2, scoreTitle: 'Overall Score', subScoreTitle: 'Self Score' },
    { id: 2, tag: 'Updated 1st Dec ,2020', image: person2, score: 2, subscore: 3, scoreTitle: 'Overall Score', subScoreTitle: 'Self Score' },
    { id: 3, tag: 'Updated 1st Dec ,2020', image: person2, score: 2, subscore: 3, scoreTitle: 'Overall Score', subScoreTitle: 'Self Score' },
    { id: 5, tag: 'Updated 1st Dec ,2020', image: person2, score: 2, subscore: 3, scoreTitle: 'Overall Score', subScoreTitle: 'Self Score' },

    ]
    return (
        <View style={styles.profile__container}>
            <View style={{ marginBottom: 15 }}>
                <View style={styles.profile__header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.profile__headerLeft}>
                            <SvgXml xml={arrow} />
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Typo children={"Profile"} />
                    </View>
                    <View>
                    </View>
                </View>
            </View>
            <FlatList numColumns={2} keyExtractor={(item) => item.id} data={data} renderItem={({ item }) => {
                return (
                    <View style={styles.profile__ImageContainer}>
                        <Image style={styles.profile__image} resizeMode={"cover"} source={item?.image} />
                        <View>
                            <Typo style={styles.profile__topText} children={item?.tag} />
                        </View>
                        <View style={styles.profile__bottomConatiner}>
                            <View style={styles.profile__bottomLeft}>
                                <Typo style={styles.profilt__bottomText} children={item?.score} />

                            </View>
                            <View style={styles.profile__bottomRight}>
                                <Typo style={styles.profilt__bottomText} children={item?.subscore} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', position: 'absolute', bottom: 10 }}>
                            <View style={{ flexGrow: 1 }}>
                                <Typo style={{ textAlign: 'center', fontSize: 10 }} children={item?.scoreTitle} />
                            </View>
                            <View style={{ flexGrow: 1 }}>
                                <Typo style={{ textAlign: 'center', fontSize: 10 }} children={item?.subScoreTitle} />
                            </View>
                        </View>
                    </View>
                )
            }} />
        </View>
    )
}

export default ProfileHistory

