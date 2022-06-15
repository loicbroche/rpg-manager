import React, { PureComponent } from 'react'
import { ScenarioPropType } from 'PropTypes'
import {confirm} from 'Tools'
import { Link } from 'react-router-dom'
import { gameDatabase } from 'database/InitializeDatabase'
import { DATA_MODEL } from 'database/DataModel'
import {DEFAULT_EMPTY_VALUE, DEFAULT_CARACTERISTIC_VALUE, DEFAULT_HEALTH_VALUE,
        DEFAULT_HP_VALUE, DEFAULT_MONEY_VALUE} from 'rules/Character.rules'
import { objectToArray } from 'database/Tools'
import { deleteScenario } from 'database/PersistScenario';
import { insertCharacter, deleteCharacter } from 'database/PersistCharacter';

import './ScenarioComponent.css'
import { ROUTE_GAME_MASTER } from 'App'
import CharacterInput from './CharacterInput'
import CharacterMenuItem from './CharacterMenuItem'
import ExpendableComponent from 'components/shared/ExpendableComponent';

const deleteImage = require('images/delete.png');

class ScenarioComponent extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
		characters: null
    }
    this.scenariosRef = gameDatabase.ref(DATA_MODEL.SCENARIOS.name);
	this.charactersRef = gameDatabase.ref(DATA_MODEL.CHARACTERS.name);
	this.updateScenarios = (snapshot)  => { this.setState({ scenarios: objectToArray(snapshot.val()) }); }
    this.updateCharacters = (snapshot)  => { this.setState({ characters: objectToArray(snapshot.val()) }); }
  }

  componentDidMount() {
	this.charactersRef.on('value', this.updateCharacters);
  }
  componentWillUnmount() {
	  this.charactersRef.off('value', this.updateCharacters);
  }

  render()  {
    const { scenario } = this.props
    return (
      <div className="scenario">
		<ExpendableComponent key={scenario.Id}
				extensorTitle={`Scénario "${scenario.Id}"`}
				header={<span className="scenario-header">
							<span className="delete-scenario activable transparent" title="Supprimer" role="button" onClick={() => this.onDelete(scenario)}>
								<img className="delete-scenario-img" src={deleteImage} alt="Supprimer" />
							</span>
							<span className="scenario-name">Scénario "{scenario.Id}"</span>
						</span>}
				reverse={false}
				relativeExpension={true} >                 

			<div className="scenario-content">
				<Link to={`${ROUTE_GAME_MASTER}/${scenario.Id}`} className="scenario-item activable gm" title={`Accéder à l'écran du maître du jeu du scénario "${scenario.Id}"`}>
					Maître du jeu
				</Link>
				{scenario.Characters && Object.values(scenario.Characters).map((characterId) => (
					<div key={characterId} className="scenario-item activable character">
					  <CharacterMenuItem id={characterId} scenarioId={scenario.Id} name={characterId} scenarioId={scenario.Id} onRemove={deleteCharacter} />
					</div>
					))
				}
				<div className="scenario-item"><CharacterInput scenarioId={scenario.Id} onSubmit={this.addCharacterEntry} /></div>
			</div>
		</ExpendableComponent>
      </div>
    )
  }

  // Arrow fx for binding
  addCharacterEntry = (character, scenarioId) => {
    const { characters } = this.state;
    character.Id = character.Name;
    return characters[character.Id] ? "Un personnage de ce nom existe déjà" : this.insertCharacter(character, scenarioId);
  }

  // Arrow fx for binding
  insertCharacter = (character, scenarioId) => {
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

      insertCharacter(character, scenarioId);
    }
  }

  onDelete = (scenario) => {
    confirm(`Êtes-vous certain de vouloir supprimer le scénario "${scenario.Id}" ?`,
            (callbackState) => {
				if (callbackState) {
					confirm(`Voulez-vous également supprimer tous les personnages du scénario "${scenario.Id}" ?`,
							(callbackState) => {deleteScenario(scenario, callbackState);},
							`Suppression des personnages du scénario "${scenario.Id}"`,
							"Oui",
							"Non"
					);
				}
			},
            `Suppression du scénario "${scenario.Id}"`,
            "Supprimer"
    );
  }

}

ScenarioComponent.propTypes = {
	scenario: ScenarioPropType.isRequired,
}

export default ScenarioComponent