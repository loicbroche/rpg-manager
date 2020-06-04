import { ActionTypes } from './ActionTypes';
import { objectToArray } from 'database/Tools'

export const loadReferentialValuesAction = (actionType, values) => ({
    type: actionType,
    payload: objectToArray(values),
});

export const loadReferentialRacesAction = (races) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_RACES, races);
export const loadReferentialSubRacesAction = (subRaces) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_SUB_RACES, subRaces);
export const loadReferentialClassesAction = (classes) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_CLASSES, classes);
export const loadReferentialSpecialisationsAction = (specialisations) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_SPECIALISATIONS, specialisations);
export const loadReferentialFightStylesAction = (fightStyles) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_FIGHT_STYLES, fightStyles);
export const loadReferentialCapacitiesAction = (capacities) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_CAPACITIES, capacities);
export const loadReferentialCapacitiesDescriptionsAction = (capacitiesDescriptions) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_CAPACITIES_DESCRIPTIONS, capacitiesDescriptions);
export const loadReferentialRaceCapacitiesDescriptionsAction = (raceCapacities) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_RACE_CAPACITIES_DESCRIPTIONS, raceCapacities);
export const loadReferentialSpecialisationCapacitiesAction = (specialisationCapacities) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_SPECIALISATION_CAPACITIES, specialisationCapacities);
export const loadReferentialHistoricsAction = (historics) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_HISTORICS, historics);
export const loadReferentialWeaponCategoriesAction = (weaponCategories) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_WEAPON_CATEGORIES, weaponCategories);
export const loadReferentialWeaponsAction = (weapons) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_WEAPONS, weapons);
export const loadReferentialArmorCategoriesAction = (armorCategories) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_ARMOR_CATEGORIES, armorCategories);
export const loadReferentialArmorsAction = (armors) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_ARMORS, armors);
export const loadReferentialObjectCategoriesAction = (objectCategories) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_OBJECT_CATEGORIES, objectCategories);
export const loadReferentialObjectsAction = (objects) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_OBJECTS, objects);
export const loadReferentialEquipmentCategoriesAction = (equipmentCategories) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_EQUIPMENT_CATEGORIES, equipmentCategories);
export const loadReferentialEquipmensAction = (equipments) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_EQUIPMENTS, equipments);
export const loadReferentialHostelCategoriesAction = (hostelCategories) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_HOSTEL_CATEGORIES, hostelCategories);
export const loadReferentialHostelServicesAction = (hostelServices) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_HOSTEL_SERVICES, hostelServices);
export const loadReferentialServiceCategoriesAction = (serviceCategories) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_SERVICE_CATEGORIES, serviceCategories);
export const loadReferentialServicesAction = (services) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_SERVICES, services);
export const loadReferentialMonsterFamiliesAction = (monsterFamilies) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_MONSTER_FAMILIES, monsterFamilies);
export const loadReferentialMonsterSpeciesAction = (monsterSpecies) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_MONSTER_SPECIES, monsterSpecies);
export const loadReferentialMonstersAction = (monsters) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_MONSTERS, monsters);
export const loadReferentialMountsAction = (mounts) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_MOUNTS, mounts);
export const loadReferentialShipsAction = (ships) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_SHIPS, ships);
export const loadReferentialTrinketsAction = (trinkets) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_TRINKETS, trinkets);
export const loadReferentialSkillsAction = (skills) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_SKILLS, skills);
export const loadReferentialLevelsAction = (levels) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_LEVELS, levels);
export const loadReferentialCaracteristicsAction = (caracteristics) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_CARACTERISTICS, caracteristics);
export const loadReferentialSpellsAction = (spells) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_SPELLS, spells);
export const loadReferentialSpellsComplementsAction = (spellsComplements) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_SPELLS_COMPLEMENTS, spellsComplements);
export const loadReferentialAlterationsAction = (alterations) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_ALTERATIONS, alterations);
export const loadReferentialAlterationTypesAction = (alterationTypes) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_ALTERATION_TYPES, alterationTypes);
export const loadReferentialAlignmentsAction = (alignments) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_ALIGNMENTS, alignments);
export const loadReferentialLanguagesAction = (languages) => loadReferentialValuesAction(ActionTypes.REFERENTIAL.LOAD_LANGUAGES, languages);