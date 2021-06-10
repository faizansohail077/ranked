import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'

import { styles } from './style'
import { Button, Input, Typo } from '../../components'
import arrow from '../../assets/arrow'
import account from '../../assets/account'
import Password from '../../assets/password'
import ConfirmPassword from '../../assets/confirmPassword'

const Accounts = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.account__container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ marginBottom: 15 }}>
                    <View style={styles.account__header}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View>
                                <SvgXml xml={arrow} />
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Typo children={"Account"} />
                        </View>
                        <View>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 20, alignItems: 'center' }}>
                    <SvgXml xml={account} />
                    <Typo style={{ marginTop: 20, fontSize: 18 }} children="Update Your Password" />
                </View>
                <View style={{ margin: 20 }}>
                    <View style={{ marginVertical: 30 }}>
                        <Input icon={Password} placeholder="New Password" />
                    </View>
                    <Input icon={ConfirmPassword} placeholder="Confirm Password" />
                </View>
                <View style={{ marginVertical: 30, width: '100%', alignItems: 'center' }}>
                    <Button text="Update" />
                </View>
            </ScrollView>
        </View>

    )
}

export default Accounts


