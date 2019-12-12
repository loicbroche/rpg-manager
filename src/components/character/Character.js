import React, { Component } from 'react'
import { connect } from 'react-redux'
import { database } from 'database/InitializeDatabase'
import { DATA_MODEL } from 'database/DataModel'
import { insertCharacterSkills, deleteCharacterSkills } from 'database/PersistCharacter';

import './Character.css'
import Skills from './Skills'

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
        const { races, subRaces, classes, weapons, skills } = this.props.referential;
        const { Name, Race, SubRace, Class, Skills: masterSkills, WeaponRight, WeaponLeft } = this.state

        return (
        <div className="character">
            { Name !== null && (
                <div>
                    <h1>{Name}</h1>
                    <span>Race : { (SubRace && (subRaces && subRaces[SubRace].Name)) || (races && races[Race].Name) } </span><br />
                    <span>Classe : {classes && classes[Class].Name}</span><br />
                    <span>Main droite : {weapons && WeaponRight && weapons[WeaponRight].Name}</span><br /> 
                    <span>Main gauche : {weapons && WeaponLeft && weapons[WeaponLeft].Name}</span><br />
                    <br />
                    { skills && <Skills skills={skills} master={masterSkills} onClick={this.toggleSkill} /> }
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

export default connect(state => state)(Character)
