import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CharacterPropType } from 'PropTypes';

import './CharacterOverview.css'
import CaracteristicBonus from 'components/shared/CaracteristicBonus'
import SkillSelector from './SkillSelector';

class CharacterOverview extends Component {
    render() {
        const { caracteristics, character } = this.props;
        const caracteristicsBonus = caracteristics && Object.values(caracteristics).reduce((accum, caracteristic) => {
            accum[caracteristic.Code] = character[caracteristic.OV];
            return accum;
        }, {});

        return (
            <div className="character-overview">
                <h1>{character.Name}</h1>
                <div className="caracteristics-overview">
                    {   caracteristics && 
                        Object.values(caracteristics).map((caracteristic) => (
                            <span key={caracteristic.OV} className={caracteristic.OV}>
                                {caracteristic.Name} :
                                <CaracteristicBonus caracteristicName={caracteristic.OV}
                                                    value={character[caracteristic.OV]}
                                                    subRaceId={character.SubRace}/>
                            </span>
                        ))
                    }
                </div>
                <div className="caracteristics-overview">
                    <SkillSelector  caracteristicsBonus={caracteristicsBonus}
                                    subRaceId={character.SubRace}
                                    master={character.Skills}
                                    level={character.Level}
                                    historicId={character.Historic} />
                </div>
            </div>
        )
    }
}

CharacterOverview.propTypes = {
  character: CharacterPropType.isRequired
}

const mapStateToProps = (state) => ({
    caracteristics: state.referential.caracteristics
})
export default connect(mapStateToProps)(CharacterOverview)
