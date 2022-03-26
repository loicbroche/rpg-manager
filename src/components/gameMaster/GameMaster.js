import React, { PureComponent } from 'react'
import { gameDatabase } from 'database/InitializeDatabase'
import { DATA_MODEL } from 'database/DataModel'
import { objectToArray } from 'database/Tools'
import { updateNotes, ALL_CHARACTERS_ID } from 'database/PersistNotes';

import './GameMaster.css'
import CharacterOverview from './CharacterOverview'
import GeneralNotesComponent from 'components/user/GeneralNotesComponent';

const GM_NAME = "GM";
class GameMaster extends PureComponent {
    constructor (props) {
        super(props);
		const scenarioId = this.props.match.params.scenarioId;
        this.state = {
		  scenarioId: scenarioId,
		  scenarios: null,
          characters: null,
          generalNotes: []
        }
		this.scenariosRef = gameDatabase.ref(DATA_MODEL.SCENARIOS.name);
        this.charactersRef = gameDatabase.ref(DATA_MODEL.CHARACTERS.name);
		this.updateScenarios = (snapshot)  => { this.setState({ scenarios: objectToArray(snapshot.val()) }); }
        this.updateCharacters = (snapshot)  => { this.setState({ characters: snapshot.val() && Object.values(objectToArray(snapshot.val())) }); }
        this.generalNotesRef = gameDatabase.ref(DATA_MODEL.NOTES.name+"/"+ALL_CHARACTERS_ID);
        this.updateGeneralNotes = (snapshot) => {
            const newState = snapshot.val() && Object.values(snapshot.val());
            this.setState({generalNotes: newState});
        }
    }

    componentDidMount() {
		this.scenariosRef.on('value', this.updateScenarios);
        this.charactersRef.on('value', this.updateCharacters);
        this.generalNotesRef.on('value', this.updateGeneralNotes);
    }
    componentWillUnmount() {
		this.scenariosRef.off('value', this.updateScenarios);
        this.charactersRef.off('value', this.updateCharacters);
        this.generalNotesRef.off('value', this.updateGeneralNotes);
    }

    render() {
		const { scenarioId, scenarios, characters, generalNotes } = this.state;
		const scenario = scenarios && scenarios[scenarioId];
		const scenariosCharacters = scenario && characters && characters.filter(character => scenario.Characters.includes(character.Id));
        return (
            <div className="game-master" >
                <span className="intro narrative">Bienvenu grand maître du jeu du scénario "{scenarioId}"! Ici tu gardera un oeil sur tous les personnages jouables</span>
                <GeneralNotesComponent notes={generalNotes} editorCharacter={GM_NAME} onChange={(value) => updateNotes(value, ALL_CHARACTERS_ID) } />
                <div className="characters-overview">
                    {scenariosCharacters?.map((character) => (
                        <CharacterOverview key={character.Id} character={character} />
                    ))}
                </div>
            </div>
        )
    }
}

export default GameMaster

