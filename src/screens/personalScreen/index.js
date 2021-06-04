import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import StepIndicator from 'react-native-step-indicator';
import { Screen1, Screen2, Screen3, Screen4 } from './components'

const customStyles = {
    stepIndicatorSize: 35,
    currentStepIndicatorSize: 80,
    separatorStrokeWidth: 10,
    currentStepStrokeWidth: 1,
    stepStrokeCurrentColor: 'white',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: 'white',
    stepStrokeUnFinishedColor: 'white',
    separatorFinishedColor: 'white',
    separatorUnFinishedColor: 'white',
    stepIndicatorFinishedColor: 'white',
    stepIndicatorUnFinishedColor: 'white',
    stepIndicatorCurrentColor: 'white',
    stepIndicatorLabelFontSize: 39,
    currentStepIndicatorLabelFontSize: 29,
    stepIndicatorLabelCurrentColor: 'green',
    stepIndicatorLabelFinishedColor: 'blue',
    stepIndicatorLabelUnFinishedColor: 'gray',
    labelColor: 'red',
    labelSize: 13,
    currentStepLabelColor: 'red'
}

const PersonalData = () => {
    const [currentPosition, setCurrentPosition] = useState(0)
    const onPageChange = () => {
        setCurrentPosition(currentPosition + 1);
    }
    const steps = ({ position, Number }) => {
        if (position === currentPosition) {
            return (
                <View>
                    <View><Text style={styles.stepper__text}>{position + 1}</Text></View>
                </View>
            )
        }
    }
    return (
        <View style={currentPosition === 2 ? styles.personalDataScreen2__container : styles.personalData__container}>
            <View style={{ marginVertical: 30 }}>
                <StepIndicator
                    customStyles={customStyles}
                    currentPosition={currentPosition}
                    stepCount={3}
                    renderStepIndicator={(position) => steps(position)}
                />
            </View>

            <View style={{ marginTop: 20, flex: 1 }}>
                {currentPosition === 0 && <Screen1 onPress={onPageChange} />}
                {currentPosition === 1 && <Screen2 onPress={onPageChange} />}
                {currentPosition === 2 && <Screen3 />}
            </View>
        </View>
    )
}

export default PersonalData

