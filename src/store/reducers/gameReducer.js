import PropTypes from 'prop-types'
import { ScenarioPropType, CharacterPropType } from 'PropTypes';

import { ActionTypes } from '../actions/ActionTypes';

const initialState = {
	scenarios: null,
    characters: null,
    notes: null
}

function gameReducer(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case ActionTypes.SCENARIOS.LOAD:
            nextState = {
                ...state,
                scenarios: action.payload
            }
            return nextState;
        case ActionTypes.SCENARIOS.LOAD_ONE:
                const scenario = action.payload;
                let scenarios = { ...state.scenarios };
                scenarios[scenario.Id] = scenario;
                nextState = {
                    ...state,
                    scenarios: scenarios
                }
                return nextState;
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
		scenarios: PropTypes.arrayOf(ScenarioPropType).isRequired,
        characters: PropTypes.arrayOf(CharacterPropType).isRequired,
    }),
    action: PropTypes.shape({
        type: PropTypes.string.isRequired,
        payload: PropTypes.any.isRequired
    })
}

export default gameReducer;