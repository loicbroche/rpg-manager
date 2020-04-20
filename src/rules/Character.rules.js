import PropTypes from 'prop-types'

const STRENGTH_MULTIPLIER = 7.5;

export const DEFAULT_EMPTY_VALUE = "-";
export const DEFAULT_CARACTERISTIC_VALUE = 10;
export const DEFAULT_HEALTH_VALUE = 4;
export const DEFAULT_HP_VALUE = 8;
export const DEFAULT_MONEY_VALUE = 10000;
export const SATCHEL_CHARGE_CAPACITY = 20000;

export const getChargeCapacity = (strength) => {
    return strength * STRENGTH_MULTIPLIER * 1000;
}
getChargeCapacity.propTypes = {
  strength: PropTypes.number
}
