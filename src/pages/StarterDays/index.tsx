import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/useAppSelector';
import { useNavigation } from '@react-navigation/native';
import {
    BoldText,
    Container,
    DaysArea,
    HeaderText,
    Main
} from './styles';
import DefaultButton from '../../components/DefaultButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { setWorkoutDays } from '../../redux/reducers/userReducer';


export type RootStackParamList = {
    StarterName: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const StarterDays = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user);
    const workoutDays = user.workoutDays;

    const navigation = useNavigation<NavigationProp>();


    let firstname = user.name.split(' ')[0];

    const toggleDay = (d: number) => {
        let newWorkDays = [...workoutDays];
        if (!workoutDays.includes(d)) {
            newWorkDays.push(d);
        } else {
            newWorkDays = newWorkDays.filter(i => JSON.stringify(i) !== JSON.stringify(d));
        }
        dispatch(setWorkoutDays(newWorkDays));
        navigation.setParams({workoutDays:newWorkDays});
    }

    return (
        <Container>
            <Main>
                <HeaderText>Opa, <BoldText>{firstname}, </BoldText>tudo bem?</HeaderText>
                <HeaderText>Quais <BoldText>dias da semana </BoldText>você pretende treinar?</HeaderText>
                <DaysArea>
                    <DefaultButton title='segunda' width='100px' backgroundColor={workoutDays.includes(1) ? '#a5e8bc' : '#d3d3d3'} marginBottom='20px' underlayColor='#ccc' color='#000' onPress={() => toggleDay(1)} />
                    <DefaultButton title='terça' width='100px' backgroundColor={workoutDays.includes(2) ? '#a5e8bc' : '#d3d3d3'} marginBottom='20px' underlayColor='#ccc' color='#000' onPress={() => toggleDay(2)} />
                    <DefaultButton title='quarta' width='100px' backgroundColor={workoutDays.includes(3) ? '#a5e8bc' : '#d3d3d3'} marginBottom='20px' underlayColor='#ccc' color='#000' onPress={() => toggleDay(3)} />
                    <DefaultButton title='quinta' width='100px' backgroundColor={workoutDays.includes(4) ? '#a5e8bc' : '#d3d3d3'} marginBottom='20px' underlayColor='#ccc' color='#000' onPress={() => toggleDay(4)} />
                    <DefaultButton title='sexta' width='100px' backgroundColor={workoutDays.includes(5) ? '#a5e8bc' : '#d3d3d3'} marginBottom='20px' underlayColor='#ccc' color='#000' onPress={() => toggleDay(5)} />
                    <DefaultButton title='sabado' width='100px' backgroundColor={workoutDays.includes(6) ? '#a5e8bc' : '#d3d3d3'} marginBottom='20px' underlayColor='#ccc' color='#000' onPress={() => toggleDay(6)} />
                    <DefaultButton title='domingo' width='100px' backgroundColor={workoutDays.includes(0) ? '#a5e8bc' : '#d3d3d3'} marginBottom='20px' underlayColor='#ccc' color='#000' onPress={() => toggleDay(0)} />
                </DaysArea>
            </Main>
        </Container>
    )
}

export default StarterDays;