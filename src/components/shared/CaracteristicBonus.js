
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { calculateTotalBonus, MAX_CARACTERISTIC, BONUS_STEP } from 'rules/Caracteristics.rules'
import './CaracteristicBonus.css'

class CaracteristicBonus extends Component {

  render() {
    const { races, subRaces, caracteristicName, value, subRaceId, maxVal, bonusStep } = this.props;

    const subRace = subRaces && subRaces[subRaceId];
    const race = subRace && races && races[subRace.Race];

    const raceBonus = race && race[caracteristicName];
    const subRaceBonus = subRace && subRace[caracteristicName];
    const bonus = calculateTotalBonus(value, raceBonus, subRaceBonus, maxVal, bonusStep);

    return <span className={caracteristicName}>{(bonus>=0?"+":"")+bonus}</span>
  }
}

CaracteristicBonus.propTypes = {
  caracteristicName: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  maxVal: PropTypes.number.isRequired,
  bonusStep: PropTypes.number.isRequired,
  subRaceId: PropTypes.string
}

CaracteristicBonus.defaultProps = {
  value: 0,
  maxVal: MAX_CARACTERISTIC,
  bonusStep: BONUS_STEP
}

const mapStateToProps = (state) => ({
  races: state.referential.races,
  subRaces: state.referential.subRaces
})
export default connect(mapStateToProps)(CaracteristicBonus)
