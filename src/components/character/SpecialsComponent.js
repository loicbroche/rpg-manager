
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './SpecialsComponent.css'

class SpecialsComponent extends Component {

  render() {
    const {val, classId, classes} = this.props;
    const characterClass = classes && classId && classes[classId];
    const maxVal = 3;
    const specialPoints = [];
    for(let i = 0; i < maxVal; i++) {
      specialPoints[i] = i < val;
    }
    return (
      <div className="specialsComponent">
        { maxVal > 0 &&  <span className="specials-name">{characterClass && characterClass.SpecialsName}</span> }
        { maxVal > 0 && <span className="currentModifier decrease-value" onClick={(event) => {this.handleValueChange(-1, maxVal)}}></span>}
        <div className="special-points">
          { 
            maxVal > 0 &&  specialPoints.map((available, index) => 
              <div key={index} className={`special-point ${available&&"available"} ${characterClass && characterClass.SpecialsName}`}></div>)
          }
        </div>
        { maxVal > 0 && <span className="currentModifier increase-value" onClick={(event) => {this.handleValueChange(1, maxVal)}}></span>}
      </div>
      )
  }

  // Arrow fx for binding
  handleValueChange = (value, maxVal) => {
    const {val, onValChange} = this.props;
    const newVal = Math.min(Math.max(val+value, 0), maxVal);
    if (newVal !== val) {
      onValChange(newVal);
    }
  }
}

SpecialsComponent.propTypes = {
  val: PropTypes.number.isRequired,
  classId: PropTypes.string,
  onValChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  classes: state.referential.classes
})
export default connect(mapStateToProps)(SpecialsComponent)
