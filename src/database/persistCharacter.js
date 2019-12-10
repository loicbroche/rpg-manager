import PropTypes from 'prop-types'
import { database } from './InitializeDatabase';
import { DATA_MODEL } from './DataModel'

const addCharacterSkills = (characterId, index, skillId) => {
    const url = DATA_MODEL.CHARACTERS.name + '/' + characterId + '/'+DATA_MODEL.CHARACTERS.columns.SKILLS.name+'/' + index;
    database.ref(url).set(skillId);
}
addCharacterSkills.propTypes = {
    characterId: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    skillId: PropTypes.number.isRequired
}

const deleteCharacterSkills = (characterId, index) => {
    const url = DATA_MODEL.CHARACTERS.name + '/' + characterId + '/'+DATA_MODEL.CHARACTERS.columns.SKILLS.name+'/' + index;
    database.ref(url).remove();
}
deleteCharacterSkills.propTypes = {
    characterId: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
}

export { addCharacterSkills };
export { deleteCharacterSkills };