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
const insertCharacterSkills = (characterId, skillId) => {
    const url = DATA_MODEL.CHARACTERS.name + '/' + characterId + '/'+DATA_MODEL.CHARACTERS.columns.SKILLS.name;
    database.ref(url).once('value', snapshot => {
        const skills = snapshot.val()||[];
        skills[skills.length] = skillId;
        database.ref(url).set(skills)
    });
}
insertCharacterSkills.propTypes = {
    characterId: PropTypes.string.isRequired,
    skillId: PropTypes.string.isRequired
}

const deleteCharacterSkills = (characterId, skillId) => {
    const url = DATA_MODEL.CHARACTERS.name + '/' + characterId + '/'+DATA_MODEL.CHARACTERS.columns.SKILLS.name;
    database.ref(url).once('value', snapshot => {
        const skills = snapshot.val()||[];
        const index = skills.findIndex((name) => name === skillId);
        skills.splice(index, 1);
        database.ref(url).set(skills);
    });
}
deleteCharacterSkills.propTypes = {
    characterId: PropTypes.string.isRequired,
    skillId: PropTypes.string.isRequired
}

export { insertCharacterSkills };
export { deleteCharacterSkills };

//Weapons
const insertCharacterWeapons = (characterId, weaponId) => {
    const url = DATA_MODEL.CHARACTERS.name + '/' + characterId + '/'+DATA_MODEL.CHARACTERS.columns.MASTER_WEAPONS.name;
    database.ref(url).once('value', snapshot => {
        const weapons = snapshot.val()||[];
        weapons[weapons.length] = weaponId;
        database.ref(url).set(weapons)
    });
}
insertCharacterWeapons.propTypes = {
    characterId: PropTypes.string.isRequired,
    weaponId: PropTypes.string.isRequired
}

const deleteCharacterWeapons = (characterId, weaponId) => {
    const url = DATA_MODEL.CHARACTERS.name + '/' + characterId + '/'+DATA_MODEL.CHARACTERS.columns.MASTER_WEAPONS.name;
    database.ref(url).once('value', snapshot => {
        const weapons = snapshot.val()||[];
        const index = weapons.findIndex((name) => name === weaponId);
        weapons.splice(index, 1);
        database.ref(url).set(weapons);
    });
}
deleteCharacterWeapons.propTypes = {
    characterId: PropTypes.string.isRequired,
    weaponId: PropTypes.string.isRequired
}

export { insertCharacterWeapons };
export { deleteCharacterWeapons };

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
