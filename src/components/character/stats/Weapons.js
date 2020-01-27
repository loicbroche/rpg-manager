import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './Weapons.css'

class Weapons extends Component {

  render() {
    const { weapons, classes, levels,
            master, onClick, classId, level} = this.props;
    const characterClass = classes && classes[classId];
    const classWeaponCategories = characterClass && (characterClass.Weapons||[]);
    const classWeapons = characterClass && (characterClass.WeaponCategories||[]);
    
    const masteryBonus = levels && levels[level] && levels[level].MasteryBonus;

    return (
    <ul className='weapons'>
      {weapons &&
        Object.values(weapons).map(({Category, Name}, index) => {
          const isMaster = master && master.includes(Name);
          const isClassMaster = classWeapons.includes(Name) || classWeaponCategories.includes(Category);

          return (
          <li key={index} className={"weapon "+(isClassMaster?"class-master":"activable")} onClick={() => !isClassMaster && onClick(Name)}>
            <div className={"option "+((isClassMaster||isMaster)&&"filled")}></div>
            <span className="weapon-name">{Name}</span>
            <span className="weapon-bonus">{ (isClassMaster||isMaster) && `+${masteryBonus}`}</span> 
          </li>
        )}
      )}
    </ul>
  )
  }
}

Weapons.propTypes = {
  master: PropTypes.arrayOf(PropTypes.string),
  classId: PropTypes.string,
  level: PropTypes.number,
  onClick: PropTypes.func.isRequired,
}

Weapons.defaultProps = {
  level: 1
}

const mapStateToProps = (state) => ({
  weapons: state.referential.weapons,
  classes: state.referential.classes,
  levels: state.referential.levels
})
export default connect(mapStateToProps)(Weapons)