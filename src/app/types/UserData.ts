export enum UserDataActivity {
  SEDENTARY = 1,
  SLIGHTLY = 2,
  MODERATELY = 3,
  HIGHLY = 4,
  EXTREMELY = 5,
}

export enum UserDataSex {
  MALE = 'male',
  FEMALE = 'female',
}

export enum UserDataGoal {
  HYPERTROPHY = 'hypertrophy',
  LOSEWEIGHT = 'loseweight',
}

export interface UserDataType {
  weight: number;
  height: number;
  age: number;
  activity: UserDataActivity;
  sex: UserDataSex;
  goal: UserDataGoal;
}
