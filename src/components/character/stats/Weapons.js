import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './Weapons.css'

const detailsImage = require('images/details.png');

class Weapons extends Component {

  constructor(props) {
    super(props);
    this.state = { showWeapons: false };
  }

  render() {
    const { weaponCategories } = this.props;
    const { showWeapons } = this.state;
    const title=showWeapons?"Masquer les maîtrises d'armes":"Lire/Modifier les maîtrises d'arme";

    return (
    <div className='weaponsComponent'>
      <h1 className="weapons-header">
        Maîtrises d'armes
        <span className={`activable extensor ${showWeapons?"opened":"closed"}`} onClick={this.onShowWeaponsUpdate} title={title} >
          <img src={detailsImage} alt={title} />
        </span>
      </h1>
      <div className={`weapons-container`}>
        <div className={`weapons ${showWeapons&&"show-weapons"}`}>
          {weaponCategories &&
            Object.values(weaponCategories).map(( category ) => this.getWeapons(category))
          }
        </div>
      </div>
    </div>
  )
  }

  getWeapons(category) {
    const { weapons, classes, levels, master, classId, level, onClick } = this.props;
    const availableWeapons = weapons && Object.values(weapons).filter((weapon) => category && weapon.Category === category.Code);

    const characterClass = classes && classes[classId];
    const classWeaponCategories = characterClass && (characterClass.WeaponCategories || []);
    const classWeapons = characterClass && (characterClass.Weapons || []);
    const masteryBonus = levels && levels[level] && levels[level].MasteryBonus;
    const isClassMasterCategory = classWeaponCategories.includes(category && category.Code);

    return availableWeapons && availableWeapons.length > 0 &&
      <div key={category && category.Code}>
        <h1 className={`weapons-category-name ${(isClassMasterCategory?"locked":"")}`}>{(category && category.Name)}</h1>
        <ul className="weapons-category">
          {availableWeapons &&
            Object.values(availableWeapons).map(({Name, Damage, DamageType}, index) => {
              const isMaster = master && master.includes(Name);
              const isClassMaster = isClassMasterCategory || classWeapons.includes(Name);
              return (
              <li key={index} className={"weapon "+(isClassMaster?"locked":"activable")} onClick={() => !isClassMaster && onClick(Name)}
                  title={(isClassMaster?"Maîtrise héritée de la classe "+characterClass.Name:(isMaster?"Oublier":"Apprendre")+` la maîtrise de ${Name}`)+`\nDégâts : ${Damage} ${DamageType}`}>
                <div className={"option "+((isClassMaster||isMaster)&&"filled")}></div>
                <span className="weapon-name">{Name}</span>
                <span className="weapon-bonus">{ (isClassMaster||isMaster) && `+${masteryBonus}`}</span> 
              </li>
            )}
          )}
        </ul>
      </div>
  }

    // Arrow fx for binding
    onShowWeaponsUpdate = () => {
      this.setState({showWeapons: !this.state.showWeapons})
    }
}

Weapons.propTypes = {
  master: PropTypes.arrayOf(PropTypes.string),
  classId: PropTypes.string,
  level: PropTypes.number,
  onClick: PropTypes.func.isRequired
}

Weapons.defaultProps = {
  level: 1
}

const mapStateToProps = (state) => ({
  weaponCategories: state.referential.weaponCategories,
  weapons: state.referential.weapons,
  classes: state.referential.classes,
  levels: state.referential.levels
})
export default connect(mapStateToProps)(Weapons)