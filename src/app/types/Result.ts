export interface ResultMacroNutrientsVariation {
  min: number;
  max: number;
}

export interface UserResult {
  caloricExpenditure: number;
  carbo: ResultMacroNutrientsVariation | number;
  fat: number;
  metabolicRate: number;
  proteins: ResultMacroNutrientsVariation | number;
}
