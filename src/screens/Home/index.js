import React, { useState, useRef } from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import { styles } from './style'
import Carousel from 'react-native-snap-carousel';
import man from '../../assets/902.png'
import guy from '../../assets/guy.png'
import roundbg from '../../assets/roundbg.png'
import humBurger from '../../assets/hamburger'
import { SvgXml } from 'react-native-svg';
import filter from '../../assets/filter'
import report from '../../assets/report'
import { Button, Typo } from '../../components';
import ModalTester from './Modal';
import { FloatingAction } from "react-native-floating-action";
import { useNavigation } from '@react-navigation/core';

const Home = () => {
    const [entries, setEntries] = useState([{}, {}, {}, {}, {}])
    const [isModalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation()
    const sliderWidth = Dimensions.get('screen').width
    const CarouselRef = useRef(null)
    const images = [{ id: 2, title: guy }, { id: 1, title: man }]

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const _renderItem = (item, index) => {
        return (
            <View style={styles.home__carousel}>
                <Image style={styles.home__carouselImage} resizeMode="center" source={man} />
            </View>
        )
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
                            itemWidth={sliderWidth / 7}
                            layout={"default"}
                        />
                    </View>
                    <View>
                        <SvgXml xml={filter} />
                    </View>
                </View>
                <View style={styles.home__bottomContainer}>
                    <View style={styles.home__bottomImageView}>
                        <Image style={styles.home__bottomImage} source={roundbg} />
                        <View style={styles.home__subBottomContainer}>
                            <View style={styles.home__bottomView}>
                                <SvgXml onPress={() => toggleModal()} xml={report} />
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

