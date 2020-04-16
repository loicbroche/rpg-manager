
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectSubRaceById, selectRaceBySubRaceId, selectCaracteristicBonus } from 'store/selectors';
import PropTypes from 'prop-types'
import { MAX_CARACTERISTIC, BONUS_STEP } from 'rules/Caracteristics.rules'
import './CaracteristicBonus.css'

class CaracteristicBonus extends PureComponent {

  render() {
    const { caracteristicName, bonus } = this.props;
    return <span className={caracteristicName}>{(bonus>=0?"+":"")+bonus}</span>
  }
}

CaracteristicBonus.propTypes = {
  caracteristicName: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  maxVal: PropTypes.number.isRequired,
  bonusStep: PropTypes.number.isRequired,
  bonusMax: PropTypes.number,
  subRaceId: PropTypes.string
}

CaracteristicBonus.defaultProps = {
  value: 0,
  maxVal: MAX_CARACTERISTIC,
  bonusStep: BONUS_STEP
}

const mapStateToProps = (state, props) => ({
  
  subRace: selectSubRaceById(state, props.subRaceId),
  race: selectRaceBySubRaceId(state, props.subRaceId),
  bonus: selectCaracteristicBonus(state, props.caracteristicName, props.value,
                                  props.subRaceId, props.maxVal, props.bonusStep, props.bonusMax)
})
export default connect(mapStateToProps)(CaracteristicBonus)
