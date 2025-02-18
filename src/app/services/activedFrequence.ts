import { UserDataActivity } from '../types/UserData';

export function ActivedFrequenceTextShow(actived: UserDataActivity) {
  switch (actived) {
    case UserDataActivity.SEDENTARY:
      return 'nenhum ou pouco exercício';
    case UserDataActivity.SLIGHTLY:
      return '1 a 3 dias de exercício';
    case UserDataActivity.MODERATELY:
      return '3 a 5 dias de exercício';
    case UserDataActivity.HIGHLY:
      return '5 a 6 dias de exercício pesado';
    case UserDataActivity.EXTREMELY:
      return '2x por dia de exercício pesado';
  }
}
