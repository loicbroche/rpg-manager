import React, { Component } from 'react'
import { connect } from 'react-redux'
import { database } from 'database/InitializeDatabase'
import { DATA_MODEL } from 'database/DataModel'
import { insertCharacterSkills, deleteCharacterSkills, updateCharacterCaracteristic } from 'database/PersistCharacter';

import './Character.css'
import Skills from './Skills'
import Caracteristic from './Caracteristic'
import RaceSelector from './RaceSelector'
import ClassSelector from './ClassSelector'
import HistoricSelector from './HistoricSelector'
import XPComponent from './XPComponent';
import HPComponent from './HPComponent';
import KiComponent from './KiComponent';

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
      this.updateCharacter = (snapshot) => { this.setState({...snapshot.val()}); }
    }

    componentDidMount() {
        this.characterRef.on('value', this.updateCharacter);
    }

    componentWillUnmount() {
        this.characterRef.off('value', this.updateCharacter);
    }

    render() {
        const { caracteristics, capacities} = this.props;
        const { Name, SubRace: subRaceId, Gender, Class: classId, Historic: historicId, History, Skills: masterSkills,
                XP, Level: characterLevel, HP, MaxHP} = this.state
        const caracteristicsBonus = caracteristics && Object.values(caracteristics).reduce((accum, caracteristic) => {
            accum[caracteristic.Code] = this.state[caracteristic.OV];
            return accum;
        }, {});

        return (
        <div className="character">
            { Name !== null && (
                <div>
                    <div className="character-header">
                        <span className="character-name">{Name}</span>
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

                    <div className="character-body">
                        <div className="status">
                            <HPComponent val={HP} maxVal={MaxHP} classId={classId}
                                            onValChange={ (value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.HP.name, value); }}
                                            onMaxValChange={ (value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.MAX_HP.name, value); }} />
                            <KiComponent val={2} maxVal={3} classId={classId}
                                            onValChange={ (value) =>{ console.log("Set ki = "+value); }}
                                            onMaxValChange={ (value) =>{ console.log("Set max ki = "+value); }} />
                            <span>Spells</span>
                        </div>

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
                    </div>

                    <Skills master={masterSkills}
                            historicId={historicId}
                            level={characterLevel}
                            caracteristicsBonus={caracteristicsBonus}
                            subRaceId={subRaceId}
                            onClick={this.toggleSkill} />
                </div>
            )}
        </div>
        )
    }
    toggleSkill = (skillId) => {
        const { Id: characterId, Skills } = this.state;
        if (characterId !== null) {
            const index = Skills.findIndex((name) => name === skillId);
            if (index === -1) {
                insertCharacterSkills(characterId, Skills.length, skillId);
            } else {
                deleteCharacterSkills(characterId, index);
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
    caracteristics: state.referential.caracteristics,
    capacities: state.referential.capacities
});
export default connect(mapStateToProps)(Character)
