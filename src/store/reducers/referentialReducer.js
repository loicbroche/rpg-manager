import PropTypes from 'prop-types'
import { RacePropType, SubRacePropType, ClassPropType, WeaponCategoryPropType, WeaponPropType,
         ArmorCategoryPropType, ArmorPropType, SkillPropType, LevelPropType, CaracteristicPropType,
         CapacityPropType, HistoricPropType, ObjectCategoryPropType, ObjectPropType, EquipmentCategoryPropType,
         EquipmentPropType, MountPropType, ShipPropType, WarePropType, HostelCategoryPropType, HostelServicePropType,
         ServiceCategoryPropType, ServicePropType, TrinketPropType, AlterationPropType } from 'PropTypes';
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
        case ActionTypes.REFERENTIAL.LOAD_SPECIALISATIONS:
            nextState = {
                ...state,
                specialisations: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_FIGHT_STYLES:
            nextState = {
                ...state,
                fightStyles: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_CAPACITIES:
            nextState = {
                ...state,
                capacities: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_CAPACITIES_DESCRIPTIONS:
            nextState = {
                ...state,
                capacitiesDescriptions: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_RACE_CAPACITIES_DESCRIPTIONS:
            nextState = {
                ...state,
                raceCapacitiesDescriptions: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_SPECIALISATION_CAPACITIES:
            nextState = {
                ...state,
                specialisationCapacities: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_HISTORICS:
            nextState = {
                ...state,
                historics: action.value
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
        case ActionTypes.REFERENTIAL.LOAD_SPELLS:
            nextState = {
                ...state,
                spells: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_ALTERATIONS:
            nextState = {
                ...state,
                alterations: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_ALTERATION_TYPES:
            nextState = {
                ...state,
                alterationTypes: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_ALIGNMENTS:
            nextState = {
                ...state,
                alignments: action.value
            }
            return nextState;
        case ActionTypes.REFERENTIAL.LOAD_LANGUAGES:
            nextState = {
                ...state,
                languages: action.value
            }
            return nextState;
        default:
            return state;
    }
}

referentialReducer.PropTypes = {
    state: PropTypes.shape({
        races: PropTypes.arrayOf(RacePropType).isRequired,
		subRaces: PropTypes.arrayOf(SubRacePropType).isRequired,
        classes: PropTypes.arrayOf(ClassPropType).isRequired,
		capacities: PropTypes.arrayOf(CapacityPropType).isRequired,
		historics: PropTypes.arrayOf(HistoricPropType).isRequired,
        weaponCategories: PropTypes.arrayOf(WeaponCategoryPropType).isRequired,
        weapons: PropTypes.arrayOf(WeaponPropType).isRequired,
        armorCategories: PropTypes.arrayOf(ArmorCategoryPropType).isRequired,
        armors: PropTypes.arrayOf(ArmorPropType).isRequired,
		objectCategories: PropTypes.arrayOf(ObjectCategoryPropType).isRequired,
        objects: PropTypes.arrayOf(ObjectPropType).isRequired,
        equipmentCategories: PropTypes.arrayOf(EquipmentCategoryPropType).isRequired,
        equipments: PropTypes.arrayOf(EquipmentPropType).isRequired,
		mounts: PropTypes.arrayOf(MountPropType).isRequired,
		ships: PropTypes.arrayOf(ShipPropType).isRequired,
		wares: PropTypes.arrayOf(WarePropType).isRequired,
		hostelCategories: PropTypes.arrayOf(HostelCategoryPropType).isRequired,
		hostelServices: PropTypes.arrayOf(HostelServicePropType).isRequired,
		serviceCategories: PropTypes.arrayOf(ServiceCategoryPropType).isRequired,
		services: PropTypes.arrayOf(ServicePropType).isRequired,
		trinkets: PropTypes.arrayOf(TrinketPropType).isRequired,
        levels: PropTypes.arrayOf(LevelPropType).isRequired,
        caracteristics: PropTypes.arrayOf(CaracteristicPropType).isRequired,
        skills: PropTypes.arrayOf(SkillPropType).isRequired,
        spells: PropTypes.arrayOf(AlterationPropType).isRequired,
        alterations: PropTypes.arrayOf(AlterationPropType).isRequired,
        alignments: PropTypes.arrayOf(AlterationPropType).isRequired,
        languages: PropTypes.arrayOf(AlterationPropType).isRequired
    }),
    action: PropTypes.shape({
        type: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired
    })
}

export default referentialReducer;