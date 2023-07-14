export type Workout = {
    id: string;
    name: string;
    // inclua propriedades adicionais para o treino dependendo de suas necessidades
  };
  
  export type UserState = {
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    workoutDays: number[];
    myWorkouts: Workout[];
    lastWorkout: string;
    dailyProgress: string[];
  };