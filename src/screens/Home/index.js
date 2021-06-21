import React, { useState, useRef } from 'react'
import { Dimensions, Image, Animated, View, TouchableOpacity, ImageBackground } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { styles } from './style'
import Carousel from 'react-native-snap-carousel';
import man from '../../assets/902.png'
import guy from '../../assets/guy.png'
import roundbg from '../../assets/roundbg.png'
import humBurger from '../../assets/hamburger'
import { SvgXml } from 'react-native-svg';
import filter from '../../assets/filter'
import filterBlack from '../../assets/filterBlack'
import report from '../../assets/report'
import reportlight from '../../assets/reportlight'
import { Button, Typo } from '../../components';
import ModalTester from './Modal';
import { useNavigation } from '@react-navigation/core';
import female2 from '../../assets/female'
import male from '../../assets/male'
import other from '../../assets/other'
import all from '../../assets/all'
import { Slider } from '../../components'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Home = () => {
    const [entries, setEntries] = useState([{}, {}, {}, {}, {}])
    const [score, setScore] = useState(2)
    const [filterValue, setFilterValue] = useState(false)
    const [isModalVisible, setModalVisible] = useState(false);
    const [activeMale, setActiveMale] = useState(false)
    const [activeFemale, setActiveFemale] = useState(false)
    const [activeOther, setActiveOther] = useState(false)
    const [activeAll, setActiveAll] = useState(false)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const sliderWidth = Dimensions.get('screen').width
    const CarouselRef = useRef(null)
    const images = [{ id: 2, title: guy }, { id: 1, title: man }]

    useEffect(() => {
        const userDocument = firestore().collection('Users').doc(auth().currentUser.uid);
        userDocument.get()
            .then(querySnapshot => {
                if (querySnapshot.exists) {
                    dispatch({ type: 'USER', payload: querySnapshot.data() })
                }
            });
    }, [])

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const _renderItem = (item, index) => {
        return (
            <View style={styles.home__carousel}>
                <Image style={styles.home__carouselImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FuEJbKwDdaz1h387130xmYkAIQbZpahhbQ&usqp=CAU' }} />
            </View>
        )
    }

    const _renderProfileImage = (item, index) => {
        return (
            <View style={{ flex: 1, height: '100%', width: '100%', backgroundColor: 'none' }}>
                <Image style={{ flex: 1, resizeMode: 'cover' }}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FuEJbKwDdaz1h387130xmYkAIQbZpahhbQ&usqp=CAU' }} />
            </View>
        )
    }

    const selectAll = () => {
        setActiveAll(!activeAll)
        if (!activeAll) {
            setActiveMale(true)
            setActiveFemale(true)
            setActiveOther(true)
        }
        else {
            setActiveMale(false)
            setActiveFemale(false)
            setActiveOther(false)
        }
    }

    return (
        <>
            <View style={styles.home__container}>
                <View style={styles.hone__header}>
                    <View>
                        <SvgXml onPress={() => navigation.openDrawer()} xml={humBurger} />
                    </View>
                    <View>
                        <Carousel
                            ref={CarouselRef}
                            data={entries}
                            renderItem={() => _renderItem(images)}
                            sliderWidth={sliderWidth / 2}
                            itemWidth={sliderWidth / 10.1}
                            inactiveSlideOpacity={0.6}
                            inactiveSlideScale={0.7}
                            slideStyle={{ justifyContent: 'center', alignItems: 'center' }}
                        />
                    </View>
                    <View>
                        <SvgXml onPress={() => setFilterValue(!filterValue)} xml={!filterValue ? filterBlack : filter} />
                    </View>
                </View>

                <View style={{ flex: 1, }}>

                    <Carousel
                        ref={CarouselRef}
                        data={entries}
                        renderItem={() => _renderProfileImage(images)}
                        sliderWidth={sliderWidth}
                        itemWidth={sliderWidth}
                        slideStyle={{ justifyContent: 'center', alignItems: 'center' }}
                    />
                </View>

                {filterValue &&
                    <View style={styles.home__subHeader}>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity>
                                <SvgXml onPress={() => selectAll()} style={styles.home__subHeaderIcon} xml={all({ color: activeAll ? '#00a6d1' : "url(#linear-gradient)" })} />
                            </TouchableOpacity>
                            <Typo children="All" style={{ fontSize: 12, color: 'black' }} />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity>
                                <SvgXml onPress={() => setActiveOther(!activeOther)} style={styles.home__subHeaderIcon} xml={other({ color: activeOther ? '#00a6d1' : "url(#linear-gradient)" })} />
                            </TouchableOpacity>
                            <Typo children="Male" style={{ fontSize: 12, color: 'black' }} />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity>
                                <SvgXml onPress={() => setActiveMale(!activeMale)} style={styles.home__subHeaderIcon} xml={male({ color: activeMale ? '#00a6d1' : "url(#linear-gradient)" })} />
                            </TouchableOpacity>
                            <Typo children="Female" style={{ fontSize: 12, color: 'black' }} />
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity>
                                <SvgXml onPress={() => setActiveFemale(!activeFemale)} style={styles.home__subHeaderIcon} xml={female2({ color: activeFemale ? '#00a6d1' : "url(#linear-gradient)" })} />
                            </TouchableOpacity>
                            <Typo children="Other" style={{ fontSize: 12, color: 'black' }} />
                        </View>
                    </View>
                }
                <View style={styles.home__bottomContainer}>
                    <Image style={styles.home__bottomImage} source={roundbg} />
                    <View style={styles.home__subBottomContainer}>
                        <View>
                            <Slider setSelfScore={setScore} Score={score} />
                        </View>
                        <View style={styles.home__bottomView}>
                            <View style={{ flex: 2, alignItems: 'center' }}>
                                <SvgXml onPress={() => toggleModal()} xml={report} />
                            </View>
                            <View style={{ flex: 7, alignItems: 'center', }}>
                                <Button customStyle={styles.home__bottomButton}
                                    text={<Typo children={"Summit"} />} />
                            </View>
                            <View style={{ flex: 2 }} />
                        </View>
                    </View>
                </View>
            </View>

            <ModalTester toggleModal={toggleModal} isModalVisible={isModalVisible} />
        </>
    )
}

export default Home
