import { ActionTypes } from '../actions/ActionTypes';

const initialState = {
    races: null,
    classes: null,
    weaponCategories: null,
    weapons: null,
    skills: null,
    caracteristics: null
}

function referentialReducer(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case ActionTypes.REFERENTIAL.LOAD_RACES:
            nextState = {
                ...state,
                races: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_CLASSES:
            nextState = {
                ...state,
                classes: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_WEAPON_CATEGORIES:
            nextState = {
                ...state,
                weaponCategories: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_WEAPONS:
            nextState = {
                ...state,
                weapons: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_SKILLS:
            nextState = {
                ...state,
                skills: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_CARACTERISTICS:
            nextState = {
                ...state,
                caracteristics: action.value
            }
            return nextState;
        default:
            return state;
    }
}

export default referentialReducer;