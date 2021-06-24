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
import { useNavigation } from '@react-navigation/native';
import BottomTabNavigation from '../BottomTabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNav = ({ route }) => {
    const navigation = useNavigation()

    return (
        <Drawer.Navigator drawerContent={() => <CustomDrawer />} drawerStyle={{
            width: '50%',
            borderTopRightRadius: 50,
            marginVertical: 20, borderBottomRightRadius: 50,
            backgroundColor: '#011629'
        }}>
            <Drawer.Screen name="Ranked" component={Home} />
        </Drawer.Navigator>
    )
}

export default DrawerNav

const styles = StyleSheet.create({})
