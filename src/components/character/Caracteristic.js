
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { RacePropType, SubRacePropType, ClassPropType }from 'PropTypes';
import { calculateBonus } from 'rules/Caracteristics.rules'
import './Caracteristic.css'

class Caracteristic extends Component {

  render() {
    const { caracteristicName, value, race, subRace, characterClass, maxVal } = this.props;

    const raceBonus = race && race[caracteristicName];
    const subRaceBonus = subRace && subRace[caracteristicName];
    const classBonus = characterClass && characterClass[caracteristicName];
    const bonus = calculateBonus(value + raceBonus + subRaceBonus + classBonus, maxVal);

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
          { (classBonus !== 0) && <span className="class-bonus">+{ classBonus }</span>}
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
  race: RacePropType,
  subRace: SubRacePropType,
  characterClass: ClassPropType
}

Caracteristic.defaultProps = {
  maxVal: 20,
  bonusStep: 2
}

export default connect(state => state)(Caracteristic)