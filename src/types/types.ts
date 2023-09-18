export interface UserState {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  workoutDays: number[];
  myWorkouts: Workout[];
  lastWorkout: string;
  dailyProgress: string[];
};

export interface Workout {
  id: string;
  name: string;
  exercises: Exercise[]; 
};

export interface Exercise {
  id: number;
  name: string;
  muscle: string;
  sets: string;
  reps: string;
  load: string;
}


