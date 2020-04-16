import PropTypes from 'prop-types'
import * as LocalPropTypes from 'PropTypes';
import { ActionTypes } from '../actions/ActionTypes';

const initialState = {
    races: null,
    subRaces: null,
    classes: null,
    specialisations: null,
    fightStyles: null,
    capacities: null,
    capacitiesDescriptions: null,
    raceCapacitiesDescriptions: null,
    specialisationCapacities: null,
    historics: null,
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
    skills: null,
    spells: null,
    alterations: null,
    alterationTypes: null,
    alignments: null,
    languages: null
}

function referentialReducer(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case ActionTypes.REFERENTIAL.LOAD_RACES:
            nextState = {
                ...state,
                races: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_SUB_RACES:
            nextState = {
                ...state,
                subRaces: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_CLASSES:
            nextState = {
                ...state,
                classes: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_SPECIALISATIONS:
            nextState = {
                ...state,
                specialisations: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_FIGHT_STYLES:
            nextState = {
                ...state,
                fightStyles: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_CAPACITIES:
            nextState = {
                ...state,
                capacities: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_CAPACITIES_DESCRIPTIONS:
            nextState = {
                ...state,
                capacitiesDescriptions: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_RACE_CAPACITIES_DESCRIPTIONS:
            nextState = {
                ...state,
                raceCapacitiesDescriptions: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_SPECIALISATION_CAPACITIES:
            nextState = {
                ...state,
                specialisationCapacities: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_HISTORICS:
            nextState = {
                ...state,
                historics: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_WEAPON_CATEGORIES:
            nextState = {
                ...state,
                weaponCategories: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_WEAPONS:
            nextState = {
                ...state,
                weapons: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_ARMOR_CATEGORIES:
            nextState = {
                ...state,
                armorCategories: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_ARMORS:
            nextState = {
                ...state,
                armors: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_OBJECT_CATEGORIES:
            nextState = {
                ...state,
                objectCategories: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_OBJECTS:
            nextState = {
                ...state,
                objects: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_EQUIPMENT_CATEGORIES:
            nextState = {
                ...state,
                equipmentCategories: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_EQUIPMENTS:
            nextState = {
                ...state,
                equipments: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_HOSTEL_CATEGORIES:
            nextState = {
                ...state,
                hostelCategories: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_HOSTEL_SERVICES:
            nextState = {
                ...state,
                hostelServices: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_SERVICE_CATEGORIES:
            nextState = {
                ...state,
                serviceCategories: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_SERVICES:
            nextState = {
                ...state,
                services: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_MOUNTS:
            nextState = {
                ...state,
                mounts: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_SHIPS:
            nextState = {
                ...state,
                ships: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_WARES:
            nextState = {
                ...state,
                wares: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_TRINKETS:
            nextState = {
                ...state,
                trinkets: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_LEVELS:
            nextState = {
                ...state,
                levels: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_CARACTERISTICS:
            nextState = {
                ...state,
                caracteristics: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_SKILLS:
            nextState = {
                ...state,
                skills: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_SPELLS:
            nextState = {
                ...state,
                spells: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_ALTERATIONS:
            nextState = {
                ...state,
                alterations: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_ALTERATION_TYPES:
            nextState = {
                ...state,
                alterationTypes: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_ALIGNMENTS:
            nextState = {
                ...state,
                alignments: action.payload
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_LANGUAGES:
            nextState = {
                ...state,
                languages: action.payload
            }
            return nextState;
        default:
            return state;
    }
}

referentialReducer.PropTypes = {
    state: PropTypes.shape({
        races: PropTypes.arrayOf(LocalPropTypes.RacePropType).isRequired,
		subRaces: PropTypes.arrayOf(LocalPropTypes.SubRacePropType).isRequired,
        classes: PropTypes.arrayOf(LocalPropTypes.ClassPropType).isRequired,
        specialisations: PropTypes.arrayOf(LocalPropTypes.SpecialisationPropType).isRequired,
		capacities: PropTypes.arrayOf(LocalPropTypes.CapacityPropType).isRequired,
		historics: PropTypes.arrayOf(LocalPropTypes.HistoricPropType).isRequired,
        weaponCategories: PropTypes.arrayOf(LocalPropTypes.WeaponCategoryPropType).isRequired,
        weapons: PropTypes.arrayOf(LocalPropTypes.WeaponPropType).isRequired,
        armorCategories: PropTypes.arrayOf(LocalPropTypes.ArmorCategoryPropType).isRequired,
        armors: PropTypes.arrayOf(LocalPropTypes.ArmorPropType).isRequired,
		objectCategories: PropTypes.arrayOf(LocalPropTypes.ObjectCategoryPropType).isRequired,
        objects: PropTypes.arrayOf(LocalPropTypes.ObjectPropType).isRequired,
        equipmentCategories: PropTypes.arrayOf(LocalPropTypes.EquipmentCategoryPropType).isRequired,
        equipments: PropTypes.arrayOf(LocalPropTypes.EquipmentPropType).isRequired,
		mounts: PropTypes.arrayOf(LocalPropTypes.MountPropType).isRequired,
		ships: PropTypes.arrayOf(LocalPropTypes.ShipPropType).isRequired,
		wares: PropTypes.arrayOf(LocalPropTypes.WarePropType).isRequired,
		hostelCategories: PropTypes.arrayOf(LocalPropTypes.HostelCategoryPropType).isRequired,
		hostelServices: PropTypes.arrayOf(LocalPropTypes.HostelServicePropType).isRequired,
		serviceCategories: PropTypes.arrayOf(LocalPropTypes.ServiceCategoryPropType).isRequired,
		services: PropTypes.arrayOf(LocalPropTypes.ServicePropType).isRequired,
		trinkets: PropTypes.arrayOf(LocalPropTypes.TrinketPropType).isRequired,
        levels: PropTypes.arrayOf(LocalPropTypes.LevelPropType).isRequired,
        caracteristics: PropTypes.arrayOf(LocalPropTypes.CaracteristicPropType).isRequired,
        skills: PropTypes.arrayOf(LocalPropTypes.SkillPropType).isRequired,
        spells: PropTypes.arrayOf(LocalPropTypes.AlterationPropType).isRequired,
        alterations: PropTypes.arrayOf(LocalPropTypes.AlterationPropType).isRequired,
        alignments: PropTypes.arrayOf(LocalPropTypes.AlterationPropType).isRequired,
        languages: PropTypes.arrayOf(LocalPropTypes.AlterationPropType).isRequired
    }),
    action: PropTypes.shape({
        type: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired
    })
}

export default referentialReducer;