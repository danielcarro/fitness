import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StarterIntro from '../../pages/StarterIntro' ;

const StarterStack = createNativeStackNavigator();

export default () => {
    return (
        <StarterStack.Navigator >
            <StarterStack.Screen options={{headerShown: false}}  name="StarterIntro" component={StarterIntro}  />
           
        </StarterStack.Navigator>
    );
}



