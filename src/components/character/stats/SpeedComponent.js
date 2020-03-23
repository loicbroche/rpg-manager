
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './SpeedComponent.css'
import {INSUFFICIENT_STRENGTH_MALUS} from 'rules/Speed.rules';

const speedImage = require("images/speed.png");

class SpeedComponent extends Component {

  render() {
    const { races, subRaces, capacities, armors, subRaceId, classId, armorId, strength, level} = this.props;

    const subRace = subRaces && subRaces[subRaceId];
    const race = subRace && races && races[subRace.Race];
    const armor = armors && armors[armorId];
    const capacity = capacities && capacities[classId+"-"+level];
    const baseSpeed = (subRace && subRace.Speed) || (race && race.Speed);
    const bonusSpeed = (!armor && capacity && capacity.ArmourlessSpeed) || 0;
    const totalStrength = strength + (race?race.Strength:0) + (subRace?subRace.Strength:0);
    const malusSpeed = (armor && totalStrength < armor.Strength && INSUFFICIENT_STRENGTH_MALUS) || 0;
    const speed = baseSpeed + bonusSpeed - malusSpeed;

    return (
      <div className="speedComponent" title={ `Vitesse de déplacement `
                                              +`${ (capacity && capacity.ArmourlessSpeed)
                                                  ?(bonusSpeed?`avec bonus "Sans armure" ${bonusSpeed} m`
                                                  :`sans bonus "Sans armure"`):""}`
                                              +`${ malusSpeed
                                                ?`\nMalus -${malusSpeed} pour force insuffisante pour l'armure portée (${armor.Strength})`
                                                :""}`
                                            }>
          <img src={speedImage} className="speed-background-image" alt="" />
          <span className="speed-label">{speed} m</span>
      </div>
    )
  }
}

SpeedComponent.propTypes = {
  subRaceId: PropTypes.string,
  classId: PropTypes.string,
  armorId: PropTypes.string,
  strength: PropTypes.number,
  level: PropTypes.number
}

const mapStateToProps = (state) => ({
  races: state.referential.races,
  subRaces: state.referential.subRaces,
  capacities: state.referential.capacities,
  armors: state.referential.armors,
})
export default connect(mapStateToProps)(SpeedComponent)
