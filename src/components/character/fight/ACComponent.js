
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { CharacterPropType } from 'PropTypes'
import './ACComponent.css'
import { CA_BASE, CA_CARACTERISTIC_NAME, getArmorBonusAC  } from 'rules/AC.rules'
import { calculateTotalBonus } from 'rules/Caracteristics.rules'
import { getLevelNumber } from 'rules/Levels.rules'

const ACImage = require("images/AC.png");

class ACComponent extends PureComponent {

  render() {
    const { races, subRaces, armors, classes, specialisations, fightStyles, levels, caracteristics, character} = this.props;
    const subRace = subRaces?.[character?.SubRace];
    const race = races?.[subRace?.Race];
    const characterClass = classes?.[character?.Class];
    const armor = armors?.[character?.Armor];
    const shield = armors?.[character?.Shield];
    const level = getLevelNumber(levels, character.XP);
    const armorBonus = armor?.AC || 0;
    const shieldBonus = shield?.AC || 0;
    const dexterityBonus = getArmorBonusAC(race, subRace, characterClass, armor, character?.[CA_CARACTERISTIC_NAME]);

    const classCaracteristicBonus = caracteristics?.[characterClass?.ACBonus];
      const caracteristicName = classCaracteristicBonus?.OV;
      const raceBonus = race?.[caracteristicName];
      const subRaceBonus = subRace?.[caracteristicName];
      const caracteristicValue = character?.[caracteristicName];

      const caracteristicBonus = calculateTotalBonus(caracteristicValue, raceBonus, subRaceBonus);

      const isValidArmorCondition = characterClass && ((!characterClass.ACBonusArmor && characterClass.ACBonusArmor !== false) || (characterClass.ACBonusArmor && armor) || (characterClass.ACBonusArmor === false && !armor)) 
      const isValidShieldCondition = characterClass && ((!characterClass.ACBonusShield && characterClass.ACBonusShield !== false) || (characterClass.ACBonusShield && shield) || (characterClass.ACBonusShield === false && !shield)) 
      const classBonusValue = (classCaracteristicBonus && isValidArmorCondition && isValidShieldCondition && caracteristicBonus) || 0;

    const specialisation = specialisations?.[character?.Specialisation];
      const specialisationLevel = characterClass?.SpecialisationLevel;

      const isValidSpecialisation = specialisation && character &&
                                    specialisationLevel <= level
                                    && specialisation.Class === character.Class;
      const isValidArmorSpecialCondition = specialisation && ((!specialisation.ACBonusArmor && specialisation.ACBonusArmor !== false) || (specialisation.ACBonusArmor && armor) || (specialisation.ACBonusArmor === false && !armor)) 
      const specialisationBonus = (specialisation && isValidSpecialisation && isValidArmorSpecialCondition &&  specialisation.ACBonus) ||0;

      const selectedFightStyles = fightStyles && Object.values(fightStyles).filter((style) => character?.FightStyles?.includes(style.Code));
      const fightStyleLevel = characterClass?.FightStyleLevel;

      let fightStyleTitle = "";
      const fightStyleBonus = (character
                                && fightStyleLevel <= level
                                && selectedFightStyles?.length > 0
                                && selectedFightStyles?.reduce((sum, fightStyle) => {
                                        const isValidArmorFightStyleCondition = fightStyle && ((!fightStyle.ACBonusArmor && fightStyle.ACBonusArmor !== false) || (fightStyle.ACBonusArmor && armor) || (fightStyle.ACBonusArmor === false && !armor)) 
                                        const bonus = (fightStyle.Class === character.Class && isValidArmorFightStyleCondition && (sum+fightStyle.ACBonus)) || sum;
                                        fightStyleTitle += (!fightStyle.ACBonus?"":`${fightStyleTitle?"\n":""}Bonus de Style de combat ${fightStyle.Name} +${fightStyle.ACBonus}`
                                                            +`${(fightStyle.ACBonusArmor)?"\nSi porte une armure":((fightStyle.ACBonusArmor === false)?"\nSi ne porte pas d'armure":"")}`)                                        
                                        return bonus;
                                    }, 0)
                              ) || 0;

    const specialBonusValue = classBonusValue + specialisationBonus + fightStyleBonus;
    const ac = CA_BASE + armorBonus + shieldBonus + specialBonusValue;
    const specialBonusTitle = (!classBonusValue?"":`Bonus de classe ${characterClass?.Name} : Modificateur de ${classCaracteristicBonus.Name}`
                                  +`${(characterClass.ACBonusArmor)?"\nSi porte une armure":((characterClass.ACBonusArmor === false)?"\nSi ne porte pas d'armure":"")}`
                                  +`${(characterClass.ACBonusShield)?"\nSi porte un bouclier":((characterClass.ACBonusShield === false)?"\nSi ne porte pas de bouclier":"")}`)
                              + ((!specialisation || !specialisationBonus)?"":`${classBonusValue?"\n":""}Bonus de spécialisation ${specialisation.Name} +${specialisation.ACBonus}`
                                  +`${(specialisation.ACBonusArmor)?"\nSi porte une armure":((specialisation.ACBonusArmor === false)?"\nSi ne porte pas d'armure":"")}`)
                              + (classBonusValue ||(specialisation && specialisationBonus)?"\n":"")+fightStyleTitle;

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
  fightStyles: state.referential.fightStyles,
  armors: state.referential.armors,
  caracteristics: state.referential.caracteristics,
  levels: state.referential.levels
})
export default connect(mapStateToProps)(ACComponent)
