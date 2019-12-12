import { combineReducers } from 'redux'
import referentialReducer from './reducers/referentialReducer';
import gameReducer from './reducers/gameReducer';
import { ActionTypes } from './actions/ActionTypes';
import { referentialMock } from 'mock/referential';
import { gameMock } from 'mock/game';

describe('reducers', () => {
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

  const gameInitialState = {
    characters: null
  }

  const initialState = {
    referential: referentialInitialState,
    game: gameInitialState
  }

  const reducers = combineReducers(
    {
      referential: referentialReducer,
      game: gameReducer
    }
  );

  it('should return the referential initial state', () => {
    expect(referentialReducer(undefined, {})).toEqual(referentialInitialState);
  });
  it('should return the game initial state', () => {
    expect(gameReducer(undefined, {})).toEqual(gameInitialState);
  });
  it('should return the combined initial state', () => {
    expect(reducers(undefined, {})).toEqual(initialState);
  });

  //Referential
  it('should handle LOAD_RACES', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_RACES,
        value: referentialMock.Races
    };
    expect(reducers(undefined, action).referential.races).toEqual(referentialMock.Races);
  });

  it('should handle LOAD_SUB_RACES', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_SUB_RACES,
        value: referentialMock.SubRaces
    };
    expect(reducers(undefined, action).referential.subRaces).toEqual(referentialMock.SubRaces);
  });


  it('should handle LOAD_CLASSES', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_CLASSES,
        value: referentialMock.Classes
    };
    expect(reducers(undefined, action).referential.classes).toEqual(referentialMock.Classes);
  });

  it('should handle LOAD_WEAPON_CATEGORIES', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_WEAPON_CATEGORIES,
        value: referentialMock.WeaponCategories
    };
    expect(reducers(undefined, action).referential.weaponCategories).toEqual(referentialMock.WeaponCategories);
  });

  it('should handle LOAD_WEAPONS', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_WEAPONS,
        value: referentialMock.Weapons
    };
    expect(reducers(undefined, action).referential.weapons).toEqual(referentialMock.Weapons);
  });

  it('should handle LOAD_ARMOR_CATEGORIES', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_ARMOR_CATEGORIES,
        value: referentialMock.ArmorCategories
    };
    expect(reducers(undefined, action).referential.armorCategories).toEqual(referentialMock.ArmorCategories);
  });

  it('should handle LOAD_ARMORS', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_ARMORS,
        value: referentialMock.Armors
    };
    expect(reducers(undefined, action).referential.armors).toEqual(referentialMock.Armors);
  });

  it('should handle LOAD_OBJECT_CATEGORIES', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_OBJECT_CATEGORIES,
        value: referentialMock.ObjectCategories
    };
    expect(reducers(undefined, action).referential.objectCategories).toEqual(referentialMock.ObjectCategories);
  });

  it('should handle LOAD_OBJECTS', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_OBJECTS,
        value: referentialMock.Objects
    };
    expect(reducers(undefined, action).referential.objects).toEqual(referentialMock.Objects);
  });

  it('should handle LOAD_EQUIPMENT_CATEGORIES', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_EQUIPMENT_CATEGORIES,
        value: referentialMock.EquipmentCategories
    };
    expect(reducers(undefined, action).referential.equipmentCategories).toEqual(referentialMock.EquipmentCategories);
  });

  it('should handle LOAD_EQUIPMENTS', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_EQUIPMENTS,
        value: referentialMock.Equipments
    };
    expect(reducers(undefined, action).referential.equipments).toEqual(referentialMock.Equipments);
  });

  it('should handle LOAD_HOSTEL_CATEGORIES', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_HOSTEL_CATEGORIES,
        value: referentialMock.HostelCategories
    };
    expect(reducers(undefined, action).referential.hostelCategories).toEqual(referentialMock.HostelCategories);
  });

  it('should handle LOAD_HOSTEL_SERVICES', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_HOSTEL_SERVICES,
        value: referentialMock.HostelServices
    };
    expect(reducers(undefined, action).referential.hostelServices).toEqual(referentialMock.HostelServices);
  });

  it('should handle LOAD_SERVICE_CATEGORIES', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_SERVICE_CATEGORIES,
        value: referentialMock.ServiceCategories
    };
    expect(reducers(undefined, action).referential.serviceCategories).toEqual(referentialMock.ServiceCategories);
  });

  it('should handle LOAD_SERVICES', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_SERVICES,
        value: referentialMock.Services
    };
    expect(reducers(undefined, action).referential.services).toEqual(referentialMock.Services);
  });

  it('should handle LOAD_MOUNTS', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_MOUNTS,
        value: referentialMock.Mounts
    };
    expect(reducers(undefined, action).referential.mounts).toEqual(referentialMock.Mounts);
  });

  it('should handle LOAD_SHIPS', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_SHIPS,
        value: referentialMock.Ships
    };
    expect(reducers(undefined, action).referential.ships).toEqual(referentialMock.Ships);
  });

  it('should handle LOAD_WARES', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_WARES,
        value: referentialMock.Wares
    };
    expect(reducers(undefined, action).referential.wares).toEqual(referentialMock.Wares);
  });

  it('should handle LOAD_TRINKETS', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_TRINKETS,
        value: referentialMock.Trinkets
    };
    expect(reducers(undefined, action).referential.trinkets).toEqual(referentialMock.Trinkets);
  });

  it('should handle LOAD_LEVELS', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_LEVELS,
        value: referentialMock.Levels
    };
    expect(reducers(undefined, action).referential.levels).toEqual(referentialMock.Levels);
  });

  it('should handle LOAD_CARACTERISTICS', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_CARACTERISTICS,
        value: referentialMock.Caracteristics
    };
    expect(reducers(undefined, action).referential.caracteristics).toEqual(referentialMock.Caracteristics);
  });

  it('should handle LOAD_SKILLS', () => {
    const action = {
        type: ActionTypes.REFERENTIAL.LOAD_SKILLS,
        value: referentialMock.Skills
    };
    expect(reducers(undefined, action).referential.skills).toEqual(referentialMock.Skills);
  });

  it('should handle LOAD', () => {
    const action = {
        type: ActionTypes.CHARACTERS.LOAD,
        value: gameMock.Characters
    };
    expect(reducers(undefined, action).game.characters).toEqual(gameMock.Characters);
  });

  //Game
  it('should handle LOAD_ONE', () => {
    const actionInsertion = {
        type: ActionTypes.CHARACTERS.LOAD_ONE,
        value: gameMock.CharactersAfterInsertion.Bibi
    };
    expect(reducers({ game: {characters: gameMock.Characters} }, actionInsertion).game.characters).toEqual(gameMock.CharactersAfterInsertion);
    const actionUpdate = {
      type: ActionTypes.CHARACTERS.LOAD_ONE,
      value: gameMock.CharactersAfterUpdate.Bibi
    };
    expect(reducers({ game: {characters: gameMock.Characters} }, actionUpdate).game.characters).toEqual(gameMock.CharactersAfterUpdate);
  });

});