
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { MAX_CARACTERISTIC, BONUS_STEP } from 'rules/Caracteristics.rules'

import './Caracteristic.css'
import CaracteristicBonus from 'components/shared/CaracteristicBonus'

class Caracteristic extends Component {

  render() {
    const { races, subRaces, caracteristicName, value, subRaceId, maxVal, bonusStep} = this.props;

    const subRace = subRaces && subRaces[subRaceId];
    const race = subRace && races && races[subRace.Race];

    const raceBonus = race && race[caracteristicName];
    const subRaceBonus = subRace && subRace[caracteristicName];

    return (
      <div className={`caracteristic ${caracteristicName}`}>
        <span className="bonus-caracteristic" title="Modificateur de jets de la caractéristique">
        <CaracteristicBonus caracteristicName={caracteristicName}
                            value={value}
                            maxVal={maxVal}
                            bonusStep={bonusStep}
                            subRaceId={subRaceId} />
        </span>
        <input  type="number"
                name={caracteristicName}  
                autoComplete={`caracteristic-${caracteristicName}`}
                value={value}
                min={0}
                max={maxVal}
                step={1}
                onChange={this.handleValueUpdate}
                className="caracteristic-value"
                title="Valeur de caractéristique"/>
        <div className="character-bonus">
          { (raceBonus !== 0) && <span className="race-bonus" title={`Valeur bonus de race ${race.Name}`}>+{ raceBonus }</span>}
          { (subRaceBonus !== 0) && <span className="subRace-bonus" title={`Valeur bonus de race ${subRace.Name}`}>+{ subRaceBonus }</span>}
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
  bonusStep: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  subRaceId: PropTypes.string
}

Caracteristic.defaultProps = {
  maxVal: MAX_CARACTERISTIC,
  bonusStep: BONUS_STEP
}

const mapStateToProps = (state) => ({
  races: state.referential.races,
  subRaces: state.referential.subRaces
})
export default connect(mapStateToProps)(Caracteristic)
