import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home' ;
import HomeConfig from '../pages/HomeConfig' ;



const HomeStack = createNativeStackNavigator();

export default () => {
    return (
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
            <HomeStack.Screen  name="Home" component={Home}  />   
            <HomeStack.Screen  name="HomeConfig" component={HomeConfig}  />       
        </HomeStack.Navigator>
    );
}



