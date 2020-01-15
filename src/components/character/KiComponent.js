
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './KiComponent.css'

class KiComponent extends Component {

  render() {
    const {val, maxVal, classId, classes} = this.props;
    const characterClass = classes && classId && classes[classId];
    const kiPoints = [];
    for(let i = 0; i < maxVal; i++) {
      kiPoints[i] = i < val;
    }
    return (
      <div className="kiComponent">
        { maxVal > 0 && <span className="maxModifier decrease-max" onClick={(event) => {this.handleMaxValueChange(-1)}}></span>}
        { maxVal > 0 && <span className="currentModifier decrease-value" onClick={(event) => {this.handleValueChange(-1)}}></span>}
        <div className="ki-points">
          { 
            maxVal > 0 &&  kiPoints.map((available, index) =>  <div key={index} className={`ki-point ${available&&"available"}`}></div>)
          }
        </div>
        { maxVal > 0 && <span className="currentModifier increase-value" onClick={(event) => {this.handleValueChange(1)}}></span>}
        { maxVal > 0 && <span className="maxModifier increase-max" onClick={(event) => {this.handleMaxValueChange(1)}}></span>}
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

KiComponent.propTypes = {
  val: PropTypes.number.isRequired,
  maxVal: PropTypes.number.isRequired,
  classId: PropTypes.string,
  onValChange: PropTypes.func.isRequired,
  onMaxValChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  classes: state.referential.classes
})
export default connect(mapStateToProps)(KiComponent)
