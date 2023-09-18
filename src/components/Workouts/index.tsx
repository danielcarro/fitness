import React, { useState } from 'react';
import {
    MuscleScroll,
    Workout,
    WorkoutActions,
    WorkoutInfo,
    WorkoutTitle,
    WorkoutButton,
    WorkoutButtonImage,
    MuscleGroup,
    MuscleImage
} from './styles';
import useMuscleImage from '../useMuscleImage';


type Props = {
    data: any;
    addAction: () => void;
}

const Workouts = ({ data, addAction }: Props) => {

    let muscleGroups: string[] = [];
    const [included, setIncluded] = useState<boolean>(false);

    for (let i in data.exercises) {
        if (!muscleGroups.includes(data.exercises[i].muscle)) {
            muscleGroups.push(data.exercises[i].muscle)
        }
    }


    const addWorkout = () => {
        addAction();
        setIncluded(!included);
        
    }

    return (
        <Workout>
            <WorkoutInfo>
                <WorkoutTitle>{data.name}</WorkoutTitle>
                <MuscleScroll horizontal={true}>
                    {muscleGroups.map((m, index) => (
                        <MuscleGroup key={index}>
                            <MuscleImage source={useMuscleImage(m) as any} />
                        </MuscleGroup>
                    ))}
                </MuscleScroll>
            </WorkoutInfo>
            <WorkoutActions>
                <WorkoutButton onPress={() => addWorkout()} underlayColor='transparent'>
                    <WorkoutButtonImage source={included ? require('../../assets/check-black.png') : require('../../assets/add.png')} />
                </WorkoutButton>
            </WorkoutActions>
        </Workout>
    );
}

export default Workouts;