import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks/useAppSelector';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Legend,
    LegendBox,
    LegendItem,
    LegendText
} from './styles';

import HomeMounthScroll from '../../components/HomeMounthScroll';
import HomeDaysScroll from '../../components/HomeDaysScroll';
import HomeDayStatus from '../../components/HomeDayStatus';

const Home = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user);
    const dailyProgress = user.dailyProgress;
    const workoutDays = user.workoutDays;
    const navigation = useNavigation();


    let today = new Date();

    const [selectMouthProp, setSelectMouthProp]: [number, (newValue: number) => void] = useState(today.getMonth());
    const [selectDayProps, setSelectDayProps]: [number, (newValue: number) => void] = useState(today.getDate());

    return (

        <Container>
            <HomeMounthScroll
                selectMouthProp={selectMouthProp}
                setSelectMouthProp={setSelectMouthProp}
            />
            <HomeDaysScroll
                selectMouthProp={selectMouthProp}
                selectDayProps={selectDayProps}
                setSelectDayProps={setSelectDayProps}
                dailyProgress={dailyProgress}
                workoutDays={workoutDays}
            />
            <HomeDayStatus />
            <LegendText>Legenda: {selectMouthProp}</LegendText>
            <Legend>
                <LegendText>Legenda:</LegendText>
                <LegendItem>
                    <LegendBox style={{ backgroundColor: '#b5eeff' }}></LegendBox>
                    <LegendText>Hoje</LegendText>
                </LegendItem>
                <LegendItem>
                    <LegendBox style={{ backgroundColor: '#b5ffb8' }}></LegendBox>
                    <LegendText>Treino Feito</LegendText>
                </LegendItem>
                <LegendItem>
                    <LegendBox style={{ backgroundColor: '#ffb5b5' }}></LegendBox>
                    <LegendText>Treino Perdido</LegendText>
                </LegendItem>
                <LegendItem>
                    <LegendBox style={{ backgroundColor: '#f4f4f4', opacity: 0.2 }}></LegendBox>
                    <LegendText>Dia de descanço</LegendText>
                </LegendItem>
                <LegendItem>
                    <LegendBox style={{ backgroundColor: '#f4f4f4' }}></LegendBox>
                    <LegendText>Dia Futuro</LegendText>
                </LegendItem>
            </Legend>

        </Container>
    )
}

export default Home;