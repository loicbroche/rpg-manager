import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { database } from 'database/InitializeDatabase'
import { DATA_MODEL } from 'database/DataModel'
import { objectToArray } from 'database/Tools'
import { insertCharacter, deleteCharacter } from 'database/PersistCharacter';

import './Home.css'
import { ROUTE_GAME_MASTER } from 'App'
import CharacterInput from './CharacterInput'
import CharacterMenuItem from './CharacterMenuItem'

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      characters: null
    }
    this.charactersRef = database.ref(DATA_MODEL.CHARACTERS.name);
    this.updateCharacters = (snapshot)  => { this.setState({ characters: objectToArray(snapshot.val()) }); }
  }

  componentDidMount() {
    document.title = "JdR Manager";
    this.charactersRef.on('value', this.updateCharacters);
  }
  componentWillUnmount() {
      this.charactersRef.off('value', this.updateCharacters);
  }

  render()  {
    const { characters} = this.state
    return (
      <div className="menu">
        <Link to={ROUTE_GAME_MASTER} className="menu-item gm">
            Maître du jeu
        </Link>
        {characters && Object.values(characters).map(({ Id, Name}) => (
            <div key={Name} className="menu-item character">
              <CharacterMenuItem id={Id} name={Name} onRemove={deleteCharacter} />
            </div>
          ))}
        <div className="menu-item"><CharacterInput onSubmit={this.addCharacterEntry} /></div>
      </div>
    )
  }

  // Arrow fx for binding
  addCharacterEntry = (character) => {
    const { characters } = this.state;
    character.Id = character.Name;
    return characters[character.Id] ? "Un personnage de ce nom existe déjà" : this.insertCharacter(character);
  }

  // Arrow fx for binding
  insertCharacter = (character) => {
    if (character.Name) {
        character.Race = "ELF";
        character.Class = "BARBARIAN";
        character.ChargeCapacity = 2000;
        character.MasterBonus = 2;
        character.Skills = [];
        character.MasterWeapons = [];
        character.MasterArmors = [];
        character.MasterObjects = [];
        character.Historic = "";
        character.Alignment = "Neutre";
        character.Age = 0;
        character.Height = 0;
        character.Width = 0;
        character.Eyes = "";
        character.Skin = "";
        character.Hairs = "";
        character.PersonnalityTraits = "";
        character.Ideals = "";
        character.Links = "";
        character.Defects = "";
        character.History = "";
        character.Languages = "";
        character.XP = 0;
        character.Level = 1;
        character.MaxHP = 8;
        character.HP = 8;
        character.AC = 10;
        character.WeaponRight = "";
        character.WeaponLeft = "";
        character.Armor = "";
        character.Money = 1000;
        character.Objects = [];

      insertCharacter(character);
      //characters.push(character);
      //this.setState({ characters: characters });
    }
  }
}
export default Home