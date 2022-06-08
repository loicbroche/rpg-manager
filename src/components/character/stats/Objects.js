import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { selectClassById, selectMasterableObjectCategories, selectObjects, selectHistoricById } from 'store/selectors';
import PropTypes from 'prop-types'

import './Objects.css'
import ExpendableComponent from 'components/shared/ExpendableComponent';

const detailsImage = require('images/details.png');

class Objects extends PureComponent {

  render() {
    const { masterableObjectCategories } = this.props;

    return (
    <div className='objectsComponent'>
          <ExpendableComponent extensorTitle="les maîtrises d'objet"
                                header={<span>Maîtrise d'objets</span>}
                                extensor={<img src={detailsImage} alt="Maîtrises d'objet" />}>
            <div className="objects">
              {masterableObjectCategories?.map(( category ) => this.getObjects(category))
              }
            </div>
          </ExpendableComponent>
    </div>
    )
  }

  getObjects(category) {
    const { objects, class: characterClass, historic, master, onClick } = this.props;
    const availableObjects = objects?.filter((object) => category && object.Category === category.Code);

    const classObjects = characterClass?.Objects || [];
    const historicObjects = historic?.Objects || [];

    return availableObjects?.length > 0 &&
      <div key={category?.Code}>
        <h1 className={`objects-category-name`}>{category?.Name}</h1>
        <ul className="objects-category">
          {availableObjects?.map(({Name}, index) => {
              const isMaster = master && master.includes(Name);
              const isClassMaster = classObjects?.includes(Name);
              const isHistoricMaster = historicObjects?.includes(Name);
              return (
              <li key={index} className={"object "+(isClassMaster || isHistoricMaster?"locked":"activable")}
                  role="button" onClick={() => !(isClassMaster || isHistoricMaster) && onClick(Name)}
                  data-tip={ isClassMaster
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
}

Objects.propTypes = {
  master: PropTypes.arrayOf(PropTypes.string),
  classId: PropTypes.string,
  historicId: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => ({
  masterableObjectCategories: selectMasterableObjectCategories(state),
  objects: selectObjects(state),
  class: selectClassById(state, props.classId),
  historic: selectHistoricById(state, props.historicId)

})
export default connect(mapStateToProps)(Objects)