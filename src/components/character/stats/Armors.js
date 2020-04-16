import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { selectClassById, selectArmorCategories, selectArmors, selectArmorsByClassId,
         selectArmorCategoriesByClassId, selectArmorCategoriesBySubRaceId } from 'store/selectors';
import PropTypes from 'prop-types'

import './Armors.css'
import ExpendableComponent from 'components/shared/ExpendableComponent';
import { selectSubRaceById } from '../../../store/selectors';

const detailsImage = require('images/details.png');

class Armors extends PureComponent {

  render() {
    const { armorCategories } = this.props;

    return (
    <div className='armorsComponent'>
      <ExpendableComponent extensorTitle="les maîtrises d'armures"
                              header={<span>Maîtrises d'armures</span>}
                              extensor={<img src={detailsImage} alt="Maîtrises d'armures" />}>
          <div className="armors">
            {armorCategories?.map(( category ) => this.getArmors(category))
            }
          </div>
        </ExpendableComponent>
    </div>
  )
  }

  getArmors(category) {
    const { classArmorCategories, subRaceArmorCategories, armors, classArmors, class: characterClass, subRace, master, onClick } = this.props;
    const availableArmors = armors?.filter((armor) => armor.Category === category?.Code);
    const isClassMasterCategory = classArmorCategories?.includes(category?.Code);
    const isSubRaceMasterCategory = subRaceArmorCategories?.includes(category?.Code);

    return availableArmors?.length > 0 &&
      <div key={category?.Code}>
        <h1 className={`armors-category-name ${(isClassMasterCategory || isSubRaceMasterCategory?"locked":"")}`}>{category?.Name}</h1>
        <ul className="armors-category">
          {availableArmors?.map(({Name, AC, ACBonus, MaxACBonus}, index) => {
              const isMaster = master?.includes(Name);
              const isSubRaceMasterCategory = subRaceArmorCategories?.includes(category?.Code);
              const isClassMaster = isClassMasterCategory || classArmors?.includes(Name);
              const lockedTitle = isClassMaster
                                  ?"Maîtrise héritée de la classe "+characterClass.Name
                                  :(isSubRaceMasterCategory?"Maîtrise héritée de la race "+subRace.Name:"");
              return (
              <li key={index} className={"armor "+(isClassMaster||isSubRaceMasterCategory?"locked":"activable")} role="button" onClick={() => !isClassMaster && onClick(Name)}
                  title={(isClassMaster||isSubRaceMasterCategory?lockedTitle:(isMaster?"Oublier":"Apprendre")+` la maîtrise de ${Name}`)
                          +`\nCA : ${AC} ${ACBonus?`+${ACBonus+(MaxACBonus?`(${MaxACBonus})`:"")}`:""}`}>
                <div className={"option "+((isClassMaster||isMaster)&&"filled")}></div>
                <span className="armor-name">{Name}</span>
              </li>
            )}
          )}
        </ul>
      </div>
  }
}

Armors.propTypes = {
  master: PropTypes.arrayOf(PropTypes.string),
  classId: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => ({
  armorCategories: selectArmorCategories(state),
  
  classArmorCategories: selectArmorCategoriesByClassId(state, props.classId),
  subRaceArmorCategories: selectArmorCategoriesBySubRaceId(state, props.subRaceId),
  armors: selectArmors(state),
  classArmors: selectArmorsByClassId(state, props.classId),
  class: selectClassById(state, props.classId),
  subRace: selectSubRaceById(state, props.subRaceId)
})
export default connect(mapStateToProps)(Armors)