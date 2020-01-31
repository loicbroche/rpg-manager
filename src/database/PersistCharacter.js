import PropTypes from 'prop-types'
import { CharacterPropType } from 'PropTypes';
import { database } from './InitializeDatabase';
import { DATA_MODEL } from './DataModel'

//Characters
const insertCharacter = (character) => {
    const url = DATA_MODEL.CHARACTERS.name + '/' + character.Id;
    return database.ref(url).set(character);
}
insertCharacter.propTypes = {
    character: CharacterPropType.isRequired
}

const deleteCharacter = (characterId) => {
    const url = DATA_MODEL.CHARACTERS.name + '/' + characterId;
    return database.ref(url).remove();
}
deleteCharacter.propTypes = {
    characterId: PropTypes.string.isRequired
}

export { insertCharacter };
export { deleteCharacter };

const updateCharacterCaracteristic = (characterId, caracteristicName, value) => {
    const url = DATA_MODEL.CHARACTERS.name + '/' + characterId + '/'+caracteristicName;
    return database.ref(url).set(value);
}
updateCharacterCaracteristic.propTypes = {
    characterId: PropTypes.string.isRequired,
    caracteristicName: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
}

export { updateCharacterCaracteristic };

const insertCharacterElement = (characterId, caracteristicName, value) => {
    const url = DATA_MODEL.CHARACTERS.name + '/' + characterId + '/'+caracteristicName;
    database.ref(url).once('value', snapshot => {
        const elements = snapshot.val()||[];
        elements[elements.length] = value;
        database.ref(url).set(elements)
    });
}
insertCharacterElement.propTypes = {
    characterId: PropTypes.string.isRequired,
    caracteristicName: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
}

const deleteCharacterElement = (characterId, caracteristicName, value) => {
    const url = DATA_MODEL.CHARACTERS.name + '/' + characterId + '/'+caracteristicName;
    database.ref(url).once('value', snapshot => {
        const elements = snapshot.val()||[];
        const index = elements.findIndex((name) => name === value);
        elements.splice(index, 1);
        database.ref(url).set(elements);
    });
}
deleteCharacterElement.propTypes = {
    characterId: PropTypes.string.isRequired,

    caracteristicName: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
}

export { insertCharacterElement };
export { deleteCharacterElement };
