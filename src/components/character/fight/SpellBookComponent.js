
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectClassesMap, selectClassCapacityByClassIdXP, selectSpellsNbBonusByClassXP, selectSpells, selectAvailableSpellsByClass,
        selectSpellsComplementsClassesByRace, selectSpellByProfil, selectSpellsComplementsByRace, selectSpellsComplementsBySubRace,
        selectSpellsComplementsBySpecialisation, selectSpellsComplementsSpellsByRace, selectSpellsComplementsSpellsBySubRace,
        selectSpellsComplementsSpellsBySpecialisation, selectRaceBySubRaceId, selectSubRaceById, selectValidSpecialisation,
        selectKnownClassesSpellsFilteredByOrigine, ORIGINE_CLASS, ORIGINE_RACE, ORIGINE_SUBRACE, ORIGINE_SPECIALISATION, ORIGINE_ALL } from 'store/selectors';
import PropTypes from 'prop-types'

import { SPELL_MAX_LEVEL } from 'rules/Spells.rules'

import './SpellBookComponent.css'
import ExpendableComponent from 'components/shared/ExpendableComponent';
import { CharacterPropType } from 'PropTypes'

const spellBookImage = require('images/spell-book.png');


class SpellBookComponent extends PureComponent {

  render() {
    const { profilAvailableSpells, spells, raceSpellsComplementsSpells, subRaceSpellsComplementsSpells, specialisationSpellsComplementsSpells,
            knownSpellsFilteredByOrigine, race, subRace, specialisation, spellsNbBonus, capacity, character, onMinorSpellClick, onSpellClick } = this.props;
    const availableSpells = [];
    let learnableSpellsNb = 0;
    const availableLevels = capacity?.Locations && Object.entries(capacity.Locations).map(([index, location]) => location?parseInt(index):0);
    const maxLocationLevel = Math.max.apply(null, availableLevels);

    const complementsSpells = [].concat(raceSpellsComplementsSpells||[]).concat(subRaceSpellsComplementsSpells||[]).concat(specialisationSpellsComplementsSpells||[]);

    for(let i = 0; i <= SPELL_MAX_LEVEL; i++) {
      availableSpells[i] = profilAvailableSpells?.filter((spell) => spell.Level === i && (i === 0 || i <= maxLocationLevel)) ||[];
      learnableSpellsNb += availableSpells[i]?.length || 0;
      const unknownComplementsSpellsForLevel = spells?.filter((spell) => spell.Level === i && (i === 0 || i <= maxLocationLevel)
                                                && !(availableSpells[i]?.map((existingSpell) => existingSpell.Name)?.includes(spell.Name))
                                                && complementsSpells?.includes(spell.Name));
      availableSpells[i] = availableSpells[i].concat(unknownComplementsSpellsForLevel);
    }
    let knownMinorSpells = character.MinorSpells && profilAvailableSpells?.filter((spell) => character.MinorSpells.includes(spell.Name)
                                                                                              && !complementsSpells?.includes(spell.Name))?.map((spell) => spell.Name);
    const knownMinorSpellsNb = (knownMinorSpells && knownMinorSpells.length) || 0;
    const knownSpells = (knownSpellsFilteredByOrigine?.[ORIGINE_ALL]?.spells).concat(complementsSpells);
    const availableMinorSpellsNb = capacity?.MinorSpellsNb;
    const availableSpellsNb = capacity && (capacity.SpellsNb + spellsNbBonus);

    let complementsBonusNb = (knownSpellsFilteredByOrigine?.[ORIGINE_RACE]?.maxNumber
                              + knownSpellsFilteredByOrigine?.[ORIGINE_SUBRACE]?.maxNumber
                              + knownSpellsFilteredByOrigine?.[ORIGINE_SPECIALISATION]?.maxNumber) ||0;

    const titleElement = <span>{`Livre de sorts ${availableMinorSpellsNb?` - Mineurs ${knownMinorSpellsNb}/${availableMinorSpellsNb}`:""}`}
    {knownSpellsFilteredByOrigine[ORIGINE_CLASS].maxNumber
        ?<span title={`Sorts de classe\n${knownSpellsFilteredByOrigine[ORIGINE_CLASS].complementLocations}`}>{` - Majeurs ${knownSpellsFilteredByOrigine[ORIGINE_CLASS].number}/${knownSpellsFilteredByOrigine[ORIGINE_CLASS].maxNumber}`}</span>
        :<></>}
    {complementsBonusNb > 0?
      <span>- Supplémentaires</span>
      :<></>}
    {knownSpellsFilteredByOrigine[ORIGINE_RACE].maxNumber
        ?<span title={`Provenants de la race ${race?.Name}\nEmplacements supplémentaires pour des sorts de ${this.classListToString(knownSpellsFilteredByOrigine[ORIGINE_RACE].classes)}\n`}>{` +${knownSpellsFilteredByOrigine[ORIGINE_RACE].number}/${knownSpellsFilteredByOrigine[ORIGINE_RACE].maxNumber}`}</span>
        :<></>}
    {knownSpellsFilteredByOrigine[ORIGINE_SUBRACE].maxNumber
        ?<span title={`Provenants de la race ${subRace?.Name}\nEmplacements supplémentaires pour des sorts de ${this.classListToString(knownSpellsFilteredByOrigine[ORIGINE_SUBRACE].classes)}\n`}>{` +${knownSpellsFilteredByOrigine[ORIGINE_SUBRACE].number}/${knownSpellsFilteredByOrigine[ORIGINE_SUBRACE].maxNumber}`}</span>
        :<></>}
    {knownSpellsFilteredByOrigine[ORIGINE_SPECIALISATION].maxNumber
        ?<span title={`Provenants de la spécialisation ${specialisation?.Name}\nEmplacements supplémentaires pour des sorts de ${this.classListToString(knownSpellsFilteredByOrigine[ORIGINE_SPECIALISATION].classes)}\n`}>{` +${knownSpellsFilteredByOrigine[ORIGINE_SPECIALISATION].number}/${knownSpellsFilteredByOrigine[ORIGINE_SPECIALISATION].maxNumber}`}</span>
        :<></>}
  </span>;
    return (
      <div className="spellBookComponent">
        { ( (learnableSpellsNb > 0 && (availableMinorSpellsNb > 0 || availableSpellsNb > 0))
            || raceSpellsComplementsSpells?.length > 0 || subRaceSpellsComplementsSpells?.length > 0 || specialisationSpellsComplementsSpells?.length > 0
            || knownSpellsFilteredByOrigine?.[ORIGINE_RACE]?.maxNumber > 0 || knownSpellsFilteredByOrigine?.[ORIGINE_SUBRACE]?.maxNumber > 0 || knownSpellsFilteredByOrigine?.[ORIGINE_SPECIALISATION]?.maxNumber > 0) &&
          <ExpendableComponent extensorTitle="le livre des sorts"
                                header={titleElement}
                                extensor={<img src={spellBookImage} alt="Livre des sorts" />}
                                defaultExtended={true} >
            <div className="known-spells">
              <ul className="levelSpells">
              {availableSpells?.map((levelAvailableSpells, index) => {
                const levelImage = require(`images/spells/${index}.png`);
                return levelAvailableSpells?.map((spell) => {
                    const known = knownMinorSpells?.includes(spell.Name) || knownSpells?.includes(spell.Name);
                    const { origineTitle, origineImage } = this.getOrigine(spell);
                    const description = (index===0?"Sort mineur":
                                          `Sort de niveau ${index}`)+
                                         `\nEcole : ${spell.School}`+
                                         `\nIncantation : ${spell.Incantation}`+
                                         `${spell.Type?"\n"+spell.Type:""}`+
                                         `\nDisponible pour : ${this.classListToString(spell.Classes)}${origineTitle?` (${origineTitle})`:""}`+
                                         `\n\n${spell.Description}`;
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
                  return levelAvailableSpells?.length > 0 && 
                        <ExpendableComponent key={"level-"+index}
                                              extensorTitle={index===0?"les sorts mineurs disponibles":`les sorts disponibles de niveau ${index}`}
                                              extensor={<img src={levelImage} className="spell-level-image" alt={index} />}
                                              horizontal={true} 
                                              reverse={true} 
                                              >
                          <ul className="levelSpells">
                              { levelAvailableSpells.map((spell) => {
                               const known = character.MinorSpells?.includes(spell.Name) || knownSpells?.includes(spell.Name);
                               const isComplement = complementsSpells?.includes(spell.Name);
                               const { origineCodes, origineTitle, origineImage } = this.getOrigine(spell);
                               const description = `Ecole : ${spell.School}`+
                                                  `\nIncantation : ${spell.Incantation}`+
                                                  `${spell.Type?"\n"+spell.Type:""}`+
                                                  `\nDisponible pour : ${this.classListToString(spell.Classes)}${origineTitle?" ("+origineTitle+")":""}`+
                                                  `\n\n${spell.Description}`;
                               let schoolImage;
                               let selectAuthorization = origineCodes.includes(ORIGINE_CLASS) && index === 0 && knownMinorSpellsNb < availableMinorSpellsNb;
                               if (!selectAuthorization && (index > 0 || origineCodes.length !== 1 || !origineCodes.includes(ORIGINE_CLASS))) {
                                 origineCodes.forEach((origineCode) => {
                                  selectAuthorization = selectAuthorization || knownSpellsFilteredByOrigine[origineCode]?.number < knownSpellsFilteredByOrigine[origineCode]?.maxNumber;
                                 });
                               }
                               const isMinorSpell = character.MinorSpells?.includes(spell.Name) ||
                                                    (index===0 && origineCodes.includes(ORIGINE_CLASS) && (origineCodes.length === 1 || knownMinorSpellsNb < availableMinorSpellsNb)
                                                    );
                               try {
                                schoolImage = require(`images/spells/${spell.School}.png`);
                               } finally {}

                               return <li key={spell.Name} className={`spell transparent ${isComplement?"hoverable locked":"activable"} ${(isComplement || known||selectAuthorization)?"":"forbidden"}`}
                                          role="button" onClick={() => { if (!isComplement && (selectAuthorization||known)) {if (isMinorSpell) { onMinorSpellClick(spell.Name)} else {onSpellClick(spell.Name)} } }}
                                    title={description}>
                                  <div className={"option "+((known)&&"filled")}></div>
                                  <span key={spell.Name} className="spell-name" >{spell.Name}</span>
                                  <img src={schoolImage} className="spell-school-image" alt={spell.School} />
                                  <span className="spell-origine"><img src={origineImage} className="spell-origine-image" alt={""} /></span>
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

  isSpellFromComplements = (complements, spell) => {
    return complements?.flatMap((complement) => complement.BonusLocationClasses)?.filter((locationClass) => spell.Classes?.includes(locationClass)).length > 0;
  }

  getOrigine = (spell) => {
    const { raceSpellsComplements, subRaceSpellsComplements, specialisationSpellsComplements, classAvailableSpells,
            raceSpellsComplementsSpells, subRaceSpellsComplementsSpells, specialisationSpellsComplementsSpells,
            race, subRace, specialisation, character } = this.props;
    const characterClassId = character?.Class;

    let origineTitle = "";
    let origineImage = null;
    let origineCodes = new Set();
    if (classAvailableSpells?.filter((availableSpell) => availableSpell.Name === spell?.Name).length > 0) {
      origineCodes.add(ORIGINE_CLASS);
    }
    if (raceSpellsComplementsSpells?.includes(spell.Name)) {
      origineCodes.add(ORIGINE_RACE);
      origineTitle = `Connu de la race ${race?.Name}`;
      try {
        origineImage = require(`images/races/${subRace?.Id}.png`);
      } catch (ex) {
        origineImage = require("images/races/no_race.png");
      }
    }

    if (subRaceSpellsComplementsSpells?.includes(spell.Name)) {
      origineCodes.add(ORIGINE_SUBRACE);
      origineTitle += `${origineTitle?", ":"Connu "}de la race ${subRace?.Name}`;
      try {
        origineImage = origineImage || require(`images/races/${subRace?.Id}.png`);
      } catch (ex) {
        origineImage = require("images/races/no_race.png");
      }
    }
    if (specialisationSpellsComplementsSpells?.includes(spell.Name)) {
      origineCodes.add(ORIGINE_SPECIALISATION);
      origineTitle += `${origineTitle?", ":"Connu "}de la spécialisation ${specialisation?.Name}`;
      try {
        origineImage = origineImage || require(`images/classes/specialisations/${specialisation?.Code}.png`);
      } catch (ex) {
        origineImage = require("images/classes/specialisations/no_image.png");
      }
    }

    if (!origineTitle) {
      if (this.isSpellFromComplements(raceSpellsComplements, spell)) {
        origineCodes.add(ORIGINE_RACE);
        origineTitle = `Accessible de la race ${race?.Name}`;

        try {
          origineImage = spell.Classes.includes(characterClassId)?"":origineImage || require(`images/races/${subRace?.Id}.png`);
        } catch (ex) {
          origineImage = require("images/races/no_race.png");
        }
      }
      if (this.isSpellFromComplements(subRaceSpellsComplements, spell)) {
        origineCodes.add(ORIGINE_SUBRACE);
        origineTitle += `${origineTitle?", ":"Accessible "}de la race ${subRace?.Name}`;
        try {
          origineImage = spell.Classes.includes(characterClassId)?"":origineImage || require(`images/races/${subRace?.Id}.png`);
        } catch (ex) {
          origineImage = require("images/races/no_race.png");
        }
      }

      if (this.isSpellFromComplements(specialisationSpellsComplements, spell)) {
        origineCodes.add(ORIGINE_SPECIALISATION);
        origineTitle += `${origineTitle?", ":"Accessible "}de la spécialisation ${specialisation?.Name}`;
        try {
          origineImage = spell.Classes.includes(characterClassId)?"":origineImage || require(`images/classes/specialisations/${specialisation?.Code}.png`);
        } catch (ex) {
          origineImage = require("images/classes/specialisations/no_image.png");
        }
      }
   }
   return {origineCodes: [...origineCodes], origineTitle: origineTitle, origineImage: origineImage};
  }

  classListToString(classes) {
    const { classesMap } = this.props;
    let classList = "";
    if (classes) {
      classes.forEach((classId) => {
          const locationClass = classesMap?.[classId];
          classList += locationClass?(classList?", ":"") + locationClass.Name:"";
      });
    }
    return classList;
  }
}

SpellBookComponent.propTypes = {
  character: CharacterPropType.isRequired,
  onMinorSpellClick: PropTypes.func,
  onSpellClick: PropTypes.func
}

const mapStateToProps = (state, props) => ({
  classAvailableSpells : selectAvailableSpellsByClass(state, props.character?.Class),
  profilAvailableSpells: selectSpellByProfil(state, props.character?.SubRace, props.character?.Class, props.character?.Specialisation, props.character?.XP),
  spells: selectSpells(state),
  classesMap: selectClassesMap(state),
  capacity: selectClassCapacityByClassIdXP(state, props.character?.Class, props.character?.XP),
  spellsNbBonus: selectSpellsNbBonusByClassXP(state, props.character),
  raceSpellsComplements: selectSpellsComplementsByRace(state, props.character?.SubRace, props.character?.XP),
  subRaceSpellsComplements: selectSpellsComplementsBySubRace(state, props.character?.SubRace, props.character?.XP),
  specialisationSpellsComplements: selectSpellsComplementsBySpecialisation(state, props.character?.Specialisation, props.character?.Class, props.character?.XP),
  raceSpellsComplementsSpells: selectSpellsComplementsSpellsByRace(state, props.character?.SubRace, props.character?.XP),
  subRaceSpellsComplementsSpells: selectSpellsComplementsSpellsBySubRace(state, props.character?.SubRace, props.character?.XP),
  specialisationSpellsComplementsSpells: selectSpellsComplementsSpellsBySpecialisation(state, props.character?.Specialisation, props.character?.Class, props.character?.XP),
  raceSpellsComplementsClasses: selectSpellsComplementsClassesByRace(state, props.character?.SubRace, props.character?.XP),
  knownSpellsFilteredByOrigine: selectKnownClassesSpellsFilteredByOrigine(state, props.character),
  race: selectRaceBySubRaceId(state, props.character?.SubRace),
  subRace: selectSubRaceById(state, props.character?.SubRace),
  specialisation: selectValidSpecialisation(state, props.character?.Specialisation, props.character?.Class, props.character?.XP)
})
export default connect(mapStateToProps)(SpellBookComponent)
