
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectClassCapacityByClassIdXP, selectSpellByClassSpecialisation, selectSpellsNbBonusByClassXP, selectSpells,
         selectSpellsComplementsSpellsByRace, selectSpellsComplementsSpellsBySubRace, selectSpellsComplementsSpellsBySpecialisation,
         selectRaceBySubRaceId, selectSubRaceById, selectValidSpecialisation } from 'store/selectors';
import PropTypes from 'prop-types'

import { SPELL_MAX_LEVEL } from 'rules/Spells.rules'

import './SpellBookComponent.css'
import ExpendableComponent from 'components/shared/ExpendableComponent';
import { CharacterPropType } from 'PropTypes'

const spellBookImage = require('images/spell-book.png');

class SpellBookComponent extends PureComponent {

  render() {
    const { classAvailableSpells, spells, raceSpellsComplementsSpells, subRaceSpellsComplementsSpells, specialisationSpellsComplementsSpells,
            spellsNbBonus, capacity, character, race, subRace, specialisation, onMinorSpellClick, onSpellClick } = this.props;

    const availableSpells = [];
    let learnableSpellsNb = 0;
    const availableLevels = capacity?.Locations && Object.entries(capacity.Locations).map(([index, location]) => location?parseInt(index):0);
    const maxLocationLevel = Math.max.apply(null, availableLevels);
    const complementsSpells = [].concat(raceSpellsComplementsSpells).concat(subRaceSpellsComplementsSpells).concat(specialisationSpellsComplementsSpells);
    for(let i = 0; i <= SPELL_MAX_LEVEL; i++) {
      availableSpells[i] = classAvailableSpells?.filter((spell) => spell.Level === i && (i === 0 || i <= maxLocationLevel)) ||[];
      learnableSpellsNb += availableSpells[i]?.length || 0;
      const unknownComplementsSpellsForLevel = spells?.filter((spell) => spell.Level === i && (i === 0 || i <= maxLocationLevel)
                                                && !(availableSpells[i]?.map((existingSpell) => existingSpell.Name)?.includes(spell.Name))
                                                && complementsSpells?.includes(spell.Name));
      availableSpells[i] = availableSpells[i].concat(unknownComplementsSpellsForLevel);
    }
    let knownMinorSpells = character.MinorSpells && classAvailableSpells?.filter((spell) => character.MinorSpells.includes(spell.Name)
                                                                                              && !complementsSpells?.includes(spell.Name))?.map((spell) => spell.Name);
    const knownMinorSpellsNb = (knownMinorSpells && knownMinorSpells.length) || 0;
    let knownSpells = character.Spells && classAvailableSpells?.filter((spell) => character.Spells.includes(spell.Name)
                                                                          && (!complementsSpells?.includes(spell.Name)))?.map((spell) => spell.Name);
    const knownSpellsNb = knownSpells?.length || 0;
          knownSpells = (knownSpells||[]).concat(complementsSpells);
    const availableMinorSpellsNb = capacity?.MinorSpellsNb;
    const availableSpellsNb = capacity && (capacity.SpellsNb + spellsNbBonus);   
    const titleNumbers = (availableMinorSpellsNb?` - Mineurs ${knownMinorSpellsNb}/${availableMinorSpellsNb}`:"")+
                          (availableSpellsNb?` - Majeurs ${knownSpellsNb}/${availableSpellsNb}`:"");

    return (
      <div className="spellBookComponent">
        { ( (learnableSpellsNb > 0 && (availableMinorSpellsNb > 0 || availableSpellsNb > 0))
            || raceSpellsComplementsSpells?.length > 0 || subRaceSpellsComplementsSpells?.length > 0 || specialisationSpellsComplementsSpells?.length > 0 ) &&
          <ExpendableComponent extensorTitle="le livre des sorts"
                                header={<span>{`Livre de sorts ${titleNumbers}`}</span>}
                                extensor={<img src={spellBookImage} alt="Livre des sorts" />}
                                defaultExtended={true} >
            <div className="known-spells">
              <ul className="levelSpells">
              {availableSpells?.map((levelAvailableSpells, index) => {
                const levelImage = require(`images/spells/${index}.png`);
                return levelAvailableSpells?.map((spell) => {
                    const known = knownMinorSpells?.includes(spell.Name) || knownSpells?.includes(spell.Name);
                    let origineTitle = "";
                    let origineImage = null;
                    if (raceSpellsComplementsSpells?.includes(spell.Name)) {
                      origineTitle = ` (connu de la race ${race?.Name})`;
                      try {
                        origineImage = require(`images/races/${subRace?.Id}.png`);
                      } catch (ex) {
                        origineImage = require("images/races/no_race.png");
                      }
                    } else if (subRaceSpellsComplementsSpells?.includes(spell.Name)) {
                      origineTitle = ` (connu de la race ${subRace?.Name})`;
                      try {
                        origineImage = require(`images/races/${subRace?.Id}.png`);
                      } catch (ex) {
                        origineImage = require("images/races/no_race.png");
                      }
                    } else if (specialisationSpellsComplementsSpells?.includes(spell.Name)) {
                      origineTitle = ` (connu de la spécialisation ${specialisation?.Name})`;
                      try {
                        origineImage = require(`images/classes/specialisations/${specialisation?.Code}.png`);
                      } catch (ex) {
                        origineImage = require("images/classes/specialisations/no_image.png");
                      }
                    }
                    const description = (index===0?"Sort mineur":`Sort de niveau ${index}`)+origineTitle+`\nEcole : ${spell.School}\nIncantation : ${spell.Incantation}\n${spell.Type?spell.Type+"\n":""}${spell.Description}`;
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
                        <span className="spell-origine"><img src={origineImage} className="spell-origine-image" alt="" /></span>
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
                               const known = character.MinorSpells?.includes(spell.Name) ||knownSpells?.includes(spell.Name);
                               const isComplement = complementsSpells?.includes(spell.Name);
                               let origineTitle = "";
                               let origineImage = null;
                               if (raceSpellsComplementsSpells?.includes(spell.Name)) {
                                 origineTitle = `Connu de la race ${race?.Name}\n`;
                                 try {
                                   origineImage = require(`images/races/${subRace?.Id}.png`);
                                 } catch (ex) {
                                   origineImage = require("images/races/no_race.png");
                                 }
                               } else if (subRaceSpellsComplementsSpells?.includes(spell.Name)) {
                                 origineTitle = `Connu de la race ${subRace?.Name}\n`;
                                 try {
                                   origineImage = require(`images/races/${subRace?.Id}.png`);
                                 } catch (ex) {
                                   origineImage = require("images/races/no_race.png");
                                 }
                               } else if (specialisationSpellsComplementsSpells?.includes(spell.Name)) {
                                 origineTitle = `Connu de la spécialisation ${specialisation?.Name}\n`;
                                 try {
                                   origineImage = require(`images/classes/specialisations/${specialisation?.Code}.png`);
                                 } catch (ex) {
                                   origineImage = require("images/classes/specialisations/no_image.png");
                                 }
                               }
                               const description = `${origineTitle}Ecole : ${spell.School}\nIncantation : ${spell.Incantation}\n${spell.Type?spell.Type+"\n":""}${spell.Description}`;
                               let schoolImage;
                               try {
                                schoolImage = require(`images/spells/${spell.School}.png`);
                               } finally {}
                               return <li key={spell.Name} className={`spell transparent ${isComplement?"hoverable locked":"activable"} ${(isComplement || known||selectAuthorization)?"":"forbidden"}`}
                                          role="button" onClick={() => { if (!isComplement && (selectAuthorization||known)) {if (index===0) { onMinorSpellClick(spell.Name)} else {onSpellClick(spell.Name)} } }}
                                    title={description}>
                                  <div className={"option "+((known)&&"filled")}></div>
                                  <span key={spell.Name} className="spell-name" >{spell.Name}</span>
                                  <img src={schoolImage} className="spell-school-image" alt={spell.School} />
                                  <span className="spell-origine"><img src={origineImage} className="spell-origine-image" alt="" /></span>
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
  spells: selectSpells(state),
  capacity: selectClassCapacityByClassIdXP(state, props.character?.Class, props.character?.XP),
  spellsNbBonus: selectSpellsNbBonusByClassXP(state, props.character),
  raceSpellsComplementsSpells: selectSpellsComplementsSpellsByRace(state, props.character?.SubRace, props.character?.XP),
  subRaceSpellsComplementsSpells: selectSpellsComplementsSpellsBySubRace(state, props.character?.SubRace, props.character?.XP),
  specialisationSpellsComplementsSpells: selectSpellsComplementsSpellsBySpecialisation(state, props.character?.Specialisation, props.character?.Class, props.character?.XP),
  race: selectRaceBySubRaceId(state, props.character?.SubRace),
  subRace: selectSubRaceById(state, props.character?.SubRace),
  specialisation: selectValidSpecialisation(state, props.character?.Specialisation, props.character?.Class, props.character?.XP)
})
export default connect(mapStateToProps)(SpellBookComponent)
