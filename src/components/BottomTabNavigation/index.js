import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Analytics from '../../screens/Analytics';
import DrawerNav from '../DrawerNavigator';
import CustomBottom from '../CustomBottomTab'
import { useNavigation } from '@react-navigation/native';
import About from '../../screens/About';
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    const navigation = useNavigation()

    return (
        <Tab.Navigator tabBar={(props) => <CustomBottom {...props} />}>
            <Tab.Screen name="Ranked" component={DrawerNav} />
            <Tab.Screen name="Analytics" component={Analytics} />
            {/* <Tab.Screen name="about" component={About} /> */}
        </Tab.Navigator>
    )
}

export default BottomTabNavigation

