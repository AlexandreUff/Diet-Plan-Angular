export enum Activity {
  SEDENTARY = 1,
  SLIGHTLY = 2,
  MODERATELY = 3,
  HIGHLY = 4,
  EXTREMELY = 5,
}

export interface UserDataType {
  weight: number;
  height: number;
  age: number;
  activity: Activity;
  sex: 'male' | 'female';
  goal: 'hypertrophy' | 'loseweight';
}
