
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CharacterPropType } from 'PropTypes'
import './ACComponent.css'
import { CA_BASE, CA_CARACTERISTIC_NAME, getArmorBonusAC  } from 'rules/AC.rules'
import { calculateTotalBonus } from 'rules/Caracteristics.rules'
import { getLevelNumber } from 'rules/Levels.rules'

const ACImage = require("images/AC.png");

class ACComponent extends Component {

  render() {
    const { races, subRaces, armors, classes, specialisations, levels, caracteristics, character} = this.props;
    const subRace = subRaces && character && subRaces[character.SubRace];
    const race = subRace && races && races[subRace.Race];
    const characterClass = classes  && character && classes[character.Class];
    const armor = armors && character && armors[character.Armor];
    const shield = armors && character && armors[character.Shield];

    const armorBonus = (armor && armor.AC) || 0;
    const shieldBonus = (shield && shield.AC) || 0;
    const dexterityBonus = getArmorBonusAC(race, subRace, characterClass, armor, character && character[CA_CARACTERISTIC_NAME]);

    const classCaracteristicBonus = (caracteristics && characterClass && characterClass.ACBonus && caracteristics[characterClass.ACBonus]);
      const caracteristicName = classCaracteristicBonus && classCaracteristicBonus.OV;
      const raceBonus = race && race[caracteristicName];
      const subRaceBonus = subRace && subRace[caracteristicName];
      const caracteristicValue = character && character[caracteristicName];

      const caracteristicBonus = calculateTotalBonus(caracteristicValue, raceBonus, subRaceBonus);

      const isValidArmorCondition = characterClass && ((!characterClass.ACBonusArmor && characterClass.ACBonusArmor !== false) || (characterClass.ACBonusArmor && armor) || (characterClass.ACBonusArmor === false && !armor)) 
      const isValidShieldCondition = characterClass && ((!characterClass.ACBonusShield && characterClass.ACBonusShield !== false) || (characterClass.ACBonusShield && shield) || (characterClass.ACBonusShield === false && !shield)) 
      const classBonusValue = (classCaracteristicBonus && isValidArmorCondition && isValidShieldCondition && caracteristicBonus) || 0;

    const specialisation = specialisations && character && specialisations[character.Specialisation];
      const specialisationLevel = characterClass && characterClass.SpecialisationLevel;

      const isValidSpecialisation = specialisation && character &&
                                    specialisationLevel <= getLevelNumber(levels, character.XP)
                                    && specialisation.Class === character.Class;
      const isValidArmorSpecialCondition = specialisation && ((!specialisation.ACBonusArmor && specialisation.ACBonusArmor !== false) || (specialisation.ACBonusArmor && armor) || (specialisation.ACBonusArmor === false && !armor)) 
      const specialisationBonus = (specialisation && isValidSpecialisation && isValidArmorSpecialCondition &&  specialisation.ACBonus) ||0;

      const specialBonusValue = classBonusValue + specialisationBonus;
      const specialBonusTitle = (!classBonusValue?"":`Bonus de classe ${characterClass && characterClass.Name} : Modificateur de ${classCaracteristicBonus.Name}`
                                                          +`${(characterClass.ACBonusArmor)?"\nSi porte une armure":((characterClass.ACBonusArmor === false)?"\nSi ne porte pas d'armure":"")}`
                                                          +`${(characterClass.ACBonusShield)?"\nSi porte un bouclier":((characterClass.ACBonusShield === false)?"\nSi ne porte pas de bouclier":"")}`)
                                + ((!specialisation || !specialisationBonus)?"":`${classBonusValue?"\n":""}Bonus de spécialisation ${specialisation.Name} +${specialisation.ACBonus}`
                                                          +`${(specialisation.ACBonusArmor)?"\nSi porte une armure":((specialisation.ACBonusArmor === false)?"\nSi ne porte pas d'armure":"")}`)


    const ac = CA_BASE + armorBonus + shieldBonus + specialBonusValue;

    return (
      <div className="acComponent" title="Classe d'armure">
        <img src={ACImage} className="ac-background-image" alt="" />
        <div className="ac-values">
          <div className="ac-calculation">
              <div className="ac-equipment-values">
                <span className={`ac-armor-value ${!armorBonus?"ac-no-value":""}`} title="CA d'armure">{armorBonus}</span>
                <span className="ac-base-value" title="CA de Base">{CA_BASE}</span>
                <span className={`ac-shield-value ${!shieldBonus?"ac-no-value":""}`} title="CA de bouclier">{shieldBonus}</span>
              </div>
          </div>
          <span className="ac-total-value">{ac}</span>
          <div>
            <span className={`ac-bonus-value ${!specialBonusValue?"ac-no-value":""}`} title={specialBonusTitle}>{specialBonusValue}</span>
          </div>
        </div>
        <span className={`ac-dexterity-value ${!dexterityBonus?"ac-no-value":""}`} title="Bonus dextérité">{(dexterityBonus>=0?"+":"")+dexterityBonus}</span>
      </div>
    )
  }
}

ACComponent.propTypes = {
  character: CharacterPropType
}

const mapStateToProps = (state) => ({
  races: state.referential.races,
  subRaces: state.referential.subRaces,
  classes: state.referential.classes,
  specialisations: state.referential.specialisations,
  armors: state.referential.armors,
  caracteristics: state.referential.caracteristics,
  levels: state.referential.levels
})
export default connect(mapStateToProps)(ACComponent)
