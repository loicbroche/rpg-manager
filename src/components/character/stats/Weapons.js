import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './Weapons.css'

class Weapons extends Component {

  render() {
    const { weaponCategories } = this.props;

    return (
    <div className='weapons'>
      {weaponCategories &&
        Object.values(weaponCategories).map(( category ) => this.getWeapons(category))
      }
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
        <h1 className={`weapons-category-name ${(isClassMasterCategory?"class-master":"")}`}>{(category && category.Name)}</h1>
        <ul className="weapons-category">
          {availableWeapons &&
            Object.values(availableWeapons).map(({Name, Damage, DamageType}, index) => {
              const isMaster = master && master.includes(Name);
              const isClassMaster = isClassMasterCategory || classWeapons.includes(Name);
              return (
              <li key={index} className={"weapon "+(isClassMaster?"class-master":"activable")} onClick={() => !isClassMaster && onClick(Name)}
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