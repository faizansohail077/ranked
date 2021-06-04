import React, { useState } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { styles } from './style'
import male from '../../../../assets/male.png'
import female from '../../../../assets/female.png'
import other from '../../../../assets/other.png'
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from '../../../../components'
import { colors } from '../../../../style/color'

const Screen2 = ({ onPress }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    return (
        <View style={styles.screen2__container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={male} />
                    <Image source={female} />
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
                        style={styles.screen2__dropDown}
                        open={open}
                        placeholder="Select answer"
                        placeholderStyle={{ color: colors.gray, fontSize: 20 }}
                        textStyle={{ color: colors.gray, fontSize: 20 }}
                        // badgeColors={"green"}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </View>
                <View style={{ marginVertical: 30, width: '100%', alignItems: 'center' }}>
                    <Button onClick={() => onPress()} text="Next" />
                </View>
            </ScrollView>
        </View>
    )

}

export default Screen2

