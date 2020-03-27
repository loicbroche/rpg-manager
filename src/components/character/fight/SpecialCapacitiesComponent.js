
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
    const { capacities, capacitiesDescriptions, raceCapacitiesDescriptions, specialisationCapacities, classes, subRaces, specialisations,
            subRaceId, classId, specialisationId, level, hiddenCapacities, onVisibilityClick } = this.props;
    const {showHidden} = this.state;
    const characterClass = classes && classes[classId];
    let specialisation = specialisations && specialisations[specialisationId];
    const specialisationLevel = characterClass && characterClass.SpecialisationLevel;
    const isValidSpecialisation = specialisationLevel <= level && specialisation && specialisation.Class === classId;
    specialisation = isValidSpecialisation && specialisation;
    const specialImage = characterClass && characterClass.SpecialsName && require(`images/specials/${characterClass.SpecialsName}.png`);
    const statsImage =  require(`images/stats.png`);
    const autoImage =  require(`images/auto.png`);
    let raceImage;
    try {
      raceImage = require(`images/races/${subRaceId}.png`);
    } catch (ex) {
      raceImage = require("images/races/no_race.png");
    }
    const subRace = subRaces && subRaces[subRaceId];
    const raceId = subRace && subRace.Race;
    const raceCapacities = raceCapacitiesDescriptions &&
                            Object.values(raceCapacitiesDescriptions).filter((capacity) =>
                                (capacity.Race === raceId || capacity.SubRace === subRaceId)
                                && (!capacity.RequiredLevel || capacity.RequiredLevel <= level));

    let specialisationImage;
    try {
      specialisationImage = require(`images/classes/specialisations/${specialisationId}.png`);
    } catch (ex) {
      specialisationImage = require("images/classes/specialisations/no_image.png");
    }

    let knownCapacities = [];
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
          {raceCapacities && raceCapacities.map((capacityDescription) => {
            const hidden = hiddenCapacities && hiddenCapacities.includes(capacityDescription.Code);
            const description = (capacityDescription && capacityDescription.Description ) || "";
            const autoManaged = capacityDescription && capacityDescription.Auto;
            const statsCapacity = capacityDescription && capacityDescription.Stats;
            const capacityUseNumber = capacityDescription && capacityDescription.UseNumber;
            return (!hidden || showHidden) && <li key={capacityDescription.Code} className={`capacity hoverable transparent ${autoManaged?"auto-managed":""}`}
                                              title={(capacityDescription.RequiredLevel?`Compétence de niveau ${capacityDescription.RequiredLevel}\n`:"")+`${description}`}>
                                                <div className="capacity-title">
                                                  { statsCapacity
                                                    ?<div className="use-condition">
                                                        {autoManaged
                                                          ?<img src={autoImage} title="Compétence de caractéristiques gérée automatiquement" alt="" />
                                                          :<img src={statsImage} title="Compétence de caractéristiques à configurer" alt="" />}
                                                      </div>
                                                    :<span className="use-number" title= {capacityUseNumber===-1?"Utilisation illimitée":"Nombre d'utilisations sans repos long"}>
                                                        {capacityUseNumber===-1?"∞":capacityUseNumber}
                                                      </span>
                                                  }
                                                  <span>{capacityDescription.Code}</span>
                                                </div>
                                                <span>
                                                  <span className={`hide-capacity activable transparent ${hidden?"hidden-capacity":""}`} title={hidden?"Afficher":"Masquer"}
                                                        onClick={() => {onVisibilityClick(capacityDescription.Code)}}>
                                                    <img src={hidden?hideImage:showImage} alt={hidden?"Afficher":"Masquer"} />
                                                  </span>
                                                  <span className="capacity-source">
                                                    <img src={raceImage}
                                                          alt={`Compétence de la race ${subRace.Name}`}
                                                          title={`Compétence de la race ${subRace.Name}`}/>
                                                  </span>
                                                </span>
                                              </li>
          })}
          {knownCapacities.map((capacity) => {
            const hidden = hiddenCapacities && hiddenCapacities.includes(capacity.name);
            const capacityDescription = capacitiesDescriptions && capacitiesDescriptions[classId+"-"+capacity.name];
            const description = (capacityDescription && capacityDescription.Description ) || "";
            const autoManaged = capacityDescription && capacityDescription.Auto;
            const specialCapacity = capacityDescription && capacityDescription.Special;
            const statsCapacity = capacityDescription && capacityDescription.Stats;
            const capacityUseNumber = capacityDescription && capacityDescription.UseNumber;
            return (!hidden || showHidden) && <li key={capacity.name} className={`capacity hoverable transparent ${autoManaged?"auto-managed":""}`}
                                              title={`Compétence de niveau ${capacity.level}\n${description}`}>
                                                <div className="capacity-title">
                                                  {specialCapacity
                                                    ? <div className={`use-condition ${characterClass && characterClass.SpecialsName}`}>
                                                        <img src={specialImage} title={`Compétence utilisant des points de ${characterClass && characterClass.SpecialsName}`} alt="" />
                                                      </div>
                                                    :(  statsCapacity
                                                        ?<div className="use-condition">
                                                            {autoManaged
                                                              ?<img src={autoImage} title="Compétence de caractéristiques gérée automatiquement" alt="" />
                                                              :<img src={statsImage} title="Compétence de caractéristiques à configurer" alt="" />}
                                                          </div>
                                                        :<span className="use-number" title= {capacityUseNumber===-1?"Utilisation illimitée":"Nombre d'utilisations sans repos long"}>
                                                          {capacityUseNumber===-1?"∞":capacityUseNumber}
                                                        </span>)
                                                  }
                                                  <span>{capacity.name}</span>
                                                </div>
                                                <span>
                                                  <span className={`hide-capacity activable transparent ${hidden?"hidden-capacity":""}`} title={hidden?"Afficher":"Masquer"}
                                                        onClick={() => {onVisibilityClick(capacity.name)}}>
                                                    <img src={hidden?hideImage:showImage} alt={hidden?"Afficher":"Masquer"} />
                                                  </span>
                                                  <span className="capacity-source">
                                                    {capacity.specialisation
                                                    && <img src={specialisationImage}
                                                            alt={`Compétence de la spécialisation ${specialisation && specialisation.Name}`}
                                                            title={`Compétence de la spécialisation ${specialisation && specialisation.Name}`}/>
                                                    }
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
  classId: PropTypes.string.isRequired,
  subRaceId: PropTypes.string,
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
  subRaces: state.referential.subRaces,
  specialisations: state.referential.specialisations,
  capacities: state.referential.capacities,
  capacitiesDescriptions: state.referential.capacitiesDescriptions,
  raceCapacitiesDescriptions: state.referential.raceCapacitiesDescriptions,
  specialisationCapacities: state.referential.specialisationCapacities
})
export default connect(mapStateToProps)(SpecialCapacities)
