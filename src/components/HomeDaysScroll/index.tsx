import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { Container } from './styles';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import Day from '../Day';

interface Props {
    selectMouthProp: number;
    selectDayProps: number;
    setSelectDayProps: (newValue: number) => void;
    dailyProgress: string[];
    workoutDays: number[];
}


let screenWidth = Math.round(Dimensions.get('window').width);
let dayW = Math.round(screenWidth / 9);
let offsetW = Math.round((screenWidth - dayW) / 2);

const HomeDayScroll = ({ selectMouthProp, selectDayProps, setSelectDayProps, dailyProgress, workoutDays }: Props) => {

    const DayRef = useRef<ScrollView>(null);

    const [selectDay, setSelectDay] = useState(selectDayProps);

    const handleScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        let posX = e.nativeEvent.contentOffset.x;
        let targetDay = Math.round(posX / dayW);
        setSelectDay(targetDay);
    }


    const scrollToDay = (m: number) => {
        let posX = m * dayW;
        DayRef.current?.scrollTo({ x: posX, y: 0, animated: true });
    }

    useEffect(() => {
        setSelectDayProps(selectDay);
    }, [selectDay]);

    useEffect(() => {
        setTimeout(() => {
            if (selectMouthProp == new Date().getMonth()) {
                scrollToDay(new Date().getDate());
            } else {
                scrollToDay(1);
            }
            let days: number[] = [];
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
        
            for (let i = 1; i <= daysInMonth; i++) {
                const dayDate = new Date(year, month, i);
                days.push(dayDate.getDate());
            }
        }, 10);
    }, [selectDayProps]);


    let days: number[] = [];
    let daysInMonth = new Date(new Date().getFullYear(), (selectMouthProp + 1), 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {        
        days.push(i);
    }

    return (
        <Container>
            <ScrollView
                ref={DayRef}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                decelerationRate="fast"
                snapToInterval={dayW}
                contentContainerStyle={{ paddingLeft: offsetW, paddingRight: offsetW }}
                onMomentumScrollEnd={handleScrollEnd}
            >
                {days.map((d, k) => (

                    <Day
                        key={k}
                        day={d}
                        month={selectMouthProp}
                        dailyProgress={dailyProgress}
                        workoutDays={workoutDays}
                        onPress={() => scrollToDay(d)}
                        width={dayW}
                    />

                ))}
            </ScrollView>
        </Container>
    );
};

export default HomeDayScroll;



