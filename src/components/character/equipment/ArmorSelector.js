
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectSubRaceById, selectClassById, selectArmors, selectArmorById, selectACBonusCaracteristicByArmorId,
         selectArmorCategoriesByType, selectArmorCategoriesMap, selectArmorCategoriesByClassId, selectArmorCategoriesBySubRaceId } from 'store/selectors';

import { CharacterPropType } from 'PropTypes'
import Money from 'components/shared/Money'
import Weight from 'components/shared/Weight'
import CaracteristicBonus from 'components/shared/CaracteristicBonus'

import './EquipmentSelector.css'

const mainStatImage = require("images/AC.png");
const notMasterImage = require("images/cross.png");

class ArmorSelector extends PureComponent {

  render() {
/**/const { armorCategories, armors, armor, ACBonusCaracteristic, armorId, shield, wearingCharacter, details } = this.props;
    
/**/const armorType = shield?"shield":"armor";
/**/const armorTitleLabel = shield?"Bouclier":"Armure";
/**/const armorLabel = shield?"un bouclier":"une armure";

    const isMaster = this.isMasterCategory(armor?.Category) || wearingCharacter?.MasterArmors?.includes(armorId);
    const caracteristicName = ACBonusCaracteristic?.OV;
/**/const bonusContent = armor && 
                         <div className={`main-stat-bonus-label ${ !isMaster?"not-master-equipment":""}`}>
                            {isMaster
                              ?(armor?.ACBonus && caracteristicName && <CaracteristicBonus caracteristicName={caracteristicName}
                                                  value={wearingCharacter?.[caracteristicName]}
                                                  bonusMax={Number.isNaN(armor.MaxACBonus)?null:armor.MaxACBonus}
                                                  subRaceId={wearingCharacter?.SubRace} />)
                              :<img src={notMasterImage} className="not-master-image" alt="" title="Non maîtrisé"/>
                            }
                          </div>

/**/const bonusCode = "CA";
/**/const bonusTitle = "Classe d'armure";
/**/const mainValue = armor?.AC;

    let armorImage;
    try {
      armorImage = armor?require(`images/equipments/${armorType}/${armor.OV}.png`):require(`images/equipments/${armorType}/without.png`);
    } catch (ex) {
      armorImage = require(`images/equipments/${armorType}/no_image.png`);
    }

    return (
      <div className="equipment-selector">
          <h1 className="equipment-name">
            <span>{armorTitleLabel}</span>
          </h1>
          <div className="equipment-title">
            { armorCategories && armors && (
              <select className="equipment-select" value={armorId}  disabled={!this.props.onChange} onChange={this.handleValueUpdate}>
                <option value="" disabled>Choisissez {armorLabel}</option>
                <option value="-">Sans</option>
                { armorCategories.map((category) => this.getArmorsOptionElement(category.Code))}
              </select>
            )}
            <div className="main-stat-value">
                {armor && <img src={mainStatImage} className="main-stat-image" alt={bonusCode} title={bonusTitle}/>}
                <span className="main-stat-label">{mainValue}</span>
                {bonusContent}
            </div>
          </div>
          {armor && details && <div className="equipment-illustration">
            <img src={armorImage} className="equipment-image" alt="" />
          </div>}
          {armor && details &&
            <div className="equipment-description">
              <div className="equipment-description-line"><span className="description-line-title">{armor?"Discretion:":'\u00A0'}</span>
                                                          <span className="description-line-value">{armor?.Discretion}</span></div>
              <div className="equipment-description-line"><span className="description-line-title">{armor?"Force:":'\u00A0'}</span>
                                                          <span className="description-line-value">{armor?.Strength}</span></div>
              <div className="equipment-description-line"><span className="description-line-title">{armor?"Poids:":'\u00A0'}</span>
                                                          <Weight weight={armor.Weight} /></div>
              <div className="equipment-description-line"><span className="description-line-title">{armor?"Prix:":'\u00A0'}</span>
                                                          <Money id={armorTitleLabel} amount={armor.Price} /></div>
          </div>}
      </div>
    )
  }

  // Arrow fx for binding
  handleValueUpdate = (event) => {
    const selectedArmor = event.target.value;
    this.props.onChange(selectedArmor);
  }

  getArmorsOptionElement(armorCategoryId) {
    const { armorCategoriesMap, armors, subRace, class: characterClass, wearingCharacter} = this.props;

    const availableArmors = armors?.filter((armor) => armor.Category === armorCategoryId);
    const isClassMasterCategory = this.isClassMasterCategory(armorCategoryId);
    const isRaceMasterCategory = this.isRaceMasterCategory(armorCategoryId);
    const isMasterCategory = isClassMasterCategory || isRaceMasterCategory;

    return availableArmors?.length > 0 && 
           <optgroup key={armorCategoryId} label={armorCategoriesMap?.[armorCategoryId].Name} >
            { availableArmors.map((armor) => {
              const isMasterArmor = isMasterCategory || (wearingCharacter?.MasterArmors?.includes(armor.Id));
              return (
              <option key={armor.Name} value={armor.Id} className={isMasterArmor?"master-equipment":""}
                      title={ (isRaceMasterCategory
                              ?"Maîtrise héritée de la race "+subRace?.Name
                              :(  isClassMasterCategory
                                  ?"Maîtrise héritée de la classe "+characterClass.Name
                                  :"Non maîtrisé"
                              ))+`\nCA : ${armor.AC} ${armor.ACBonus
                                                            ?`+${armor.ACBonus} ${armor.MaxACBonus
                                                                                      ?`(max ${armor.MaxACBonus})`
                                                                                      :""}`
                                                            :""}
                                  `}>{armor.Name}</option>
            )})}
          </optgroup>
  }

  isMasterCategory(armorCategoryId) {
    return this.isClassMasterCategory(armorCategoryId) || this.isRaceMasterCategory(armorCategoryId);
  }

  isClassMasterCategory(armorCategoryId) {
    const { classArmorCategories } = this.props;
    return classArmorCategories?.includes(armorCategoryId);
  }

  isRaceMasterCategory(armorCategoryId) {
    const { subRaceArmorCategories } = this.props;
    return subRaceArmorCategories?.includes(armorCategoryId);
  }
}

ArmorSelector.propTypes = {
  armorId: PropTypes.string,
  classId: PropTypes.string,
  subRaceId: PropTypes.string,
  shield: PropTypes.bool,
  wearingCharacter: CharacterPropType,
  onChange: PropTypes.func,
  details: PropTypes.bool
}

ArmorSelector.defaultProps = {
  shield: false,
  details: true
}

const mapStateToProps = (state, props) => ({
  armorCategories: selectArmorCategoriesByType(state, props.shield),
  armorCategoriesMap: selectArmorCategoriesMap(state),
  classArmorCategories: selectArmorCategoriesByClassId(state, props.classId),
  subRaceArmorCategories: selectArmorCategoriesBySubRaceId(state, props.subRaceId),
  armors: selectArmors(state),
  armor: selectArmorById(state, props.armorId),
  class: selectClassById(state, props.classId),
  subRace: selectSubRaceById(state, props.subRaceId),
  ACBonusCaracteristic: selectACBonusCaracteristicByArmorId(state, props.armorId)
})
export default connect(mapStateToProps)(ArmorSelector)