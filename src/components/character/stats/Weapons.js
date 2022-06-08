import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { selectSubRaceById, selectRaceBySubRaceId, selectClassById, selectMasteryBonusByXP, selectWeaponCategories,
         selectWeaponCategoriesByClassId, selectWeapons, selectWeaponsByClassId, selectWeaponsBySubRace } from 'store/selectors';

import PropTypes from 'prop-types'

import './Weapons.css'
import ExpendableComponent from 'components/shared/ExpendableComponent';

const detailsImage = require('images/details.png');

class Weapons extends PureComponent {

  render() {
    const { weaponCategories } = this.props;

    return (
    <div className='weaponsComponent'>
      <ExpendableComponent extensorTitle="les maîtrises d'armes"
                              header={<span>Maîtrises d'armes</span>}
                              extensor={<img src={detailsImage} alt="Maîtrises d'armes" />}>
          <div className="weapons">
            {weaponCategories?.map(( category ) => this.getWeapons(category))
            }
          </div>
        </ExpendableComponent>
    </div>
  )
  }

  getWeapons(category) {
    const { weapons, classWeaponCategories, classWeapons, raceWeapons, subRaceWeapons,
           class: characterClass, race, subRace, masteryBonus, master, onClick } = this.props;

    const availableWeapons = weapons?.filter((weapon) => category && weapon.Category === category.Code);
    const isClassMasterCategory = classWeaponCategories?.includes(category?.Code);

    return availableWeapons?.length > 0 &&
      <div key={category?.Code}>
        <h1 className={`weapons-category-name ${(isClassMasterCategory?"locked":"")}`}>{category?.Name}</h1>
        <ul className="weapons-category">
          {availableWeapons &&
            Object.values(availableWeapons).map(({Name, Damage, DamageType}, index) => {
              const isMaster = master?.includes(Name);
              const isClassMaster = isClassMasterCategory || classWeapons?.includes(Name);
              const isRaceMaster = raceWeapons?.includes(Name);
              const isSubRaceMaster = subRaceWeapons?.includes(Name);
              const isLockedMaster = isClassMaster || isSubRaceMaster || isRaceMaster;
              const lockedMasterTitle = isRaceMaster
                                        ?"Maîtrise héritée de la race "+race?.Name
                                        :(  isSubRaceMaster
                                            ?"Maîtrise héritée de la race "+subRace?.Name
                                            :isClassMaster?"Maîtrise héritée de la classe "+characterClass.Name:"");
              return (
              <li key={index} className={"weapon "+(isLockedMaster?"locked":"activable")} role="button" onClick={() => !isLockedMaster && onClick(Name)}
                  data-tip={(isLockedMaster?lockedMasterTitle:(isMaster?"Oublier":"Apprendre")+` la maîtrise de ${Name}`)+`\nDégâts : ${Damage} ${DamageType}`}>
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
  XP: PropTypes.number,
  onClick: PropTypes.func.isRequired
}

Weapons.defaultProps = {
  XP: 0
}

const mapStateToProps = (state, props) => ({
  weaponCategories: selectWeaponCategories(state),
  classWeaponCategories : selectWeaponCategoriesByClassId(state, props.classId),
  weapons: selectWeapons(state),
  classWeapons: selectWeaponsByClassId(state, props.classId),
  subRaceWeapons: selectWeaponsBySubRace(state, props.subRaceId),
  class: selectClassById(state, props.classId),
  subRace: selectSubRaceById(state, props.subRaceId),
  race: selectRaceBySubRaceId(state, props.subRaceId),
  masteryBonus: selectMasteryBonusByXP(state, props.XP)
})
export default connect(mapStateToProps)(Weapons)