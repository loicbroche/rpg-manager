import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './Armors.css'
import ExpendableComponent from 'components/shared/ExpendableComponent';

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
            {armorCategories &&
              Object.values(armorCategories).map(( category ) => this.getArmors(category))
            }
          </div>
        </ExpendableComponent>
    </div>
  )
  }

  getArmors(category) {
    const { armors, classes, master, classId, onClick } = this.props;
    const availableArmors = armors && Object.values(armors).filter((armor) => armor.Category === category?.Code);

    const characterClass = classes?.[classId];
    const classArmorCategories = characterClass?.ArmorCategories || [];
    const classArmors = characterClass?.Armors || [];
    const isClassMasterCategory = classArmorCategories?.includes(category?.Code);

    return availableArmors?.length > 0 &&
      <div key={category?.Code}>
        <h1 className={`armors-category-name ${(isClassMasterCategory?"locked":"")}`}>{category?.Name}</h1>
        <ul className="armors-category">
          {availableArmors &&
            Object.values(availableArmors).map(({Name, AC, BonusAC, MaxBonusAC}, index) => {
              const isMaster = master?.includes(Name);
              const isClassMaster = isClassMasterCategory || classArmors?.includes(Name);
              return (
              <li key={index} className={"armor "+(isClassMaster?"locked":"activable")} role="button" onClick={() => !isClassMaster && onClick(Name)}
                  title={(isClassMaster?"Maîtrise héritée de la classe "+characterClass.Name:(isMaster?"Oublier":"Apprendre")+` la maîtrise de ${Name}`)
                          +`\nCA : ${AC} ${BonusAC?`+${BonusAC+(MaxBonusAC?`(${MaxBonusAC})`:"")}`:""}`}>
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

const mapStateToProps = (state) => ({
  armorCategories: state.referential.armorCategories,
  armors: state.referential.armors,
  classes: state.referential.classes
})
export default connect(mapStateToProps)(Armors)