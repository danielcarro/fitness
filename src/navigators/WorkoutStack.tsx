import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preload from '../pages/Preload' ;
import StarterStack from '../pages/StarterStack' ;
import AppTab from '../pages/AppTab' ;

const WorkoutStack = createNativeStackNavigator();

export default () => {
    return (
        <WorkoutStack.Navigator screenOptions={{headerShown: false}}>
            <WorkoutStack.Screen  name="Preload" component={Preload}  />         
        </WorkoutStack.Navigator>
    );
}



