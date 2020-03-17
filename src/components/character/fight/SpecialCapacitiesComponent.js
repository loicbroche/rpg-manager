
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ExpendableComponent from 'components/shared/ExpendableComponent';
import './SpecialCapacitiesComponent.css'

const capacitiesImage = require('images/details.png');
const showImage = require('images/show.png');
const hideImage = require('images/hide.png');
class SpecialCapacities extends Component {

  constructor(props) {
    super(props);
    this.state = { showHidden: false };
  }

  render() {
    const { capacities, specialisationCapacities, classes, specialisations, classId, specialisationId, level,
            hiddenCapacities, onVisibilityClick } = this.props;
    const {showHidden} = this.state;
    const characterClass = classes && classes[classId];
    let specialisation = specialisations && specialisations[specialisationId];
    const specialisationLevel = characterClass && characterClass.SpecialisationLevel;
    const isValidSpecialisation = specialisationLevel <= level && specialisation && specialisation.Class === classId;
    specialisation = isValidSpecialisation && specialisation;
  
    let knownCapacities = [];

    let specialisationImage;
    try {
      specialisationImage = require(`images/classes/specialisations/${specialisationId}.png`);
    } catch (ex) {
      specialisationImage = require("images/classes/specialisations/no_image.png");
    }

    for (let i = 1; i <= level; i++) {
      const capacity = capacities && capacities[classId+"-"+i];
      const specialisationCapacity = specialisation && specialisationCapacities && specialisationCapacities[specialisationId+"-"+i];

      knownCapacities = knownCapacities.concat(capacity&&capacity.Capacities?capacity.Capacities.map((c) => ({level: i, name: c, specialisation: false})):[]);
      knownCapacities = knownCapacities.concat(specialisationCapacity&&specialisationCapacity.Capacities?specialisationCapacity.Capacities.map((c) => ({level: i, name: c, specialisation: true})):[]);
    }

    const title = showHidden?"Masquer les compétences superflues":"Afficher les compétences masquées";
    return (
      <div className="special-capacitiesComponent">
        <ExpendableComponent  extensorTitle="les compétences de classe"
                            header={<span>Compétences de classe
                            <img className="show-hidden-capacities activable transparent"
                                  src={showHidden?showImage:hideImage}
                                  alt={title} title={title}
                                  onClick={() => {this.setState({showHidden: !showHidden})}}/>
                            </span>}
                            extensor={<img src={capacitiesImage} alt="Compétences de clases" />}
                            defaultExtended={true} >
          <ul>
          {knownCapacities.map((capacity) => {
            const hidden = hiddenCapacities && hiddenCapacities.includes(capacity.name);
            return (!hidden || showHidden) && <li key={capacity.name} className="capacity hoverable transparent"
                                              title={`Compétence de niveau ${capacity.level}\nDescription de la compétence à venir`}>
                                                <span>{capacity.name}</span>
                                                <span>
                                                  <span className="capacity-source">
                                                    {capacity.specialisation
                                                    && <img src={specialisationImage}
                                                            alt={`Compétence de la spécialisation ${specialisation && specialisation.Name}`}
                                                            title={`Compétence de la spécialisation ${specialisation && specialisation.Name}`}/>
                                                    }
                                                  </span>
                                                  <span className={`hide-capacity activable transparent ${hidden?"hidden-capacity":""}`} title={hidden?"Afficher":"Masquer"}
                                                        onClick={() => {onVisibilityClick(capacity.name)}}>
                                                    <img src={hidden?hideImage:showImage} alt={hidden?"Afficher":"Masquer"} />
                                                  </span>
                                                </span>
                                              </li>
          })}
          </ul>
        </ExpendableComponent>
      </div>
    )
  }
}

SpecialCapacities.propTypes = {
  classId: PropTypes.string,
  specialisationId: PropTypes.string,
  level: PropTypes.number,
  hiddenCapacities: PropTypes.arrayOf(PropTypes.string),
  onVisibilityClick: PropTypes.func.isRequired
}
SpecialCapacities.defaultProps = {
  level: 1
}

const mapStateToProps = (state) => ({
  classes: state.referential.classes,
  specialisations: state.referential.specialisations,
  capacities: state.referential.capacities,
  specialisationCapacities: state.referential.specialisationCapacities
})
export default connect(mapStateToProps)(SpecialCapacities)
