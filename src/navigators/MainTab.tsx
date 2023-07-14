import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabEditNote from '../pages/AppTAb';


const Tab = createBottomTabNavigator();
const MainTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='TabAbout' component={TabEditNote} options={{ tabBarLabel: 'About' }} />           
        </Tab.Navigator>

    );
}

export default MainTab;