
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './RaceSelector.css'

class RaceSelector extends Component {

  render() {
    const { races, subRaces, subRaceId } = this.props;

    return (
      <div className="race-selector">
        <span>Race:&nbsp;</span>
        { races && subRaces && (
          <select value={subRaceId} onChange={this.handleValueUpdate}>
            { Object.entries(races).map(([key, value]) => this.getSubRacesOptionElement(key))}
          </select>
        )}
    </div>
    )
  }

  // Arrow fx for binding
  handleValueUpdate = (event) => {
    const selectedSubRaceId = event.target.value;
    this.props.onChange(selectedSubRaceId);
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
  onChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  races: state.referential.races,
  subRaces: state.referential.subRaces
})
export default connect(mapStateToProps)(RaceSelector)