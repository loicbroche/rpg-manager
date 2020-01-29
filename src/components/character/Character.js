import React, { Component } from 'react'
import { connect } from 'react-redux'
import { database } from 'database/InitializeDatabase'
import { DATA_MODEL } from 'database/DataModel'
import { insertCharacterSkills, deleteCharacterSkills, updateCharacterCaracteristic, insertCharacterWeapons, deleteCharacterWeapons, } from 'database/PersistCharacter';

import { getLevelNumber } from 'rules/Levels.rules'
import './Character.css'
import Skills from './stats/Skills'
import Weapons from './stats/Weapons'
import Caracteristic from './stats/Caracteristic'
import ResistancesComponent from './stats/ResistancesComponent'
import SavesComponent from './stats/SavesComponent'
import SpeedComponent from './stats/SpeedComponent'
import RaceSelector from './general/RaceSelector'
import ClassSelector from './general/ClassSelector'
import HistoricSelector from './general/HistoricSelector'
import XPComponent from './general/XPComponent';
import DescriptionComponent from './general/DescriptionComponent';
import HPComponent from './fight/HPComponent';
import CAComponent from './fight/CAComponent';
import HealthComponent from './fight/HealthComponent';
import SpecialsComponent from './fight/SpecialsComponent';
import SpellsComponent from './fight/SpellsComponent';
import SpellBookComponent from './fight/SpellBookComponent';
import SpecialCapacitiesComponent from './fight/SpecialCapacitiesComponent';
import ArmorSelector from './equipment/ArmorSelector';
import WeaponSelector from './equipment/WeaponSelector';

class Character extends Component {
    constructor (props) {
      super(props);
      const characterId = this.props.match.params.characterId;
      this.state = {
        Id: characterId,
        Name: null,
        Race: null,
        Class: null,
        ChargeCapacity: null,
        MasterBonus: null,
        Skills: null,
        MasterWeapons: null,
        MasterArmors: null,
        MasterObjects: null,
        Historic: null,
        Alignment: null,
        Age: null,
        Height: null,
        Width: null,
        Eyes: null,
        Skin: null,
        Hairs: null,
        PersonnalityTraits: null,
        Ideals: null,
        Links: null,
        Defects: null,
        History: null,
        Languages: null,
        XP: null,
        Level: null,
        MaxHP: null,
        HP: null,
        AC: null,
        WeaponRight: null,
        WeaponLeft: null,
        Armor: null,
        Money: null,
        Objects: null
      }
      this.characterRef = database.ref(DATA_MODEL.CHARACTERS.name+"/"+characterId);
      this.updateCharacter = (snapshot) => {
          const newState = snapshot.val();
          newState.MasterWeapons = newState.MasterWeapons || [];
          newState.Skills = newState.Skills || [];

          this.setState({...newState});
        }
    }

    componentDidMount() {
        this.characterRef.on('value', this.updateCharacter);
    }

    componentWillUnmount() {
        this.characterRef.off('value', this.updateCharacter);
    }

    render() {
        const { caracteristics, levels} = this.props;
        const { Name, SubRace: subRaceId, Gender, Class: classId, Historic: historicId, History, Skills: masterSkills,
                XP, HP, MaxHP, Specials, Spells, Armor, Shield, Weapon, DistanceWeapon, MasterWeapons, MasterArmors } = this.state
        const caracteristicsBonus = caracteristics && Object.values(caracteristics).reduce((accum, caracteristic) => {
            accum[caracteristic.Code] = this.state[caracteristic.OV];
            return accum;
        }, {});
        const characterLevel = getLevelNumber(levels, XP);

        return (
        <div className="character">
            { Name !== null && (
                <div>
                    <div className="character-header">
                        <div>
                            <span className="character-name">{Name}</span>
                            <DescriptionComponent />
                        </div>
                        <RaceSelector   subRaceId={subRaceId}
                                        gender={Gender}
                                        onRaceChange={(value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.SUB_RACE.name, value);}}
                                        onGenderChange={(value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.GENDER.name, value);}} />
                        <ClassSelector  classId={classId}
                                    onChange={(value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.CLASS.name, value);}} />
                        <HistoricSelector   historicId={historicId}
                                            history={History}
                                            onHistoricChange={(value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.HISTORIC.name, value);}}
                                            onHistoryChange={(value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.HISTORY.name, value);}} />
                        <XPComponent XP={parseInt(XP)} onChange={(value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.XP.name, value);}}/>
                    </div>

                    <div className="character-capacities">
                        <div className="fight">
                            <HPComponent val={HP} maxVal={MaxHP} classId={classId}
                                            onValChange={ (value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.HP.name, value); }}
                                            onMaxValChange={ (value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.MAX_HP.name, value); }} />
                            <HealthComponent />
                            <div className="special">
                                <SpecialsComponent val={Specials} classId={classId} level={characterLevel}
                                                    onValChange={ (value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.SPECIALS.name, value); }} />
                                <SpecialCapacitiesComponent />
                            </div>
                            <div className="status">
                                <div className="points">
                                    <SpellsComponent spells={Spells} classId={classId} level={characterLevel}
                                            onValChange={ (value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.SPELLS.name, value); }} />
                                </div>
                                <SpellBookComponent />
                            </div>
                        </div>

                        <div className="stats">
                            <div className="caracteristics">
                            {   caracteristics && 
                                Object.values(caracteristics).map((caracteristic) => (
                                    <div key={caracteristic.Name}>
                                        <span className={`caracteristic-name ${caracteristic.OV}`}>{caracteristic.Name}</span>
                                        <Caracteristic
                                            caracteristicName={caracteristic.OV}
                                            value={this.state[caracteristic.OV]}
                                            subRaceId={ subRaceId }
                                            classId={ classId }
                                            onChange={(value) =>{ this.updateCaracteristic(caracteristic.OV, value);}}/>
                                    </div>
                                    )
                                )
                            }
                            </div>
                            <div className="protections">
                                <ResistancesComponent />
                                <SavesComponent />
                            </div>
                            <CAComponent />
                            <SpeedComponent />
                        </div>
                    </div>
                    <div className="equipment">
                        <div className="equipment-weapon">
                            <WeaponSelector equipmentId={Weapon}
                                            wearingCharacter={ this.state }
                                            onChange={(value) => { this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.WEAPON.name, value); }}
                                            master={MasterWeapons}
                                            classId={classId}/>
                            <WeaponSelector equipmentId={DistanceWeapon}
                                            wearingCharacter={ this.state }
                                            distance={true}
                                            onChange={(value) => { this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.DISTANCE_WEAPON.name, value); }}
                                            onAmmunitionChange={(value) => { this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.AMMUNITION.name, value);  }}
                                            master={MasterWeapons}
                                            classId={classId}/>
                        </div>
                        <div className="equipment-armor">
                            <ArmorSelector equipmentId={Armor}
                                            wearingCharacter={ this.state }
                                            master={MasterArmors}
                                            classId={classId}
                                            onChange={(value) => { this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.ARMOR.name, value); }}/>
                            <ArmorSelector equipmentId={Shield}
                                            wearingCharacter={ this.state }
                                            shield={true}
                                            master={MasterArmors}
                                            classId={classId}
                                            onChange={(value) => { this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.SHIELD.name, value); }}/>
                        </div>
                    </div>
                    <div className="skills-selection">
                        <Weapons master={MasterWeapons}
                            classId={classId}
                            level={characterLevel}
                            onClick={this.toggleWeapon} />
                        <Skills master={masterSkills}
                            historicId={historicId}
                            level={characterLevel}
                            caracteristicsBonus={caracteristicsBonus}
                            subRaceId={subRaceId}
                            onClick={this.toggleSkill} />
                    </div>
                </div>
            )}
        </div>
        )
    }
    toggleSkill = (skillId) => {
        const { Id: characterId, Skills } = this.state;
        if (characterId !== null) {
            const index = Skills?Skills.findIndex((name) => name === skillId):-1;
            if (index === -1) {
                insertCharacterSkills(characterId, skillId);
            } else {
                deleteCharacterSkills(characterId, skillId);
            }
        }
    }

    toggleWeapon = (weaponId) => {
        const { Id: characterId, MasterWeapons } = this.state;
        if (characterId !== null) {
            const index = MasterWeapons?MasterWeapons.findIndex((name) => name === weaponId):-1;
            if (index === -1) {
                insertCharacterWeapons(characterId, weaponId);
            } else {
                deleteCharacterWeapons(characterId, weaponId);
            }
        }
    }

    updateCaracteristic = (caracteristicName, value) => {
        const { Id: characterId } = this.state;
        updateCharacterCaracteristic(characterId, caracteristicName, value);
    }

    equals(character) {
        return character
                && this.state.Id === character.Id
                && this.state.Name === character.Name
                && this.state.Race === character.Race
                && this.state.Class === character.Class
                && this.state.ChargeCapacity === character.ChargeCapacity
                && this.state.MasterBonus === character.MasterBonus
                && JSON.stringify(this.state.Skills) === JSON.stringify(character.Skills)
                && JSON.stringify(this.state.MasterWeapons) === JSON.stringify(character.MasterWeapons)
                && JSON.stringify(this.state.MasterArmors) === JSON.stringify(character.MasterArmors)
                && JSON.stringify(this.state.MasterObjects) === JSON.stringify(character.MasterObjects)
                && this.state.Historic === character.Historic
                && this.state.Alignment === character.Alignment
                && this.state.Age === character.Age
                && this.state.Height === character.Height
                && this.state.Width === character.Width
                && this.state.Eyes === character.Eyes
                && this.state.Skin === character.Skin
                && this.state.Hairs === character.Hairs
                && this.state.PersonnalityTraits === character.PersonnalityTraits
                && this.state.Ideals === character.Ideals
                && this.state.Links === character.Links
                && this.state.Defects === character.Defects
                && this.state.History === character.History
                && JSON.stringify(this.state.Languages) === JSON.stringify(character.Languages)
                && this.state.Level === character.Level
                && this.state.MaxHP === character.MaxHP
                && this.state.HP === character.HP
                && this.state.AC === character.AC
                && this.state.WeaponRight === character.WeaponRight
                && this.state.WeaponLeft === character.WeaponLeft
                && this.state.Armor === character.Armor
                && this.state.Money === character.Money
                && JSON.stringify(this.state.Objects) === JSON.stringify(character.Objects)
    }
}

const mapStateToProps = (state) => ({
    levels: state.referential.levels,
    caracteristics: state.referential.caracteristics
});
export default connect(mapStateToProps)(Character)
