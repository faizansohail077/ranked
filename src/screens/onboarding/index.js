import React, { useState } from 'react'
import { Text, TouchableOpacity, View, ImageBackground, Dimensions } from 'react-native'
import { styles } from './style'
import StepIndicator from 'react-native-step-indicator';
import Onboarding1 from './onboarding1/Onboarding1'
import { CommonActions, useNavigation } from '@react-navigation/native';
import bg from '../../assets/bg.png'
import onboard1 from '../../assets/onboard1.png'
import onboard2 from '../../assets/onboard2.png'
import onboard3 from '../../assets/onboard3.png'
import { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { ActivityIndicator } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

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

const Onboarding = () => {
    const [currentPosition, setCurrentPosition] = useState(0)
    const screenHeight = Dimensions.get('screen').height
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true)
    const navigation = useNavigation()


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
    async function onAuthStateChanged(user) {
        if (!user) {
            setLoader(false)
        } else {
            const result = await firestore().collection("Users").doc(user?.uid).get()
                .then(querySnapshot => {
                    console.log("TCL ~ file: index.js ~ line 69 ~ onAuthStateChanged ~ querySnapshot", querySnapshot.exists)
                    if (querySnapshot.exists) {
                        console.log("TCL ~ file: index.js ~ line 70 ~ onAuthStateChanged ~ querySnapshot.exists", querySnapshot.exists)
                        console.log(querySnapshot.data().step)
                        if (querySnapshot.data().step == 0) {
                            console.log('login workin1')
                            navigation.dispatch(
                                CommonActions.reset({
                                    index: 0,
                                    routes: [{ name: 'personalData', steps: 0 }],
                                })
                            );
                        }
                        if (querySnapshot.data().step == 1) {
                            console.log('login working2')
                            navigation.dispatch(
                                CommonActions.reset({
                                    index: 0,
                                    routes: [{ name: 'personalData', steps: 1 }],
                                })
                            );
                        }
                        if (querySnapshot.data().step == 2) {
                            console.log('login working3')
                            navigation.dispatch(
                                CommonActions.reset({
                                    index: 0,
                                    routes: [{ name: 'personalData', steps: 2 }],
                                })
                            );
                        }
                        if (querySnapshot.data().step == null) {
                            console.log('login working')
                            navigation.dispatch(
                                CommonActions.reset({
                                    index: 0,
                                    routes: [{ name: 'bottomTab', steps: null }],
                                })
                            );
                        }
                    }
                });
        }
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, [])

    return (
        <View style={styles.onboard__container}>
            <StepIndicator
                customStyles={customStyles}
                currentPosition={currentPosition}
                stepCount={3}
                renderStepIndicator={(position) => steps(position)}
            />
            {loader ? <ActivityIndicator size="large" color="white" />
                :
                <View style={{ height: "80%", marginTop: 20 }}>
                    <ImageBackground style={{ height: '100%', width: '100%' }} resizeMode="stretch" source={bg} >
                        {currentPosition === 0 && <Onboarding1 para={para1} image={onboard1} onPress={onPageChange} text="Next" title={'Create a Profile'} />}
                        {currentPosition === 1 && <Onboarding1 para={para2} image={onboard3} onPress={onPageChange} text="Next" title={'Get Ranking'} />}
                        {currentPosition === 2 && <Onboarding1 para={para3} image={onboard2} onPress={() => navigation.navigate("splash")} title={'Your Scores'} text="Let's Start" />}
                    </ImageBackground>
                </View>
            }
            {!loader &&
                <TouchableOpacity onPress={() => navigation.navigate("splash")} style={styles.onboard__button} >
                    <Text style={styles.onboard__buttonText}>Skip</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

export default Onboarding

