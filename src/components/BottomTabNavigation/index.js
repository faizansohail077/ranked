import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Analytics from '../../screens/Analytics';
import DrawerNav from '../DrawerNavigator';
import CustomBottom from '../CustomBottomTab'
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator tabBar={(props) => <CustomBottom {...props} />}>
            <Tab.Screen name="Ranked" component={DrawerNav} />
            <Tab.Screen name="Analytics" component={Analytics} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation

