import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { styles } from './style';
import { Button, Input, Typo } from '../../../../components';
import zip from '../../../../assets/zip';
import profile from '../../../../assets/profile';
import path from '../../../../assets/path';
import location from '../../../../assets/location';
import calender from '../../../../assets/calender';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../../store/actions';
const Screen1 = ({ onPress }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [showdate, setShowDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    let todaydate = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let newDate = year + '/' + month + '/' + todaydate;
    setShowDate(newDate);
    hideDatePicker();
  };

  const [country, setCountry] = useState('');
  const [username, setUserName] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [error, setError] = useState(false);
  const [disable, setDisable] = useState(false);
  const [loader, setLoader] = useState(false);
  const [zipError, setZipError] = useState(false);
  const [countryPicker, setCountryPicker] = useState(null)
  const [openCountryPicker, setOpenCountryPicker] = useState(false)
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);

  const submit = () => {
    let zipReg = /^\d{5}(?:[-\s]\d{4})?$/;
    if (username == '' || username.trim()) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    if (showdate == '') {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    if (country == '' || country.trim()) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    if (city == '' || city.trim()) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    if (zipCode == '' || zipReg.test(zipCode) == false) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setError(false)
      setDisable(true);
      setLoader(true);
      action
        .profileData(username, new Date(showdate), country, city, zipCode)
        .then(res => {
          setDisable(false);
          setLoader(false);
          onPress();
        })
        .catch(err => {
          setDisable(false);
          setLoader(false);
        });
    }
  };
  {
    error && alert('kindly check input fields');
  }
  return (
    <View style={styles.screen1__container}>
      <ScrollView style={{ flex: 1 }}>
        <Input
          value={username}
          onChangeText={e => setUserName(e)}
          customContainerStyle={{ marginVertical: 30 }}
          icon={profile}
          placeholder={'Full Name'}
        />
        <TouchableOpacity onPress={showDatePicker} activeOpacity={0.9}>
          <Input
            editable={false}
            value={showdate}
            customContainerStyle={{ marginVertical: 30 }}
            icon={calender}
            placeholder={'Date of birth'}
          />
        </TouchableOpacity>
        <CountryPicker containerButtonStyle={{ position: 'absolute', top: 0, bottom: 100 }} visible={openCountryPicker} onSelect={(e) => setCountry(e?.name)} theme={DARK_THEME} />
        <TouchableOpacity activeOpacity={0.8} onPress={() => setOpenCountryPicker(!openCountryPicker)}>
          <Input
            editable={false}
            value={country}
            customContainerStyle={{ marginVertical: 30 }}
            icon={path}
            placeholder={'Country'}
          />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <Input
            value={city}
            onChangeText={e => setCity(e)}
            customStyle={{ width: '60%' }}
            customContainerStyle={{ width: '50%' }}
            icon={location}
            placeholder={'City'}
          />
          <Input
            value={zipCode}
            onChangeText={e => setZipCode(e)}
            customStyle={{ width: '65%' }}
            customContainerStyle={{ width: '50%' }}
            icon={zip}
            placeholder={'Zip code'}
          />
        </View>
        <View style={styles.screen1__btnContainer}>
          <Button
            disable={disable}
            customStyle={{ width: '60%' }}
            onClick={() => submit()}
            text={
              <Typo
                children={
                  loader ? (
                    <ActivityIndicator color="white" size="small" />
                  ) : (
                    'Next'
                  )
                }
              />
            }
          />
        </View>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </ScrollView>
    </View>
  );
};
export default Screen1;
