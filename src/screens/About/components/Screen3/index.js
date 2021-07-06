import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Typo, Button } from '../../../../components';
import ToggleSwitch from 'toggle-switch-react-native';
import { styles } from './style';
import miles from '../../../../assets/miles2.png';
import { SvgXml } from 'react-native-svg';
import minus2 from '../../../../assets/minus2';
import plus2 from '../../../../assets/plus2';
import * as actions from '../../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDistance, convertDistance } from 'geolib';
import { useIsFocused } from '@react-navigation/native';

const Screen3 = () => {
  const isFocused = useIsFocused();

  const [toggle, setToggle] = useState(false);
  const [disable, setDisable] = useState(true);
  const [value, setValue] = useState(0);
  const [fiterMilesData, setFilterMilesData] = useState(null);
  const [ratingLocation, setRatingLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);
  const { selectedValues } = useSelector(state => state.authReducer);

  const minus = () => {
    if (value > 0) {
      setValue(value - 5);
    }
  };
  const plus = () => {
    if (value >= 0) {
      setValue(value + 5);
    }
  };

  useEffect(() => {
    action.getAnalytics().then(res => {
      let location = res?.docData?.map(doc => doc?.location);
      setRatingLocation(res?.docData);
      action.getUser().then(user => {
        setUserLocation(user?.location);
      });
    });
  }, []);

  useEffect(() => {
    ratingLocation?.map(i => {
      const miles = calculateDistance(
        userLocation?.lat,
        userLocation?.long,
        i?.location?.lat,
        i?.location?.long,
      );
      i.miles = Math.floor(miles);
    });
    let filterdMiles = ratingLocation?.filter(
      x => x?.miles < selectedValues?.miles,
    );
    setFilterMilesData(filterdMiles);
  }, []);

  useEffect(() => {
    ratingLocation?.map(i => {
      const miles = calculateDistance(
        userLocation?.lat,
        userLocation?.long,
        i?.location?.lat,
        i?.location?.long,
      );
      i.miles = Math.floor(miles);
    });
    let filterdMiles = ratingLocation?.filter(
      x => x?.miles < selectedValues?.miles || value,
    );
    setFilterMilesData(filterdMiles);
  }, [isFocused]);

  useEffect(() => {
    ratingLocation?.map(i => {
      const miles = calculateDistance(
        userLocation?.lat,
        userLocation?.long,
        i?.location?.lat,
        i?.location?.long,
      );
      i.miles = Math.floor(miles);
    });
    let filterdMiles = ratingLocation?.filter(
      x => x?.miles < selectedValues?.miles,
    );

    setFilterMilesData(filterdMiles);
  }, [value, isFocused]);

  const calculateDistance = (lat1, long1, lat2, long2) => {
    var dis = getDistance(
      { latitude: lat1, longitude: long1 },
      { latitude: lat2, longitude: long2 },
    );
    return convertDistance(dis, 'mi');
  };

  const submit = () => {
    if (toggle && fiterMilesData) {
      if (value == 0) {
        alert("Select Miles")
      } else {
        dispatch({
          type: 'selectedValues',
          payload: { ...selectedValues, miles: value, fiterMilesData },
        });
        alert('miles added');
      }
    }
  };

  return (
    <>
      <View style={styles.screen3__top}>
        <ToggleSwitch
          isOn={toggle}
          onColor="white"
          offColor="white"
          size="small"
          thumbOnStyle={{ color: 'black', backgroundColor: '#E4576C' }}
          thumbOffStyle={{
            color: 'black',
            backgroundColor: 'gray',
            opacity: 0.3,
          }}
          onToggle={isOn => setToggle(isOn)}
        />
        <Typo
          children={!toggle ? 'Disable' : 'Applied'}
          style={{ fontSize: 10, paddingTop: 10 }}
        />
      </View>
      <View style={toggle ? styles.screen3__center : styles.screen3__disable}>
        <Typo
          style={styles.screen3__centerHeading}
          children={'How far from you?'}
        />
        <View style={{ position: 'relative', marginTop: 20 }}>
          <View>
            <Image resizeMode="contain" source={miles} />
          </View>
          <View>
            <View style={styles.screen3__milesView}>
              <Typo children={value} style={styles.screen3__milesViewText} />
              <Typo children={'Miles'} style={styles.screen3__milesViewText2} />
            </View>

            <View style={{ position: 'absolute', bottom: 15, left: 80 }}>
              <TouchableOpacity onPress={() => minus()}>
                <SvgXml onPress={() => minus()} xml={minus2} />
              </TouchableOpacity>
            </View>

            <View style={{ position: 'absolute', bottom: 15, right: 80 }}>
              <TouchableOpacity onPress={() => plus()}>
                <SvgXml xml={plus2} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 20, width: '100%', alignItems: 'center' }}>
          <Button
            onClick={() => submit()}
            disable={!toggle && disable}
            customStyle={{ marginTop: 10 }}
            text="Done"
          />
        </View>
      </View>
    </>
  );
};

export default Screen3;
