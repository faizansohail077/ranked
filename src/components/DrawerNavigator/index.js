import React from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import EditProfile from '../../screens/EditProfile';
import ProfileHistory from '../../screens/ProfileHistory'
import ChangeProfile from '../../screens/ChangeProfilePhoto'
import feedback from '../../screens/Feedback'
import Home from '../../screens/Home';
import Help from '../../screens/Help';
import Setting from '../../screens/Settings'
import Rate from '../../screens/RateApp'
import About from '../../screens/About'

import { CustomDrawer } from '..';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {

    return (
        <Drawer.Navigator drawerContent={() => <CustomDrawer />} drawerStyle={{
            width: '50%',
            borderTopRightRadius: 50,
            marginVertical: 20, borderBottomRightRadius: 50,
            backgroundColor: '#011629'
        }}>

            <Drawer.Screen name="Ranked" component={Home} />
            <Drawer.Screen name="edit" component={EditProfile} />
            <Drawer.Screen name="profileHistory" component={ProfileHistory} />
            <Drawer.Screen name="changeProfile" component={ChangeProfile} />
            <Drawer.Screen name="feedback" component={feedback} />
            <Drawer.Screen name="help" component={Help} />
            <Drawer.Screen name="setting" component={Setting} />
            <Drawer.Screen name="rate" component={Rate} />
            <Drawer.Screen name="about" component={About} />

        </Drawer.Navigator>
    )
}

export default DrawerNav

const styles = StyleSheet.create({})
