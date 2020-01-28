import PropTypes from 'prop-types'
import { ArmorCategoryPropType } from '../PropTypes';

const SHIELD_CATEGORY_CODE = "0_SHIELD";

export const filterArmorsCategories = (armorCategories) => {
  return Object.values(armorCategories).filter((category) => category.Code !== SHIELD_CATEGORY_CODE);
}
filterArmorsCategories.propTypes = {
  armorCategories: PropTypes.arrayOf(ArmorCategoryPropType).isRequired
}

export const filterShieldsCategories = (armorCategories) => {
  return Object.values(armorCategories).filter((category) => category.Code === SHIELD_CATEGORY_CODE);
}
filterShieldsCategories.propTypes = {
  armorCategories: PropTypes.arrayOf(ArmorCategoryPropType).isRequired
}