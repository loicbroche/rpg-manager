
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ENERGY_LEVELS } from 'rules/Health.rules'

import './HealthComponent.css'

const MAX_VAL = ENERGY_LEVELS.length-1;

class HealthComponent extends PureComponent {

  render() {
    const { value, onChange } = this.props;
    
    return (
      <div className="healthComponent" title="Niveau d'énergie">
        {onChange && <span className={`currentModifier decrease-value ${value===0 &&"disabled"}`} role="button" onClick={() => {this.handleValueChange(-1)}} title="Diminuer le niveau dénergie"></span>}
        <div className="healthBar">
          <div className="healthProgressBar" style={{width:`${Math.ceil(value/MAX_VAL*100)}%`}}>&nbsp;</div>
          <div className="label">
            <span>{ENERGY_LEVELS[value]}</span>
          </div>
        </div>
        {onChange && <span className={`currentModifier increase-value ${value===MAX_VAL &&"disabled"}`} role="button" onClick={() => {this.handleValueChange(1)}} title="Augmenter le niveau d'énergie"></span>}
      </div>
    )
  }

  // Arrow fx for binding
  handleValueChange = (val) => {
    const {value,onChange} = this.props;
    const newVal = Math.min(Math.max(value+val, 0), MAX_VAL);
    if (newVal !== value) {
      onChange(newVal);
    }
  }
}

HealthComponent.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
}

HealthComponent.defaultProps = {
  value: 0
}

const mapStateToProps = (state) => ({
})
export default connect(mapStateToProps)(HealthComponent)
