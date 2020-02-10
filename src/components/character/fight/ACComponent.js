
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './ACComponent.css'
import { CA_BASE, getArmorBonusAC  } from 'rules/AC.rules'

const ACImage = require("images/AC.png");

class ACComponent extends Component {

  render() {
    const { races, subRaces, armors, classes, dexterityPoints, subRaceId, classId, armorId, shieldId} = this.props;
    const subRace = subRaces && subRaces[subRaceId];
    const race = subRace && races && races[subRace.Race];
    const characterClass = classes && classes[classId];
    const armor = armors && armors[armorId];
    const shield = armors && armors[shieldId];

    const armorBonus = (armor && armor.AC) || 0;
    const shieldBonus = (shield && shield.AC) || 0;
    const dexterityBonus = getArmorBonusAC(race, subRace, characterClass, armor, dexterityPoints);
    const specialBonus = 0;

    const ac = CA_BASE + armorBonus + dexterityBonus + shieldBonus + specialBonus;
console.log(`CA ${armorId} = 10 + A(${armorBonus} + ${dexterityBonus}) + B${shieldBonus} + S${specialBonus} `, ac);
    return (
      <div className="acComponent" title="Classe d'armure">
        <img src={ACImage} className="ac-background-image" alt="" />
        <div className="ac-values">
          <div className="ac-calculation">
              <div className="ac-equipment-values">
                <span className={`ac-armor-value ${!armorBonus?"ac-no-value":""}`} title="CA d'armure">{armorBonus}</span>
                <span className="ac-base-value" title="CA de Base">{CA_BASE}</span>
                <span className={`ac-shield-value ${!shieldBonus?"ac-no-value":""}`} title="CA de bouclier">{shieldBonus}</span>
              </div>
          </div>
          <span className="ac-total-value">{ac}</span>
          <div>
            <span className={`ac-bonus-value ${!specialBonus?"ac-no-value":""}`} title="CA Bonus">{specialBonus}</span>
          </div>
        </div>
      </div>
    )
  }
}

ACComponent.propTypes = {
  dexterityPoints: PropTypes.number.isRequired,
  armorId: PropTypes.string,
  shieldId: PropTypes.string,
  subRaceId: PropTypes.string
}

const mapStateToProps = (state) => ({
  races: state.referential.races,
  subRaces: state.referential.subRaces,
  classes: state.referential.classes,
  armors: state.referential.armors
})
export default connect(mapStateToProps)(ACComponent)
