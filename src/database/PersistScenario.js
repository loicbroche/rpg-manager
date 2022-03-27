import PropTypes from 'prop-types'
import { ScenarioPropType } from 'PropTypes';
import { gameDatabase } from './InitializeDatabase';
import { DATA_MODEL } from './DataModel'
import { deleteCharacter } from 'database/PersistCharacter';

const onPersistError = (error, url, data) => {console.warn(`Erreur de persistance de scénario (${url}) : ${error}`, JSON.stringify(data))}
//Scenarios
const insertScenario = (scenario) => {
	if (scenario) {
		const scenarioUrl = DATA_MODEL.SCENARIOS.name + '/' + scenario.Id;
		return gameDatabase.ref(scenarioUrl).set(scenario, (error) => { if (error) {onPersistError(error, scenarioUrl, scenario)} });
	}
}
insertScenario.propTypes = {
    scenario: ScenarioPropType.isRequired
}

const deleteScenario = (scenario, deleteCharacters) => {
	if (scenario.Id) {
		if (deleteCharacters) {
			const characters = (scenario.Characters||[]);
			characters.forEach((characterId) => {
				  deleteCharacter(characterId, scenario.Id);
			});
		}
		const scenarioUrl = DATA_MODEL.SCENARIOS.name + '/' + scenario.Id;
		return gameDatabase.ref(scenarioUrl).remove();
	}
}

deleteScenario.propTypes = {
	scenarioId: PropTypes.string.isRequired,
	deleteCharacters: PropTypes.boolean
}

deleteScenario.defaultProps = {
  deleteCharacters: false
}

export { insertScenario };
export { deleteScenario };
