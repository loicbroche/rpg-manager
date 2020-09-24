import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectCaracteristics } from 'store/selectors'
import { CharacterPropType } from 'PropTypes'

import {DEFAULT_EMPTY_VALUE} from 'rules/Character.rules'
import { DATA_MODEL } from 'database/DataModel'

import { updateCharacterCaracteristic, insertCharacterElement, deleteCharacterElement } from 'database/PersistCharacter';

import './CharacterOverview.css'
import CaracteristicBonus from 'components/shared/CaracteristicBonus'
import SkillSelector from 'components/shared//SkillSelector';
import Money from 'components/shared/Money'
import XPComponent from 'components/character/general/XPComponent';
import HPComponent from 'components/character/fight/HPComponent';
import SpecialsComponent from 'components/character/fight/SpecialsComponent';
import ACComponent from 'components/character/fight/ACComponent';
import AlterationsComponent from 'components/character/fight/AlterationsComponent'
import SpeedComponent from 'components/character/stats/SpeedComponent'
import WeaponSelector from 'components/character/equipment/WeaponSelector';
import ArmorSelector from 'components/character/equipment/ArmorSelector';

class CharacterOverview extends PureComponent {
    render() {
        const { caracteristics, levelNumber, character } = this.props;
        const caracteristicsBonus = caracteristics?.reduce((accum, caracteristic) => {
            accum[caracteristic.Code] = character[caracteristic.OV];
            return accum;
        }, {});

        return (
            <div className="character-overview">
                <h1 className="overview-header">
                    <ACComponent character={character} />
                    <span className="overview-name">{character.Name}</span>
                    <XPComponent XP={character.XP} onChange={(value) =>{ updateCharacterCaracteristic(character.Id, DATA_MODEL.CHARACTERS.columns.XP.name, value);}}/>
                    <SpeedComponent subRaceId={character.SubRace} classId={character.Class} armorId={character.Armor} strength={character.Strength} XP={character.XP} />
                </h1>
                <HPComponent val={character.HP} maxVal={character.MaxHP} classId={character.Class} />
                <AlterationsComponent characterAlterations={character.Alterations} resistances={character.Resistances}
                                        subRaceId={character.SubRace} classId={character.Class}
                                        onClick={(alterationId) => { this.toggleElement(DATA_MODEL.CHARACTERS.columns.ALTERATIONS.name, character, alterationId) }}/>
                <SpecialsComponent val={character.Specials} classId={character.Class} XP={character.XP} />
                <div className="caracteristics-overview">
                    {   caracteristics?.map((caracteristic) => (
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

                <div className="weapons-overview">
                        {character.Weapon && character.Weapon !== DEFAULT_EMPTY_VALUE &&
                        <WeaponSelector weaponId={character.Weapon} wearingCharacter={ character } details={false} />}
                        {character.DistanceWeapon && character.DistanceWeapon !== DEFAULT_EMPTY_VALUE &&
                        <WeaponSelector weaponId={character.DistanceWeapon}
                                        wearingCharacter={ character }
                                        distance={true}
                                        details={false}  />}
                    </div>
                    <div className="armors-overview">
                        {character.Armor && character.Armor !== DEFAULT_EMPTY_VALUE &&
                        <ArmorSelector armorId={character.Armor}
                                        wearingCharacter={ character }
                                        classId={character.Class}
                                        subRaceId={character.SubRace}
                                        details={false} />}
                        {character.Shield && character.Shield !== DEFAULT_EMPTY_VALUE &&
                        <ArmorSelector armorId={character.Shield}
                                        wearingCharacter={ character }
                                        shield={true}
                                        classId={character.Class}
                                        subRaceId={character.SubRace}
                                        details={false} />
                        }
                    </div>
                    <div className="stuffs">
                        <Money amount={character.Money} fullDisplay={true} onChange={(value) => { this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.MONEY.name, value); }} />
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

const mapStateToProps = (state, props) => ({
    caracteristics: selectCaracteristics(state)

})
export default connect(mapStateToProps)(CharacterOverview)
