import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Typo} from '..';
import {styles} from './style';
import edit from '../../assets/edit';
import profile from '../../assets/profile2';
import change from '../../assets/change';
import feedback from '../../assets/feedback';
import help from '../../assets/help';
import setting from '../../assets/setting';
import rate from '../../assets/rate';
import * as actions from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {CommonActions, useNavigation} from '@react-navigation/native';

const CustomDrawer = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.authReducer);
  const action = bindActionCreators(actions, dispatch);

  const logout = () => {
    action
      .logOut()
      .then(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'onBoard'}],
          }),
        );
      })
      .catch(err => {});
  };

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View
        style={{
          flex: 1,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
        }}>
        <View style={styles.drawer__top}>
          <View style={styles.drawer__topImage}>
            <Image
              style={{height: '100%', width: '100%', borderRadius: 20}}
              source={{uri: user && user?.profile_picture}}
            />
          </View>
          <View>
            <Typo
              children={user && user?.fullname}
              style={styles.drawer__topText}
            />
          </View>
        </View>
        <View style={styles.drawer__bottom}>
          <View style={{marginHorizontal: 10, marginVertical: 20}}>
            <TouchableOpacity onPress={() => navigation.navigate('edit')}>
              <View style={styles.drawer__bottomView}>
                <View style={{width: 30}}>
                  <SvgXml style={{width: 30}} xml={edit} />
                </View>
                <Typo
                  style={styles.drawer__bottomViewText}
                  children={'Edit Profile'}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('profileHistory')}>
              <View style={styles.drawer__bottomView}>
                <View style={{width: 30}}>
                  <SvgXml style={{width: 30}} xml={profile} />
                </View>
                <Typo
                  style={styles.drawer__bottomViewText}
                  children={'Profile History'}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('changeProfile')}>
              <View style={styles.drawer__bottomView}>
                <View style={{width: 30}}>
                  <SvgXml style={{width: 30}} xml={change} />
                </View>
                <Typo
                  style={styles.drawer__bottomViewText}
                  children={'Change Profile Photo'}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('feedback')}>
              <View style={styles.drawer__bottomView}>
                <View style={{width: 30}}>
                  <SvgXml style={{width: 30}} xml={feedback} />
                </View>
                <Typo
                  style={styles.drawer__bottomViewText}
                  children={'Feedback'}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('help')}>
              <View style={styles.drawer__bottomView}>
                <View style={{width: 30}}>
                  <SvgXml style={{width: 30}} xml={help} />
                </View>
                <Typo style={styles.drawer__bottomViewText} children={'Help'} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('setting')}>
              <View style={styles.drawer__bottomView}>
                <View style={{width: 30}}>
                  <SvgXml style={{width: 30}} xml={setting} />
                </View>
                <Typo
                  style={styles.drawer__bottomViewText}
                  children={'Settings'}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.drawer__bottomView}>
                <View style={{width: 30}}>
                  <SvgXml style={{width: 30}} xml={rate} />
                </View>
                <Typo
                  style={styles.drawer__bottomViewText}
                  children={'Rate This App'}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}></View>
          <View>
            <TouchableOpacity>
              <View style={{marginVertical: 10}}>
                <Typo
                  style={styles.drawer__bottomViewText}
                  children={'About Us'}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => logout()}>
              <View style={{marginBottom: 10}}>
                <Typo
                  style={styles.drawer__bottomViewText}
                  children={'Log Out'}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CustomDrawer;
