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

//Skills
const insertCharacterSkills = (characterId, index, skillId) => {
    const url = DATA_MODEL.CHARACTERS.name + '/' + characterId + '/'+DATA_MODEL.CHARACTERS.columns.SKILLS.name+'/' + index;
    return database.ref(url).set(skillId);
}
insertCharacterSkills.propTypes = {
    characterId: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    skillId: PropTypes.string.isRequired
}

const deleteCharacterSkills = (characterId, index) => {
    const url = DATA_MODEL.CHARACTERS.name + '/' + characterId + '/'+DATA_MODEL.CHARACTERS.columns.SKILLS.name+'/' + index;
    return database.ref(url).remove();
}
deleteCharacterSkills.propTypes = {
    characterId: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
}

export { insertCharacterSkills };
export { deleteCharacterSkills };

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
