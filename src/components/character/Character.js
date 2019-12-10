import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCharacterSkills, deleteCharacterSkills } from '../../database/persistCharacter';

import './Character.css'
import Skills from './Skills'

class Character extends Component {
    constructor (props) {
      super(props);
      this.state = {
        Id: null,
        Name: null,
		Race: null,
		Class: null,
		Skills: null,
		Weapons: null,
		WeaponRight: null,
		WeaponLeft: null
      }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.game) {
            const characteres = nextProps.game.characters;
            if(characteres && characteres !== this.props.characters){
                const characterId = characteres.findIndex(({ Name }) => Name === this.props.match.params.name);
                this.setState({ ...characteres[characterId], Id: characterId });
            }
        }
    }

    render() {
        const { races, classes, weapons, skills } = this.props.referential;
        const { Id, Name, Race, Class, Skills: masteredSkills, WeaponRight, WeaponLeft } = this.state

        return (
        <div className="character">
            { Id !== null && (
                <div>
                    <h1>{Name} ({Id})</h1>
                    <span>Race : {races && races[Race].Name}</span><br />
                    <span>Classe : {classes && classes[Class].Name}</span><br />
                    <span>Main droite : {weapons && WeaponRight && weapons[WeaponRight].Name}</span> -
                    <span>Main gauche : {weapons && WeaponLeft && weapons[WeaponLeft].Name}</span><br />
                    <br />
                    <Skills skills={skills} mastered={masteredSkills} onClick={this.toggleSkill} />
                </div>
            )}
        </div>
        )
    }

    toggleSkill = (skillId) => {
        const { Id, Skills } = this.state;
        //const action = { type: ActionTypes.CHARACTERS.TOGGLE_SKILL, value: { characterId: Id, skillId: skillId} };
        //this.props.dispatch(action);
        if (Id !== null) {
            const index = Skills.findIndex((id) => id === skillId);
            if (index === -1) {
                addCharacterSkills(Id, Skills.length, skillId);
            } else {
                deleteCharacterSkills(Id, index);
            }
        }
    }
}

export default connect(state => state)(Character)
