import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './Weapons.css'
import ExpendableComponent from 'components/shared/ExpendableComponent';

const detailsImage = require('images/details.png');

class Weapons extends Component {

  render() {
    const { weaponCategories } = this.props;

    return (
    <div className='weaponsComponent'>
      <ExpendableComponent extensorTitle="les maîtrises d'armes"
                              header={<span>Maîtrises d'armes</span>}
                              extensor={<img src={detailsImage} alt="Maîtrises d'armes" />}>
          <div className="weapons">
            {weaponCategories &&
              Object.values(weaponCategories).map(( category ) => this.getWeapons(category))
            }
          </div>
        </ExpendableComponent>
    </div>
  )
  }

  getWeapons(category) {
    const { weapons, classes, races, subRaces, levels, master, classId, subRaceId, level, onClick } = this.props;
    const availableWeapons = weapons && Object.values(weapons).filter((weapon) => category && weapon.Category === category.Code);

    const characterClass = classes && classes[classId];
    const subRace = subRaces && subRaces[subRaceId];
    const race = subRace && races && races[subRace.Race];
    const classWeaponCategories = characterClass && (characterClass.WeaponCategories || []);
    const classWeapons = characterClass && (characterClass.Weapons || []);
    const raceWeapons = race && (race.Weapons || []);
    const subRaceWeapons = subRace && (subRace.Weapons || []);
    const masteryBonus = levels && levels[level] && levels[level].MasteryBonus;
    const isClassMasterCategory = classWeaponCategories && classWeaponCategories.includes(category && category.Code);

    return availableWeapons && availableWeapons.length > 0 &&
      <div key={category && category.Code}>
        <h1 className={`weapons-category-name ${(isClassMasterCategory?"locked":"")}`}>{(category && category.Name)}</h1>
        <ul className="weapons-category">
          {availableWeapons &&
            Object.values(availableWeapons).map(({Name, Damage, DamageType}, index) => {
              const isMaster = master && master.includes(Name);
              const isClassMaster = isClassMasterCategory || (classWeapons && classWeapons.includes(Name));
              const isRaceMaster = (raceWeapons && raceWeapons.includes(Name));
              const isSubRaceMaster = (subRaceWeapons && subRaceWeapons.includes(Name));
              const isLockedMaster = isClassMaster || isSubRaceMaster || isRaceMaster;
              const lockedMasterTitle = isRaceMaster
                                        ?"Maîtrise héritée de la race "+race.Name
                                        :(  isSubRaceMaster
                                            ?"Maîtrise héritée de la race "+subRace.Name
                                            :isClassMaster?"Maîtrise héritée de la classe "+characterClass.Name:"");
              return (
              <li key={index} className={"weapon "+(isLockedMaster?"locked":"activable")} onClick={() => !isLockedMaster && onClick(Name)}
                  title={(isLockedMaster?lockedMasterTitle:(isMaster?"Oublier":"Apprendre")+` la maîtrise de ${Name}`)+`\nDégâts : ${Damage} ${DamageType}`}>
                <div className={"option "+((isLockedMaster||isMaster)&&"filled")}></div>
                <span className="weapon-name">{Name}</span>
                <span className="weapon-bonus">{ (isLockedMaster||isMaster) && `+${masteryBonus}`}</span> 
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
  subRaceId: PropTypes.string,
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
  races: state.referential.races,
  subRaces: state.referential.subRaces,
  levels: state.referential.levels
})
export default connect(mapStateToProps)(Weapons)