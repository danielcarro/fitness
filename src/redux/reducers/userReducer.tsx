import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState, Workout } from '../../types/types';

const initialState: UserState = {
  name: 'Daniel',
  level: 'beginner',
  workoutDays: [],
  myWorkouts: [],
  lastWorkout: '',
  dailyProgress: ['2023-07-07','2023-07-08']
};

const slice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setLevel: (state, action: PayloadAction<'beginner' | 'intermediate' | 'advanced'>) => {
      state.level = action.payload;
    },
        setWorkoutDays: (state, action: PayloadAction<number[]>) => {
        state.workoutDays = action.payload;
    },
    setMyWorkouts: (state, action: PayloadAction<Workout[]>) => {
        state.myWorkouts = action.payload;
    },
    setLastWorkout: (state, action: PayloadAction<string>) => {
        state.lastWorkout = action.payload;
    },
    setDailyProgress: (state, action: PayloadAction<string[]>) => {
        state.dailyProgress = action.payload;
    }
  }
});

export const {setName, setLevel, setWorkoutDays, setMyWorkouts, setLastWorkout, setDailyProgress} = slice.actions;

export default slice.reducer;