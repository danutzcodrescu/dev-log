export interface Exercise {
  id: string;
  name: string;
  weight: number;
  reps: number;
  date: Date;
}

export interface ExerciseState {
  exercises: Exercise[];
}
