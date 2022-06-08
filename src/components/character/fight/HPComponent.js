
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectClassById } from 'store/selectors';
import PropTypes from 'prop-types'

import './HPComponent.css'

class HPComponent extends PureComponent {

  render() {
    const {val, maxVal, class: characterClass, onValChange, onMaxValChange} = this.props;
    const diceImage = characterClass && require(`images/dices/D${characterClass.HD}.png`);
    return (
      <div className="hpComponent" title="Points de vie">
        {onMaxValChange && <span className={`maxModifier decrease-max ${maxVal===1 &&"disabled"}`} role="button" onClick={() => {this.handleMaxValueChange(-1)}} title="Réduire les points de vie maximum"></span>}
        {onValChange && <span className={`currentModifier decrease-value ${val===0 &&"disabled"}`} role="button" onClick={() => {this.handleValueChange(-1)}} title="Perdre un point de vie"></span>}
        <div className="hpBar">
          <div className="hpProgressBar" style={{width:`${Math.ceil(val/maxVal*100)}%`}}>&nbsp;</div>
          <div className="label">
            <span>{`${val} / ${maxVal}`}</span>
            <img src={diceImage} className="dice-image" alt={`D${characterClass?.HD||"?"}`} title={`D${characterClass && characterClass.HD}`} />
          </div>
        </div>
        {onValChange && <span className={`currentModifier increase-value ${val===maxVal &&"disabled"}`} role="button" onClick={() => {this.handleValueChange(1)}} title="Récupérer un point de vie"></span>}
        {onMaxValChange && <span className="maxModifier increase-max" role="button" onClick={() => {this.handleMaxValueChange(1)}} title="Augmenter les points de vie maximum"></span>}
      </div>
    )
  }

  // Arrow fx for binding
  handleValueChange = (value) => {
    const {val, maxVal, onValChange} = this.props;
    const newVal = Math.min(Math.max(val+value, 0), maxVal);
    if (newVal !== val) {
      onValChange(newVal);
    }
  }
  // Arrow fx for binding
  handleMaxValueChange = (value) => {
    const {val, maxVal, onMaxValChange, onValChange} = this.props;
    const newMaxVal = Math.max(maxVal+value, 1);
    if (newMaxVal !== maxVal) {
      onMaxValChange(newMaxVal);
      if (val > newMaxVal) {
        onValChange(newMaxVal);
      }
    }
  }
}

HPComponent.propTypes = {
  val: PropTypes.number.isRequired,
  maxVal: PropTypes.number.isRequired,
  classId: PropTypes.string,
  onValChange: PropTypes.func,
  onMaxValChange: PropTypes.func
}

const mapStateToProps = (state, props) => ({
  class: selectClassById(state, props.classId)
})
export default connect(mapStateToProps)(HPComponent)
