
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { CharacterPropType } from 'PropTypes'
import Money from 'components/shared/Money'
import Weight from 'components/shared/Weight'
import { filterDistanceCategories, filterHtHCategories } from 'rules/Weapons.rules'
import { getLevel } from 'rules/Levels.rules'

import './EquipmentSelector.css'
import './WeaponSelector.css'

const mainStatImage = require("images/Damage.png");
const notMasterImage = require("images/cross.png");

class WeaponSelector extends PureComponent {

  render() {
/**/const { equipmentCategories, equipments, levels, classes, fightStyles, equipmentId, distance, wearingCharacter } = this.props;
/**/const filteredCategories = equipmentCategories && (distance?filterDistanceCategories(equipmentCategories):filterHtHCategories(equipmentCategories));
    const equipment = equipments?.[equipmentId];

/**/const equipmentType = distance?"distance-weapon":"weapon";
/**/const equipmentTitleLabel = distance?"Arme à distance":"Arme";
/**/const equipmentLabel = distance?"une arme à distance":"une arme";

/**/const level = getLevel(levels, wearingCharacter?.XP);

/**/const masterBonus = level?.MasteryBonus;
/**/const isMaster = this.isMaster(equipment);

const characterClass = classes?.[wearingCharacter.Class];
const selectedFightStyles = fightStyles && Object.values(fightStyles).filter((style) => wearingCharacter?.FightStyles?.includes(style.Code));
const fightStyleLevel = characterClass?.FightStyleLevel;
let fightStyleTitle = "";
const fightStyleBonus = (wearingCharacter
                          && fightStyleLevel <= level?.Level
                          && selectedFightStyles?.length > 0
                          && selectedFightStyles?.reduce((sum, fightStyle) => {
                                  const bonus = fightStyle.Class === wearingCharacter.Class && (sum+(distance?fightStyle.DistanceBonus:fightStyle.weaponBonus));
                                  fightStyleTitle += (!bonus?"":`${fightStyleTitle?"\n":""}Bonus de Style de combat ${fightStyle.Name} +${distance?fightStyle.DistanceBonus:fightStyle.weaponBonus}`
                                                      +`\n${fightStyle.Description}`)                                        
                                  return bonus || sum;
                              }, 0)
                        ) || 0;

/**/const bonusContent = equipment &&
                      <div>
                        { fightStyleBonus && <span className="main-stat-bonus-label weapon-special-bonus" title={fightStyleTitle}>+{fightStyleBonus}</span>}
                        <div className={`main-stat-bonus-label ${ isMaster?"master-bonus":"not-master-equipment"}`}>
                          { isMaster?<span title="Bonus maîtrise">+{masterBonus}</span>:<img src={notMasterImage} className="not-master-image" alt="" title="Non maîtrisé"/>}
                        </div>
                      </div>

/**/const bonusCode = "Dégâts";
/**/const bonusTitle = "Dégâts";
/**/const mainValue = equipment && equipment.Damage;
/**/const ammunitions = [];

    for(let i = 0; i < wearingCharacter.Ammunition; i++) {
      ammunitions[i] = true;
    }
    const additionalInfo = distance && wearingCharacter && equipment &&
      <div className="ammunitions">
        <span className={`currentModifier decrease-value ${wearingCharacter.Ammunition===0 &&"disabled"}`} role="button" onClick={(event) => {this.handleAmmunitionUpdate(-1)}}
                        title={`Utiliser une munition`}></span>
        <div className="ammunition-points">
          { ammunitions.map((ammunition, index) => <div key={index} className="ammunition" title={`${wearingCharacter.Ammunition} munitions`}></div>) }
        </div>
        <span className={`currentModifier increase-value`} role="button" onClick={(event) => {this.handleAmmunitionUpdate(+1)}}
                        title={`Récupérer une munition`}></span>
      </div>
    ;

    let equipmentImage;
    try {
      equipmentImage = equipment?require(`images/equipments/${equipmentType}/${equipment.OV}.png`):require(`images/equipments/${equipmentType}/without.png`);
    } catch (ex) {
      equipmentImage = require(`images/equipments/${equipmentType}/no_image.png`);
    }
  
    return (
      <div className="equipment-selector">
          <h1 className="equipment-name">
            <span>{equipmentTitleLabel}</span>
            <span className="additional-info">{additionalInfo}</span>
          </h1>
          <div className="equipment-title">
            { equipmentCategories && equipments && (
              <select className="equipment-select" value={equipmentId} onChange={this.handleValueUpdate}>
                <option value="" disabled>Choisissez {equipmentLabel}</option>
                <option value="-">Sans</option>
                { filteredCategories.map((category) => this.getEquipmentsOptionElement(category.Code))}
              </select>
            )}
            <div className="main-stat-value">
                {equipment && <img src={mainStatImage} className="main-stat-image" alt={bonusCode} title={bonusTitle}/>}
                <span className="main-stat-label">{mainValue}</span>
                {bonusContent}
            </div>
          </div>
          {equipment && <div className="equipment-illustration">
            <img src={equipmentImage} className="equipment-image" alt="" />
          </div>}
          {equipment &&
            <div className="equipment-description">
              <div className="equipment-description-line"><span className="description-line-title">{equipment?"Dégâts:":'\u00A0'}</span>
                                                          <span className="description-line-value">{equipment?.Damage+" "+equipment.DamageType}</span></div>
              <div className="equipment-description-line"><span className="description-line-title">{equipment?"Propriété:":'\u00A0'}</span>
                                                          <span className="description-line-value">{equipment?.Properties}</span></div>
              <div className="equipment-description-line"><span className="description-line-title">{equipment?"Poids:":'\u00A0'}</span>
                                                          <Weight weight={equipment.Weight} /></div>
              <div className="equipment-description-line"><span className="description-line-title">{equipment?"Prix:":'\u00A0'}</span>
                                                          <Money id={equipmentTitleLabel} amount={equipment.Price} /></div>
          </div>}
      </div>
    )
  }

  // Arrow fx for binding
  handleValueUpdate = (event) => {
    const selectedEquipment = event.target.value;
    this.props.onChange(selectedEquipment);
  }

  
  // Arrow fx for binding
  handleAmmunitionUpdate = (value) => {
    const {wearingCharacter, onAmmunitionChange} = this.props;
    const newVal = Math.max(wearingCharacter.Ammunition+value, 0);
    if (newVal !== wearingCharacter.Ammunition) {
      onAmmunitionChange(newVal);
    }
  }

  getEquipmentsOptionElement(equipmentCategoryId) {
    const { equipmentCategories, equipments, classes, races, subRaces, wearingCharacter} = this.props;
    const characterClass = classes?.[wearingCharacter.Class];
    const subRace = subRaces?.[wearingCharacter.SubRace];
    const race = races?.[subRace?.Race];
    const className = characterClass?characterClass.Name:"";
    const isClassMasterCategory = characterClass?.WeaponCategories?.includes(equipmentCategoryId);
    const classWeapons = characterClass?.Weapons || [];
    const raceWeapons = race?.Weapons || [];
    const subRaceWeapons = subRace?.Weapons || [];

    const availableEquipments = Object.values(equipments).filter((equipment) => equipment.Category === equipmentCategoryId);
    return availableEquipments?.length > 0 && 
           <optgroup key={equipmentCategoryId} label={equipmentCategories?.[equipmentCategoryId].Name}>
            { availableEquipments.map((equipment) => {
              const isRaceMaster = raceWeapons?.includes(equipment?.Name);
              const isSubRaceMaster = subRaceWeapons?.includes(equipment?.Name);
              const isClassMaster = isClassMasterCategory || classWeapons?.includes(equipment.Name);
              return (
              <option key={equipment.Name} value={equipment.Id} className={this.isMaster(equipment)?"master-equipment":""}
              title={(  isRaceMaster
                        ?"Maîtrise héritée de la race "+race.Name
                        :(  isSubRaceMaster
                            ?"Maîtrise héritée de la race "+subRace.Name
                            :( isClassMaster
                              ?"Maîtrise héritée de la classe "+className
                              :"Non maîtrisé")
                          )
                      ) +`\nDégâts : ${equipment.Damage} ${equipment.DamageType}`}>{equipment.Name}</option>
            )})}
          </optgroup>
  }

  isMaster(weapon) {
    const { classes, races, subRaces, wearingCharacter } = this.props;
  
    const master = wearingCharacter.MasterWeapons;
    const characterClass = classes?.[wearingCharacter.Class];
    const subRace = subRaces?.[wearingCharacter.SubRace];
    const race = races?.[subRace?.Race];
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
  equipmentId: PropTypes.string,
  distance: PropTypes.bool,
  wearingCharacter: CharacterPropType,
  onChange: PropTypes.func.isRequired,
  onAmmunitionChange: PropTypes.func
}

WeaponSelector.defaultProps = {
  distance: false
}

const mapStateToProps = (state) => ({
  equipmentCategories: state.referential.weaponCategories,
  equipments: state.referential.weapons,
  levels: state.referential.levels,
  classes: state.referential.classes,
  races: state.referential.races,
  subRaces: state.referential.subRaces,
  fightStyles: state.referential.fightStyles
})
export default connect(mapStateToProps)(WeaponSelector)