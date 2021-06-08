import React from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { SvgXml } from 'react-native-svg';
import { styles } from './style'
import report from '../../../assets/report2'
import { Chip } from 'react-native-paper';
import { Button, Typo } from '../../../components'
function ModalTester({ isModalVisible, toggleModal }) {
    const data = [{ id: 1, title: 'Violence' },
    { id: 2, title: 'Harassment' },
    { id: 3, title: 'suicide or Self-injury' },
    { id: 4, title: 'Fake Account' },
    { id: 5, title: 'Span' },
    { id: 6, title: 'Unauthorized Sales' },
    { id: 7, title: 'Hate Speech' },
    { id: 8, title: 'Something Else' }]

    return (
        <Modal backdropOpacity={0} isVisible={isModalVisible}>
            <View style={styles.modal__container}>
                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                    <SvgXml xml={report} />
                </View>
                <View style={styles.modal__chips}>
                    {data.map(i => {
                        return <Chip key={i?.id} style={styles.modal__chipStyle}>
                            <Typo style={{ fontSize: 18, fontFamily: 'MyriadPro-LightSemiCn' }} children={i?.title} />
                        </Chip>
                    })}
                </View>
                <View style={styles.modal__btnContainer}>
                    <Button onClick={toggleModal} text={"Report"} />
                </View>
            </View>
        </Modal>
    );
}

export default ModalTester;