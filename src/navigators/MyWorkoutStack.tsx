import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preload from '../pages/Preload' ;
import StarterStack from '../pages/StarterStack' ;
import AppTab from '../pages/AppTab' ;

const MyWorkoutStack = createNativeStackNavigator();

export default () => {
    return (
        <MyWorkoutStack.Navigator screenOptions={{headerShown: false}}>
            <MyWorkoutStack.Screen  name="Preload" component={Preload}  />         
        </MyWorkoutStack.Navigator>
    );
}



