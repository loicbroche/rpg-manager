import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { database } from '../../database/InitializeDatabase'
import { DATA_MODEL } from '../../database/DataModel'

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
      this.setState({ characters: snapshot.val() });
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
        {characters && characters.map(({ Name: name}, index) => (
            <div key={index} className="menu-item character">
              <CharacterMenuItem name={name} onRemove={this.deleteCharacter} />
            </div>
          ))}
        <div className="menu-item"><CharacterInput onSubmit={this.addCharacterEntry} /></div>
      </div>
    )
  }

  // Arrow fx for binding
  addCharacterEntry = (character) => {
    const { characters } = this.state
    return characters.find(({Name}) => Name === character.Name) ? "Un personnage de ce nom existe déjà" : this.insertCharacter(character);
  }


  // Arrow fx for binding
  deleteCharacter = (name) => {
    const { characters } = this.state;
    const characterIndex = characters.findIndex(({Name}) => Name === name);
    characters.splice(characterIndex, 1);
    database.ref(DATA_MODEL.CHARACTERS.name + '/' + characterIndex).remove();
    this.setState({ characters: characters });
    this.charactersRef.set(characters);
  }

  // Arrow fx for binding
  insertCharacter = (character) => {
    if (character.Name) {
      const { characters } = this.state;
        character.Race = 0;
        character.Class = 1;
        character.Skills = [];
        character.Weapons = [];
        character.WeaponRight = "";
        character.WeaponLeft = "";

      database.ref(DATA_MODEL.CHARACTERS.name + '/' + characters.length).set(character);
      characters.push(character);
      this.setState({ characters: characters });
    }
  }
}
export default Home