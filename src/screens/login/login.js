import React, { useState } from 'react';
import { Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from './style';
import guy from '../../assets/guy.png';
import logo from '../../assets/logo';
import { Button, Input, Typo } from '../../components';
import { SvgXml } from 'react-native-svg';
import person from '../../assets/person';
import facebook from '../../assets/facebook';
import passwordIcon from '../../assets/password';
import * as actions from '../../store/actions';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  ("TCL ~ file: login.js ~ line 21 ~ Login ~ error", error)
  const [disable, setDisable] = useState(false);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);

  const submit = () => {
    let reg = /^\s*$/;
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == '' || emailReg.test(email) === false) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    if (password == '' || password.length > 10) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setError(false)
      setDisable(true);
      setLoader(true);
      action
        .logIn(email, password)
        .then(res => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'bottomTab' }],
            }),
          );
        })
        .catch(err => {
          setLoader(false);
          alert(err);
          setDisable(false);
        });
    }
  };

  return (
    <View style={styles.login__container}>
      <ScrollView style={{ flex: 1 }}>
        {error && alert('Check your field ')}
        <View style={styles.login__top}>
          <View style={{ position: 'relative', flex: 1 }}>
            <Image
              style={styles.login__image}
              resizeMode={'cover'}
              source={guy}
            />
            <View style={styles.login__logo}>
              <SvgXml xml={logo} />
            </View>
            <Text style={styles.login__heading}>
              <Typo style={{ fontSize: 32 }} children={'Sign In'} />
            </Text>
            <View style={styles.login__inputContainer}>
              <Input
                value={email}
                onChangeText={e => setEmail(e)}
                icon={person}
                placeholder={'Email'}
              />
              <Input
                secure={true}
                value={password}
                onChangeText={e => setPassword(e)}
                icon={passwordIcon}
                placeholder={'Password'}
              />
              <View style={styles.login__button}>
                <Button
                  disable={disable}
                  onClick={() => submit()}
                  customStyle={{ width: '70%' }}
                  text={
                    <Typo
                      children={
                        loader ? (
                          <ActivityIndicator color="white" size="small" />
                        ) : (
                          'Login'
                        )
                      }
                    />
                  }
                />
                <Text style={styles.login__Text}>Don't have an accoung?</Text>
                <Text
                  onPress={() => navigation.navigate('signup')}
                  style={styles.login__subText}>
                  Register
                </Text>
                <View style={styles.login__orContainer}>
                  <View style={styles.login__orContainerTop} />
                  <View>
                    <Text style={styles.login__orContainerCenter}>OR</Text>
                  </View>
                  <View style={styles.login__orContainerBottom} />
                </View>
                <Button
                  icon={facebook}
                  customStyle={styles.login__fbButton}
                  text={<Typo children={'Login with facebook'} />}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
