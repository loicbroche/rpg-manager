
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './ResistancesComponent.css'

class ResistancesComponent extends Component {

  render() {
    const { alterations, races, subRaces, resistances, subRaceId, onClick} = this.props;

    const subRace = subRaces && subRaces[subRaceId];
    const race = subRace && races && races[subRace.Race];
    const raceName = subRace?subRace.Name:"";
    const raceResistances = race && race.Resistances;

    return (
      <div className="resistancesComponent">
        <h1>Résistances</h1>
        <div className="resistances">
          { alterations &&
            Object.values(alterations).map((alteration) => {
              let resistanceImage;
              const raceResistant = raceResistances && raceResistances.find((resistance) => resistance === alteration.Code);
              const resistant = raceResistant || (resistances && resistances.find((resistance) => resistance === alteration.Code));
              try {
                resistanceImage = require(`images/alterations/${alteration.Code}.png`);
              } catch (ex) {
                resistanceImage = require(`images/alterations/no_image.png`);
              }
              return <img key={alteration.Code} src={resistanceImage} className={`resistance ${onClick?"activable":""} ${resistant?"resistant":""} ${raceResistant?"race-resistant":""}`} alt={alteration.Name}
                          title={raceResistant?"Résistance héritée de la race "+raceName:((resistant?"Désactiver":"Activer")+" la résistance à l'altération "+alteration.Name)}
                          onClick={() => { onClick && !raceResistant && onClick(alteration.Code)}} />
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
