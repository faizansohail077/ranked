import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Typo, Button } from '../../../../components';
import ToggleSwitch from 'toggle-switch-react-native';
import { styles } from './style';
import Slider from 'react-native-custom-slider';
import { SvgXml } from 'react-native-svg';
import slider from '../../../../assets/slider';
import plus from '../../../../assets/plus';
import minus from '../../../../assets/minus';
import * as actions from '../../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native-paper';

const Screen2 = ({ modalToggle }) => {
  const { selectedValues, age_gender } = useSelector(state => state.authReducer);
  const [toggle, setToggle] = useState(age_gender?.age ? true : false);
  const [disable, setDisable] = useState(true);
  const [value, setValue] = useState(18);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);

  const addValue = () => {
    if (value >= 0 && value < 50) {
      setValue(value + 1);
    }
  };
  const removeValue = () => {
    if (value > 18 && value <= 50) {
      setValue(value - 1);
    }
  };
  const submit = () => {
    setLoader(true);
    setDisable(true);
    action.getAnalytics(value, null)
      .then(res => {
        dispatch({ type: 'age_gender', payload: { ...age_gender, age: value } });
        modalToggle()
        setLoader(false);
        setDisable(false);
      })
      .catch(err => {
        setLoader(false);
        setDisable(false);
      });
  };

  return (
    <>
      <View style={styles.screen2__top}>
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

      <View style={toggle ? styles.screen2__center : styles.screen2__disable}>
        <Typo
          style={styles.screen2__centerHeading}
          children={'Who can rank you?'}
        />
        <Typo style={styles.screen2__centerHeading2} children={value} />

        <View style={styles.slider__container}>
          <TouchableOpacity>
            <SvgXml
              onPress={() => removeValue()}
              style={{ marginRight: 10 }}
              xml={minus}
            />
          </TouchableOpacity>
          <View style={{ flexGrow: 1 }}>
            <View
              style={{
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                height: 20,
                backgroundColor: '#FFCACE',
              }}
            />
            <Typo style={{ fontSize: 10, textAlign: 'center' }} children={'18'} />
          </View>

          <View style={{ flexGrow: 1 }}>
            <View style={{ height: 20, backgroundColor: '#FFA7AD' }} />
            <Typo style={{ fontSize: 10, textAlign: 'center' }} children={'22'} />
          </View>

          <View style={{ flexGrow: 1 }}>
            <View style={{ height: 20, backgroundColor: '#FF848C' }} />
            <Typo style={{ fontSize: 10, textAlign: 'center' }} children={'28'} />
          </View>

          <View style={{ flexGrow: 1 }}>
            <View style={{ height: 20, backgroundColor: '#FF616C' }} />
            <Typo style={{ fontSize: 10, textAlign: 'center' }} children={'30'} />
          </View>

          <View style={{ flexGrow: 1 }}>
            <View style={{ height: 20, backgroundColor: '#FF4F5B' }} />
            <Typo style={{ fontSize: 10, textAlign: 'center' }} children={'35'} />
          </View>

          <View style={{ flexGrow: 1 }}>
            <View style={{ height: 20, backgroundColor: '#FF4F5B' }} />
            <Typo style={{ fontSize: 10, textAlign: 'center' }} children={'40'} />
          </View>

          <View style={{ flexGrow: 1 }}>
            <View style={{ height: 20, backgroundColor: '#982F36' }} />
            <Typo style={{ fontSize: 10, textAlign: 'center' }} children={'45'} />
          </View>
          <View style={{ flexGrow: 1 }}>
            <View
              style={{
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                height: 20,
                backgroundColor: '#4B171B',
              }}
            />
            <Typo style={{ fontSize: 10, textAlign: 'center' }} children={'50'} />
          </View>
          <Slider
            value={value}
            trackStyle={{ backgroundColor: 'transparent' }}
            minimumValue={18}
            step={1}
            style={{
              marginLeft: 13,
              position: 'absolute',
              width: '87%',
              backgroundColor: 'transparent',
              bottom: 3,
            }}
            maximumValue={50}
            onValueChange={value => setValue(value)}
            thumbStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 45,
            }}
            minimumTrackTintColor="transparent"
            customThumb={
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                  padding: 10,
                  backgroundColor: 'transparent',
                }}>
                <SvgXml xml={slider} />
              </View>
            }
          />
          <TouchableOpacity>
            <SvgXml
              onPress={() => addValue()}
              style={{ marginLeft: 10 }}
              xml={plus}
            />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <Button
            onClick={() => submit()}
            disable={!toggle && disable}
            customStyle={{ marginTop: 10 }}
            text={
              loader ? <ActivityIndicator size="small" color="white" /> : 'Done'
            }
          />
        </View>
      </View>
    </>
  );
};

export default Screen2;
