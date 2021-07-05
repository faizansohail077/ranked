import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SvgXml} from 'react-native-svg';
import arrow from '../../assets/arrow';
import moment from 'moment';
import {styles} from './style';
import * as actions from '../../store/actions';

import {Typo} from '../../components';
import {bindActionCreators} from 'redux';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';

const ProfileHistory = () => {
  const [response, setResponse] = useState('');
  const [loader, setLoader] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);

  useEffect(() => {
    action
      .getProfilePhoto()
      .then(res => {
        if (res.length && res.length > 0) {
          setLoader(false);
          setResponse(res);
        } else {
          setLoader(false);
        }
      })
      .catch(err => {});
  }, []);

  return (
    <View style={styles.profile__container}>
      <View style={{marginBottom: 15}}>
        <View style={styles.profile__header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.profile__headerLeft}>
              <SvgXml xml={arrow} />
            </View>
          </TouchableOpacity>
          <View>
            <Typo children={'Profile'} />
          </View>
          <View style={{width: 13.5, padding: 15}}></View>
        </View>
      </View>
      {loader ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <FlatList
          numColumns={2}
          contentContainerStyle={{alignItems: 'center'}}
          keyExtractor={item => item.id}
          data={response}
          renderItem={({item}) => {
            return (
              <View style={styles.profile__ImageContainer}>
                <Image
                  style={styles.profile__image}
                  resizeMode={'cover'}
                  source={{uri: item?.selfie_url}}
                />
                <View>
                  <Typo
                    style={styles.profile__topText}
                    children={`UPDATED, ${moment(item?.created_at).format(
                      'Do MMM YY',
                    )}`}
                  />
                </View>
                <View style={styles.profile__bottomConatiner}>
                  <View style={styles.profile__bottomLeft}>
                    <Typo
                      style={styles.profilt__bottomText}
                      children={
                        item?.average ? Math.floor(item?.average) : 'NA'
                      }
                    />
                  </View>
                  <View style={styles.profile__bottomRight}>
                    <Typo
                      style={styles.profilt__bottomText}
                      children={item?.self_score}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '80%',
                    position: 'absolute',
                    bottom: '5%',
                    left: '3%',
                  }}>
                  <View style={{flexGrow: 1}}>
                    <Typo
                      style={{textAlign: 'center', fontSize: 8}}
                      children={'Overall Score'}
                    />
                  </View>
                  <View style={{flexGrow: 0}}>
                    <Typo
                      style={{textAlign: 'center', fontSize: 8}}
                      children={'Self Score'}
                    />
                  </View>
                </View>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default ProfileHistory;
