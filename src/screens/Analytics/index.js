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
  const [rating, setRating] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const { analytics, age_gender, selectedValues } = useSelector(state => state.authReducer)
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);

  useEffect(() => {
    action.getAnalytics()
  }, []);

  useEffect(() => {
    if (analytics && analytics?.err) {
      alert("No Data Found")
    } else {
      if (analytics && analytics.analyticsResult && analytics.analyticsResult.length) {
        let self = selectedValues?.fiterMilesData ? selectedValues?.fiterMilesData.map(doc => doc?.rating) : analytics?.analyticsResult?.map(doc => doc?.rating);
        let count = 0;
        self?.map(item => {
          count += item;
        });
        let avg = count / self?.length;
        setRating(Math.floor(avg));
      } else {
      }
    }
  }, [analytics]);

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
              children={rating ? rating : '0'}
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
                  {analytics?.self_score ? analytics?.self_score : 0}
                </Text>
              </View>
            )}
            borderColor="gray"
            showsText={true}
            style={{ backgroundColor: '#011629', position: 'relative' }}
            progress={analytics?.self_score && analytics?.self_score / 10}
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
                children={age_gender?.gender ? age_gender?.gender : 'default'}
                style={{ fontSize: 16 }}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SvgXml xml={calender} />
              <Typo
                children={age_gender?.age ? `<${age_gender?.age}` : 'default'}
                style={{ paddingLeft: 2, fontSize: 16 }}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SvgXml xml={multiple} />
              <Typo
                children={selectedValues?.miles ? selectedValues?.miles : 'default'}
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
