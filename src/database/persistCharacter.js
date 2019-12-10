import PropTypes from 'prop-types'
import { CharacterPropType } from '../PropTypes';
import { database } from './InitializeDatabase';
import { DATA_MODEL } from './DataModel'


//Characters
const insertCharacter = (character) => {
    //console.log("Insert character", JSON.stringify(character));
    const url = DATA_MODEL.CHARACTERS.name + '/' + character.Name;
    database.ref(url).set(character);
}
insertCharacter.propTypes = {
    character: CharacterPropType.isRequired
}

const deleteCharacter = (name) => {
    const url = DATA_MODEL.CHARACTERS.name + '/' + name;
    database.ref(url).remove();
}
deleteCharacter.propTypes = {
    name: PropTypes.string.isRequired
}

export { insertCharacter };
export { deleteCharacter };

//Skills
const insertCharacterSkills = (name, index, skillName) => {
    const url = DATA_MODEL.CHARACTERS.name + '/' + name + '/'+DATA_MODEL.CHARACTERS.columns.SKILLS.name+'/' + index;
    database.ref(url).set(skillName);
}
insertCharacterSkills.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    skillName: PropTypes.string.isRequired
}

const deleteCharacterSkills = (characterName, index) => {
    const url = DATA_MODEL.CHARACTERS.name + '/' + characterName + '/'+DATA_MODEL.CHARACTERS.columns.SKILLS.name+'/' + index;
    database.ref(url).remove();
}
deleteCharacterSkills.propTypes = {
    characterName: PropTypes.string.isRequired,
    skillId: PropTypes.number.isRequired
}

export { insertCharacterSkills };
export { deleteCharacterSkills };