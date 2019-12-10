import React, { Component } from 'react'
import { connect } from 'react-redux'

import { insertCharacterSkills, deleteCharacterSkills } from '../../database/PersistCharacter';

import './Character.css'
import Skills from './Skills'

class Character extends Component {
    constructor (props) {
      super(props);
      if (props && props.game && props.game.characters) {
        const name = this.props.match.params.name;
        this.state = { ...props.game.characters[name] };
      } else {
        this.state = {
            Name: null,
            Race: null,
            Class: null,
            Skills: null,
            Weapons: null,
            WeaponRight: null,
            WeaponLeft: null
          }
      }
    }

    render() {
        const { races, classes, weapons, skills } = this.props.referential;
        const { Name, Race, Class, Skills: masteredSkills, WeaponRight, WeaponLeft } = this.state

        return (
        <div className="character">
            { Name !== null && (
                <div>
                    <h1>{Name}</h1>
                    <span>Race : {races && races[Race].Name}</span><br />
                    <span>Classe : {classes && classes[Class].Name}</span><br />
                    <span>Main droite : {weapons && WeaponRight && weapons[WeaponRight].Name}</span><br /> 
                    <span>Main gauche : {weapons && WeaponLeft && weapons[WeaponLeft].Name}</span><br />
                    <br />
                    <Skills skills={skills} mastered={masteredSkills} onClick={this.toggleSkill} />
                </div>
            )}
        </div>
        )
    }

    componentDidUpdate(prevProps) {
        if (this.props.game && this.props.game.characters) {
            const characteres = this.props.game.characters;
            const previousCharacteres = prevProps.game.characters;
            if(!previousCharacteres || characteres !== previousCharacteres){
                const name = this.props.match.params.name;
                const previousCharacter = previousCharacteres?previousCharacteres[name]:null;
                if (!this.equals(previousCharacter)) {
                    this.setState({ ...characteres[name] });
                }
            }
        }
    }

    toggleSkill = (skillName) => {
        const { Name, Skills } = this.state;
        //const action = { type: ActionTypes.CHARACTERS.TOGGLE_SKILL, value: { name: Name, skillId: skillId} };
        //this.props.dispatch(action);
        if (Name !== null) {
            const index = Skills.findIndex((name) => name === skillName);
            if (index === -1) {
                insertCharacterSkills(Name, Skills.length, skillName);
            } else {
                deleteCharacterSkills(Name, index);
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
