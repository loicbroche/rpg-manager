import PropTypes from 'prop-types'
import { gameDatabase } from './InitializeDatabase';
import { DATA_MODEL } from './DataModel'

export const ALL_CHARACTERS_ID = "*";

const onPersistError = (error, url, data) => {console.warn(`Erreur de persistance de notes (${url}) : ${error}`, JSON.stringify(data))}

const updateNotes = (notes, characterId) => {
    const url = DATA_MODEL.NOTES.name + '/' + characterId;
    return gameDatabase.ref(url).set(notes, (error) => { if (error) {onPersistError(error, url, notes)} });
}
updateNotes.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.string),
    characterId: PropTypes.string.isRequired
}

export { updateNotes };