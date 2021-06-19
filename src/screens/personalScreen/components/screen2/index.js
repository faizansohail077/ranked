import React, { useState } from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { styles } from './style'
import male from '../../../../assets/male.png'
import female from '../../../../assets/female.png'
import other from '../../../../assets/other.png'
import DropDownPicker from 'react-native-dropdown-picker';
import { Button, Typo } from '../../../../components'
import { colors } from '../../../../style/color'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../../store/actions'


const Screen2 = ({ onPress }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [gender, setGender] = useState("others")
    const [loader, setLoader] = useState(false)
    const [disable, setDisable] = useState(false)
    const [items, setItems] = useState([
        { label: 'Androgynous', value: 'androgynous' },
        { label: 'Androgyne', value: 'androgyne' }
    ]);
    const dispatch = useDispatch()
    const action = bindActionCreators(actions, dispatch)

    const submit = () => {
        setLoader(true)
        setDisable(true)
        action.genderData(gender)
            .then(() => {
                console.log('gender updated')
                onPress()
                setLoader(false)
                setDisable(false)
            })
            .catch(err => {
                console.log(err)
                setLoader(false)
                setDisable(false)
            })
    }

    return (
        <View style={styles.screen2__container}>
            <View style={{ marginBottom: 20 }}>
                <Typo children="Select Gender" />
            </View>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View>

                        <TouchableOpacity onPress={() => setGender("male")}>
                            <Image source={male} />
                        </TouchableOpacity>
                        <Text style={styles.screen2_textFont}>Male</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => setGender("female")}>
                            <Image source={female} />
                        </TouchableOpacity>
                        <Text style={styles.screen2_textFont}>Female</Text>
                    </View>
                </View>
                <View style={styles.screen2__orContainer}>
                    <View style={styles.screen2__orContainerTop} />
                    <View>
                        <Text style={styles.screen2__orContainerCenter}>OR</Text>
                    </View>
                    <View style={styles.screen2__orContainerBottom} />
                </View>
                <View style={styles.screen2__dropDownContainer} >
                    <Image source={other} />
                    <DropDownPicker
                        arrowIconStyle={{ tintColor: 'white' }}
                        style={styles.screen2__dropDown}
                        open={open}
                        placeholder="Select others...."
                        placeholderStyle={{ color: colors.gray, fontSize: 20 }}
                        textStyle={{ color: colors.gray, fontSize: 20 }}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </View>
                <View style={{ marginVertical: 30, width: '100%', alignItems: 'center' }}>
                    <Button disable={disable} customStyle={{ width: '50%' }} onClick={() => submit()} text={<Typo children={loader ? <ActivityIndicator color="white" size="small" /> : "Next"} />} />
                </View>
            </ScrollView>
        </View>
    )

}

export default Screen2

