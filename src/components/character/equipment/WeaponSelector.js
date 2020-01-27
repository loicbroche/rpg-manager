
import React, { Component } from 'react'
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

class WeaponSelector extends Component {

  render() {
/**/const { equipmentCategories, equipments, levels, classes, equipmentId, distance, wearingCharacter, classId, master } = this.props;
/**/const filteredCategories = equipmentCategories && (distance?filterDistanceCategories(equipmentCategories):filterHtHCategories(equipmentCategories));
    const equipment = equipments && equipments[equipmentId];
    const weapon = equipments && equipments[equipmentId];

/**/const equipmentType = distance?"distance-weapon":"weapon";
/**/const equipmentTitleLabel = distance?"Arme de jet":"Arme";
/**/const equipmentLabel = distance?"une arme de jet":"une arme";

/**/const level = getLevel(levels, wearingCharacter && wearingCharacter.XP);
/**/const characterClass = classes && classes[classId];
/**/const classWeaponCategories = characterClass && (characterClass.Weapons||[]);
/**/const classWeapons = characterClass && (characterClass.WeaponCategories||[]);
/**/const masterBonus = level && level.MasteryBonus;

/**/const isMaster = master && master.includes(weapon && weapon.Name);
/**/const isClassMaster = (classWeapons && classWeapons.includes(weapon && weapon.Name)) ||
                          (classWeaponCategories && classWeaponCategories.includes(weapon && weapon.Category));

/**/const bonusContent = equipment && equipment.Damage && (isMaster || isClassMaster) &&
                        <div className={`main-stat-bonus-label master-bonus`}>
                          {"+"+masterBonus}            
                        </div>

/**/const bonusCode = "Dégâts";
/**/const bonusTitle = "Dégâts";
/**/const mainValue = equipment && equipment.Damage;
/**/const ammunitions = [];
    for(let i = 0; i < wearingCharacter.Ammunition; i++) {
      ammunitions[i] = true;
    }
    const additionalInfo = distance && wearingCharacter && 
      <div className="ammunitions">
        <span className={`currentModifier decrease-value ${wearingCharacter.Ammunition===0 &&"disabled"}`} onClick={(event) => {this.handleAmmunitionUpdate(-1)}}
                        title={`Utiliser une munition`}></span>
        <div className="ammunition-points">
          { ammunitions.map((ammunition, index) => <div key={index} className="ammunition" title={`${wearingCharacter.Ammunition} munitions`}></div>) }
        </div>
        <span className={`currentModifier increase-value`} onClick={(event) => {this.handleAmmunitionUpdate(+1)}}
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
          <div className="equipment-name">
            <span>{equipmentTitleLabel}</span>
            <span className="additional-info">{additionalInfo}</span>
          </div>
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
          <div className="equipment-illustration">
            <img src={equipmentImage} className="equipment-image" alt="" />
          </div>
          <div className="equipment-description">
            <div className="equipment-description-line"><span className="description-line-title">{equipment?"Poids:":'\u00A0'}</span>
                                                        {equipment && <Weight weight={equipment.Weight} />}</div>
            <div className="equipment-description-line"><span className="description-line-title">{equipment?"Dégâts:":'\u00A0'}</span>
                                                        <span className="description-line-value">{equipment && equipment.Damage+" "+equipment.DamageType}</span></div>
            <div className="equipment-description-line"><span className="description-line-title">{equipment?"Propriété:":'\u00A0'}</span>
                                                        <span className="description-line-value">{equipment && equipment.Properties}</span></div>
            <div className="equipment-description-line"><span className="description-line-title">{equipment?"Prix:":'\u00A0'}</span>
                                                        {equipment && <Money amount={equipment.Price} />}</div>
          </div>
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
    const { equipmentCategories, equipments} = this.props;
    const availableEquipments = Object.values(equipments).filter((equipment) => equipment.Category === equipmentCategoryId);
    return availableEquipments && availableEquipments.length > 0 && 
           <optgroup key={equipmentCategoryId} label={equipmentCategories && equipmentCategories[equipmentCategoryId].Name}>
            { availableEquipments.map((equipment) => (
              <option key={equipment.Name} value={equipment.Id} className="master-equipment">{equipment.Name}</option>
            ))}
          </optgroup>
  }
}

WeaponSelector.propTypes = {
  equipmentId: PropTypes.string,
  distance: PropTypes.bool,
  wearingCharacter: CharacterPropType,
  onChange: PropTypes.func.isRequired,
  onAmmunitionChange: PropTypes.func,
  classId: PropTypes.string,
  master: PropTypes.arrayOf(PropTypes.string)
}

WeaponSelector.defaultProps = {
  distance: false
}

const mapStateToProps = (state) => ({
  equipmentCategories: state.referential.weaponCategories,
  equipments: state.referential.weapons,
  levels: state.referential.levels,
  classes: state.referential.classes
})
export default connect(mapStateToProps)(WeaponSelector)