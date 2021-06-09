import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Analytics from '../../screens/Analytics';
import analytics from '../../assets/analytics'
import analyticsdark from '../../assets/analyticsdark'
import ranked from '../../assets/ranked'
import rankedlight from '../../assets/rankedLight'
import { SvgXml } from 'react-native-svg';
import DrawerNav from '../DrawerNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                let iconName;
                if (route.name === 'Ranked') {
                    iconName = focused
                        ? ranked
                        : rankedlight;
                } else if (route.name === 'Analytics') {
                    iconName = focused ? analyticsdark : analytics;
                }
                return <SvgXml fill="black" height="40" width="30" xml={iconName} />;
            },
        })}
            tabBarOptions={{
                labelStyle: {
                    fontSize: 10,
                    margin: 0,
                    paddingTop: 10,
                },
                activeTintColor: '#000000',
                inactiveTintColor: '#676767',
                style: {
                    backgroundColor: 'whitesmoke',
                    paddingVertical: 10,
                }
            }}>

            <Tab.Screen name="Ranked" component={DrawerNav} />
            <Tab.Screen name="Analytics" component={Analytics} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation

