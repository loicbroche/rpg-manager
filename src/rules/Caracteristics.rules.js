export const MAX_CARACTERISTIC = 20;
export const BONUS_STEP = 2;

const calculateBonus = (value, maxVal = MAX_CARACTERISTIC, bonusStep = BONUS_STEP) => {
    return Math.floor((value-(maxVal/2))/bonusStep);
}

export const calculateTotalBonus = (value, raceBonus, subRaceBonus, maxVal = MAX_CARACTERISTIC, bonusStep = BONUS_STEP) => {
  return calculateBonus(value + raceBonus + subRaceBonus, maxVal, bonusStep);
}