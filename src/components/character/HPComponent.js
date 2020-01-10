
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './HPComponent.css'

class HPComponent extends Component {

  render() {
    const {val, maxVal} = this.props;
    return (
      <div className="hpComponent">
        <span className="maxModifier" onClick={(event) => {this.handleMaxValueChange(-1)}}>{"<"}</span>
        <span className="currentModifier" onClick={(event) => {this.handleValueChange(-1)}}>{"<<"}</span>
        <progress className="hpBar" value={val} min={0} max={maxVal} data-label={`${val} / ${maxVal}`} ></progress>
        <span className="currentModifier" onClick={(event) => {this.handleValueChange(1)}}>{">>"}</span>
        <span className="maxModifier" onClick={(event) => {this.handleMaxValueChange(1)}}>{">"}</span>
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
  onValChange: PropTypes.func.isRequired,
  onMaxValChange: PropTypes.func.isRequired
}

export default HPComponent
