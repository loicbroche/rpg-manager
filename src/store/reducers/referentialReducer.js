import { ActionTypes } from '../actions/ActionTypes';
import PropTypes from 'prop-types'
import { RacePropType, ClassPropType, WeaponCategoryPropType, WeaponPropType, SkillPropType, LevelPropType, CaracteristicPropType } from '../../PropTypes';

const initialState = {
    races: null,
    classes: null,
    weaponCategories: null,
    weapons: null,
    levels: null,
    caracteristics: null,
    skills: null
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
        case ActionTypes.REFERENTIAL.LOAD_LEVELS:
            nextState = {
                ...state,
                levels: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_CARACTERISTICS:
            nextState = {
                ...state,
                caracteristics: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_SKILLS:
            nextState = {
                ...state,
                skills: action.value
            }
            return nextState;
        default:
            return state;
    }
}

referentialReducer.PropTypes = {
    state: PropTypes.shape({
        races: PropTypes.arrayOf(RacePropType).isRequired,
        classes: PropTypes.arrayOf(ClassPropType).isRequired,
        weaponCategories: PropTypes.arrayOf(WeaponCategoryPropType).isRequired,
        weapons: PropTypes.arrayOf(WeaponPropType).isRequired,
        levels: PropTypes.arrayOf(LevelPropType).isRequired,
        caracteristics: PropTypes.arrayOf(CaracteristicPropType).isRequired,
        skills: PropTypes.arrayOf(SkillPropType).isRequired
    }),
    action: PropTypes.shape({
        type: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired
    })
}

export default referentialReducer;