
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './SpeedComponent.css'

class SpeedComponent extends Component {

  render() {
    const { races, subRaces, capacities, armors, subRaceId, classId, armorId, level} = this.props;

    const subRace = subRaces && subRaces[subRaceId];
    const race = subRace && races && races[subRace.Race];
    const armor = armors && armors[armorId];
    const capacity = capacities && capacities[classId+"-"+level];
    const baseSpeed = (subRace && subRace.Speed) || (race && race.Speed);
    const bonusSpeed = (!armor && capacity && capacity.ArmorlessSpeed) || 0;
    const speed = baseSpeed + (bonusSpeed||0);

    return (
      <div className="speedComponent" title={`Vitesse de déplacement ${ (capacity && capacity.ArmorlessSpeed)
                                                                        ?(bonusSpeed?`avec bonus "Sans armure" ${bonusSpeed} m`
                                                                        :`sans bonus "Sans armure"`):""} `}>
          <span>{speed} m</span>
      </div>
    )
  }
}

SpeedComponent.propTypes = {
  subRaceId: PropTypes.string,
  classId: PropTypes.string,
  armorId: PropTypes.string,
  level: PropTypes.number
}

const mapStateToProps = (state) => ({
  races: state.referential.races,
  subRaces: state.referential.subRaces,
  capacities: state.referential.capacities,
  armors: state.referential.armors,
})
export default connect(mapStateToProps)(SpeedComponent)
