import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/useAppSelector';
import StarterIntro from '../StarterIntro';
import StarterName from '../StarterName';
import StarterDays from '../StarterDays';
import StarterLevel from '../StarterLevel';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation,StackActions } from '@react-navigation/native';
import StarterRecommendations from "../StarterRecommendations";



export type RootStackParamList = {
    StarterName: undefined;
    StarterDays: undefined;
    StarterLevel: undefined;
    StarterRecommendations: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const StarterStack = createNativeStackNavigator();

export const NextButtom = styled.Button`

`;

export default () => {
    const user = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const navigation = useNavigation<NavigationProp>();

    const nextActionStarterName = () => {
        if (!user.name) {
            alert('Você precisa de um nome');
            return;
        }
        navigation.navigate('StarterDays')
    }

    const nextActionStarterDays = () => {
        if (!user.workoutDays.length) {
            alert('Você precisa treinar pelo meno 1 dia!');
            return;
        }
        navigation.navigate('StarterLevel')
    }

    const nextActionStarterLevel = () => {
        if (!user.level) {
            alert('Você precisa escolher uma opção.');
            return;
        }
        navigation.navigate('StarterRecommendations')
    }

    const nextActionStarterRecommendations = () => {       
        navigation.dispatch(
            StackActions.replace('AppTab')
          );
    };

    return (
        <StarterStack.Navigator >
            <StarterStack.Screen options={{ headerShown: false }} name="StarterIntro" component={StarterIntro} />
            <StarterStack.Screen
                options={{
                    title: '',
                    headerRight: () => <NextButtom title="Próximo" onPress={nextActionStarterName} />
                }}
                name="StarterName"
                component={StarterName}
            />
            <StarterStack.Screen options={{
                title: '',
                headerRight: () => <NextButtom title="Próximo" onPress={nextActionStarterDays} />
            }}
                name="StarterDays"
                component={StarterDays} />
            <StarterStack.Screen options={{
                title: '',
                headerRight: () => <NextButtom title="Próximo" onPress={nextActionStarterLevel} />
            }}
                name="StarterLevel"
                component={StarterLevel} />
            <StarterStack.Screen options={{
                title: '',
                headerRight: () => <NextButtom title={user.myWorkouts.length > 0 ? 'Concluir' : 'Ignorar'} onPress={()=>dispatch(nextActionStarterRecommendations)} />
            }}
                name="StarterRecommendations"
                component={StarterRecommendations} />
        </StarterStack.Navigator>

    );
}



