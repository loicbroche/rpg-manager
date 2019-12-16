import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CharacterPropType } from 'PropTypes';

import './CharacterOverview.css'
import { calculateTotalBonus } from 'rules/Caracteristics.rules'

class CharacterOverview extends Component {
    render() {
        const { caracteristics, races, subRaces, character } = this.props;
        const subRace = subRaces && subRaces[character.SubRace];
        const race = subRace && races && races[subRace.Race];

        return (
            <div className="character-overview">
                <h1>{character.Name}</h1>
                <div className="caracteristics-overview">
                    {   caracteristics && 
                        Object.values(caracteristics).map((caracteristic) => {
                            const value = character[caracteristic.OV];                        
                            const raceBonus = race && race[caracteristic.OV];
                            const subRaceBonus = subRace && subRace[caracteristic.OV];
                            const bonus = calculateTotalBonus(value, raceBonus, subRaceBonus);
                            return (
                            <div key={caracteristic.Name}>
                        <span className={`${caracteristic.OV}`}>{caracteristic.Name} : {bonus>=0 && "+"}{ bonus }</span>
                            </div>
                            )}
                        )
                    }
                </div>
            </div>
        )
    }
}

CharacterOverview.propTypes = {
  character: CharacterPropType.isRequired
}

const mapStateToProps = (state) => ({
    caracteristics: state.referential.caracteristics,
    races: state.referential.races,
    subRaces: state.referential.subRaces
  })
export default connect(mapStateToProps)(CharacterOverview)
