
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './HPComponent.css'

class HPComponent extends Component {

  render() {
    const {val, maxVal, classId, classes} = this.props;
    const characterClass = classes && classId && classes[classId];
    const diceImage = characterClass && require(`images/dices/D${characterClass.HD}.png`);
    return (
      <div className="hpComponent">
        <span className={`maxModifier decrease-max ${maxVal===1 &&"disabled"}`} onClick={(event) => {this.handleMaxValueChange(-1)}} title="Réduire les points de vie maximum"></span>
        <span className={`currentModifier decrease-value ${val===0 &&"disabled"}`} onClick={(event) => {this.handleValueChange(-1)}} title="Perdre un point de vie"></span>
        <div className="hpBar">
          <div className="hpProgressBar" style={{width:`${Math.ceil(val/maxVal*100)}%`}}>&nbsp;</div>
          <div className="label">
            {`${val} / ${maxVal}`}
            <img src={diceImage} className="dice-image" alt={`D${characterClass && characterClass.HD}`} title={`D${characterClass && characterClass.HD}`} />
          </div>
        </div>
        <span className={`currentModifier increase-value ${val===maxVal &&"disabled"}`} onClick={(event) => {this.handleValueChange(1)}} title="Récupérer un point de vie"></span>
        <span className="maxModifier increase-max" onClick={(event) => {this.handleMaxValueChange(1)}} title="Augmenter les points de vie maximum"></span>
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
  onValChange: PropTypes.func.isRequired,
  onMaxValChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  classes: state.referential.classes
})
export default connect(mapStateToProps)(HPComponent)