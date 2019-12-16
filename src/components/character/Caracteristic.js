
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { calculateBonus } from 'rules/Caracteristics.rules'
import './Caracteristic.css'

class Caracteristic extends Component {

  render() {
    const { races, subRaces, caracteristicName, value, subRaceId, maxVal } = this.props;

    const subRace = subRaces && subRaces[subRaceId];
    const race = subRace && races && races[subRace.Race];

    const raceBonus = race && race[caracteristicName];
    const subRaceBonus = subRace && subRace[caracteristicName];
    const bonus = calculateBonus(value + raceBonus + subRaceBonus, maxVal);

    return (
      <div className={`caracteristic ${caracteristicName}`}>
        <span className="bonus-caracteristic">{(bonus>=0?"+":"")+bonus}</span>
        <input  type="number"
                name={caracteristicName}  
                autoComplete={`caracteristic-${caracteristicName}`}
                value={value}
                min={0}
                max={maxVal}
                step={1}
                onChange={this.handleValueUpdate}
                className="caracteristic-value" />
        <div className="character-bonus">
          { (raceBonus !== 0) && <span className="race-bonus">+{ raceBonus }</span>}
          { (subRaceBonus !== 0) && <span className="subRace-bonus">+{ subRaceBonus }</span>}
        </div>
      </div>
    )
  }

  // Arrow fx for binding
  handleValueUpdate = (event) => {
    const value = parseInt(event.target.value) || 0;
    this.props.onChange(value);
  }
}

Caracteristic.propTypes = {
  caracteristicName: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  maxVal: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  subRaceId: PropTypes.string
}

Caracteristic.defaultProps = {
  maxVal: 20,
  bonusStep: 2
}

const mapStateToProps = (state) => ({
  races: state.referential.races,
  subRaces: state.referential.subRaces
})
export default connect(mapStateToProps)(Caracteristic)
