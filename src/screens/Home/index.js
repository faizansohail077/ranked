import React, {useState, useRef} from 'react';
import {
  Dimensions,
  Image,
  View,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {styles} from './style';
import Carousel from 'react-native-snap-carousel';
import roundbg from '../../assets/roundbg.png';
import humBurger from '../../assets/hamburger';
import {SvgXml} from 'react-native-svg';
import filter from '../../assets/filter';
import filterBlack from '../../assets/filterBlack';
import report from '../../assets/report';
import reportlight from '../../assets/reportlight';
import {Button, Typo} from '../../components';
import ModalTester from './Modal';
import {useNavigation} from '@react-navigation/core';
import female2 from '../../assets/female';
import male from '../../assets/male';
import other from '../../assets/other';
import all from '../../assets/all';
import {Slider} from '../../components';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../store/actions';
import {bindActionCreators} from 'redux';
import {ActivityIndicator} from 'react-native-paper';
import GetLocation from 'react-native-get-location';

const Home = () => {
  const {user} = useSelector(state => state.authReducer);
  const age =
    new Date().getFullYear() -
    new Date(user?.dob?.seconds * 1000).getFullYear();
  const [score, setScore] = useState(2);
  const [refreshing, setRefreshing] = useState(false);
  const [filterValue, setFilterValue] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const [activeMale, setActiveMale] = useState(true);
  const [activeFemale, setActiveFemale] = useState(true);
  const [activeOther, setActiveOther] = useState(true);

  const [activeAll, setActiveAll] = useState(true);
  const [timelineData, setTimelineData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [long, setLong] = useState('');
  const [lat, setLat] = useState('');
  const [noData, setNoData] = useState(false);
  const selfieId = [];
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);
  const sliderWidth = Dimensions.get('screen').width;
  const CarouselRef = useRef(null);
  const CarouselRef2 = useRef(null);

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        setLong(location?.longitude);
        setLat(location?.latitude);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }, []);
  useEffect(() => {
    getTimelineData();
  }, []);

  useEffect(() => {
    action.getUser();
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const _renderItem = (item, index) => {
    return (
      <View style={styles.home__carousel}>
        <Image
          style={styles.home__carouselImage}
          source={{uri: item && item?.selfie_url}}
        />
      </View>
    );
  };
  const wait = timeout => {
    return new Promise(resolve => {
      resolve();
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = React.useCallback(() => {
    wait(3000).then(res => {
      getTimelineData();
      setRefreshing(false);
    });
  }, []);

  const _renderProfileImage = (item, index) => {
    selfieId.push(item?.selfie_id);
    return (
      <View
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          backgroundColor: 'none',
        }}>
        <Image
          style={{flex: 1, resizeMode: 'cover'}}
          source={{uri: item && item?.selfie_url}}
        />
      </View>
    );
  };

  const selectAll = () => {
    setActiveAll(!activeAll);
    if (!activeAll) {
      setActiveMale(true);
      setActiveFemale(true);
      setActiveOther(true);
    } else {
      setActiveMale(false);
      setActiveFemale(false);
      setActiveOther(false);
    }
  };

  const getTimelineData = async () => {
    action
      .getTimelineData()
      .then(res => {
        if (res.setNoData) {
          setNoData(true);
        } else {
          setTimelineData(res);
        }
      })
      .catch(err => {});
  };

  const submit = () => {
    setLoader(true);
    action
      .submitSelfie(
        score,
        user?.gender,
        long,
        lat,
        age,
        selfieId[CarouselRef2?.current?._activeItem],
      )
      .then(async () => {
        alert('rating successfully submitted');
        const data1 = await firestore().collection('Users').get();
        data1.docs.forEach(async doc => {
          let update = await firestore()
            .collection('Users')
            .doc(auth().currentUser.uid)
            .update({
              time_line: firestore.FieldValue.arrayRemove(
                selfieId[CarouselRef2?.current?._activeItem],
              ),
            });
        });
        timelineData.splice(CarouselRef2?.current?._activeItem, 1);
        setTimelineData([...timelineData]);
        setLoader(false);
      })
      .catch(e => {
        setLoader(false);
      });
  };

  let filteredArray = [];

  if (activeOther || activeMale || activeFemale) {
    filteredArray = timelineData?.filter(selfie => {
      return (
        (activeMale ? selfie.gender == 'male' : false) ||
        (activeFemale ? selfie.gender == 'female' : false) ||
        (activeOther ? selfie.gender == 'others' : false)
      );
    });
  }

  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={{flex: 1}}>
        <View style={styles.home__container}>
          <View style={styles.hone__header}>
            <View>
              <SvgXml onPress={() => navigation.openDrawer()} xml={humBurger} />
            </View>
            <View>
              <Carousel
                scrollEnabled={false}
                ref={CarouselRef2}
                data={filteredArray}
                renderItem={({item, index}) => _renderItem(item, index)}
                sliderWidth={sliderWidth / 2}
                itemWidth={sliderWidth / 10.1}
                inactiveSlideOpacity={0.6}
                inactiveSlideScale={0.7}
                slideStyle={{justifyContent: 'center', alignItems: 'center'}}
              />
            </View>
            <View>
              <SvgXml
                onPress={() => setFilterValue(!filterValue)}
                xml={!filterValue ? filterBlack : filter}
              />
            </View>
          </View>

          <View style={{flex: 1}}>
            <Carousel
              ref={CarouselRef}
              onSnapToItem={i => CarouselRef2.current?.snapToItem(i)}
              data={filteredArray}
              renderItem={({item, index}) => _renderProfileImage(item, index)}
              sliderWidth={sliderWidth}
              itemWidth={sliderWidth}
              slideStyle={{justifyContent: 'center', alignItems: 'center'}}
            />
          </View>
          {filterValue && (
            <View style={styles.home__subHeader}>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity>
                  <SvgXml
                    onPress={() => selectAll()}
                    style={styles.home__subHeaderIcon}
                    xml={all({
                      color: activeAll ? '#00a6d1' : 'url(#linear-gradient)',
                    })}
                  />
                </TouchableOpacity>
                <Typo children="All" style={{fontSize: 12, color: 'black'}} />
              </View>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity>
                  <SvgXml
                    onPress={() => setActiveMale(!activeMale)}
                    style={styles.home__subHeaderIcon}
                    xml={other({
                      color: activeMale ? '#00a6d1' : 'url(#linear-gradient)',
                    })}
                  />
                </TouchableOpacity>
                <Typo children="Male" style={{fontSize: 12, color: 'black'}} />
              </View>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity>
                  <SvgXml
                    onPress={() => setActiveFemale(!activeFemale)}
                    style={styles.home__subHeaderIcon}
                    xml={male({
                      color: activeFemale ? '#00a6d1' : 'url(#linear-gradient)',
                    })}
                  />
                </TouchableOpacity>
                <Typo
                  children="Female"
                  style={{fontSize: 12, color: 'black'}}
                />
              </View>

              <View style={{alignItems: 'center'}}>
                <TouchableOpacity>
                  <SvgXml
                    onPress={() => setActiveOther(!activeOther)}
                    style={styles.home__subHeaderIcon}
                    xml={female2({
                      color: activeOther ? '#00a6d1' : 'url(#linear-gradient)',
                    })}
                  />
                </TouchableOpacity>
                <Typo children="Other" style={{fontSize: 12, color: 'black'}} />
              </View>
            </View>
          )}
          {noData ? (
            <View style={{alignItems: 'center', height: '40%'}}>
              <Typo style={{color: 'black'}} children="No Selfies Found" />
            </View>
          ) : (
            <View style={styles.home__bottomContainer}>
              <Image style={styles.home__bottomImage} source={roundbg} />
              <View style={styles.home__subBottomContainer}>
                <View>
                  <Slider setSelfScore={setScore} Score={score} />
                </View>
                <View style={styles.home__bottomView}>
                  <View style={{flex: 2, alignItems: 'center'}}>
                    <SvgXml onPress={() => toggleModal()} xml={report} />
                  </View>
                  <View style={{flex: 7, alignItems: 'center'}}>
                    <Button
                      onClick={() => submit()}
                      customStyle={styles.home__bottomButton}
                      text={
                        <Typo
                          children={
                            loader ? (
                              <ActivityIndicator size="small" color="white" />
                            ) : (
                              'Summit'
                            )
                          }
                        />
                      }
                    />
                  </View>
                  <View style={{flex: 2}} />
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      <ModalTester toggleModal={toggleModal} isModalVisible={isModalVisible} />
    </>
  );
};

export default Home;
