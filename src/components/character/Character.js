import React, { Component } from 'react'
import { connect } from 'react-redux'

import { database } from 'database/InitializeDatabase'
import { DATA_MODEL } from 'database/DataModel'
import { updateCharacterCaracteristic, insertCharacterElement, deleteCharacterElement } from 'database/PersistCharacter';
import { updateNotes, ALL_CHARACTERS_ID } from 'database/PersistNotes';
import { getLevelNumber } from 'rules/Levels.rules'

import './Character.css'
import Skills from './stats/Skills'
import Weapons from './stats/Weapons'
import Objects from './stats/Objects'
import Caracteristic from './stats/Caracteristic'
import SavesComponent from './stats/SavesComponent'
import SpeedComponent from './stats/SpeedComponent'
import RaceSelector from './general/RaceSelector'
import ClassSelector from './general/ClassSelector'
import HistoricSelector from './general/HistoricSelector'
import XPComponent from './general/XPComponent';
import DetailsComponent from './general/DetailsComponent';
import HPComponent from './fight/HPComponent';
import ACComponent from './fight/ACComponent';
import HealthComponent from './fight/HealthComponent';
import SpecialsComponent from './fight/SpecialsComponent';
import SpellsComponent from './fight/SpellsComponent';
import SpellBookComponent from './fight/SpellBookComponent';
import SpecialCapacitiesComponent from './fight/SpecialCapacitiesComponent';
import AlterationsComponent from './fight/AlterationsComponent'
import ArmorSelector from './equipment/ArmorSelector';
import WeaponSelector from './equipment/WeaponSelector';
import BagComponent from './equipment/BagComponent';
import PersonnalNotesComponent from 'components/user/PersonnalNotesComponent';
import GeneralNotesComponent from 'components/user/GeneralNotesComponent';
import FlyingNotesComponent from '../user/FlyingNotesComponent';

class Character extends Component {
    constructor (props) {
      super(props);
      const characterId = this.props.match.params.characterId;
      this.state = {
          characterInfos: {
            Id: characterId,
            Name: null,
            Race: null,
            Class: null,
            Specialisation: null,
            ChargeCapacity: null,
            MasterBonus: null,
            Skills: null,
            MasterWeapons: null,
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
            Weapon: null,
            DistanceWeapon: null,
            Armor: null,
            Money: null,
            Objects: null,
            Alterations: null,
            Resistances: null,
            Saves: null,
            SaveAdvantages: null,
            Dexterity: null
          },
          generalNotes: [],
          personnalNotes: []
      }
      this.characterRef = database.ref(DATA_MODEL.CHARACTERS.name+"/"+characterId);
      this.updateCharacter = (snapshot) => {
          const newState = snapshot.val();
          newState.MasterWeapons = newState.MasterWeapons || [];
          newState.MasterObjects = newState.MasterObjects || [];
          newState.Skills = newState.Skills || [];
          newState.Alterations = newState.Alterations || [];
          newState.Resistances = newState.Resistances || [];
          newState.Objects = newState.MasterObjects || [];
          newState.Languages = newState.Languages || [];
          newState.Saves = newState.Saves || [];
          newState.SaveAdvantages = newState.SaveAdvantages || [];
          newState.MinorSpells = newState.MinorSpells || [];
          newState.Spells = newState.Spells || [];

          this.setState({characterInfos: {...newState}});
        }
        this.generalNotesRef = database.ref(DATA_MODEL.NOTES.name+"/"+ALL_CHARACTERS_ID);
        this.personnalNotesRef = database.ref(DATA_MODEL.NOTES.name+"/"+characterId);
        this.updateGeneralNotes = (snapshot) => {
            const newState = snapshot.val();
            this.setState({generalNotes: newState});
        }
        this.updatePersonnalNotes = (snapshot) => {
            const newState = snapshot.val();
            this.setState({personnalNotes: newState});
        }
    }

    componentDidMount() {
        this.characterRef.on('value', this.updateCharacter);
        this.generalNotesRef.on('value', this.updateGeneralNotes);
        this.personnalNotesRef.on('value', this.updatePersonnalNotes);
    }

    componentWillUnmount() {
        this.characterRef.off('value', this.updateCharacter);
        this.generalNotesRef.off('value', this.updateGeneralNotes);
        this.personnalNotesRef.off('value', this.updatePersonnalNotes);
    }

    render() {
        const { caracteristics, levels} = this.props;
        const { Name, SubRace: subRaceId, Gender, Class: classId, Specialisation, Historic: historicId, History, Skills: masterSkills,
                XP, HP, MaxHP, Specials, SpellsLocations, MinorSpells, Spells, Armor, Shield, Weapon, DistanceWeapon, MasterWeapons, MasterObjects, Alterations,
                Resistances, Saves, SaveAdvantages, Health, Strength, Notes} = this.state.characterInfos;
        const { generalNotes, personnalNotes } = this.state;

        const caracteristicsBonus = caracteristics && Object.values(caracteristics).reduce((accum, caracteristic) => {
            accum[caracteristic.Code] = this.state.characterInfos[caracteristic.OV];
            return accum;
        }, {});
        const characterLevel = getLevelNumber(levels, XP);

        return (
        <div className="character">
            { Name !== null && (
                <div>
                    <div className="character-header">
                        <div>
                            <DetailsComponent   character={this.state.characterInfos}
                                        onChange={(caracteristicName, value) => { this.updateCaracteristic(caracteristicName, value); }}
                                        onClickElement={(elementName, value) => { this.toggleElement(elementName, value); }} />
                            <FlyingNotesComponent notes={personnalNotes} onNotesChange={(value) =>  updateNotes(value, Name) } />
                        </div>
                        <RaceSelector   subRaceId={subRaceId}
                                        gender={Gender}
                                        onRaceChange={(value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.SUB_RACE.name, value);}}
                                        onGenderChange={(value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.GENDER.name, value);}} />
                        <ClassSelector  classId={classId} specialisationId={Specialisation} XP={XP}
                                        onChange={(value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.CLASS.name, value);}}
                                        onSpecialisationChange={(value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.SPECIALISATION.name, value);}} />
                        <HistoricSelector   historicId={historicId}
                                            history={History}
                                            onHistoricChange={(value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.HISTORIC.name, value);}}
                                            onHistoryChange={(value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.HISTORY.name, value);}} />
                        <XPComponent XP={parseInt(XP)} onChange={(value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.XP.name, value);}}/>
                    </div>

                    <div className="character-capacities">
                        <div className="fight">
                            <div className="health">
                                <div className="filler"></div>
                                <AlterationsComponent characterAlterations={Alterations} resistances={Resistances} subRaceId={subRaceId} classId={classId}
                                                        onClick={(alterationId) => { this.toggleElement(DATA_MODEL.CHARACTERS.columns.ALTERATIONS.name, alterationId) }}
                                                        onResistanceClick={this.toggleResistance}/>
                                <HealthComponent value={Health} onChange={ (value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.HEALTH.name, value); }} />
                                <div className="filler"></div>
                            </div>
                            <HPComponent val={HP} maxVal={MaxHP} classId={classId}
                                            onValChange={ (value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.HP.name, value); }}
                                            onMaxValChange={ (value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.MAX_HP.name, value); }} />
                            <div className="special">
                                <SpecialsComponent val={Specials} classId={classId} level={characterLevel}
                                                    onValChange={ (value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.SPECIALS.name, value); }} />
                                <SpecialCapacitiesComponent />
                            </div>
                            <div className="status">
                                <div className="points">
                                    <SpellsComponent spellsLocations={SpellsLocations} classId={classId} level={characterLevel}
                                            onValChange={ (value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.SPELLS_LOCATIONS.name, value); }} />
                                </div>
                                <SpellBookComponent classId={classId} level={characterLevel}
                                                    knownMinorSpells={MinorSpells} knownSpells={Spells}
                                                    onMinorSpellClick={(spellId) => { this.toggleElement(DATA_MODEL.CHARACTERS.columns.MINOR_SPELLS.name, spellId) }}
                                                    onSpellClick={(spellId) => { this.toggleElement(DATA_MODEL.CHARACTERS.columns.SPELLS.name, spellId) }}/>
                            </div>
                        </div>

                        <div className="stats">
                            <div className="complements">
                                <ACComponent character={this.state.characterInfos} />
                                <SpeedComponent subRaceId={subRaceId} classId={classId} armorId={Armor} strength={Strength} level={characterLevel} />
                            </div>
                            <div className="caracteristics-relative">
                                <div className="caracteristics">
                                {   caracteristics && 
                                    Object.values(caracteristics).map((caracteristic) => (
                                        <div key={caracteristic.Name}>
                                            <span className={`caracteristic-name ${caracteristic.OV}`}>{caracteristic.Name}</span>
                                            <Caracteristic
                                                caracteristicName={caracteristic.OV}
                                                value={this.state.characterInfos[caracteristic.OV]}
                                                subRaceId={ subRaceId }
                                                classId={ classId }
                                                onChange={(value) =>{ this.updateCaracteristic(caracteristic.OV, value);}}/>
                                        </div>
                                        )
                                    )
                                }
                                </div>
                                <Skills master={masterSkills}
                                        historicId={historicId}
                                        XP={XP}
                                        caracteristicsBonus={caracteristicsBonus}
                                        subRaceId={subRaceId}
                                        onClick={(skillId) => { this.toggleElement(DATA_MODEL.CHARACTERS.columns.SKILLS.name, skillId) }} />
                            </div>
                            <SavesComponent saves={Saves} advantages={SaveAdvantages} subRaceId={subRaceId} classId={classId} XP={XP}
                                            onClick={(alterationId) => { this.toggleElement(DATA_MODEL.CHARACTERS.columns.SAVES.name, alterationId) }}
                                            onAdvantageClick={(alterationId) => { this.toggleElement(DATA_MODEL.CHARACTERS.columns.SAVE_ADVANTAGES.name, alterationId) }}/>
                            <div className="equipment">
                                <div className="equipment-weapons">
                                    <div className="weapons-selectors">
                                        <WeaponSelector equipmentId={DistanceWeapon}
                                                        wearingCharacter={ this.state.characterInfos }
                                                        distance={true}
                                                        onChange={(value) => { this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.DISTANCE_WEAPON.name, value); }}
                                                        onAmmunitionChange={(value) => { this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.AMMUNITION.name, value);  }} />
                                        <WeaponSelector equipmentId={Weapon}
                                                        wearingCharacter={ this.state.characterInfos }
                                                        onChange={(value) => { this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.WEAPON.name, value); }} />
                                    </div>
                                    <Weapons master={MasterWeapons}
                                            classId={classId}
                                            level={characterLevel}
                                            onClick={(weaponId) => { this.toggleElement(DATA_MODEL.CHARACTERS.columns.MASTER_WEAPONS.name, weaponId) }} />
                                </div>
                                <div className="equipment-armors">
                                    <ArmorSelector equipmentId={Armor}
                                                    wearingCharacter={ this.state.characterInfos }
                                                    classId={classId}
                                                    subRaceId={subRaceId}
                                                    onChange={(value) => { this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.ARMOR.name, value); }}/>
                                    <ArmorSelector equipmentId={Shield}
                                                    wearingCharacter={ this.state.characterInfos }
                                                    shield={true}
                                                    classId={classId}
                                                    subRaceId={subRaceId}
                                                    onChange={(value) => { this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.SHIELD.name, value); }}/>
                                </div>
                                <div className="equipment-bag">
                                    <BagComponent />
                                    <Objects master={MasterObjects}
                                        classId={classId}
                                        historicId={historicId}
                                        onClick={(objectId) => { this.toggleElement(DATA_MODEL.CHARACTERS.columns.MASTER_OBJECTS.name, objectId) }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user-notes">
                        <GeneralNotesComponent notes={generalNotes} editorCharacter={Name} onChange={(value) => updateNotes(value, ALL_CHARACTERS_ID) } />
                        <PersonnalNotesComponent globalNotes={Notes} onGlobalNotesChange={(value) =>  this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.NOTES.name, value) }  />
                    </div>
                </div>
            )}
        </div>
        )
    }

    toggleElement = (elementName, elementId) => {
        const { Id: characterId } = this.state.characterInfos;
        const elements = this.state[elementName];
        if (characterId !== null) {
            const index = elements?elements.findIndex((name) => name === elementId):-1;
            if (index === -1) {
                insertCharacterElement(characterId, elementName, elementId);
            } else {
                deleteCharacterElement(characterId, elementName, elementId);
            }
        }
    }

    toggleResistance = (alterationId) => {
        const { Id: characterId, Resistances, Alterations } = this.state.characterInfos;
        if (characterId !== null) {
            const index = Resistances?Resistances.findIndex((name) => name === alterationId):-1;
            if (index === -1) {
                insertCharacterElement(characterId, DATA_MODEL.CHARACTERS.columns.RESISTANCES.name, alterationId);
                const index = Alterations?Alterations.findIndex((name) => name === alterationId):-1;
                if (index > -1) {
                    deleteCharacterElement(characterId, DATA_MODEL.CHARACTERS.columns.ALTERATIONS.name, alterationId);
                }
            } else {
                deleteCharacterElement(characterId, DATA_MODEL.CHARACTERS.columns.RESISTANCES.name, alterationId);
            }
        }
    }

    updateCaracteristic = (caracteristicName, value) => {
        const { Id: characterId } = this.state.characterInfos;
        updateCharacterCaracteristic(characterId, caracteristicName, value);
    }

    equals(character) {
        return character
            && this.state.characterInfos.Age === character.Age
            && this.state.characterInfos.Alignment === character.Alignment
            && JSON.stringify(this.state.characterInfos.Alterations) === JSON.stringify(character.Alterations)
            && this.state.characterInfos.Armor === character.Armor
            && this.state.characterInfos.ChargeCapacity === character.ChargeCapacity
            && this.state.characterInfos.Class === character.Class
            && this.state.characterInfos.Defects === character.Defects
            && this.state.characterInfos.DistanceWeapon === character.DistanceWeapon
            && this.state.characterInfos.Eyes === character.Eyes
            && this.state.characterInfos.Hairs === character.Hairs
            && this.state.characterInfos.Height === character.Height
            && this.state.characterInfos.Historic === character.Historic
            && this.state.characterInfos.History === character.History
            && this.state.characterInfos.HP === character.HP
            && this.state.characterInfos.Id === character.Id
            && this.state.characterInfos.Ideals === character.Ideals
            && JSON.stringify(this.state.characterInfos.Languages) === JSON.stringify(character.Languages)
            && this.state.characterInfos.Links === character.Links
            && JSON.stringify(this.state.characterInfos.MasterArmors) === JSON.stringify(character.MasterArmors)
            && JSON.stringify(this.state.characterInfos.MasterObjects) === JSON.stringify(character.MasterObjects)
            && JSON.stringify(this.state.characterInfos.MasterWeapons) === JSON.stringify(character.MasterWeapons)
            && this.state.characterInfos.MaxHP === character.MaxHP
            && this.state.characterInfos.Money === character.Money
            && this.state.characterInfos.Name === character.Name
            && JSON.stringify(this.state.characterInfos.Objects) === JSON.stringify(character.Objects)
            && this.state.characterInfos.PersonnalityTraits === character.PersonnalityTraits
            && this.state.characterInfos.Race === character.Race
            && JSON.stringify(this.state.characterInfos.Resistances) === JSON.stringify(character.Resistances)
            && JSON.stringify(this.state.characterInfos.Skills) === JSON.stringify(character.Skills)
            && this.state.characterInfos.Skin === character.Skin
            && this.state.characterInfos.Weapon === character.Weapon
            && this.state.characterInfos.Width === character.Width;
    }
}

const mapStateToProps = (state) => ({
    levels: state.referential.levels,
    caracteristics: state.referential.caracteristics
});
export default connect(mapStateToProps)(Character)
