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
import { Button } from '../../components';
import ModalTester from './Modal';

const Home = () => {
    const [entries, setEntries] = useState([{}, {}, {}, {}, {}])
    const [isModalVisible, setModalVisible] = useState(false);

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
                        <SvgXml xml={humBurger} />
                    </View>
                    <View>
                        <Carousel
                            ref={CarouselRef}
                            data={entries}
                            renderItem={() => _renderItem(images)}
                            sliderWidth={sliderWidth / 2}
                            itemWidth={sliderWidth / 10}
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
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}>
                                <SvgXml onPress={() => toggleModal()} xml={report} />
                                <Button customStyle={{ width: '50%', marginLeft: 30, backgroundColor: 'transparent', borderWidth: 2, borderColor: 'white' }} text="Summit" />
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

