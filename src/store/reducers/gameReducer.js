import PropTypes from 'prop-types'
import { CharacterPropType } from 'PropTypes';

import { ActionTypes } from '../actions/ActionTypes';

const initialState = {
    characters: null
}

function gameReducer(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case ActionTypes.CHARACTERS.LOAD:
            nextState = {
                ...state,
                characters: action.value
            }
            return nextState;
        case ActionTypes.CHARACTERS.LOAD_ONE:
                const character = action.value;
                let characters = { ...state.characters };
                characters[character.Id] = character;
                nextState = {
                    ...state,
                    characters: characters
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
        value: PropTypes.any.isRequired
    })
}

export default gameReducer;