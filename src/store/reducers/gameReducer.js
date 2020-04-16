import PropTypes from 'prop-types'
import { CharacterPropType } from 'PropTypes';

import { ActionTypes } from '../actions/ActionTypes';

const initialState = {
    characters: null,
    notes: null
}

function gameReducer(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case ActionTypes.CHARACTERS.LOAD:
            nextState = {
                ...state,
                characters: action.payload
            }
            return nextState;
        case ActionTypes.CHARACTERS.LOAD_ONE:
                const character = action.payload;
                let characters = { ...state.characters };
                characters[character.Id] = character;
                nextState = {
                    ...state,
                    characters: characters
                }
                return nextState;
        case ActionTypes.CHARACTERS.LOAD_NOTES:
            nextState = {
                ...state,
                characters: action.payload
            }
            return nextState;
        default:
            return state;
    }
}

gameReducer.PropTypes = {
    state: PropTypes.shape({
        characters: PropTypes.arrayOf(CharacterPropType).isRequired,
    }),
    action: PropTypes.shape({
        type: PropTypes.string.isRequired,
        payload: PropTypes.any.isRequired
    })
}

export default gameReducer;