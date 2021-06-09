import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { Typo } from '..'
import { styles } from './style'
import edit from '../../assets/edit'
import profile from '../../assets/profile2'
import change from '../../assets/change'
import feedback from '../../assets/feedback'
import help from '../../assets/help'
import setting from '../../assets/setting'
import rate from '../../assets/rate'
import { useNavigation } from '@react-navigation/core'

const CustomDrawer = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.drawer__top}>
                <View style={styles.drawer__topImage}>
                </View>
                <View>
                    <Typo children="John Alex" style={styles.drawer__topText} />
                </View>
            </View>
            <View style={styles.drawer__bottom}>
                <View style={{ marginHorizontal: 10, marginVertical: 20 }}>

                    <TouchableOpacity onPress={() => navigation.navigate("edit")}>
                        <View style={styles.drawer__bottomView}>
                            <View style={{ width: 30 }}>
                                <SvgXml style={{ width: 30 }} xml={edit} />
                            </View>
                            <Typo style={styles.drawer__bottomViewText} children={"Edit Profile"} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("profileHistory")}>
                        <View style={styles.drawer__bottomView}>
                            <View style={{ width: 30 }}>
                                <SvgXml style={{ width: 30 }} xml={profile} />
                            </View>
                            <Typo style={styles.drawer__bottomViewText} children={"Profile History"} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("changeProfile")}>
                        <View style={styles.drawer__bottomView}>
                            <View style={{ width: 30 }}>

                                <SvgXml style={{ width: 30 }} xml={change} />
                            </View>
                            <Typo style={styles.drawer__bottomViewText} children={"Change Profile Photo"} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("feedback")}>
                        <View style={styles.drawer__bottomView}>
                            <View style={{ width: 30 }}>
                                <SvgXml style={{ width: 30 }} xml={feedback} />
                            </View>
                            <Typo style={styles.drawer__bottomViewText} children={"Feedback"} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("help")}>
                        <View style={styles.drawer__bottomView}>
                            <View style={{ width: 30 }}>
                                <SvgXml style={{ width: 30 }} xml={help} />
                            </View>
                            <Typo style={styles.drawer__bottomViewText} children={"Help"} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("setting")}>
                        <View style={styles.drawer__bottomView}>
                            <View style={{ width: 30 }}>
                                <SvgXml style={{ width: 30 }} xml={setting} />
                            </View>
                            <Typo style={styles.drawer__bottomViewText} children={"Settings"} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("rate")}>
                        <View style={styles.drawer__bottomView}>
                            <View style={{ width: 30 }}>
                                <SvgXml style={{ width: 30 }} xml={rate} />
                            </View>
                            <Typo style={styles.drawer__bottomViewText} children={"Rate This App"} />
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={{ position: 'absolute', bottom: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("about")}>
                        <View style={{ marginVertical: 10 }}>
                            <Typo style={styles.drawer__bottomViewText} children={"About Us"} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("")}>
                        <View style={{ marginBottom: 10 }}>
                            <Typo style={styles.drawer__bottomViewText} children={"Log Out"} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CustomDrawer

