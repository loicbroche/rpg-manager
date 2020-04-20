
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectRaces, selectSubRaces } from 'store/selectors';
import './RaceSelector.css'

class RaceSelector extends PureComponent {

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
            <select className="selector-select" value={subRaceId || "-" } onChange={(event) => this.props.onRaceChange(event.target.value)}>
              <option value="-" disabled>Choisissez une race</option>
              {races?.map((race) => this.getSubRacesOptionElement(race))}
            </select>
          )}
        </div>
        <div className="gender-value">
          <select className={`activable genders ${gender}`} value={gender} onChange={(event) => this.props.onGenderChange(event.target.value)}>
            { genders.map((gender) => (
              <option key={gender} className={`gender ${gender}`} value={gender}>{gender}</option>
            ))}
          </select>
        </div>
      </div>
    )
  }

  getSubRacesOptionElement(race) {
    const { subRaces } = this.props;
    const availableSubRaces = subRaces?.filter((subRace) => subRace.Race === race?.Id);
    return availableSubRaces.length === 1
            ? <option key={availableSubRaces[0].Id} value={availableSubRaces[0].Id}>{availableSubRaces[0].Name}</option>
            : (
              <optgroup key={race?.Id} label={race?.Name}>
                { availableSubRaces.map((subRace) => (
                  <option key={subRace.Id} value={subRace.Id}>{subRace?.Name}</option>
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
  races: selectRaces(state),
  subRaces: selectSubRaces(state)
})
export default connect(mapStateToProps)(RaceSelector)