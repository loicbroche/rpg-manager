
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { SPELL_MAX_LEVEL } from 'rules/Spells.rules'

import './SpellBookComponent.css'
import ExpendableComponent from 'components/shared/ExpendableComponent';

const spellBookImage = require('images/spell-book.png');

class SpellBookComponent extends Component {

  render() {
    const { spells, capacities, classId, level, knownMinorSpells, knownSpells, onMinorSpellClick, onSpellClick } = this.props;
    const capacity = capacities && capacities[classId+"-"+level];
    const classAvailableSpells = spells && Object.values(spells).filter((spell) => spell.Classes.includes(classId));
    const availableSpells = [];

    for(let i = 0; i <= SPELL_MAX_LEVEL; i++) {
      availableSpells[i] = classAvailableSpells && classAvailableSpells.filter((spell) => spell.Level === i && capacity && capacity.Locations && (i === 0 || capacity.Locations[spell.Level] >= 1));
    }

    const knownMinorSpellsNb = (knownMinorSpells && knownMinorSpells.length) || 0;
    const knownSpellsNb = (knownSpells && knownSpells.length) || 0;
    const availableMinorSpellsNb = capacity && capacity.MinorSpellsNb;
    const availableSpellsNb = capacity && capacity.SpellsNb;    
    const titleNumbers = (availableMinorSpellsNb?` - Mineurs ${knownMinorSpellsNb}/${availableMinorSpellsNb}`:"")+
                          (availableSpellsNb?` - Majeurs ${knownSpellsNb}/${availableSpellsNb}`:"");
    return (
      <div className="spellBookComponent">
        { (availableMinorSpellsNb > 0 ||availableSpellsNb >0) &&
          <ExpendableComponent extensorTitle="le livre des sorts"
                                header={<span>{`Livre de sorts ${titleNumbers}`}</span>}
                                extensor={<img src={spellBookImage} alt="Livre des sorts" />}>
            <div className="spells">
              {availableSpells &&
                availableSpells.map((levelAvailableSpells, index) => {
                  const levelImage = require(`images/spells/${index}.png`);
                  const selectAuthorization = (index === 0 && knownMinorSpellsNb < availableMinorSpellsNb) || (index > 0 && knownSpellsNb < availableSpellsNb);
                  return levelAvailableSpells && levelAvailableSpells.length > 0 && 
                        <ExpendableComponent key={"level-"+index}
                                              extensorTitle={index===0?"les sorts mineurs disponibles":`les sorts disponibles de niveau ${index}`}
                                              extensor={<img src={levelImage} className="spell-level-image" alt={index} />}
                                              horizontal={true} 
                                              reverse={false} 
                                              >
                          <ul className="levelSpells">
                              { levelAvailableSpells.map((spell) => {
                               const known = (knownMinorSpells && knownMinorSpells.includes(spell.Name)) ||(knownSpells && knownSpells.includes(spell.Name));
                               const description = `Ecole : ${spell.School}\nIncantation : ${spell.Incantation}\n${spell.Type?spell.Type+"\n":""}${spell.Description}`;
                               let schoolImage;
                               try {
                                schoolImage = require(`images/spells/${spell.School}.png`);
                               } finally {}
                               return <li key={spell.Name} className={`spell activable transparent ${(known||selectAuthorization)?"":"forbidden"}`}
                                          onClick={() => { if (selectAuthorization||known) {if (index===0) { onMinorSpellClick(spell.Name)} else {onSpellClick(spell.Name)} } }}
                                    title={description}>
                                  <div className={"option "+((known)&&"filled")}></div>
                                  <span key={spell.Name} className="spell-name" >{spell.Name}</span>
                                  <img src={schoolImage} className="spell-school-image" alt={spell.School} />
                              </li>
                              }) }
                          </ul>
                         </ExpendableComponent>
                })
              }
            </div>
          </ExpendableComponent>
      }
      </div>
    )
  }
}

SpellBookComponent.propTypes = {
  classId: PropTypes.string.isRequired,
  level: PropTypes.number,
  knownMinorSpells: PropTypes.arrayOf(PropTypes.string),
  knownSpells: PropTypes.arrayOf(PropTypes.string),
  onMinorSpellClick: PropTypes.func,
  onSpellClick: PropTypes.func
}

SpellBookComponent.defaultProps = {
  level: 1
}


const mapStateToProps = (state) => ({
  spells: state.referential.spells,
  capacities: state.referential.capacities
})
export default connect(mapStateToProps)(SpellBookComponent)
