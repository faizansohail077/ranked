import React from 'react';
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

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="onBoard" component={Onboarding} />
        <Stack.Screen name="bottomTab" component={BottomTabNavigation} />
        <Stack.Screen name="personalData" component={PersonalData} />
        <Stack.Screen name="screen4" component={Screen4} />
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
