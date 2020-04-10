import PropTypes from 'prop-types'
import { RacePropType, SubRacePropType, ClassPropType, ArmorPropType } from 'PropTypes';
import { calculateTotalBonus, MAX_CARACTERISTIC, BONUS_STEP  } from './Caracteristics.rules'

export const CA_CARACTERISTIC_CODE = "DEX";
export const CA_CARACTERISTIC_NAME = "Dexterity";
export const CA_BASE = 10;

export const getArmorBonusAC = (race, subRace, characterClass, armor, dexterityPoints) => {
    const subRaceArmorCategories =  subRace?.ArmorCategories || [];
    const classArmorCategories = characterClass?.ArmorCategories || [];
    const isMasterArmor = armor
                          && (  classArmorCategories?.includes(armor.Category)
                                || subRaceArmorCategories?.includes(armor.Category)
                             )

    const raceBonus = race?.[CA_CARACTERISTIC_NAME];
    const subRaceBonus = subRace?.[CA_CARACTERISTIC_NAME];

    const bonusMax = isMasterArmor && armor?.MaxBonusAC;
    return ((!armor || (isMasterArmor && armor.BonusAC === CA_CARACTERISTIC_CODE)) && calculateTotalBonus(dexterityPoints, raceBonus, subRaceBonus, MAX_CARACTERISTIC, BONUS_STEP, bonusMax)) || 0;
}
getArmorBonusAC.propTypes = {
  race: RacePropType,
  subRace: SubRacePropType,
  characterClass: ClassPropType,
  armor: ArmorPropType,
  dexterityPoints: PropTypes.number
}

getArmorBonusAC.defaultProps = {
  dexterityPoints: MAX_CARACTERISTIC/2
}
