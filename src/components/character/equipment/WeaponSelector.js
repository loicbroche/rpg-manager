
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { CharacterPropType } from 'PropTypes'
import { selectSubRaceById, selectRaceBySubRaceId, selectClassById, selectLevelByXP, selectMasteryBonusByXP,
         selectFightStylesByIds, selectWeaponCategoriesByType, selectWeaponCategoriesMap, selectWeaponById,
         selectWeapons, selectWeaponsByClassId, selectWeaponCategoriesByClassId, selectWeaponsBySubRace, selectWeaponsByRace} from 'store/selectors';
import Money from 'components/shared/Money'
import Weight from 'components/shared/Weight'

import './EquipmentSelector.css'
import './WeaponSelector.css'

const mainStatImage = require("images/Damage.png");
const notMasterImage = require("images/cross.png");

class WeaponSelector extends PureComponent {

  render() {
/**/const { armorCategories, weapon, masteryBonus, level, class: characterClass, selectedFightStyles,
            weaponId, distance, wearingCharacter, details, onAmmunitionChange } = this.props;

/**/const weaponType = distance?"distance-weapon":"weapon";
/**/const weaponTitleLabel = distance?"Arme à distance":"Arme";
/**/const weaponLabel = distance?"une arme à distance":"une arme";
/**/const isMaster = this.isMaster(weapon);

const fightStyleLevel = characterClass?.FightStyleLevel;
let fightStyleTitle = "";
const fightStyleBonus = (characterClass
                          && fightStyleLevel <= level?.Level
                          && selectedFightStyles?.length > 0
                          && selectedFightStyles?.reduce((sum, fightStyle) => {
                                  const bonus = fightStyle.Class === characterClass?.Id && (sum+(distance?fightStyle.DistanceBonus:fightStyle.weaponBonus));
                                  fightStyleTitle += (!bonus?"":`${fightStyleTitle?"\n":""}Bonus de Style de combat ${fightStyle.Name} +${distance?fightStyle.DistanceBonus:fightStyle.weaponBonus}`
                                                      +`\n${fightStyle.Description}`)                                        
                                  return bonus || sum;
                              }, 0)
                        ) || 0;

/**/const bonusContent = weapon &&
                      <div>
                        { fightStyleBonus && <span className="main-stat-bonus-label weapon-special-bonus" title={fightStyleTitle}>+{fightStyleBonus}</span>}
                        <div className={`main-stat-bonus-label ${ isMaster?"master-bonus":"not-master-equipment"}`}>
                          { isMaster?<span title="Bonus maîtrise">+{masteryBonus}</span>:<img src={notMasterImage} className="not-master-image" alt="" title="Non maîtrisé"/>}
                        </div>
                      </div>

/**/const bonusCode = "Dégâts";
/**/const bonusTitle = "Dégâts";
/**/const mainValue = weapon?.Damage;
/**/const ammunitions = [];

    for(let i = 0; i < wearingCharacter.Ammunition; i++) {
      ammunitions[i] = true;
    }
    const additionalInfo = distance && wearingCharacter && weapon &&
      <div className="ammunitions">
        {onAmmunitionChange && <span className={`currentModifier decrease-value ${wearingCharacter.Ammunition===0 &&"disabled"}`} role="button" onClick={(event) => {this.handleAmmunitionUpdate(-1)}}
                        title={`Utiliser une munition`}></span>}
        <div className="ammunition-points">
          { ammunitions.map((ammunition, index) => <div key={index} className="ammunition" title={`${wearingCharacter.Ammunition} munitions`}></div>) }
        </div>
        {onAmmunitionChange && <span className={`currentModifier increase-value`} role="button" onClick={(event) => {this.handleAmmunitionUpdate(+1)}}
                        title={`Récupérer une munition`}></span>}
      </div>
    ;

    let weaponImage;
    try {
      weaponImage = weapon?require(`images/equipments/${weaponType}/${weapon.OV}.png`):require(`images/equipments/${weaponType}/without.png`);
    } catch (ex) {
      weaponImage = require(`images/equipments/${weaponType}/no_image.png`);
    }
  
    return (
      <div className="equipment-selector">
          <h1 className="equipment-name">
            <span>{weaponTitleLabel}</span>
            <span className="additional-info">{additionalInfo}</span>
          </h1>
          <div className="equipment-title">
            { armorCategories && (
              <select className="equipment-select" value={weaponId} disabled={!this.props.onChange} onChange={this.handleValueUpdate}>
                <option value="" disabled>Choisissez {weaponLabel}</option>
                <option value="-">Sans</option>
                { armorCategories.map((category) => this.getWeaponsOptionElement(category.Code))}
              </select>
            )}
            <div className="main-stat-value" title={weapon?.Damage+" "+weapon?.DamageType}>
                {weapon && <img src={mainStatImage} className="main-stat-image" alt={bonusCode} title={bonusTitle}/>}
                <span className="main-stat-label">{mainValue}</span>
                {bonusContent}
            </div>
          </div>
          {weapon && details && <div className="equipment-illustration">
            <img src={weaponImage} className="equipment-image" alt="" />
          </div>}
          {weapon && details &&
            <div className="equipment-description">
              <div className="equipment-description-line"><span className="description-line-title">{weapon?"Dégâts:":'\u00A0'}</span>
                                                          <span className="description-line-value">{weapon?.Damage+" "+weapon?.DamageType}</span></div>
              <div className="equipment-description-line"><span className="description-line-title">{weapon?"Propriété:":'\u00A0'}</span>
                                                          <span className="description-line-value">{weapon?.Properties}</span></div>
              <div className="equipment-description-line"><span className="description-line-title">{weapon?"Poids:":'\u00A0'}</span>
                                                          <Weight weight={weapon.Weight} /></div>
              <div className="equipment-description-line"><span className="description-line-title">{weapon?"Prix:":'\u00A0'}</span>
                                                          <Money id={weaponTitleLabel} amount={weapon.Price} /></div>
          </div>}
      </div>
    )
  }

  // Arrow fx for binding
  handleValueUpdate = (event) => {
    const selectedWeapon = event.target.value;
    this.props.onChange(selectedWeapon);
  }

  
  // Arrow fx for binding
  handleAmmunitionUpdate = (value) => {
    const {wearingCharacter, onAmmunitionChange} = this.props;
    const newVal = Math.max(wearingCharacter.Ammunition+value, 0);
    if (newVal !== wearingCharacter.Ammunition) {
      onAmmunitionChange(newVal);
    }
  }

  getWeaponsOptionElement(weaponCategoryId) {
    const { armorCategoriesMap, weapons, classWeapons, classWeaponCategories, raceWeapons, subRaceWeapons,
            class: characterClass, race, subRace} = this.props;
    const className = characterClass?characterClass.Name:"";
    const isClassMasterCategory = classWeaponCategories?.includes(weaponCategoryId);

    const availableWeapons = weapons?.filter((weapon) => weapon.Category === weaponCategoryId);
    return availableWeapons?.length > 0 && 
           <optgroup key={weaponCategoryId} label={armorCategoriesMap?.[weaponCategoryId].Name}>
            { availableWeapons.map((weapon) => {
              const isRaceMaster = raceWeapons?.includes(weapon?.Name);
              const isSubRaceMaster = subRaceWeapons?.includes(weapon?.Name);
              const isClassMaster = isClassMasterCategory || classWeapons?.includes(weapon.Name);
              return (
              <option key={weapon.Name} value={weapon.Id} className={this.isMaster(weapon)?"master-equipment":""}
              title={(  isRaceMaster
                        ?"Maîtrise héritée de la race "+race?.Name
                        :(  isSubRaceMaster
                            ?"Maîtrise héritée de la race "+subRace?.Name
                            :( isClassMaster
                              ?"Maîtrise héritée de la classe "+className
                              :"Non maîtrisé")
                          )
                      ) +`\nDégâts : ${weapon.Damage} ${weapon.DamageType}`}>{weapon.Name}</option>
            )})}
          </optgroup>
  }

  isMaster(weapon) {
    const { class: characterClass, race, subRace, wearingCharacter } = this.props;
  
    const master = wearingCharacter.MasterWeapons;
    const classWeaponCategories = characterClass?.WeaponCategories || [];
    const classWeapons = characterClass?.Weapons || [];
    const raceWeapons = race?.Weapons || [];
    const subRaceWeapons = subRace?.Weapons || [];
  
    const isMaster = master?.includes(weapon?.Name);
    const isClassMaster = classWeapons?.includes(weapon?.Name) ||
                          classWeaponCategories?.includes(weapon?.Category);
   const isRaceMaster = raceWeapons?.includes(weapon?.Name);
   const isSubRaceMaster = subRaceWeapons?.includes(weapon?.Name);

    return isMaster || isClassMaster || isRaceMaster || isSubRaceMaster;
  }
}

WeaponSelector.propTypes = {
  weaponId: PropTypes.string,
  distance: PropTypes.bool,
  wearingCharacter: CharacterPropType,
  onChange: PropTypes.func,
  onAmmunitionChange: PropTypes.func,
  details: PropTypes.bool
}

WeaponSelector.defaultProps = {
  distance: false,
  details: true
}

const mapStateToProps = (state, props) => ({
  armorCategories: selectWeaponCategoriesByType(state, props.distance),
  armorCategoriesMap: selectWeaponCategoriesMap(state),
  weapons: selectWeapons(state),
  classWeapons: selectWeaponsByClassId(state, props.wearingCharacter?.Class),
  classWeaponCategories: selectWeaponCategoriesByClassId(state, props.wearingCharacter?.Class),
  subRaceWeapons: selectWeaponsBySubRace(state, props.wearingCharacter?.SubRace),
  raceWeapons: selectWeaponsByRace(state, props.wearingCharacter?.SubRace),
  weapon: selectWeaponById(state, props.weaponId),
  masteryBonus: selectMasteryBonusByXP(state, props.wearingCharacter?.XP),
  level: selectLevelByXP(state, props.wearingCharacter?.XP),
  class: selectClassById(state, props.wearingCharacter?.Class),
  subRace: selectSubRaceById(state, props.wearingCharacter?.SubRace),
  race: selectRaceBySubRaceId(state, props.wearingCharacter?.SubRace),
  selectedFightStyles: selectFightStylesByIds(state, props.wearingCharacter?.FightStyles)
})
export default connect(mapStateToProps)(WeaponSelector)