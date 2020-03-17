
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { SPELL_MAX_LEVEL } from 'rules/Spells.rules'

import './SpellsComponent.css'

class SpellsComponent extends Component {

  render() {
    const {capacities, spells, spellsLocations, classId, specialisationId, level} = this.props;
    const capacity = capacities && classId && level && capacities[classId+"-"+level];
    const maxSpells = capacity && capacity.Locations;
    const spellsLocationMax = maxSpells && Math.max(...Object.keys(maxSpells));

    const spellsPoints = [];
    for (let location = 1; location <= spellsLocationMax; location++) {
      let locationPoints = [];
      const val = spellsLocations && spellsLocations[location]
      const maxVal = maxSpells && maxSpells[location];
      for(let i = 0; i < maxVal; i++) {
        locationPoints[i] = i < val;
      }
      spellsPoints[location] = locationPoints;
    }

    const classAvailableSpells = spells && Object.values(spells).filter((spell) => spell.Classes.includes(classId) || spell.Classes.includes(specialisationId) );
    let learnableSpellsNb = 0;
    for(let i = 0; i <= SPELL_MAX_LEVEL; i++) {
      const levelSpells = classAvailableSpells && classAvailableSpells.filter((spell) => spell.Level === i && capacity && capacity.Locations && (i === 0 || capacity.Locations[spell.Level] >= 1));
      learnableSpellsNb += levelSpells?levelSpells.length:0;
    }

    return (
      <div className="spellsComponent">
          { learnableSpellsNb > 0 &&
            Object.entries(spellsPoints).map(([location, locationPoints]) => {
              const locationImage = require(`images/spells/${location}.png`);
              return (maxSpells && maxSpells[location] > 0 &&
              <div className="location" key={location}>
                <span className={`currentModifier decrease-value spell-modifier ${spellsLocations && spellsLocations[location]===0 &&"disabled"}`}
                      onClick={(event) => {this.handleValueChange(-1, maxSpells[location], location)}}
                      title={`Utiliser un point de sort de niveau ${location}`}></span>
                <div className="spell-points">
                  { 
                      locationPoints && Object.entries(locationPoints).map(([index, available]) => 
                      <div key={index} className={`spell-point ${available&&"spell-available"}`}
                          title={`Point de sort de niveau ${location} ${available?"disponible":"utilisé"}` }>
                          {available && <img src={locationImage} className="spell-image" alt={location} />}
                      </div>)
                  }
                </div>
                <span className={`currentModifier increase-value spell-modifier ${spellsLocations && spellsLocations[location]===maxSpells[location] &&"disabled"}`}
                      onClick={(event) => {this.handleValueChange(1, maxSpells[location], location)}}
                      title={`Récupérer un point de sort de niveau ${location}`}></span>
              </div>)
            })
        }
      </div>
      )
  }

  // Arrow fx for binding
  handleValueChange = (value, maxVal, location) => {
    const {spellsLocations, onValChange} = this.props;
    const val = spellsLocations && spellsLocations[location];
    const newVal = Math.min(Math.max(val+value, 0), maxVal);
    
    if (newVal !== val) {
      let newSpells = {...spellsLocations};
      newSpells[location] = newVal;
      onValChange(newSpells);
    }
  }
}

SpellsComponent.propTypes = {
  spellsLocations: PropTypes.arrayOf(PropTypes.number).isRequired,
  classId: PropTypes.string.isRequired,
  specialisationId: PropTypes.string,
  level: PropTypes.number,
  onValChange: PropTypes.func.isRequired
}

SpellsComponent.defaultProps = {
  level: 1
}

const mapStateToProps = (state) => ({
  capacities: state.referential.capacities,
  spells: state.referential.spells
})
export default connect(mapStateToProps)(SpellsComponent)
