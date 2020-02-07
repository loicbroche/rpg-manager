import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './Objects.css'
import { filterMasterableCategories } from 'rules/Objects.rules'

const detailsImage = require('images/details.png');

class Objects extends Component {

  
  constructor(props) {
    super(props);
    this.state = { showObjects: false };
  }

  render() {
    const { objectCategories } = this.props;
    const { showObjects } = this.state;
    const title=showObjects?"Masquer les maîtrises d'objet":"Lire/Modifier les maîtrises d'objet";

    return (
    <div className='objectsComponent'>
      <h1 className="objects-header">
        <span className={`activable extensor ${showObjects?"opened":"closed"}`} onClick={this.onShowObjectsUpdate} title={title} >
          <img src={detailsImage} alt={title} />
        </span>
      </h1>
      <div className={`objects-container`}>
        <div className={`objects ${showObjects&&"show-objects"}`}>
          {objectCategories &&
            Object.values(filterMasterableCategories(objectCategories)).map(( category ) => this.getObjects(category))
          }
        </div>
      </div>
    </div>
  )
  }

  getObjects(category) {
    const { objects, classes, historics, master, classId, historicId, onClick } = this.props;
    const availableObjects = objects && Object.values(objects).filter((object) => category && object.Category === category.Code);

    const characterClass = classes && classes[classId];
    const historic = historics && historics[historicId];
    const classObjects = characterClass && (characterClass.Objects || []);
    const historicObjects = historic && (historic.Objects || []);

    return availableObjects && availableObjects.length > 0 &&
      <div key={category && category.Code}>
        <h1 className={`objects-category-name`}>{(category && category.Name)}</h1>
        <ul className="objects-category">
          {availableObjects &&
            Object.values(availableObjects).map(({Name}, index) => {
              const isMaster = master && master.includes(Name);
              const isClassMaster = classObjects && classObjects.includes(Name);
              const isHistoricMaster = historicObjects && historicObjects.includes(Name);
              return (
              <li key={index} className={"object "+(isClassMaster || isHistoricMaster?"locked":"activable")}
                  onClick={() => !(isClassMaster || isHistoricMaster) && onClick(Name)}
                  title={ isClassMaster
                          ?"Maîtrise héritée de la classe "+characterClass.Name
                          :(  isHistoricMaster
                              ?"Maîtrise acquise par l'historique "+historic.Name
                              :(isMaster?"Oublier":"Apprendre")+` la maîtrise de ${Name}`
                            )
                        }>
                <div className={"option "+((isClassMaster||isHistoricMaster||isMaster)&&"filled")}></div>
                <span className="object-name">{Name}</span>
              </li>
            )}
          )}
        </ul>
      </div>
  }

    // Arrow fx for binding
    onShowObjectsUpdate = () => {
      this.setState({showObjects: !this.state.showObjects})
    }
}

Objects.propTypes = {
  master: PropTypes.arrayOf(PropTypes.string),
  classId: PropTypes.string,
  historicId: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  objectCategories: state.referential.objectCategories,
  objects: state.referential.objects,
  classes: state.referential.classes,
  historics: state.referential.historics

})
export default connect(mapStateToProps)(Objects)