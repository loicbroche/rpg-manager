
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectSubRaceById, selectClassById, selectValidSpecialisation,
         selectClassCapacitiesDescriptionsByXP, selectRaceCapacitiesDescriptionsBySubRaceIdXP, selectCaracteristicsBonus } from 'store/selectors';
import PropTypes from 'prop-types'

import ExpendableComponent from 'components/shared/ExpendableComponent';
import './SpecialCapacitiesComponent.css'
import { UsedCapacityPropType, CharacterPropType } from '../../../PropTypes';

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
            specialisation, knownCapacities, caracteristicsBonus, hiddenCapacities, usedCapacities, onVisibilityClick } = this.props;
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
                                  alt={title} data-tip={title}
                                  role="button" onClick={() => {this.setState({showHidden: !showHidden})}}/>
                            </span>}
                            extensor={<img src={capacitiesImage} alt="Compétences de clases" />}
                            defaultExtended={true} >
          <ul>
          {raceCapacitiesDescriptions?.map((capacityDescription) => {

            const capacityKey = (capacityDescription.RequiredLevel||1)+"-"+capacityDescription.Code
            const hidden = hiddenCapacities?.includes(capacityKey);
            const description = capacityDescription?.Description || "";
            const autoManaged = capacityDescription?.Auto;
            const statsCapacity = capacityDescription?.Stats;

            const capacityMaxUseNumber = !isNaN(capacityDescription?.UseNumber)?capacityDescription?.UseNumber:
                                          (caracteristicsBonus?.find((caracteristic) => caracteristic.Code === capacityDescription?.UseNumber)?.Bonus || 1);
            const capacityUsedNumber = usedCapacities?.find((capacity) => capacity.Id === capacityKey)?.UsedNumber || 0;

            return (!hidden || showHidden) && <li key={capacityKey} className={`capacity hoverable transparent ${autoManaged?"auto-managed":""}`}
                                              data-tip={(capacityDescription.RequiredLevel?`Compétence de niveau ${capacityDescription.RequiredLevel}\n`:"")+`${description}`}>
                                                <div className="capacity-title">
                                                  { statsCapacity
                                                    ?<div className="use-condition">
                                                        {autoManaged
                                                          ?<img src={autoImage} data-tip="Compétence de caractéristiques gérée automatiquement" alt="" />
                                                          :<img src={statsImage} data-tip="Compétence de caractéristiques à configurer" alt="" />}
                                                      </div>
                                                    :<span className="use-number" data-tip= {capacityMaxUseNumber===-1?"Utilisation illimitée":`${capacityMaxUseNumber-capacityUsedNumber}/${capacityMaxUseNumber} restant jusqu'au prochain repos long`}>
                                                          {capacityMaxUseNumber===-1
                                                            ?<span className="infinite-capacity">∞</span>
                                                            :<span className="used-capacity-number"><input className="used-capacity-number-input"
                                                                                type="number"
                                                                                dir="rtl"
                                                                                step={1}
                                                                                min={0}
                                                                                max={capacityMaxUseNumber}
                                                                                value={capacityMaxUseNumber-capacityUsedNumber}
                                                                                onChange={(event) => { this.updateUsedCapacities(capacityKey, capacityMaxUseNumber-(parseInt(event.target.value) || 0))} }
                                                                                />
                                                            </span>}
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
                                                          alt={`Compétence de la race ${subRace?.Name}`}
                                                          data-tip={`Compétence de la race ${subRace?.Name}`}/>
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

            const capacityMaxUseNumber = !isNaN(capacityDescription?.UseNumber)?capacityDescription?.UseNumber:
                                          (caracteristicsBonus?.find((caracteristic) => caracteristic.Code === capacityDescription?.UseNumber)?.Bonus || 1);
            const capacityUsedNumber = usedCapacities?.find((capacity) => capacity.Id === capacityKey)?.UsedNumber || 0;

            return (!hidden || showHidden) && <li key={capacityKey} className={`capacity hoverable transparent ${autoManaged?"auto-managed":""}`}
                                              data-tip={`Compétence de niveau ${capacity.level}\n${description}`}>
                                                <div className="capacity-title">
                                                  {specialCapacity
                                                    ? <div className={`use-condition ${characterClass?.SpecialsName}`}>
                                                        <img src={specialImage} data-tip={`Compétence utilisant des points de ${characterClass?.SpecialsName}`} alt="" />
                                                      </div>
                                                    :(  statsCapacity
                                                        ?<div className="use-condition">
                                                            {autoManaged
                                                              ?<img src={autoImage} data-tip="Compétence de caractéristiques gérée automatiquement" alt="" />
                                                              :<img src={statsImage} data-tip="Compétence de caractéristiques à configurer" alt="" />}
                                                          </div>
                                                        :<span className="use-number" data-tip= {capacityMaxUseNumber===-1?"Utilisation illimitée":`${capacityMaxUseNumber-capacityUsedNumber}/${capacityMaxUseNumber} restant jusqu'au prochain repos long`}>
                                                          {capacityMaxUseNumber===-1
                                                            ?<span className="infinite-capacity">∞</span>
                                                            :<span className="used-capacity-number"><input className="used-capacity-number-input"
                                                                                type="number"
                                                                                dir="rtl"
                                                                                step={1}
                                                                                min={0}
                                                                                max={capacityMaxUseNumber}
                                                                                value={capacityMaxUseNumber-capacityUsedNumber}
                                                                                onChange={(event) => { this.updateUsedCapacities(capacityKey, capacityMaxUseNumber-(parseInt(event.target.value) || 0))} }
                                                                                />
                                                              </span>}
                                                            </span>)
                                                  }
                                                  <span>{capacity.name}</span>
                                                </div>
                                                <span>
                                                  <span className={`hide-capacity activable transparent ${hidden?"hidden-capacity":""}`} data-tip={hidden?"Afficher":"Masquer"}
                                                        role="button" onClick={() => {onVisibilityClick(capacityKey)}}>
                                                    <img src={hidden?hideImage:showImage} alt={hidden?"Afficher":"Masquer"} />
                                                  </span>
                                                  <span className="capacity-source">
                                                    {capacity.specialisation
                                                    && <img src={specialisationImage}
                                                            alt={`Compétence de la spécialisation ${specialisation?.Name}`}
                                                            data-tip={`Compétence de la spécialisation ${specialisation?.Name}`}/>
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

  // Arrow fx for binding
  updateUsedCapacities = (capacityId, usedNumber) => {
    const { onUsedCapacitiesChange } = this.props;
    let {usedCapacities} = this.props;
    usedCapacities = usedCapacities?.slice() || [];
    const index = usedCapacities.findIndex((capacity) => capacity.Id === capacityId);
    if (index > -1) {
      usedCapacities[index].UsedNumber = usedNumber;
    } else {
      usedCapacities.push({Id: capacityId, UsedNumber: usedNumber});
    }

    onUsedCapacitiesChange(usedCapacities);
  }
}

SpecialCapacities.propTypes = {
  character: CharacterPropType.isRequired,
  usedCapacities: PropTypes.arrayOf(UsedCapacityPropType),
  hiddenCapacities: PropTypes.arrayOf(PropTypes.string),
  onVisibilityClick: PropTypes.func.isRequired,
  onUsedCapacitiesChange: PropTypes.func
}
SpecialCapacities.defaultProps = {
  XP: 0
}

const mapStateToProps = (state, props) => ({
  class: selectClassById(state, props.character?.Class),
  subRace: selectSubRaceById(state, props.character?.SubRace),
  specialisation: selectValidSpecialisation(state, props.character?.Specialisation, props.character?.Class, props.character?.XP),
  raceCapacitiesDescriptions: selectRaceCapacitiesDescriptionsBySubRaceIdXP(state, props.character?.SubRace, props.character?.XP),
  knownCapacities: selectClassCapacitiesDescriptionsByXP(state, props.character?.Class, props.character?.Specialisation, props.character?.XP),
  caracteristicsBonus: selectCaracteristicsBonus(state, props.character)
})
export default connect(mapStateToProps)(SpecialCapacities)
