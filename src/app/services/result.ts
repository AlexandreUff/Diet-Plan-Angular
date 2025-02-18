import { ResultMacroNutrientsVariation } from '../types/Result';
import {
  UserDataActivity,
  UserDataGoal,
  UserDataSex,
  UserDataType,
} from '../types/UserData';

const getCaloricExpenditure = (data: UserDataType) => {
  const male = 66 + 13.7 * data.weight + 5 * data.height - 6.8 * data.age;
  const female = 655 + 9.6 * data.weight + 1.8 * data.height - 4.7 * data.age;

  let caloricExpenditure;
  let metabolicRate =
    data.sex === UserDataSex.MALE ? +male.toFixed(2) : +female.toFixed(2);

  switch (data.activity) {
    case UserDataActivity.SEDENTARY:
      caloricExpenditure = +(metabolicRate * 1.2).toFixed(2);
      break;
    case UserDataActivity.SLIGHTLY:
      caloricExpenditure = +(metabolicRate * 1.375).toFixed(2);
      break;
    case UserDataActivity.MODERATELY:
      caloricExpenditure = +(metabolicRate * 1.55).toFixed(2);
      break;
    case UserDataActivity.HIGHLY:
      caloricExpenditure = +(metabolicRate * 1.725).toFixed(2);
      break;
    case UserDataActivity.EXTREMELY:
      caloricExpenditure = +(metabolicRate * 1.9).toFixed(2);
      break;
  }

  return {
    metabolicRate,
    caloricExpenditure,
  };
};

const Hipertrophy = (data: UserDataType) => {
  console.log('Hipertrophy', data);

  const { metabolicRate, caloricExpenditure } = getCaloricExpenditure(data);

  const proteins: ResultMacroNutrientsVariation = {
    min: Math.round(data.weight * 1.6),
    max: Math.round(data.weight * 2.2),
  };

  const fat = Math.floor(data.weight);

  const basalCarboCalculation = (proteins: number) => {
    return Math.round((caloricExpenditure - (proteins * 4 + fat * 9)) / 4);
  };

  const carbo: ResultMacroNutrientsVariation = {
    min: basalCarboCalculation(proteins.max),
    max: basalCarboCalculation(proteins.min),
  };

  console.log('TMB', metabolicRate);
  console.log('GASTO', caloricExpenditure);
  console.log('PRoteínas:', proteins);
  console.log('Gorduras:', fat);
  console.log('Carbo:', carbo);

  return {
    metabolicRate,
    caloricExpenditure,
    proteins,
    carbo,
    fat,
  };
};

const Slimming = (data: UserDataType) => {
  console.log('Emagrecimento', data);

  const { metabolicRate, caloricExpenditure } = getCaloricExpenditure(data);

  const macroNutrientsCalc = (percentage: number, calories: number) =>
    Math.round((caloricExpenditure * (percentage / 100)) / calories);

  const proteins: ResultMacroNutrientsVariation = {
    min: macroNutrientsCalc(40, 4),
    max: macroNutrientsCalc(40, 4),
  };

  const carbo: ResultMacroNutrientsVariation = {
    min: macroNutrientsCalc(40, 4),
    max: macroNutrientsCalc(40, 4),
  };

  const fat = macroNutrientsCalc(20, 9);

  console.log('p,c,f:', proteins, carbo, fat);

  console.log('TMB', getCaloricExpenditure(data));

  return {
    metabolicRate,
    caloricExpenditure,
    proteins,
    carbo,
    fat,
  };
};

export default function Result(userData: UserDataType) {
  return userData.goal === UserDataGoal.HYPERTROPHY
    ? Hipertrophy(userData)
    : Slimming(userData);
}
