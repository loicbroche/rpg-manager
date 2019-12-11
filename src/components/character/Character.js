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
        Skills: null,
        Weapons: null,
        WeaponRight: null,
        WeaponLeft: null
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
        const { Name, Race, SubRace, Class, Skills: masteredSkills, WeaponRight, WeaponLeft } = this.state

        return (
        <div className="character">
            { Name !== null && (
                <div>
                    <h1>{Name}</h1>
                    <span>Race : { (SubRace && (subRaces && subRaces[SubRace].Name) || (races && races[Race].Name)) } </span><br />
                    <span>Classe : {classes && classes[Class].Name}</span><br />
                    <span>Main droite : {weapons && WeaponRight && weapons[WeaponRight].Name}</span><br /> 
                    <span>Main gauche : {weapons && WeaponLeft && weapons[WeaponLeft].Name}</span><br />
                    <br />
                    { skills && <Skills skills={skills} mastered={masteredSkills} onClick={this.toggleSkill} /> }
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
        const { Id, Name, Race, Class, Skills, Weapons, WeaponRight, WeaponLeft } = this.state;
        return character
                && Id === character.Id
                && Name === character.Name
                && Race === character.Race
                && Class === character.Class
                && JSON.stringify(Skills) === JSON.stringify(character.Skills)
                && JSON.stringify(Weapons) === JSON.stringify(character.SkWeaponsills)
                && WeaponRight === character.WeaponRight
                && WeaponLeft === character.WeaponLeft
    }
}

export default connect(state => state)(Character)
