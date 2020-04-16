
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectSubRaceById, selectRaceBySubRaceId, selectClassCapacityByClassIdXP, selectArmorById } from 'store/selectors';
import PropTypes from 'prop-types'

import './SpeedComponent.css'
import {INSUFFICIENT_STRENGTH_MALUS} from 'rules/Speed.rules';

const speedImage = require("images/speed.png");

class SpeedComponent extends PureComponent {

  render() {
    const { race, subRace, capacity, armor, strength} = this.props;

    const baseSpeed = subRace?.Speed || race?.Speed;
    const bonusSpeed = (!armor && capacity?.ArmourlessSpeed) || 0;
    const totalStrength = strength + (race?race.Strength:0) + (subRace?subRace.Strength:0);
    const malusSpeed = (armor && totalStrength < armor.Strength && INSUFFICIENT_STRENGTH_MALUS) || 0;
    const speed = baseSpeed + bonusSpeed - malusSpeed;

    return (
      <div className="speedComponent" title={ `Vitesse de déplacement `
                                              +`${ capacity?.ArmourlessSpeed
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
  XP: PropTypes.number
}

const mapStateToProps = (state, props) => ({
  subRace: selectSubRaceById(state, props.subRaceId),
  race: selectRaceBySubRaceId(state, props.subRaceId),
  capacity: selectClassCapacityByClassIdXP(state, props.classId, props.XP),
  armor: selectArmorById(state, props.armorId)
})
export default connect(mapStateToProps)(SpeedComponent)
