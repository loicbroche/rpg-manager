
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './SpeedComponent.css'

class SpeedComponent extends Component {

  render() {
    const { races, subRaces, capacities, subRaceId, classId, level} = this.props;

    const subRace = subRaces && subRaces[subRaceId];
    const race = subRace && races && races[subRace.Race];
    const capacity = capacities && capacities[classId+"-"+level];
    const baseSpeed = (subRace && subRace.Speed) || (race && race.Speed);
    const bonusSpeed = capacity && capacity.ArmorlessSpeed;
    const speed = baseSpeed + (bonusSpeed||0);

    return (
      <div className="speedComponent" title="Vitesse de déplacement">
          <span>{speed} m</span>
      </div>
    )
  }
}

SpeedComponent.propTypes = {
  subRaceId: PropTypes.string,
  classId: PropTypes.string,
  level: PropTypes.number
}

const mapStateToProps = (state) => ({
  races: state.referential.races,
  subRaces: state.referential.subRaces,
  capacities: state.referential.capacities,
})
export default connect(mapStateToProps)(SpeedComponent)
