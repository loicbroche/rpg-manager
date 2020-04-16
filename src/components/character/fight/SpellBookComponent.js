
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectClassCapacityByClassIdXP, selectSpellByClassSpecialisation, selectSpellsNbBonusByClassXP } from 'store/selectors';
import PropTypes from 'prop-types'

import { SPELL_MAX_LEVEL } from 'rules/Spells.rules'

import './SpellBookComponent.css'
import ExpendableComponent from 'components/shared/ExpendableComponent';
import { CharacterPropType } from 'PropTypes'

const spellBookImage = require('images/spell-book.png');

class SpellBookComponent extends PureComponent {

  render() {
    const { classAvailableSpells, spellsNbBonus, capacity, character, onMinorSpellClick, onSpellClick } = this.props;

    const availableSpells = [];
    let learnableSpellsNb = 0;
    for(let i = 0; i <= SPELL_MAX_LEVEL; i++) {
      availableSpells[i] = classAvailableSpells?.filter((spell) => spell.Level === i && capacity && capacity.Locations && (i === 0 || capacity.Locations[spell.Level] >= 1));
      learnableSpellsNb += availableSpells[i]?availableSpells[i].length:0;
    }

    const knownMinorSpells = character.MinorSpells && classAvailableSpells?.filter((spell) => character.MinorSpells.includes(spell.Name));
    const knownSpells = character.Spells && classAvailableSpells?.filter((spell) => character.Spells.includes(spell.Name));
    const knownMinorSpellsNb = (knownMinorSpells && knownMinorSpells.length) || 0;
    const knownSpellsNb = knownSpells?.length || 0;
    const availableMinorSpellsNb = capacity?.MinorSpellsNb;
    const availableSpellsNb = capacity && (capacity.SpellsNb + spellsNbBonus);   

    const titleNumbers = (availableMinorSpellsNb?` - Mineurs ${knownMinorSpellsNb}/${availableMinorSpellsNb}`:"")+
                          (availableSpellsNb?` - Majeurs ${knownSpellsNb}/${availableSpellsNb}`:"");

    return (
      <div className="spellBookComponent">
        { learnableSpellsNb > 0 && (availableMinorSpellsNb > 0 || availableSpellsNb > 0) &&
          <ExpendableComponent extensorTitle="le livre des sorts"
                                header={<span>{`Livre de sorts ${titleNumbers}`}</span>}
                                extensor={<img src={spellBookImage} alt="Livre des sorts" />}
                                defaultExtended={true} >
            <div className="known-spells">
              <ul className="levelSpells">
              {availableSpells?.map((levelAvailableSpells, index) => {
                const levelImage = require(`images/spells/${index}.png`);
                
                return levelAvailableSpells?.map((spell) => {
                    const known = character?.MinorSpells?.includes(spell.Name) || character?.Spells?.includes(spell.Name);
                    const description = (index===0?"Sort mineur":`Sort de niveau ${index}`)+`\nEcole : ${spell.School}\nIncantation : ${spell.Incantation}\n${spell.Type?spell.Type+"\n":""}${spell.Description}`;
                    let schoolImage;
                    try {
                    schoolImage = require(`images/spells/${spell.School}.png`);
                    } finally {}
                    return known &&
                      <li key={spell.Name} className={`spell hoverable transparent`}
                          title={description}>
                        <img src={levelImage} className="spell-level-image" alt={index} />
                        <span key={spell.Name} className="spell-name" >{spell.Name}</span>
                        <img src={schoolImage} className="spell-school-image" alt={spell.School} />
                      </li>
                  })
                })
              }
              </ul>
            </div>
            <div className="spells">
              { availableSpells?.map((levelAvailableSpells, index) => {
                  const levelImage = require(`images/spells/${index}.png`);
                  const selectAuthorization = (index === 0 && knownMinorSpellsNb < availableMinorSpellsNb) || (index > 0 && knownSpellsNb < availableSpellsNb);
                  return levelAvailableSpells?.length > 0 && 
                        <ExpendableComponent key={"level-"+index}
                                              extensorTitle={index===0?"les sorts mineurs disponibles":`les sorts disponibles de niveau ${index}`}
                                              extensor={<img src={levelImage} className="spell-level-image" alt={index} />}
                                              horizontal={true} 
                                              reverse={true} 
                                              >
                          <ul className="levelSpells">
                              { levelAvailableSpells.map((spell) => {
                               const known = character?.MinorSpells?.includes(spell.Name) || character?.Spells?.includes(spell.Name);
                               const description = `Ecole : ${spell.School}\nIncantation : ${spell.Incantation}\n${spell.Type?spell.Type+"\n":""}${spell.Description}`;
                               let schoolImage;
                               try {
                                schoolImage = require(`images/spells/${spell.School}.png`);
                               } finally {}
                               return <li key={spell.Name} className={`spell activable transparent ${(known||selectAuthorization)?"":"forbidden"}`}
                                          role="button" onClick={() => { if (selectAuthorization||known) {if (index===0) { onMinorSpellClick(spell.Name)} else {onSpellClick(spell.Name)} } }}
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
  character: CharacterPropType.isRequired,
  onMinorSpellClick: PropTypes.func,
  onSpellClick: PropTypes.func
}

const mapStateToProps = (state, props) => ({
  classAvailableSpells: selectSpellByClassSpecialisation(state, props.character?.Class, props.character?.Specialisation),
  capacity: selectClassCapacityByClassIdXP(state, props.character?.Class, props.character?.XP),
  spellsNbBonus: selectSpellsNbBonusByClassXP(state, props.character)
})
export default connect(mapStateToProps)(SpellBookComponent)
