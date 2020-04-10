
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './SpecialsComponent.css'

class SpecialsComponent extends PureComponent {

  render() {
    const {val, classId, level, classes, capacities, onValChange} = this.props;
    const characterClass = classes?.[classId];
    const capacity = capacities?.[classId+"-"+level];
    const maxVal = capacity?.Specials;
    const specialPoints = [];
    const specialImage = characterClass?.SpecialsName && require(`images/specials/${characterClass.SpecialsName}.png`);
    for(let i = 0; i < maxVal; i++) {
      specialPoints[i] = i < val;
    }

    return (
      <div className="specialsComponent">
        { onValChange && maxVal > 0 && <span className={`currentModifier decrease-value ${characterClass.SpecialsName}-modifier ${val===0 &&"disabled"}`}
                                              role="button" onClick={(event) => {this.handleValueChange(-1, maxVal)}}
                                              title={`Utiliser un point ${characterClass?.SpecialsName && "de "+characterClass.SpecialsName}`}></span>}
        {maxVal > 0 && 
        <div className="special-points">
          {  Object.entries(specialPoints).map(([index, available]) => 
              <div key={index} className={`special-point ${available&&"special-available"} ${characterClass?.SpecialsName}`}
                   title={characterClass && `Point de ${characterClass?.SpecialsName} ${available?"disponible":"utilisé"}` }>
                     {available && <img src={specialImage} className="special-image" alt={characterClass?.SpecialsName} />}
                   </div>)
          }
        </div>}
        { onValChange && maxVal > 0 && <span className={`currentModifier increase-value ${characterClass.SpecialsName}-modifier ${val===maxVal &&"disabled"}`}
                                              role="button" onClick={(event) => {this.handleValueChange(1, maxVal)}}
                                              title={`Récupérer un point ${characterClass?.SpecialsName && "de "+characterClass.SpecialsName}`}></span>}
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
  onValChange: PropTypes.func
}

SpecialsComponent.defaultProps = {
  level: 1
}

const mapStateToProps = (state) => ({
  classes: state.referential.classes,
  capacities: state.referential.capacities,
})
export default connect(mapStateToProps)(SpecialsComponent)
