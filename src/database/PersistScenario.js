import PropTypes from 'prop-types'
import { ScenarioPropType } from 'PropTypes';
import { gameDatabase } from './InitializeDatabase';
import { DATA_MODEL } from './DataModel'

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

const deleteScenario = (scenarioId) => {
	if (scenarioId) {
		const scenarioUrl = DATA_MODEL.SCENARIOS.name + '/' + scenarioId;
		return gameDatabase.ref(scenarioUrl).remove();
	}
}
deleteScenario.propTypes = {
	scenarioId: PropTypes.string.isRequired
}

export { insertScenario };
export { deleteScenario };
