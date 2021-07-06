import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import filter from '../../assets/filterWhite';
import { Typo } from '../../components';
import { styles } from './style';
import * as Progress from 'react-native-progress';
import other from '../../assets/other2';
import multiple from '../../assets/multiple';
import calender from '../../assets/starCalender';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions';
import About from '../About';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Analytics = () => {
  const navigation = useNavigation();
  const { selectedValues } = useSelector(state => state.authReducer);
  const [rating, setRating] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [selfScore, setSelfScore] = useState('');
  const [analytics, setAnalytics] = useState([]);
  console.log("TCL ~ file: index.js ~ line 28 ~ Analytics ~ analytics", analytics)
  const [largest, setLargest] = useState('');
  const [gender, setGender] = useState('');

  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);

  // useEffect(async () => {
  //   action.getAnalytics().then(res => {
  //     if (res == 'no data is avaliable') {
  //       alert('no data avaliable');
  //     } else {
  //       setAnalytics(res);
  //       let self = analytics?.docData?.map(doc => doc?.rating);
  //       setSelfScore(res?.self_score);
  //       let count = 0;
  //       self?.map(item => {
  //         count += item;
  //       });
  //       let avg = count / self?.length
  //       setRating(Math.floor(avg));
  //     }
  //   });
  // }, [isFocused, openModal]);

  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('action started 1')
      action
        .getAnalytics()
        .then(res => {
          setAnalytics(res);
          setSelfScore(res?.self_score)
        })
        .catch(err => {
        });
    })
  }, []);

  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('action started 2')
      action.getAnalytics().then(res => {
        setAnalytics(res);
        setSelfScore(res?.self_score)
      });
    })
  }, [openModal]);

  useEffect(() => {
    navigation.addListener('focus', () => {
      if (analytics && analytics.docData && analytics.docData.length) {
        setSelfScore(analytics?.self_score);
        let age = analytics?.docData?.map(doc => doc.age);
        let self = selectedValues && selectedValues?.fiterMilesData
          ? selectedValues?.fiterMilesData?.map(doc => doc?.rating)
          : analytics?.docData?.map(doc => doc?.rating);
        console.log("TCL ~ file: index.js ~ line 81 ~ navigation.addListener ~ self", self)
        let genderData = analytics?.docData?.map(doc => doc?.gender);
        let count = 0;
        self?.map(item => {
          count += item;
        });
        let avg = count / self?.length;
        setRating(Math.floor(avg));
        let foundGender = genderData.find(
          value => value == selectedValues?.gender,
        );
        let foundAge = age.find(value => value <= selectedValues?.age);
        if (!foundGender) {
          // alert('no gender found');
        }
        if (!foundAge) {
          // alert('no age found');
          setLargest('default');
        } else {
          setLargest(selectedValues?.age);
        }
        setGender(foundGender ? foundGender : 'default');
      } else {
      }
    })

  }, [openModal]);

  return (
    <View style={styles.analytics__container}>
      <View style={styles.analytics__top}>
        <View style={{ width: 29.458 }}></View>
        <View>
          <Typo
            children={'Analytics'}
            style={{ fontSize: 38, fontFamily: 'ArialRoundedBold' }}
          />
        </View>
        <View>
          <SvgXml onPress={() => setOpenModal(!openModal)} xml={filter} />
        </View>
      </View>
      <View style={styles.analytics__view}>
        <View style={styles.analytics__viewMain}>
          <View style={styles.analytics__viewInside}>
            <Typo
              style={styles.analytics__viewText}
              children={
                analytics?.rating && analytics?.rating
                  ? analytics?.rating
                  : rating && rating
                    ? rating
                    : '0'
              }
            />
            <View style={styles.analytics__subTextView}>
              <Typo style={styles.analytics__subText} children={'/'} />
              <Typo style={styles.analytics__subText} children={'10'} />
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Typo
          style={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'ArialRoundedBold',
          }}
          children={'Overall score'}
        />
      </View>
      <View style={styles.analytics__progrssView}>
        <View>
          <Typo
            style={{ fontFamily: 'ArialRoundedBold' }}
            children={'Self Score'}
          />
        </View>

        <View style={styles.analytics__porgressTop}>
          <View style={styles.analytics__porgressTopLeft}></View>
          <View style={styles.analytics__progressTopRight}></View>
        </View>
        <View>
          <Progress.Circle
            thickness={5}
            unfilledColor="#B3B3B3"
            fill="#011629"
            color="yellow"
            textStyle={{
              fontFamily: 'unicodeimpact',
              fontSize: 60,
              color: 'black',
              textAlign: 'center',
            }}
            formatText={() => (
              <View
                style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  borderRadius: 100,
                }}>
                <Text style={{ fontSize: 40, fontFamily: 'unicodeimpact' }}>
                  {selfScore ? selfScore : 0}
                </Text>
              </View>
            )}
            borderColor="gray"
            showsText={true}
            style={{ backgroundColor: '#011629', position: 'relative' }}
            progress={selfScore / 10}
            size={110}>
            <View></View>
          </Progress.Circle>
        </View>
      </View>

      <View style={styles.analytics__bottomView}>
        <View style={styles.analytics__bottomSubView}>
          <View style={styles.analytics__bottomViewBottom}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SvgXml xml={other} />
              <Typo
                children={gender && gender ? `${gender}` : 'default'}
                style={{ fontSize: 16 }}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SvgXml xml={calender} />
              <Typo
                children={largest && largest ? `<${largest}` : 'default'}
                style={{ paddingLeft: 2, fontSize: 16 }}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SvgXml xml={multiple} />
              <Typo
                children={
                  selectedValues && selectedValues?.miles
                    ? selectedValues.miles
                    : 'default'
                }
                style={{ paddingLeft: 2, fontSize: 16 }}
              />
            </View>
          </View>
        </View>
      </View>
      <About
        openModal={openModal}
        modalToggle={() => setOpenModal(!openModal)}
      />
    </View>
  );
};

export default Analytics;
