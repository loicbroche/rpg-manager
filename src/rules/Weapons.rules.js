import PropTypes from 'prop-types'
import { WeaponCategoryPropType } from '../PropTypes';

const HTH_CATEGORY_CODES = ["C_MEL", "W_MEL"];
const DISTANCE_CATEGORY_CODES = ["C_DIS", "W_DIS"];

export const filterDistanceCategories = (armorCategories) => {
  return Object.values(armorCategories).filter((category) => DISTANCE_CATEGORY_CODES.includes(category.Code));
}
filterDistanceCategories.propTypes = {
  weaponCategories: PropTypes.arrayOf(WeaponCategoryPropType).isRequired
}

export const filterHtHCategories = (armorCategories) => {
  return Object.values(armorCategories).filter((category) => HTH_CATEGORY_CODES.includes(category.Code));
}
filterHtHCategories.propTypes = {
  weaponCategories: PropTypes.arrayOf(WeaponCategoryPropType).isRequired
}