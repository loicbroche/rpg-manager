import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CharacterPropType } from 'PropTypes';

import { DATA_MODEL } from 'database/DataModel'
import { getLevelNumber } from 'rules/Levels.rules'
import { updateCharacterCaracteristic, insertCharacterElement, deleteCharacterElement } from 'database/PersistCharacter';

import './CharacterOverview.css'
import CaracteristicBonus from 'components/shared/CaracteristicBonus'
import SkillSelector from './SkillSelector';
import XPComponent from 'components/character/general/XPComponent';
import HPComponent from 'components/character/fight/HPComponent';
import SpecialsComponent from 'components/character/fight/SpecialsComponent';
import CAComponent from 'components/character/fight/CAComponent';
import AlterationsComponent from 'components/character/fight/AlterationsComponent'
import SpeedComponent from 'components/character/stats/SpeedComponent'

class CharacterOverview extends Component {
    render() {
        const { caracteristics, levels, character } = this.props;
        const characterLevel = getLevelNumber(levels, character.XP);
        const caracteristicsBonus = caracteristics && Object.values(caracteristics).reduce((accum, caracteristic) => {
            accum[caracteristic.Code] = character[caracteristic.OV];
            return accum;
        }, {});

        return (
            <div className="character-overview">
                <h1 className="overview-header">
                    <span className="overview-name">{character.Name}</span>
                    <XPComponent XP={character.XP} onChange={(value) =>{ updateCharacterCaracteristic(character.Id, DATA_MODEL.CHARACTERS.columns.XP.name, value);}}/>
                </h1>
                <HPComponent val={character.HP} maxVal={character.MaxHP} classId={character.Class} />
                <AlterationsComponent characterAlterations={character.Alterations} resistances={character.Resistances}
                                        subRaceId={character.SubRace} classId={character.Class}
                                        onClick={(alterationId) => { this.toggleElement(DATA_MODEL.CHARACTERS.columns.ALTERATIONS.name, character, alterationId) }}/>
                <SpecialsComponent val={character.Specials} classId={character.Class} level={characterLevel} />
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
                <div >
                    <SkillSelector  caracteristicsBonus={caracteristicsBonus}
                                    subRaceId={character.SubRace}
                                    master={character.Skills}
                                    XP={character.XP}
                                    historicId={character.Historic} />
                </div>
                <div className="stats-overview">
                    <CAComponent />
                    <SpeedComponent subRaceId={character.SubRace} classId={character.Class} level={characterLevel} />
                </div>

                <div className="equipments-overview">
                        {character.Weapon &&
                        <div className="equipment-overview">
                            <span>Arme</span>
                            <span>{character.Weapon}</span>
                        </div>}
                        {character.DistanceWeapon &&
                        <div className="equipment-overview">
                            <span>Arme à distance</span>
                            <span>{character.DistanceWeapon}</span>
                        </div>}
                        {character.Armor &&
                        <div className="equipment-overview">
                            <span>Armure</span>
                            <span>{character.Armor}</span>
                        </div>}
                        {character.Shield &&
                        <div className="equipment-overview">
                            <span>Bouclier</span>
                            <span>{character.Shield}</span>
                        </div>}
                    </div>
            </div>
        )
    }

    toggleElement = (elementName, character, elementId) => {
        const elements = character[elementName];
        if (character.Id !== null) {
            const index = elements?elements.findIndex((name) => name === elementId):-1;
            if (index === -1) {
                insertCharacterElement(character.Id, elementName, elementId);
            } else {
                deleteCharacterElement(character.Id, elementName, elementId);
            }
        }
    }
}

CharacterOverview.propTypes = {
  character: CharacterPropType.isRequired
}

const mapStateToProps = (state) => ({
    caracteristics: state.referential.caracteristics,
    levels: state.referential.levels

})
export default connect(mapStateToProps)(CharacterOverview)
