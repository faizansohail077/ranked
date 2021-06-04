import React from 'react'
import { Text, View, Image } from 'react-native'
import { Button } from '../../../../components'
import { styles } from './style'
import bg from '../../../../assets/roundbg.png'

const Screen4 = ({ route }) => {
    const { uri } = route?.params
    return (
        <View style={styles.screen4__container}>
            <View style={styles.screen4__imageView}>
                <Image style={styles.screen4__image} source={{ uri: uri }} />
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={styles.screen4__bottomImageView}>
                        <Image style={styles.screen4__bottomImage} source={bg} />
                        <Text style={styles.screen4__bottomViewText} >Score your self</Text>
                        <View style={{ alignItems: 'center' }}>
                            <Button customTextStyle={{ fontSize: 20 }} customStyle={{ width: '50%' }} text="finish..." />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Screen4

