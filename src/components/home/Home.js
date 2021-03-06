import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { gameDatabase } from 'database/InitializeDatabase'
import { DATA_MODEL } from 'database/DataModel'
import {DEFAULT_EMPTY_VALUE, DEFAULT_CARACTERISTIC_VALUE, DEFAULT_HEALTH_VALUE,
        DEFAULT_HP_VALUE, DEFAULT_MONEY_VALUE} from 'rules/Character.rules'
import { objectToArray } from 'database/Tools'
import { insertCharacter, deleteCharacter } from 'database/PersistCharacter';

import './Home.css'
import { ROUTE_GAME_MASTER } from 'App'
import CharacterInput from './CharacterInput'
import CharacterMenuItem from './CharacterMenuItem'

class Home extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      characters: null
    }
    this.charactersRef = gameDatabase.ref(DATA_MODEL.CHARACTERS.name);
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
        <Link to={ROUTE_GAME_MASTER} className="menu-item activable gm" title="Accéder à l'écran du maître du jeu">
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
      character.Alignment = DEFAULT_EMPTY_VALUE;
      character.Alterations= [];/**/
      character.Ammunition = 10;/**/
      character.Armor = DEFAULT_EMPTY_VALUE;/**/
      character.Charisma = DEFAULT_CARACTERISTIC_VALUE;
      character.Class = DEFAULT_EMPTY_VALUE;
      character.Constitution = DEFAULT_CARACTERISTIC_VALUE;
      character.Defects = null;
      character.Dexterity = DEFAULT_CARACTERISTIC_VALUE;
      character.DistanceWeapon = DEFAULT_EMPTY_VALUE;/**/
      character.Eyes = null;
      character.FightStyles = [];/**/
      character.Hairs = null;
      character.Health = DEFAULT_HEALTH_VALUE;
      character.Height = 0;
      character.HiddenCapacities = [];/**/
      character.Historic = DEFAULT_EMPTY_VALUE;
      character.History = null;
      character.HP = DEFAULT_HP_VALUE;
      character.Ideals = null;
      character.Intelligence = DEFAULT_CARACTERISTIC_VALUE;
      character.Languages = [];/**/
      character.Links = null;
      character.MasterArmors = [];/**/
      character.MasterObjects = [];/**/
      character.MasterWeapons = [];/**/
      character.MaxHP = DEFAULT_HP_VALUE;
      character.Money = DEFAULT_MONEY_VALUE;
      character.Notes = null;/**/
      character.Objects = [];/**/
      character.PersonnalityTraits = null;
      character.Resistances= [];/**/
      character.SatchelObjects = [];/**/
      character.Shield = DEFAULT_EMPTY_VALUE;/**/
      character.Skills = [];
      character.Skin = null;
      character.Specialisation = null;/**/
      character.Specials = 0;/**/
      character.SpellsLocations = [];/**/
      character.MinorSpells = [];/**/
      character.Spells = [];/**/
      character.Strength = DEFAULT_CARACTERISTIC_VALUE;/**/
      character.SubRace = DEFAULT_EMPTY_VALUE;
      character.Weapon = DEFAULT_EMPTY_VALUE;
      character.Weight = 0;
      character.Wisdom = DEFAULT_CARACTERISTIC_VALUE;
      character.XP = 0;      

      insertCharacter(character);
    }
  }
}
export default Home