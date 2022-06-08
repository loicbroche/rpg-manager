
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectClassById, selectClassCapacityByClassIdXP } from 'store/selectors';
import PropTypes from 'prop-types'

import './SpecialsComponent.css'

class SpecialsComponent extends PureComponent {

  render() {
    const {val, class: characterClass, capacity, onValChange} = this.props;

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
  XP: PropTypes.number,
  onValChange: PropTypes.func
}

SpecialsComponent.defaultProps = {
  XP: 0
}

const mapStateToProps = (state, props) => ({
  class: selectClassById(state, props.classId),
  capacity: selectClassCapacityByClassIdXP(state, props.classId, props.XP)
})
export default connect(mapStateToProps)(SpecialsComponent)
