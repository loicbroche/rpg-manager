import PropTypes from 'prop-types'

const STRENGTH_MULTIPLIER = 7.5;
export const SATCHEL_CHARGE_CAPACITY = 20000;

export const getChargeCapacity = (strength) => {
    return strength * STRENGTH_MULTIPLIER * 1000;
}
getChargeCapacity.propTypes = {
  strength: PropTypes.number
}
