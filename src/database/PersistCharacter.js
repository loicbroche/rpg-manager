import PropTypes from 'prop-types'
import { CharacterPropType } from 'PropTypes';
import { gameDatabase } from './InitializeDatabase';
import { DATA_MODEL } from './DataModel'

const onPersistError = (error, url, data) => {console.warn(`Erreur de persistance de personnage (${url}) : ${error}`, JSON.stringify(data))}
//Characters
const insertCharacter = (character, scenarioId) => {
	const scenarioUrl = DATA_MODEL.SCENARIOS.name + '/' + scenarioId + '/Characters';
    const characterUrl = DATA_MODEL.CHARACTERS.name + '/' + character.Id;
	gameDatabase.ref(scenarioUrl).once('value', snapshot => {
	const characters = snapshot.val()||[];
        characters[characters.length] = character.Name;
        gameDatabase.ref(scenarioUrl).set(characters, (error) => { if (error) {onPersistError(error, scenarioUrl, characters)} })
    });
    return gameDatabase.ref(characterUrl).set(character, (error) => { if (error) {onPersistError(error, characterUrl, character)} });
}
insertCharacter.propTypes = {
    character: CharacterPropType.isRequired,
	scenarioId: PropTypes.string.isRequired
}

const deleteCharacter = (characterId, scenarioId) => {
	const scenarioUrl = DATA_MODEL.SCENARIOS.name + '/' + scenarioId + '/Characters';
    const characterUrl = DATA_MODEL.CHARACTERS.name + '/' + characterId;
	gameDatabase.ref(scenarioUrl).once('value', snapshot => {
        const characters = snapshot.val()||[];
        const index = characters.findIndex((name) => name === characterId);
        characters.splice(index, 1);
        gameDatabase.ref(scenarioUrl).set(characters, (error) => { if (error) {onPersistError(error, scenarioUrl, characters)} });
    });
    return gameDatabase.ref(characterUrl).remove();
}
deleteCharacter.propTypes = {
    characterId: PropTypes.string.isRequired,
	scenarioId: PropTypes.string.isRequired
}

export { insertCharacter };
export { deleteCharacter };

const updateCharacterCaracteristic = (characterId, caracteristicName, value) => {
    const characterUrl = DATA_MODEL.CHARACTERS.name + '/' + characterId + '/'+caracteristicName;
    return gameDatabase.ref(characterUrl).set(value, (error) => { if (error) {onPersistError(error, characterUrl, value)} });
}
updateCharacterCaracteristic.propTypes = {
    characterId: PropTypes.string.isRequired,
    caracteristicName: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
}

export { updateCharacterCaracteristic };

const insertCharacterElement = (characterId, caracteristicName, value) => {
    const url = DATA_MODEL.CHARACTERS.name + '/' + characterId + '/'+caracteristicName;
    gameDatabase.ref(url).once('value', snapshot => {
        const elements = snapshot.val()||[];
        elements[elements.length] = value;
        gameDatabase.ref(url).set(elements, (error) => { if (error) {onPersistError(error, url, elements)} })
    });
}
insertCharacterElement.propTypes = {
    characterId: PropTypes.string.isRequired,
    caracteristicName: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
}

const deleteCharacterElement = (characterId, caracteristicName, value) => {
    const url = DATA_MODEL.CHARACTERS.name + '/' + characterId + '/'+caracteristicName;
    gameDatabase.ref(url).once('value', snapshot => {
        const elements = snapshot.val()||[];
        const index = elements.findIndex((name) => name === value);
        elements.splice(index, 1);
        gameDatabase.ref(url).set(elements, (error) => { if (error) {onPersistError(error, url, elements)} });
    });
}
deleteCharacterElement.propTypes = {
    characterId: PropTypes.string.isRequired,

    caracteristicName: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
}

export { insertCharacterElement };
export { deleteCharacterElement };
