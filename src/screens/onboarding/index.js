import React, { useState } from 'react'
import { Text, TouchableOpacity, View, ImageBackground, Dimensions } from 'react-native'
import { styles } from './style'
import StepIndicator from 'react-native-step-indicator';
import Onboarding1 from './onboarding1/Onboarding1'
import { colors } from '../../style/color';
import bg from '../../assets/bg.png'
import onboard1 from '../../assets/onboard1.png'
import onboard2 from '../../assets/onboard2.png'
import onboard3 from '../../assets/onboard3.png'


const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 1,
    stepStrokeCurrentColor: 'white',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: 'white',
    stepStrokeUnFinishedColor: 'white',
    separatorFinishedColor: 'gray',
    separatorUnFinishedColor: 'gray',
    stepIndicatorFinishedColor: 'white',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: 'white',
    stepIndicatorLabelFinishedColor: 'white',
    stepIndicatorLabelUnFinishedColor: 'gray',
    labelColor: 'white',
    labelSize: 13,
    currentStepLabelColor: 'white'
}



const para1 = 'Create a 100% anonymous profile, upload an honest picture of yourself and give it a score. Filters are great but dare to be bold & remember no one can see'
const para2 = 'Start Ranking those around you.Give your honest real feedback.There are no benefits to your scores asno one will no you gave it'
const para3 = ' Check your results see what people truly think when they have nothing to go on other than your picture. Give it a shot and Rank our creator Sai first. Remember honesty counts!'




const Onboarding = ({ navigation }) => {
    const [currentPosition, setCurrentPosition] = useState(0)
    const screenHeight = Dimensions.get('screen').height
    const onPageChange = () => {
        setCurrentPosition(currentPosition + 1);
    }
    const steps = ({ position }) => {
        if (position === currentPosition) {
            return (
                <View>
                    <View style={styles.onboard__stepperActive}></View>
                </View>
            )
        }
    }
    return (
        <View style={styles.onboard__container}>
            <StepIndicator
                customStyles={customStyles}
                currentPosition={currentPosition}
                stepCount={3}
                renderStepIndicator={(position) => steps(position)}
            />
            <View style={{ height: screenHeight - 200, marginTop: 20 }}>
                <ImageBackground style={{ height: '100%', width: '100%' }} resizeMode="cover" source={bg} >
                    {currentPosition === 0 && <Onboarding1 para={para1} image={onboard1} onPress={onPageChange} text="Next" title={'Create a Profile'} />}
                    {currentPosition === 1 && <Onboarding1 para={para2} image={onboard3} onPress={onPageChange} text="Next" title={'Get Ranking'} />}
                    {currentPosition === 2 && <Onboarding1 para={para3} image={onboard2} onPress={() => navigation.navigate("splash")} title={'Your Scores'} text="Let's Start" />}
                </ImageBackground>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("splash")} style={styles.onboard__button} >
                <Text style={styles.onboard__buttonText}>Skip</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Onboarding

