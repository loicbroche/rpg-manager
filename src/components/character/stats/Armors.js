import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './Armors.css'
import ExpendableComponent from 'components/shared/ExpendableComponent';

const detailsImage = require('images/details.png');

class Armors extends Component {

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
    const availableArmors = armors && Object.values(armors).filter((armor) => category && armor.Category === category.Code);

    const characterClass = classes && classes[classId];
    const classArmorCategories = characterClass && (characterClass.ArmorCategories || []);
    const classArmors = characterClass && (characterClass.Armors || []);
    const isClassMasterCategory = classArmorCategories && classArmorCategories.includes(category && category.Code);

    return availableArmors && availableArmors.length > 0 &&
      <div key={category && category.Code}>
        <h1 className={`armors-category-name ${(isClassMasterCategory?"locked":"")}`}>{(category && category.Name)}</h1>
        <ul className="armors-category">
          {availableArmors &&
            Object.values(availableArmors).map(({Name, AC, BonusAC, MaxBonusAC}, index) => {
              const isMaster = master && master.includes(Name);
              const isClassMaster = isClassMasterCategory || (classArmors && classArmors.includes(Name));
              return (
              <li key={index} className={"armor "+(isClassMaster?"locked":"activable")} onClick={() => !isClassMaster && onClick(Name)}
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