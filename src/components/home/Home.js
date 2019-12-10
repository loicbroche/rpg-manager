import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { database } from '../../database/InitializeDatabase'
import { DATA_MODEL } from '../../database/DataModel'
import { objectToArray } from '../../database/Tools'
import { insertCharacter, deleteCharacter } from '../../database/PersistCharacter';

import './Home.css'
import { ROUTE_GAME_MASTER } from '../../App'
import CharacterInput from './CharacterInput'
import CharacterMenuItem from './CharacterMenuItem'

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      characters: null
    }
  }

  componentDidMount() {
    this.charactersRef = database.ref(DATA_MODEL.CHARACTERS.name);

    this.charactersRef.on('value', snapshot => {
      this.setState({ characters: objectToArray(snapshot.val()) });
    });
  }

  componentWillUnmount() {
  }

  render()  {
    const { characters} = this.state
    return (
      <div className="menu">
        <Link to={ROUTE_GAME_MASTER} className="menu-item gm">
            Maître du jeu
        </Link>
        {characters && Object.values(characters).map(({ Name: name}, id) => (
            <div key={name} className="menu-item character">
              <CharacterMenuItem name={name} onRemove={deleteCharacter} />
            </div>
          ))}
        <div className="menu-item"><CharacterInput onSubmit={this.addCharacterEntry} /></div>
      </div>
    )
  }

  // Arrow fx for binding
  addCharacterEntry = (character) => {
    const { characters } = this.state
    return characters[character.Name] ? "Un personnage de ce nom existe déjà" : this.insertCharacter(character);
  }

  // Arrow fx for binding
  insertCharacter = (character) => {
    if (character.Name) {
        character.Race = "ELF";
        character.Class = "BARBARIAN";
        character.Skills = [];
        character.Weapons = [];
        character.WeaponRight = "";
        character.WeaponLeft = "";

      insertCharacter(character);
      //characters.push(character);
      //this.setState({ characters: characters });
    }
  }
}
export default Home