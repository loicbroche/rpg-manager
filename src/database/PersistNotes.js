import PropTypes from 'prop-types'
import { database } from './InitializeDatabase';
import { DATA_MODEL } from './DataModel'

export const ALL_CHARACTERS_ID = "*";

const updateNotes = (notes, characterId) => {
    const url = DATA_MODEL.NOTES.name + '/' + characterId;
    return database.ref(url).set(notes);
}
updateNotes.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.string),
    characterId: PropTypes.string.isRequired
}

export { updateNotes };