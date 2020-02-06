
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './AlterationsComponent.css'

class AlterationsComponent extends Component {

  render() {
    const { alterations,  races, subRaces, resistances, characterAlterations, subRaceId, onClick, onResistanceClick} = this.props;

    const subRace = subRaces && subRaces[subRaceId];
    const race = subRace && races && races[subRace.Race];
    const raceName = race?race.Name:"";
    const raceResistances = race && race.Resistances;
    const subRaceResistances = subRace && subRace.Resistances;
    const subRaceName = subRace?subRace.Name:"";

    return (
      <div className="alterationsComponent">

        <div className="alterations">
          { alterations &&
              Object.values(alterations).map((alteration) => {
                let alterationImage;
                try {
                  alterationImage = require(`images/alterations/${alteration.Code}.png`);
                } catch (ex) {
                  alterationImage = require(`images/alterations/no_image.png`);
                }

                const alterated = characterAlterations && characterAlterations.find((alt) => alt === alteration.Code);
                let raceResistant = raceResistances && raceResistances.find((resistance) => resistance === alteration.Code);
                let raceResistantTitle = `Résistance ${alteration.Name}\nHéritée de la race ${raceName}`;
                const subRaceResistant = subRaceResistances && subRaceResistances.find((resistance) => resistance === alteration.Code);
                if (!raceResistant && subRaceResistant) {
                  raceResistant = true;
                  raceResistantTitle = `Résistance ${alteration.Name}\nHéritée de la race ${subRaceName}`;
                }         
                const resistant = raceResistant || (resistances && resistances.find((resistance) => resistance === alteration.Code));

                return <span key={alteration.Code} onClick={() => { !resistant && onClick && onClick(alteration.Code)}}
                              className={`alteration ${( !resistant && onClick)?"activable":""}`}
                              title={resistant?`Résistance ${alteration.Name}`:
                                    ( onClick
                                      ?((alterated?"Désactiver":"Activer")+" l'altération "+alteration.Effect)
                                      :((alterated?"":"Non")+" "+alteration.Effect)
                                    )} >
                  <img  src={alterationImage} className={`alteration-image ${alterated?"alterated":""}`} alt={alteration.Name} />
                  <span className={`resistance ${raceResistant?"race-resistant":(onResistanceClick?"activable":"")}`}
                        title={`${raceResistant?raceResistantTitle:
                            ( onResistanceClick
                              ?((resistant?"Désactiver":"Activer")+` la résistance ${alteration.Name}`)
                              :((resistant?"Résistant":"Non résistant")+` à ${alteration.Name}`)
                            )
                        }`}
                        onClick={(event) => { if (!raceResistant && onResistanceClick) { onResistanceClick(alteration.Code) } event.stopPropagation()}}>
                    <span className={`resistant-marker ${resistant&&"is-resistant"}`} ></span>
                  </span>
                </span>

              })
            }
        </div>
      </div>
    )
  }
}

AlterationsComponent.propTypes = {
  characterAlterations: PropTypes.arrayOf(PropTypes.string),
  resistances: PropTypes.arrayOf(PropTypes.string),
  subRaceId: PropTypes.string,
  onClick: PropTypes.func,
  onResistanceClick: PropTypes.func
}

const mapStateToProps = (state) => ({
  alterations: state.referential.alterations,
  races: state.referential.races,
  subRaces: state.referential.subRaces
})

export default connect(mapStateToProps)(AlterationsComponent)
