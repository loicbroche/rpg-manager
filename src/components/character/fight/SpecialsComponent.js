
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './SpecialsComponent.css'

class SpecialsComponent extends Component {

  render() {
    const {val, classId, level, classes, capacities} = this.props;
    const characterClass = classes && classId && classes[classId];
    const capacity = capacities && level && capacities[classId+"-"+level];
    const maxVal = capacity && capacity.Specials;
    const specialPoints = [];
    const locationImage = characterClass && characterClass.SpecialsName && require(`images/specials/${characterClass.SpecialsName}.png`);
    for(let i = 0; i < maxVal; i++) {
      specialPoints[i] = i < val;
    }
    return (
      <div className="specialsComponent">
        { maxVal > 0 && <span className={`currentModifier decrease-value ${val===0 &&"disabled"}`} onClick={(event) => {this.handleValueChange(-1, maxVal)}}
                        title={`Utiliser un point ${characterClass && characterClass.SpecialsName && "de "+characterClass.SpecialsName}`}></span>}
        <div className="special-points">
          { 
            maxVal > 0 &&  specialPoints.map((available, index) => 
              <div key={index} className={`special-point ${available&&"special-available"} ${characterClass && characterClass.SpecialsName}`}
                   title={characterClass && `Point de ${characterClass.SpecialsName} ${available?"disponible":"utilisé"}` }>
                     {available && <img src={locationImage} className="special-image" alt={characterClass.SpecialsName} />}
                   </div>)
          }
        </div>
        { maxVal > 0 && <span className={`currentModifier increase-value ${val===maxVal &&"disabled"}`} onClick={(event) => {this.handleValueChange(1, maxVal)}}
                        title={`Récupérer un point ${characterClass && characterClass.SpecialsName && "de "+characterClass.SpecialsName}`}></span>}
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
  classId: PropTypes.string.isRequired,
  level: PropTypes.number,
  onValChange: PropTypes.func.isRequired
}

SpecialsComponent.defaultProps = {
  level: 1
}

const mapStateToProps = (state) => ({
  classes: state.referential.classes,
  capacities: state.referential.capacities,
})
export default connect(mapStateToProps)(SpecialsComponent)