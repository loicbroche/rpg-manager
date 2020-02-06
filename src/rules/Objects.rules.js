import PropTypes from 'prop-types'
import { ObjectCategoryPropType } from '../PropTypes';

const MASTERABLE_CATEGORIES = ["ARTISAN", "GAME", "KIT", "MUSIC", "VEHICLE"];

export const filterMasterableCategories = (objectCategories) => {
  return Object.values(objectCategories).filter((category) => MASTERABLE_CATEGORIES.includes(category.Code));
}
filterMasterableCategories.propTypes = {
  objectCategories: PropTypes.arrayOf(ObjectCategoryPropType).isRequired
}
