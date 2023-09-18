import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/useAppSelector';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    WorkoutList,
    HeaderText,
    Main,
    BoldText
} from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import workoutJson from '../../presetWorkouts.json';
import Workouts from '../../components/Workouts';
import { addWorkout, deleteWorkout } from '../../redux/reducers/userReducer';

export type RootStackParamList = {
    StarterName: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const StarterRecommendations = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user);
    const myWorkouts = user.myWorkouts;
    const navigation = useNavigation<NavigationProp>();

    useEffect(() => {
        navigation.setParams({ myWorkouts: myWorkouts });
    }, [myWorkouts])

    const handleWorkout = (item: any) => {
        if (myWorkouts.findIndex(i => i.id == item.id) < 0) {           
            dispatch(addWorkout(item) as any)
        } else {      
           dispatch(deleteWorkout(item.id) as any)            
        }
    }

    return (
        <Container>
            <Main>
                <HeaderText>Opções de treino pré criados com base no seu nível</HeaderText>
                <HeaderText><BoldText>Você seleciocinou {myWorkouts.length} treinos</BoldText></HeaderText>
                <WorkoutList
                    data={workoutJson as any}
                    renderItem={({ item }: any) => <Workouts
                        data={item as any}
                        addAction={() => handleWorkout(item)}
                    />}
                    keyExtractor={(item: any) => item.id}
                />


            </Main>
        </Container>
    )
}

export default StarterRecommendations;