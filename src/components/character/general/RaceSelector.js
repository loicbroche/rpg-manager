
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './RaceSelector.css'

class RaceSelector extends Component {

  render() {
    const { races, subRaces, subRaceId, gender } = this.props;
    const genders = ["♂", "♀", "⚥", "⚧", "⚲"];
    const raceBorderImage = require("images/races/race_border.png");
    let raceImage;
    try {
      raceImage = require(`images/races/${subRaceId}.png`);
    } catch (ex) {
      raceImage = require("images/races/no_race.png");
    }

    return (
      <div className="selector race-selector">
        <div className="selector-icon race-icon">
          <img src={raceImage} className="selector-image" alt="" />
          <img src={raceBorderImage} className="selector-image" alt="" />
        </div>
        <div className="selector-value">
          <span>Race</span>
          { races && subRaces && (
            <select className="selector-select" value={subRaceId} onChange={(event) => this.props.onRaceChange(event.target.value)}>
              <option value="" disabled>Choisissez une race</option>
              { Object.entries(races).map(([key, value]) => this.getSubRacesOptionElement(key))}
            </select>
          )}
        </div>
        <div className="gender-value">
          <select className={`genders ${gender}`} value={gender} onChange={(event) => this.props.onGenderChange(event.target.value)}>
            { genders.map((gender) => (
              <option key={gender} className={`gender ${gender}`} value={gender}>{gender}</option>
            ))}
          </select>
        </div>
      </div>
    )
  }

  getSubRacesOptionElement(raceId) {
    const { races, subRaces } = this.props;
    const availableSubRaces = Object.values(subRaces).filter((subRace) => subRace.Race === raceId);
    return availableSubRaces.length === 1
            ? <option key={availableSubRaces[0].Id} value={availableSubRaces[0].Id}>{availableSubRaces[0].Name}</option>
            : (
              <optgroup key={raceId} label={races && races[raceId].Name}>
                { availableSubRaces.map((subRace) => (
                  <option key={subRace.Id} value={subRace.Id}>{subRace.Name}</option>
                ))}
              </optgroup>
            );
  }

}

RaceSelector.propTypes = {
  subRaceId: PropTypes.string,
  gender: PropTypes.string,
  onRaceChange: PropTypes.func.isRequired,
  onGenderChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  races: state.referential.races,
  subRaces: state.referential.subRaces
})
export default connect(mapStateToProps)(RaceSelector)