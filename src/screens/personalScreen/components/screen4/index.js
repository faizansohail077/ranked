import React from 'react';
import {Text, View, Image, ActivityIndicator} from 'react-native';
import {Button, Typo} from '../../../../components';
import {styles} from './style';
import bg from '../../../../assets/roundbg.png';
import {CommonActions, useNavigation} from '@react-navigation/native';
import SliderComponent from '../../../../components/Slider';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../store/actions';

const Screen4 = ({route}) => {
  const {uri} = route?.params;
  const [score, setScore] = useState(2);
  const [loader, setLoader] = useState(false);
  const [disable, setDisable] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const action = bindActionCreators(actions, dispatch);

  const submit = () => {
    setLoader(true);
    setDisable(true);
    action
      .profileImage(uri, score)
      .then(res => {
        setLoader(false);
        setDisable(false);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'bottomTab'}],
          }),
        );
      })
      .catch(err => {
        setLoader(false);
        setDisable(false);
      });
  };

  return (
    <View style={styles.screen4__container}>
      <View style={styles.screen4__imageView}>
        <Image style={styles.screen4__image} source={{uri: uri}} />
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View style={styles.screen4__bottomImageView}>
            <Image style={styles.screen4__bottomImage} source={bg} />
            <Text style={styles.screen4__bottomViewText}>Score your self</Text>
            <View style={{marginBottom: 50}}>
              <SliderComponent
                Score={score}
                setSelfScore={id => setScore(id)}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <Button
                disable={disable}
                onClick={() => submit()}
                customTextStyle={{fontSize: 20}}
                customStyle={{width: '50%'}}
                text={
                  <Typo
                    children={
                      loader ? (
                        <ActivityIndicator color="white" size="small" />
                      ) : (
                        'Finish...!'
                      )
                    }
                  />
                }
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Screen4;
