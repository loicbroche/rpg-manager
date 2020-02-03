
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './ResistancesComponent.css'

class ResistancesComponent extends Component {

  render() {
    const { alterations, races, subRaces, resistances, subRaceId, onClick} = this.props;

    const subRace = subRaces && subRaces[subRaceId];
    const race = subRace && races && races[subRace.Race];
    const raceName = race?race.Name:"";
    const raceResistances = race && race.Resistances;
    const subRaceResistances = subRace && subRace.Resistances;
    const subRaceName = subRace?subRace.Name:"";

    return (
      <div className="resistancesComponent">
        <h1>Résistances</h1>
        <div className="resistances">
          { alterations &&
            Object.values(alterations).map((alteration) => {
              let resistanceImage;
              try {
                resistanceImage = require(`images/alterations/${alteration.Code}.png`);
              } catch (ex) {
                resistanceImage = require(`images/alterations/no_image.png`);
              }
              let raceResistant = raceResistances && raceResistances.find((resistance) => resistance === alteration.Code);
              let raceResistantTitle = `Résistance ${alteration.Element}\nHéritée de la race ${raceName}`;
              const subRaceResistant = subRaceResistances && subRaceResistances.find((resistance) => resistance === alteration.Code);
              if (!raceResistant && subRaceResistant) {
                raceResistant = true;
                raceResistantTitle = `Résistance ${alteration.Element}\nHéritée de la race ${subRaceName}`;
              }
              const resistant = raceResistant || (resistances && resistances.find((resistance) => resistance === alteration.Code));


              return <span key={alteration.Code} onClick={() => { onClick && !raceResistant && onClick(alteration.Code)}}
                            title={raceResistant?raceResistantTitle:((resistant?"Désactiver":"Activer")+" la résistance "+alteration.Element)}
                            className={`resistance ${onClick?"activable":""} ${raceResistant?"race-resistant":""}`}>
                <img  src={resistanceImage} className={`resistance-image ${resistant?"resistant":""}`} alt={alteration.Element} />
              </span>

            })
          }
        </div>
      </div>
    )
  }
}

ResistancesComponent.propTypes = {
  resistances: PropTypes.arrayOf(PropTypes.string),
  subRaceId: PropTypes.string,
  onClick: PropTypes.func
}

const mapStateToProps = (state) => ({
  alterations: state.referential.alterations,
  races: state.referential.races,
  subRaces: state.referential.subRaces
})

export default connect(mapStateToProps)(ResistancesComponent)
