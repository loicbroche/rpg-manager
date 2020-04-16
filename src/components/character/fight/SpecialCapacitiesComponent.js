
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectSubRaceById, selectClassById, selectValidSpecialisation,
         selectClassCapacitiesDescriptionsByXP, selectRaceCapacitiesDescriptionsBySubRaceIdXP } from 'store/selectors';
import PropTypes from 'prop-types'

import ExpendableComponent from 'components/shared/ExpendableComponent';
import './SpecialCapacitiesComponent.css'

const capacitiesImage = require('images/details.png');
const showImage = require('images/show.png');
const hideImage = require('images/hide.png');
class SpecialCapacities extends PureComponent {

  constructor(props) {
    super(props);
    this.state = { showHidden: false };
  }

  render() {
    const { raceCapacitiesDescriptions, class: characterClass, subRace,
            specialisation, knownCapacities, hiddenCapacities, onVisibilityClick } = this.props;
    const {showHidden} = this.state;

    const specialImage = characterClass?.SpecialsName && require(`images/specials/${characterClass.SpecialsName}.png`);
    const statsImage =  require(`images/stats.png`);
    const autoImage =  require(`images/auto.png`);
    let raceImage;
    try {
      raceImage = require(`images/races/${subRace?.Id}.png`);
    } catch (ex) {
      raceImage = require("images/races/no_race.png");
    }

    let specialisationImage;
    try {
      specialisationImage = require(`images/classes/specialisations/${specialisation?.Code}.png`);
    } catch (ex) {
      specialisationImage = require("images/classes/specialisations/no_image.png");
    }

    const title = showHidden?"Masquer les compétences superflues":"Afficher les compétences masquées";
    return (
      <div className="special-capacitiesComponent">
        <ExpendableComponent  extensorTitle="les compétences de classe"
                            header={<span>Compétences de classe
                            <img className="show-hidden-capacities activable transparent"
                                  src={showHidden?showImage:hideImage}
                                  alt={title} title={title}
                                  role="button" onClick={() => {this.setState({showHidden: !showHidden})}}/>
                            </span>}
                            extensor={<img src={capacitiesImage} alt="Compétences de clases" />}
                            defaultExtended={true} >
          <ul>
          {raceCapacitiesDescriptions?.map((capacityDescription) => {
            const capacityKey = capacityDescription.RequiredLevel+"-"+capacityDescription.Code
            const hidden = hiddenCapacities?.includes(capacityKey);
            const description = capacityDescription?.Description || "";
            const autoManaged = capacityDescription?.Auto;
            const statsCapacity = capacityDescription?.Stats;
            const capacityUseNumber = capacityDescription?.UseNumber;
            return (!hidden || showHidden) && <li key={capacityKey} className={`capacity hoverable transparent ${autoManaged?"auto-managed":""}`}
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
                                                        role="button" onClick={() => {onVisibilityClick(capacityKey)}}>
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
            const capacityKey = capacity.level+"-"+capacity.name;
            const hidden = hiddenCapacities?.includes(capacityKey);
            const capacityDescription = capacity.description;
            const description = capacityDescription?.Description || "";
            const autoManaged = capacityDescription?.Auto;
            const specialCapacity = capacityDescription?.Special;
            const statsCapacity = capacityDescription?.Stats;
            const capacityUseNumber = capacityDescription?.UseNumber;
            return (!hidden || showHidden) && <li key={capacityKey} className={`capacity hoverable transparent ${autoManaged?"auto-managed":""}`}
                                              title={`Compétence de niveau ${capacity.level}\n${description}`}>
                                                <div className="capacity-title">
                                                  {specialCapacity
                                                    ? <div className={`use-condition ${characterClass?.SpecialsName}`}>
                                                        <img src={specialImage} title={`Compétence utilisant des points de ${characterClass?.SpecialsName}`} alt="" />
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
                                                        role="button" onClick={() => {onVisibilityClick(capacityKey)}}>
                                                    <img src={hidden?hideImage:showImage} alt={hidden?"Afficher":"Masquer"} />
                                                  </span>
                                                  <span className="capacity-source">
                                                    {capacity.specialisation
                                                    && <img src={specialisationImage}
                                                            alt={`Compétence de la spécialisation ${specialisation?.Name}`}
                                                            title={`Compétence de la spécialisation ${specialisation?.Name}`}/>
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
  XP: PropTypes.number,
  hiddenCapacities: PropTypes.arrayOf(PropTypes.string),
  onVisibilityClick: PropTypes.func.isRequired
}
SpecialCapacities.defaultProps = {
  XP: 0
}

const mapStateToProps = (state, props) => ({
  class: selectClassById(state, props.classId),
  subRace: selectSubRaceById(state, props.subRaceId),
  specialisation: selectValidSpecialisation(state, props.specialisationId, props.classId, props.XP),
  raceCapacitiesDescriptions: selectRaceCapacitiesDescriptionsBySubRaceIdXP(state, props.subRaceId, props.XP),
  knownCapacities: selectClassCapacitiesDescriptionsByXP(state, props.classId, props.specialisationId, props.XP)
})
export default connect(mapStateToProps)(SpecialCapacities)
