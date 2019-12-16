const BONUS_STEP = 2;

export const calculateBonus = (value, maxVal) => {
    return Math.floor((value-(maxVal/2))/BONUS_STEP);
}

export const calculateBonusOf = (caracteristicName, character) => {
  return caracteristicName;
}