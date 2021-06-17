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
    const sliderWidth = Dimensions.get('screen').width
    const CarouselRef = useRef(null)
    const images = [{ id: 2, title: guy }, { id: 1, title: man }]

    useEffect(() => {
        const userDocument = firestore().collection('Users').doc(auth().currentUser.uid);
        userDocument.get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.exists);
                if (querySnapshot.exists) {
                    console.log('User data: ', querySnapshot.data());
                }
            });
    }, [])



    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const _renderItem = (item, index) => {
        return (
            <View style={styles.home__carousel}>
                <Image style={styles.home__carouselImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsj7e0UFTEaWkuKIk__YXeQpDgi8BOQq3CUg&usqp=CAU' }} />
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
                <Image style={styles.home__Image} resizeMode={"cover"} source={man} />
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
                            itemWidth={sliderWidth / 8}
                        />
                    </View>
                    <View>
                        <SvgXml onPress={() => setFilterValue(!filterValue)} xml={!filterValue ? filterBlack : filter} />
                    </View>
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
                    <View style={styles.home__bottomImageView}>
                        <Image style={styles.home__bottomImage} source={roundbg} />
                        <View style={styles.home__subBottomContainer}>
                            <Slider Score={score} setSelfScore={(id) => setScore(id)} />
                            <View style={styles.home__bottomView}>
                                <SvgXml onPress={() => toggleModal()} xml={isModalVisible ? reportlight : report} />
                                <Button customStyle={styles.home__bottomButton} text={<Typo children={"Summit"} />} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <ModalTester toggleModal={toggleModal} isModalVisible={isModalVisible} />
        </>
    )
}

export default Home
