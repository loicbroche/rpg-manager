
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectSubRaceById, selectRaceBySubRaceId } from 'store/selectors';
import PropTypes from 'prop-types'
import { MAX_CARACTERISTIC, BONUS_STEP } from 'rules/Caracteristics.rules'

import './Caracteristic.css'
import CaracteristicBonus from 'components/shared/CaracteristicBonus'

class Caracteristic extends PureComponent {

  render() {
    const { race, subRace, caracteristicName, value, maxVal, bonusStep} = this.props;

    const raceBonus = race?.[caracteristicName];
    const subRaceBonus = subRace?.[caracteristicName];

    return (
      <div className={`caracteristic ${caracteristicName}`}>
        <span className="bonus-caracteristic" title="Modificateur de jets de la caractéristique">
        <CaracteristicBonus caracteristicName={caracteristicName}
                            value={value}
                            maxVal={maxVal}
                            bonusStep={bonusStep}
                            subRaceId={subRace?.Id} />
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

const mapStateToProps = (state, props) => ({
  subRace: selectSubRaceById(state, props.subRaceId),
  race: selectRaceBySubRaceId(state, props.subRaceId)
})
export default connect(mapStateToProps)(Caracteristic)
