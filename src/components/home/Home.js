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
        <Link to={ROUTE_GAME_MASTER} className="menu-item activable gm">
            Maître du jeu
        </Link>
        {characters && Object.values(characters).map(({ Id, Name}) => (
            <div key={Name} className="menu-item activable character">
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
      character.Age = 0;
      character.Alignment = "NB";
      character.Alterations= [];/**/
      character.Ammunition = 10;/**/
      character.Armor = "-";/**/
      character.ChargeCapacity = 20000;
      character.Charisma = 10;
      character.Class = "BARBARIAN";
      character.Constitution = 10;
      character.Defects = "";
      character.Dexterity = 10;
      character.DistanceWeapon = "-";/**/
      character.Eyes = "";
      character.Hairs = "";
      character.Health = 4;
      character.Height = 0;
      character.Historic = "ACOLYTE";
      character.History = "";
      character.HP = 8;
      character.Ideals = "";
      character.Intelligence = 10;
      character.Languages = [];/**/
      character.Links = "";
      character.MasterArmors = [];/**/
      character.MasterObjects = [];/**/
      character.MasterWeapons = [];/**/
      character.MaxHP = 8;
      character.Money = 1000;
      character.Objects = [];/**/
      character.PersonnalityTraits = "";
      character.Shield = "-";/**/
      character.Skills = [];
      character.Skin = "";
      character.Specials = 0;/**/
      character.Spells = [];/**/
      character.Strength = 10;/**/
      character.SubRace = "AARAKOCRA";
      character.Weapon = "-";
      character.Weight = 0;
      character.Wisdom = 10;
      character.XP = 0;      

      insertCharacter(character);
    }
  }
}
export default Home