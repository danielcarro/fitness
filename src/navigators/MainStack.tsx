import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preload from '../pages/Preload' ;
import StarterStack from '../pages/StarterStack' ;
import AppTab from '../pages/AppTAb' ;

const MainStack = createNativeStackNavigator();

export default () => {
    return (
        <MainStack.Navigator screenOptions={{headerShown: false}}>
            <MainStack.Screen  name="Preload" component={Preload}  />
            <MainStack.Screen name="StarterStack" component={StarterStack}  />
            <MainStack.Screen name="AppTab" component={AppTab}  />
        </MainStack.Navigator>
    );
}



