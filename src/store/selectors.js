import { createSelector } from 'reselect';
import { getChargeCapacity } from 'rules/Character.rules'
import { MAX_CARACTERISTIC, BONUS_STEP } from 'rules/Caracteristics.rules'
import { CA_CARACTERISTIC_NAME, CA_CARACTERISTIC_CODE } from 'rules/AC.rules'

const HTH_CATEGORY_CODES = ["C_MEL", "W_MEL"];
const DISTANCE_CATEGORY_CODES = ["C_DIS", "W_DIS"];
const SHIELD_CATEGORY_CODE = "0_SHIELD";
const MASTERABLE_CATEGORIES = ["ARTISAN", "GAME", "KIT", "MUSIC", "VEHICLE"];
export const ORIGINE_CLASS = 0;
export const ORIGINE_RACE = 1;
export const ORIGINE_SUBRACE = 2;
export const ORIGINE_SPECIALISATION = 3;
export const ORIGINE_ALL = 4;

export const selectSubRacesMap = state => state.referential.subRaces;
export const selectSubRaces = state => state.referential.subRaces && Object.values(state.referential.subRaces).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectSubRaceById = (state, id) => state.referential.subRaces?.[id];

export const selectRacesMap = state => state.referential.races;
export const selectRaces = state => state.referential.races && Object.values(state.referential.races).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectRaceById = (state, id) => state.referential.races?.[id];
export const selectRaceBySubRaceId = (state, id) => state.referential.races?.[selectSubRaceById(state, id)?.Race];

export const selectClassesMap = state => state.referential.classes;
export const selectClasses = state => state.referential.classes && Object.values(state.referential.classes).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectClassById = (state, id) => state.referential.classes?.[id];

export const selectLevels = state => state.referential.levels && Object.values(state.referential.levels);
export const selectLevelById = (state, id) => state.referential.levels?.[id-1];
export const selectMaxLevel = createSelector(selectLevels, (levels) => (levels?.[levels.length-1]));

export const selectLevelNumberByXP = (state, xp) =>  {
    const levels = selectLevels(state);
    const maxLevel = selectMaxLevel(state);
    const maxXP = maxLevel?.XP;
    const levelNumber = levels && Math.max(...levels.filter((lev) => lev?.XP <= Math.min(xp, maxXP)).map((lev) => lev.Level));
  
    return levelNumber;
};
export const selectLevelByXP = (state, xp) =>  selectLevelById(state, selectLevelNumberByXP(state, xp));
export const selectNextLevelByXP = (state, xp) => {
    const maxLevel = selectMaxLevel(state);
    const maxXP = maxLevel?.XP;
    const levelNumber = selectLevelNumberByXP(state, xp);
    return xp>=maxXP?maxLevel: selectLevelById(state, levelNumber+1);
};

export const selectSpecialisationsMap = state => state.referential.specialisations;
export const selectSpecialisations = state => state.referential.specialisations && Object.values(state.referential.specialisations).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectSpecialisationById = (state, id) => state.referential.specialisations?.[id];
export const selectValidSpecialisation = (state, specialisationId, classId, xp) => {
    const specialisation = selectSpecialisationById(state, specialisationId);
    const characterClass = selectClassById(state, classId);
    const levelNumber = selectLevelNumberByXP(state, xp);
    return specialisation?.Class === classId && characterClass?.SpecialisationLevel <= levelNumber && specialisation;
};
export const selectMasteryBonusByXP = (state, xp) =>  selectLevelByXP(state, xp)?.MasteryBonus;

export const selectSkillsMap = state => state.referential.skills;
export const selectSkills = state => state.referential.skills && Object.values(state.referential.skills).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectSkillById = (state, id) => state.referential.skills?.[id];

export const selectClassCapacities = state => state.referential.capacities && Object.values(state.referential.capacities).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectClassCapacitiesById = (state, id) => state.referential.capacities?.[id];
export const selectClassCapacityByClassIdLevel = (state, classId, levelNumber) => selectClassCapacitiesById(state, classId+"-"+levelNumber);
export const selectClassCapacityByClassIdXP = (state, classId, xp) => selectClassCapacityByClassIdLevel(state, classId, selectLevelNumberByXP(state, xp));

export const selectSpecialisationCapacities = state => state.referential.specialisationCapacities && Object.values(state.referential.specialisationCapacities).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectSpecialisationCapacityById = (state, id) => state.referential.specialisationCapacities?.[id];
export const selectSpecialisationCapacityBySpeIdLevel = (state, specialisationId, levelNumber) => selectSpecialisationCapacityById(state, specialisationId+"-"+levelNumber);
export const selectSpecialisationBySpeIdXP = (state, specialisationId, xp) => selectSpecialisationCapacityBySpeIdLevel(state, specialisationId, selectLevelNumberByXP(state, xp));

export const selectClassCapacitiesDescriptions = state => state.referential.capacitiesDescriptions && Object.values(state.referential.capacitiesDescriptions).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectClassCapacityDescriptionById = (state, id) => state.referential.capacitiesDescriptions?.[id];
export const selectClassCapacityDescriptionByClassId = (state, classId, capacityName) => selectClassCapacityDescriptionById(state, classId+"-"+capacityName);
export const selectClassCapacitiesDescriptionsByXP = (state, classId, specialisationId, xp) => {
    const levelNumber = selectLevelNumberByXP(state, xp);
    const specialisation = selectValidSpecialisation(state, specialisationId, classId, xp);
    let knownCapacities = [];
    for (let i = 1; i <= levelNumber; i++) {
      const capacity = selectClassCapacityByClassIdLevel(state, classId, i);
      const specialisationCapacity = specialisation && selectSpecialisationCapacityBySpeIdLevel(state, specialisationId, i);
      knownCapacities = knownCapacities.concat(capacity?.Capacities?.map((c) => ({level: i, name: c, specialisation: false, description: selectClassCapacityDescriptionByClassId(state, classId, c)})) || []);
      knownCapacities = knownCapacities.concat(specialisationCapacity?.Capacities?.map((c) => ({level: i, name: c, specialisation: true, description: selectClassCapacityDescriptionByClassId(state, classId, c)})) || []);
    }

    return knownCapacities;
}

export const selectRaceCapacitiesDescriptions = state => state.referential.raceCapacitiesDescriptions && Object.values(state.referential.raceCapacitiesDescriptions);
export const selectRaceCapacityDescriptionById = (state, id) => state.referential.raceCapacitiesDescriptions?.[id];
export const selectRaceCapacityDescriptionBySubRaceId = (state, subRaceId, capacityName) => selectRaceCapacityDescriptionById(state, subRaceId+"-"+capacityName);
export const selectRaceCapacitiesDescriptionsBySubRaceIdXP = (state, subRaceId, xp) => {
    const raceCapacitiesDescriptions = selectRaceCapacitiesDescriptions(state);
    const levelNumber = selectLevelNumberByXP(state, xp);
    const raceId = selectRaceBySubRaceId(state, subRaceId)?.Id;
    return raceCapacitiesDescriptions &&
            Object.values(raceCapacitiesDescriptions).filter((capacity) =>
                (capacity.Race === raceId || capacity.SubRace === subRaceId)
                && (!capacity.RequiredLevel || capacity.RequiredLevel <= levelNumber));
}

export const selectAlterationTypes = state => state.referential.alterationTypes && Object.values(state.referential.alterationTypes).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectAlterationTypeById = (state, id) => state.referential.alterationTypes?.[id];

export const selectAlterations = state => state.referential.alterations && Object.values(state.referential.alterations).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectAlterationById = (state, id) => state.referential.alterations?.[id];

export const selectAlignments = state => state.referential.alignments && Object.values(state.referential.alignments).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectAlignmentById = (state, id) => state.referential.alignments?.[id];

export const selectLanguages = state => state.referential.languages && Object.values(state.referential.languages);
export const selectLanguageById = (state, id) => state.referential.languages?.[id];
export const selectLanguagesBySubRace = (state, subRaceId) => selectSubRaceById(state, subRaceId)?.Languages || [];
export const selectLanguagesByRace = (state, subRaceId) => selectRaceBySubRaceId(state, subRaceId)?.Languages || [];

export const selectObjectCategories = state => state.referential.objectCategories && Object.values(state.referential.objectCategories).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectMasterableObjectCategories = createSelector(selectObjectCategories, (objectCategories) => objectCategories?.filter((category) => MASTERABLE_CATEGORIES.includes(category.Code)));

export const selectObjectsMap = state => state.referential.objects;
export const selectObjects = state => state.referential.objects && Object.values(state.referential.objects).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectObjectById = (state, id) => state.referential.objects?.[id];
export const selectChargeCapacity = (state, strength, subRaceId) => {
    const raceBonus = selectRaceBySubRaceId(state, subRaceId)?.Strength;
    const subRaceBonus = selectSubRaceById(state, subRaceId)?.Strength;
    return getChargeCapacity(strength + raceBonus + subRaceBonus);
} 

export const selectFightStyles = state => state.referential.fightStyles && Object.values(state.referential.fightStyles).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectFightStylesByClassId = (state, classId) => selectFightStyles(state)?.filter((style) => style.Class === classId);

export const selectHistorics = state => state.referential.historics && Object.values(state.referential.historics).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectHistoricById = (state, id) => state.referential.historics?.[id];

export const selectFightStylesByIds = (state, ids) => {
    const fightStyles = selectFightStyles(state);
    return fightStyles && Object.values(fightStyles).filter((style) => ids?.includes(style.Code)).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
}

export const selectSpellsMap = state => state.referential.spells;
export const selectSpells = state => state.referential.spells && Object.values(state.referential.spells).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectSpellById = (state, id) => state.referential.spells?.[id];
export const selectSpellByClassSpecialisation = (state, classId, specialisationId) => {
    const spells = selectSpells(state);
    return spells?.filter( (spell) => spell.Classes.includes(classId) || spell.Classes.includes(specialisationId) );
}

export const selectSpellsComplements = state => state.referential.spellsComplements && Object.values(state.referential.spellsComplements);
export const selectSpellsComplementsByRace = (state, subRaceId, xp) => {
    const spellsComplements = selectSpellsComplements(state);
    const raceId = selectRaceBySubRaceId(state, subRaceId)?.Id;
    const levelNumber = selectLevelNumberByXP(state, xp);
    return spellsComplements?.filter( (spellsComplement) => spellsComplement.Race === raceId && spellsComplement.Level <= levelNumber);
}
export const selectSpellsComplementsBySubRace = (state, subRaceId, xp) => {
    const spellsComplements = selectSpellsComplements(state);
    const levelNumber = selectLevelNumberByXP(state, xp);
    return spellsComplements?.filter( (spellsComplement) => spellsComplement.SubRace === subRaceId && spellsComplement.Level <= levelNumber);
}
export const selectSpellsComplementsBySpecialisation = (state, specialisationId, classId, xp) => {
    const spellsComplements = selectSpellsComplements(state);
    const specialisation = selectValidSpecialisation(state, specialisationId, classId, xp);
    const levelNumber = selectLevelNumberByXP(state, xp);
    return  spellsComplements?.filter( (spellsComplement) => spellsComplement.Specialisation === specialisation?.Code && spellsComplement.Level <= levelNumber);
}

export const selectSpellsComplementsSpellsByRace = (state, subRaceId, xp) => {
    return selectSpellsComplementsByRace(state, subRaceId, xp)?.flatMap((spellsComplement) => spellsComplement.Spells||[]);
}
export const selectSpellsComplementsSpellsBySubRace = (state, subRaceId, xp) => {
    return selectSpellsComplementsBySubRace(state, subRaceId, xp)?.flatMap((spellsComplement) => spellsComplement.Spells||[]);
}
export const selectSpellsComplementsSpellsBySpecialisation = (state, specialisationId, classId, xp) => {
    return selectSpellsComplementsBySpecialisation(state, specialisationId, classId, xp)?.flatMap((spellsComplement) => spellsComplement.Spells||[]);
}
export const selectSpellsComplementsClassesByRace = (state, subRaceId, xp) => {
    return selectSpellsComplementsByRace(state, subRaceId, xp)?.flatMap((spellsComplement) => spellsComplement.BonusLocationClasses||[]);
}
export const selectSpellsComplementsClassesBySubRace = (state, subRaceId, xp) => {
    return selectSpellsComplementsBySubRace(state, subRaceId, xp)?.flatMap((spellsComplement) => spellsComplement.BonusLocationClasses||[]);
}
export const selectSpellsComplementsClassesBySpecialisation = (state, specialisationId, classId, xp) => {
    return selectSpellsComplementsBySpecialisation(state, specialisationId, classId, xp)?.flatMap((spellsComplement) => spellsComplement.BonusLocationClasses||[]);
}
export const selectAvailableSpellsByClass = (state, classId) => {
    const spells = selectSpells(state);
    return spells?.filter( (spell) => spell.Classes.includes(classId) );
}
export const selectSpellByProfil = (state, subRaceId, classId, specialisationId, xp) => {
    const spells = selectSpells(state);
    const raceSpellsComplements = selectSpellsComplementsByRace(state, subRaceId, xp);
    const subRaceSpellsComplements = selectSpellsComplementsBySubRace(state, subRaceId, xp);
    const specialisationSpellsComplements = selectSpellsComplementsBySpecialisation(state, specialisationId, classId, xp);
    const allowedClasses = [classId, specialisationId].concat(raceSpellsComplements?.flatMap((complement) => complement.BonusLocationClasses||[]))
                            .concat(subRaceSpellsComplements?.flatMap((complement) => complement.BonusLocationClasses||[]))
                            .concat(specialisationSpellsComplements?.flatMap((complement) => complement.BonusLocationClasses||[]));
    return spells?.filter( (spell) => spell.Classes.filter((spellClassId) => allowedClasses?.includes(spellClassId))?.length > 0 );
}
export const selectKnownClassesSpellsFilteredByOrigine = (state, character) => {
    const subRaceId = character?.SubRace
    const classId = character?.Class;
    const specialisationId = character?.Specialisation;
    const xp = character?.XP;
    const spellsNames = character?.Spells;

    const capacity = selectClassCapacityByClassIdXP(state, classId, xp);
    const race = selectRaceBySubRaceId(state, subRaceId);
    const subRace = selectSubRaceById(state, subRaceId);
    const specialisation = selectValidSpecialisation(state, specialisationId, classId,xp);
    const profilAvailableSpells = selectSpellByProfil(state,  subRaceId, classId, specialisationId, xp);
    const spellsNbBonus = selectSpellsNbBonusByClassXP(state, character);
    const availableSpellsNb = (capacity?.SpellsNb + spellsNbBonus) || 0;

    const raceSpellsComplements = selectSpellsComplementsByRace(state, subRaceId, xp) || [];
    const subRaceSpellsComplements = selectSpellsComplementsBySubRace(state, subRaceId, xp) || [];
    const specialisationSpellsComplements = selectSpellsComplementsBySpecialisation(state, specialisationId, classId, xp) || [];
    const complements =  [].concat(raceSpellsComplements||[]).concat(subRaceSpellsComplements||[]).concat(specialisationSpellsComplements||[]);
    const complementsSpells = complements.flatMap((spellsComplement) => spellsComplement.Spells||[]);

    const raceSpellsComplementsClasses = selectSpellsComplementsClassesByRace(state, subRaceId, xp) || [];
    const subRaceSpellsComplementsClasses = selectSpellsComplementsClassesBySubRace(state, subRaceId, xp) || [];
    const specialisationSpellsComplementsClasses = selectSpellsComplementsClassesBySpecialisation(state, specialisationId, classId, xp) || [];
    const allSpellsClasses = [...new Set([classId]
                                .concat(raceSpellsComplementsClasses)
                                .concat(subRaceSpellsComplementsClasses)
                                .concat(specialisationSpellsComplementsClasses))];

    const classKnownSpells = profilAvailableSpells?.filter((spell) => spellsNames?.includes(spell.Name)
                                                                        && spell.Classes?.includes(classId)
                                                                        && (!complementsSpells?.includes(spell.Name))
                                                            ) || [];
    const raceKnownSpells = profilAvailableSpells?.filter((spell) => spellsNames?.includes(spell.Name)
                                                                    && spell.Classes.filter((classId) => raceSpellsComplementsClasses?.includes(classId))?.length > 0
                                                                    && (!complementsSpells?.includes(spell.Name))
                                                            ) || [];
    const subRaceKnownSpells = profilAvailableSpells?.filter((spell) => spellsNames?.includes(spell.Name)
                                                                    && spell.Classes.filter((classId) => subRaceSpellsComplementsClasses?.includes(classId))?.length > 0
                                                                    && (!complementsSpells?.includes(spell.Name))
                                                                ) || [];
    const specialisationKnownSpells = profilAvailableSpells?.filter((spell) => spellsNames?.includes(spell.Name)
                                                                    && spell.Classes.filter((classId) => specialisationSpellsComplementsClasses?.includes(classId))?.length> 0
                                                                    && (!complementsSpells?.includes(spell.Name))
                                                                ) || [];
    const allKnownSpells = (classKnownSpells).concat(raceKnownSpells).concat(subRaceKnownSpells).concat(specialisationKnownSpells);

    const filteredSpells = [];
    filteredSpells[ORIGINE_CLASS]   = {number: 0, maxNumber: availableSpellsNb, classes: [classId], complementLocations: "", spells: []};
    filteredSpells[ORIGINE_RACE]    = {number: 0, maxNumber: 0, classes: raceSpellsComplementsClasses, complementLocations: "", spells: []};
    filteredSpells[ORIGINE_SUBRACE] = {number: 0, maxNumber: 0, classes: subRaceSpellsComplementsClasses, complementLocations: "", spells: []};
    filteredSpells[ORIGINE_SPECIALISATION] = {number: 0, maxNumber: 0, classes: specialisationSpellsComplementsClasses, complementLocations: "", spells: []};
    filteredSpells[ORIGINE_ALL] = {number: 0, maxNumber: 0, classes: allSpellsClasses, complementLocations: "", spells: []};                                              

    (complements||[]).forEach((complement) => {
        let origineCode = complement.BonusLocationClasses?.length === 1 && complement.BonusLocationClasses.includes(character?.Class)
                          ? ORIGINE_CLASS
                          : ( complement.Race
                              ? ORIGINE_RACE
                              :(complement.SubRace ? ORIGINE_SUBRACE : ORIGINE_SPECIALISATION) );
        filteredSpells[origineCode].maxNumber += complement?.BonusLocation || 0;
        filteredSpells[ORIGINE_ALL].maxNumber += complement?.BonusLocation || 0;
        if (origineCode === ORIGINE_CLASS) {
          if (complement.Race) {
            filteredSpells[origineCode].complementLocations += `+${complement?.BonusLocation || 0} Provenants de la race ${race?.Name}`;
          }
          if (complement.SubRace) {
            filteredSpells[origineCode].complementLocations += `+${complement?.BonusLocation || 0} Provenants de la race ${subRace?.Name}`;
          }
          if (complement.Specialisation) {
            filteredSpells[origineCode].complementLocations += `+${complement?.BonusLocation || 0} Provenants de la spécialisation ${specialisation?.Name}`;
          }
        } 
    });

    
    let newClassKnownSpells = classKnownSpells.slice()?.map((spell) => spell.Name) || [];
    let newRaceKnownSpells = raceKnownSpells.slice()?.map((spell) => spell.Name) || [];
    let newSubRaceKnownSpells = subRaceKnownSpells.slice()?.map((spell) => spell.Name) || [];
    let newSpecialisationKnownSpells = specialisationKnownSpells.slice()?.map((spell) => spell.Name) || [];

    if (raceSpellsComplementsClasses?.length === 1 && raceSpellsComplementsClasses.includes(classId)) {
        newClassKnownSpells = newClassKnownSpells.concat(newRaceKnownSpells);
        newRaceKnownSpells = [];
    }
    if (subRaceSpellsComplementsClasses?.length === 1 && subRaceSpellsComplementsClasses.includes(classId)) {
        newClassKnownSpells = newClassKnownSpells.concat(newSubRaceKnownSpells);
        newSubRaceKnownSpells = [];
    }
    if (specialisationSpellsComplementsClasses?.length === 1 && specialisationSpellsComplementsClasses.includes(classId)) {
        newClassKnownSpells = newClassKnownSpells.concat(newSpecialisationKnownSpells);
        newSpecialisationKnownSpells = [];
    }

    const raceKnownSpellsInClass = newRaceKnownSpells.filter((spell) => newClassKnownSpells.includes(spell.Name));
    newRaceKnownSpells = newRaceKnownSpells.filter((spell) => !newClassKnownSpells.includes(spell.Name));
    if (newRaceKnownSpells.length < filteredSpells[ORIGINE_RACE].maxNumber && newClassKnownSpells.length > filteredSpells[ORIGINE_CLASS].maxNumber) {
        const classTaken = raceKnownSpellsInClass.slice(0, filteredSpells[ORIGINE_RACE].maxNumber - newRaceKnownSpells.length);
        newRaceKnownSpells = newRaceKnownSpells.concat(classTaken);
        newClassKnownSpells = newClassKnownSpells.filter((spell) => !classTaken.includes(spell.Name));
    }

    const subRaceKnownSpellsInRace = newSubRaceKnownSpells.filter((spellName) => newRaceKnownSpells.includes(spellName));
    const subRaceKnownSpellsInClass = newSubRaceKnownSpells.filter((spellName) => newClassKnownSpells.includes(spellName));
    newSubRaceKnownSpells = newSubRaceKnownSpells.filter((spellName) => !newRaceKnownSpells.includes(spellName) && !newClassKnownSpells.includes(spellName));
    if (newSubRaceKnownSpells.length < filteredSpells[ORIGINE_SUBRACE].maxNumber && newRaceKnownSpells.length > filteredSpells[ORIGINE_RACE].maxNumber) {
        const raceTaken = subRaceKnownSpellsInRace.slice(0, filteredSpells[ORIGINE_SUBRACE].maxNumber - newSubRaceKnownSpells.length);
        newSubRaceKnownSpells = newSubRaceKnownSpells.concat(raceTaken);
        newRaceKnownSpells = newRaceKnownSpells.filter((spellName) => !raceTaken.includes(spellName));
    }
    if (newSubRaceKnownSpells.length < filteredSpells[ORIGINE_SUBRACE].maxNumber && newClassKnownSpells.length > filteredSpells[ORIGINE_CLASS].maxNumber) {
        const classTaken = subRaceKnownSpellsInClass.slice(0, filteredSpells[ORIGINE_SUBRACE].maxNumber - newSubRaceKnownSpells.length);
        newSubRaceKnownSpells = newSubRaceKnownSpells.concat(classTaken);
        newClassKnownSpells = newClassKnownSpells.filter((spellName) => !classTaken.includes(spellName));
    }

    const specialisationKnownSpellsInSubRace = newSpecialisationKnownSpells.filter((spellName) => newSubRaceKnownSpells.includes(spellName));
    const specialisationKnownSpellsInRace = newSpecialisationKnownSpells.filter((spellName) => newRaceKnownSpells.includes(spellName));
    const specialisationKnownSpellsInClass = newSpecialisationKnownSpells.filter((spellName) => newClassKnownSpells.includes(spellName));

    newSpecialisationKnownSpells = newSpecialisationKnownSpells.filter((spellName) => !newSubRaceKnownSpells.includes(spellName)
                                                                                    && !newRaceKnownSpells.includes(spellName)
                                                                                    && !newClassKnownSpells.includes(spellName));
    if (newSpecialisationKnownSpells.length < filteredSpells[ORIGINE_SPECIALISATION].maxNumber && newSubRaceKnownSpells.length > filteredSpells[ORIGINE_SUBRACE].maxNumber) {
        const subRaceTaken = specialisationKnownSpellsInSubRace.slice(0, filteredSpells[ORIGINE_SPECIALISATION].maxNumber - newSpecialisationKnownSpells.length);
        newSpecialisationKnownSpells = newSpecialisationKnownSpells.concat(subRaceTaken);
        newSubRaceKnownSpells = newSubRaceKnownSpells.filter((spellName) => !subRaceTaken.includes(spellName));
    }
    if (newSpecialisationKnownSpells.length < filteredSpells[ORIGINE_SPECIALISATION].maxNumber && newRaceKnownSpells.length > filteredSpells[ORIGINE_RACE].maxNumber) {
        const raceTaken = specialisationKnownSpellsInRace.slice(0, filteredSpells[ORIGINE_SPECIALISATION].maxNumber - newSpecialisationKnownSpells.length);
        newSpecialisationKnownSpells = newSpecialisationKnownSpells.concat(raceTaken);
        newRaceKnownSpells = newRaceKnownSpells.filter((spellName) => !raceTaken.includes(spellName));
    }
    if (newSpecialisationKnownSpells.length < filteredSpells[ORIGINE_SPECIALISATION].maxNumber && newClassKnownSpells.length > filteredSpells[ORIGINE_CLASS].maxNumber) {
        const classTaken = specialisationKnownSpellsInClass.slice(0, filteredSpells[ORIGINE_SPECIALISATION].maxNumber - newSpecialisationKnownSpells.length);
        newSpecialisationKnownSpells = newSpecialisationKnownSpells.concat(classTaken);
        newClassKnownSpells = newClassKnownSpells.filter((spellName) => !classTaken.includes(spellName));
    }

    filteredSpells[ORIGINE_CLASS].number = newClassKnownSpells?.length || 0;
    filteredSpells[ORIGINE_CLASS].spells = newClassKnownSpells;
    filteredSpells[ORIGINE_RACE].number = newRaceKnownSpells?.length || 0;
    filteredSpells[ORIGINE_RACE].spells = newSubRaceKnownSpells;
    filteredSpells[ORIGINE_SUBRACE].number = newSubRaceKnownSpells?.length || 0;
    filteredSpells[ORIGINE_SUBRACE].spells = newSubRaceKnownSpells;
    filteredSpells[ORIGINE_SPECIALISATION].number = newSpecialisationKnownSpells?.length || 0;
    filteredSpells[ORIGINE_SPECIALISATION].spells = newSpecialisationKnownSpells;
    filteredSpells[ORIGINE_ALL].number = allKnownSpells?.length || 0;
    filteredSpells[ORIGINE_ALL].spells = allKnownSpells?.map((spell) => spell.Name) || [];

    return filteredSpells;
}

export const selectWeaponCategoriesMap = state => state.referential.weaponCategories;
export const selectWeaponCategories = state => state.referential.weaponCategories && Object.values(state.referential.weaponCategories);
export const selectWeaponCategoryById = (state, id) => state.referential.weaponCategories?.[id];
export const selectWeaponCategoriesByType = (state, distance) => {
    const weaponCategories = selectWeaponCategories(state);
    return weaponCategories?.filter((category) => distance
                                                ?DISTANCE_CATEGORY_CODES.includes(category.Code)
                                                :HTH_CATEGORY_CODES.includes(category.Code));
}
export const selectWeaponCategoriesByClassId = (state, classId) => selectClassById(state, classId)?.WeaponCategories || [];

export const selectArmorCategoriesMap = state => state.referential.armorCategories;
export const selectArmorCategories = state => state.referential.armorCategories && Object.values(state.referential.armorCategories);
export const selectArmorCategoryById = (state, id) => state.referential.armorCategories?.[id];
export const selectArmorCategoriesByType = (state, shield) => {
    const armorCategories = selectArmorCategories(state);
    return armorCategories?.filter((category) => shield
                                                ?category.Code === SHIELD_CATEGORY_CODE
                                                :category.Code !== SHIELD_CATEGORY_CODE);
}
export const selectArmorCategoriesByClassId = (state, classId) => selectClassById(state, classId)?.ArmorCategories || [];
export const selectArmorCategoriesBySubRaceId = (state, subRaceId) => selectSubRaceById(state, subRaceId)?.ArmorCategories || [];

export const selectArmorsMap = state => state.referential.armors;
export const selectArmors = state => state.referential.armors && Object.values(state.referential.armors).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectArmorById = (state, id) => state.referential.armors?.[id];
export const selectArmorsByClassId = (state, classId) => selectClassById(state, classId)?.Armors || [];

export const selectWeaponsMap = state => state.referential.weapons;
export const selectWeapons = state => state.referential.weapons && Object.values(state.referential.weapons).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectWeaponById = (state, id) => state.referential.weapons?.[id];
export const selectWeaponsByClassId = (state, classId) => selectClassById(state, classId)?.Weapons || [];
export const selectWeaponsBySubRace = (state, subRaceId) => selectSubRaceById(state, subRaceId)?.Weapons || [];
export const selectWeaponsByRace = (state, subRaceId) => selectRaceBySubRaceId(state, subRaceId)?.Weapons || [];

export const selectCaracteristicsMap = state => state.referential.caracteristics;
export const selectCaracteristics = state => state.referential.caracteristics && Object.values(state.referential.caracteristics).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectCaracteristicById = (state, id) => state.referential.caracteristics?.[id];
export const selectACBonusCaracteristicByArmorId = (state, armorId) => selectCaracteristicById(state, selectArmorById(state, armorId)?.ACBonus);
export const selectACBonusCaracteristicByClassId = (state, classId) => selectCaracteristicById(state, selectClassById(state, classId)?.ACBonus);
export const selectCaracteristicBonus = (state, caracteristicName, caracteristicValue, subRaceId, maxVal = MAX_CARACTERISTIC, bonusStep = BONUS_STEP, bonusMax = null) => {
    const subRaceBonus = selectSubRaceById(state, subRaceId)?.[caracteristicName];
    const raceBonus = selectRaceBySubRaceId(state, subRaceId)?.[caracteristicName];
    const totalValue = caracteristicValue + raceBonus + subRaceBonus;
    const bonus = Math.floor((totalValue-(maxVal/2))/bonusStep);
    return ((bonusMax || bonusMax === 0)?Math.min(bonus, bonusMax):bonus) || 0;
}
export const selectCaracteristicsBonus = (state, character, maxVal = MAX_CARACTERISTIC, bonusStep = BONUS_STEP, bonusMax = null) => {
    const subRaceId = character?.SubRace;
    const caracteristics = selectCaracteristics(state);
    return caracteristics?.map((caracteristic) => {
        const caracteristicName = caracteristic.OV;
        const caracteristicValue = character?.[caracteristicName];
        const caracteristicBonus = selectCaracteristicBonus(state, caracteristicName, caracteristicValue, subRaceId, maxVal, bonusStep, bonusMax);
        return {...caracteristic, Bonus: caracteristicBonus};
    });
}
export const selectSpellsNbBonusByClassXP = (state, character) => {
    const capacity = selectClassCapacityByClassIdXP(state, character?.Class, character?.XP);
    const caracteristicName = selectCaracteristicById(state, capacity?.SpellsNbBonus)?.OV;
    return selectCaracteristicBonus(state, caracteristicName, character?.[caracteristicName] || 0, character.SubRace)
}
export const selectClassACBonus = (state, character) => {
    const ACBonusCaracteristic = selectACBonusCaracteristicByClassId(state, character?.Class);
    const caracteristicName = ACBonusCaracteristic?.OV;
    return selectCaracteristicBonus(state, caracteristicName, character?.[caracteristicName] || 0, character.SubRace)
}
export const selectArmorACBonus = (state, armorId, subRaceId, classId, dexterityPoints, masterArmors) => {
    const armor = selectArmorById(state, armorId);
    const subRaceArmorCategories = selectArmorCategoriesBySubRaceId(state, subRaceId);
    const classArmorCategories = selectArmorCategoriesByClassId(state, classId);
    const isMasterArmor = armor
                          && (  classArmorCategories?.includes(armor.Category)
                                || subRaceArmorCategories?.includes(armor.Category)
                                || masterArmors?.includes(armor.Category)
                             );

    const bonusMax = isMasterArmor && armor?.MaxACBonus;
    return (!armor || (isMasterArmor && armor.ACBonus === CA_CARACTERISTIC_CODE))
            && selectCaracteristicBonus(state, CA_CARACTERISTIC_NAME, dexterityPoints, subRaceId, MAX_CARACTERISTIC, BONUS_STEP, bonusMax);
}
selectArmorACBonus.defaultProps = {
    dexterityPoints: MAX_CARACTERISTIC/2
}

export const selectEquipmentCategories = state => state.referential.equipmentCategories && Object.values(state.referential.equipmentCategories).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectEquipments = state => state.referential.equipments && Object.values(state.referential.equipments).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectHostelCategories = state => state.referential.hostelCategories && Object.values(state.referential.hostelCategories).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectHostelServices = state => state.referential.hostelServices && Object.values(state.referential.hostelServices).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectServiceCategories = state => state.referential.serviceCategories && Object.values(state.referential.serviceCategories).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectServices = state => state.referential.services && Object.values(state.referential.services).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectTrinkets = state => state.referential.trinkets && Object.values(state.referential.trinkets).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectMounts = state => state.referential.mounts && Object.values(state.referential.mounts).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectMonsterFamilies = state => state.referential.monsterFamilies && Object.values(state.referential.monsterFamilies).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectMonsterSpecies = state => state.referential.monsterSpecies && Object.values(state.referential.monsterSpecies).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectMonsters = state => state.referential.monsters && Object.values(state.referential.monsters).sort((val1, val2) => val1.Name.localeCompare(val2.Name));
export const selectShips = state => state.referential.ships && Object.values(state.referential.ships).sort((val1, val2) => val1.Name.localeCompare(val2.Name));