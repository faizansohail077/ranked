import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './src/screens/onboarding';
import Splash from './src/screens/splash';
import Login from './src/screens/login/login';
import SignUp from './src/screens/signup';
import PersonalData from './src/screens/personalScreen';
import { Screen4 } from './src/screens/personalScreen/components';
import BottomTabNavigation from './src/components/BottomTabNavigation';
import Query from './src/screens/Query';
import Accounts from './src/screens/Accounts';
import SelfScore from './src/screens/SelfScore';
import { Provider } from 'react-redux';
import { store } from './src/store';
import EditProfile from './src/screens/EditProfile';
import ProfileHistory from './src/screens/ProfileHistory';
import ChangeProfile from './src/screens/ChangeProfilePhoto';
import FeedBack from './src/screens/Feedback';
import Help from './src/screens/Help';
import Settings from './src/screens/Settings';
import RateApp from './src/screens/RateApp';
import About from './src/screens/About';
import UpdateSelfScore from './src/screens/UpdateSelfScore';

const Stack = createStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator headerMode={false}>
          <Stack.Screen name="onBoard" component={Onboarding} />
          <Stack.Screen name="splash" component={Splash} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="personalData" component={PersonalData} />
          <Stack.Screen name="bottomTab" component={BottomTabNavigation} />
          <Stack.Screen name="screen4" component={Screen4} />
          <Stack.Screen name="query" component={Query} />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="accounts" component={Accounts} />
          <Stack.Screen name="selfscore" component={SelfScore} />
          <Stack.Screen name="edit" component={EditProfile} />
          <Stack.Screen name="profileHistory" component={ProfileHistory} />
          <Stack.Screen name="changeProfile" component={ChangeProfile} />
          <Stack.Screen name="feedback" component={FeedBack} />
          <Stack.Screen name="help" component={Help} />
          <Stack.Screen name="setting" component={Settings} />
          <Stack.Screen name="rate" component={RateApp} />
          <Stack.Screen name="updateSelfScroe" component={UpdateSelfScore} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
