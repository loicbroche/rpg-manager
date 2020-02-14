
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { SPELL_MAX_LEVEL } from 'rules/Spells.rules'

import './SpellBookComponent.css'
import ExpendableComponent from 'components/shared/ExpendableComponent';

const spellBookImage = require('images/spell-book.png');

class SpellBookComponent extends Component {

  render() {
    const { spells, capacities, classId, level } = this.props;
    const capacity = capacities && capacities[classId+"-"+level];
    const classAvailableSpells = spells && Object.values(spells).filter((spell) => spell.Classes.includes(classId));
    const availableSpells = [];
    for(let i = 0; i <= SPELL_MAX_LEVEL; i++) {
      availableSpells[i] = classAvailableSpells && classAvailableSpells.filter((spell) => spell.Level === i && capacity && capacity.Locations && capacity.Locations[spell.Level] >= 1);
    }

    console.log("capacity", capacity);
    console.log("Spells", spells);
    console.log("Class available spells", classAvailableSpells);
    console.log("Available spells", availableSpells);

    return (
      <div className="spellBookComponent">
          <ExpendableComponent extensorTitle="le livre des sorts"
                                header={<span>Livre de sorts</span>}
                                extensor={<img src={spellBookImage} alt="Livre des sorts" />}>
            <div className="spells">
              {availableSpells &&
                availableSpells.map((levelAvailableSpells) => {
                  return levelAvailableSpells && levelAvailableSpells.map((spell) => <span className="spell">{`(${spell.Level}) ${spell.Name}`}</span>)
                })
              }
            </div>
          </ExpendableComponent>
      </div>
    )
  }
}

SpellBookComponent.propTypes = {
  classId: PropTypes.string.isRequired,
  level: PropTypes.number
}

SpellBookComponent.defaultProps = {
  level: 1
}


const mapStateToProps = (state) => ({
  spells: state.referential.spells,
  capacities: state.referential.capacities
})
export default connect(mapStateToProps)(SpellBookComponent)
