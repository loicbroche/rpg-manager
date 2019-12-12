import PropTypes from 'prop-types'
import { RacePropType, ClassPropType, WeaponCategoryPropType, WeaponPropType, SkillPropType, LevelPropType, CaracteristicPropType } from 'PropTypes';
import { ActionTypes } from '../actions/ActionTypes';

const initialState = {
    races: null,
    subRaces: null,
    classes: null,
    weaponCategories: null,
    weapons: null,
    armorCategories: null,
    armors: null,
    objectCategories: null,
    objects: null,
    equipmentCategories: null,
    equipments: null,
    mounts: null,
    ships: null,
    wares: null,
    hostelCategories: null,
    hostelServices: null,
    serviceCategories: null,
    services: null,
    trinkets: null,
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
        case ActionTypes.REFERENTIAL.LOAD_SUB_RACES:
            nextState = {
                ...state,
                subRaces: action.value
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
        case ActionTypes.REFERENTIAL.LOAD_ARMOR_CATEGORIES:
            nextState = {
                ...state,
                armorCategories: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_ARMORS:
            nextState = {
                ...state,
                armors: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_OBJECT_CATEGORIES:
            nextState = {
                ...state,
                objectCategories: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_OBJECTS:
            nextState = {
                ...state,
                objects: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_EQUIPMENT_CATEGORIES:
            nextState = {
                ...state,
                equipmentCategories: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_EQUIPMENTS:
            nextState = {
                ...state,
                equipments: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_HOSTEL_CATEGORIES:
            nextState = {
                ...state,
                hostelCategories: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_HOSTEL_SERVICES:
            nextState = {
                ...state,
                hostelServices: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_SERVICE_CATEGORIES:
            nextState = {
                ...state,
                serviceCategories: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_SERVICES:
            nextState = {
                ...state,
                services: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_MOUNTS:
            nextState = {
                ...state,
                mounts: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_SHIPS:
            nextState = {
                ...state,
                ships: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_WARES:
            nextState = {
                ...state,
                wares: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_TRINKETS:
            nextState = {
                ...state,
                trinkets: action.value
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