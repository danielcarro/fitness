import React from 'react';
import { DayButton, DayItem, DayText } from './styles';


interface Props {
    key: number;
    day: number;
    month: number;
    dailyProgress: string[];
    workoutDays: number[];
    onPress: () => void;
    width: number
}


const Day = ({ key, day, month, dailyProgress, workoutDays, onPress, width }: Props) => {
    let bgColor = '#f4f4f4';
    let opacity = 1;

    let today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    let thisDate = new Date(today.getFullYear(), month, day);

    //alert(thisDate)

    if (workoutDays.includes(thisDate.getDay())) {

        if (thisDate.getTime() < today.getTime()) {

            let thisYear: any = thisDate.getFullYear();
            let thisMonth: any = thisDate.getMonth();
            thisMonth = (thisMonth < 10) ? '0' + thisMonth : thisMonth;
            let thisDay: any = thisDate.getDate();
            thisDay = (thisDay<10)?'0'+thisDay:thisDay;

            let dFormated: string = `${thisYear} - ${thisMonth} - ${thisDay}`;
            dailyProgress.map(item => {
                
                if(item == dFormated){
                    alert(dFormated);
                }
                
            })

            if (dailyProgress.includes(dFormated)) {

                bgColor = '#b5ffb8'
            } else {

                bgColor = '#ffb5b5'
            }

        }

    } else {
        opacity = 0.2;
    }

    if (thisDate.getTime() == today.getTime()) {
        bgColor = "#b5eeff";
        opacity = 1;
    }


    return (

        <DayButton key={key} width={width} onPress={onPress} underlayColor="transparent">
            <DayItem bgColor={bgColor} opacity={opacity}>
                <DayText>{day}</DayText>
            </DayItem>
        </DayButton>

    );
}

export default Day;