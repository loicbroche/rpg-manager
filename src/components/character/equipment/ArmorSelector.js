
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Money from 'components/shared/Money'
import Weight from 'components/shared/Weight'
import { filterArmorsCategories, filterShieldsCategories } from 'rules/Armors.rules'
import './ArmorSelector.css'

const CAImage = require("images/shield.png");

class ArmorSelector extends Component {

  render() {
    const { armorCategories, armors, armorId, shield } = this.props;
    const armor = armors && armors[armorId];
    let armorImage;
    try {
      armorImage = armor?require(`images/armors/${armor.OV}.png`):require(`images/armors/without.png`);
    } catch (ex) {
      armorImage = require("images/armors/no_armor.png");
    }

    return (
      <div className="armor-selector">
          <div className="equipment-name">
            <span>{shield?"Bouclier":"Armure"}</span>
          </div>
          <div className="equipment-title">
            { armorCategories && armors && (
              <select className="armor-select" value={armorId} onChange={this.handleValueUpdate}>
                <option value="" disabled>Choisissez {shield?"un bouclier":"une armure"}</option>
                <option value="-">Sans</option>
                { (shield?filterShieldsCategories(armorCategories):filterArmorsCategories(armorCategories)).map((category) => this.getArmorsOptionElement(category.Code))}
              </select>
            )}
            { armor && armor.BonusAC && <span>+ {armor.BonusAC}</span>}
            { armor && armor.MaxBonusAC && <span>({armor.MaxBonusAC})</span>}
            <span className="AC-value">
                <img src={CAImage} className="AC-image" alt="CA" title="Classe d'armure"/>
              <span className="AC-label">{ armor && armor.AC}</span>
            </span>
          </div>
          <div className="armor-illustration">
            <img src={armorImage} className="armor-image" alt="" />
          </div>
          <div className="equipment-description">
            <div className="equipment-description-line"><span className="description-line-title">Poids :</span><Weight weight={armor && armor.Weight} /></div>
            <div className="equipment-description-line"><span className="description-line-title">Discretion :</span><span>{armor && armor.Discretion}</span></div>
            <div className="equipment-description-line"><span className="description-line-title">Force :</span><span>{armor && armor.Strength}</span></div>
            <div className="equipment-description-line"><span className="description-line-title">Prix :</span><Money amount={armor && armor.Price} /></div>
          </div>
      </div>
    )
  }

  // Arrow fx for binding
  handleValueUpdate = (event) => {
    const selectedArmor = event.target.value;
    this.props.onChange(selectedArmor);
  }

  
  getArmorsOptionElement(armorCategoryId) {
    const { armorCategories, armors} = this.props;
    const availableArmors = Object.values(armors).filter((armor) => armor.Category === armorCategoryId);
    console.log("getArmorsOptionElement", armorCategoryId);
    return availableArmors && availableArmors.length > 0 && 
           <optgroup key={armorCategoryId} label={armorCategories && armorCategories[armorCategoryId].Name}>
            { availableArmors.map((armor) => (
              <option key={armor.Id} value={armor.Id}>{armor.Name}</option>
            ))}
          </optgroup>
  }
}

ArmorSelector.propTypes = {
  armorId: PropTypes.string,
  shield: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

ArmorSelector.defaultProps = {
  shield: false
}

const mapStateToProps = (state) => ({
  armorCategories: state.referential.armorCategories,
  armors: state.referential.armors
})
export default connect(mapStateToProps)(ArmorSelector)