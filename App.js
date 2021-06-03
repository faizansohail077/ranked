import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './src/screens/onboarding';
import Splash from './src/screens/splash';
import Login from './src/screens/login/login';
import SignUp from './src/screens/signup';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="onBoard" component={Onboarding} />
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
