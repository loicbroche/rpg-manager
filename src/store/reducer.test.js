import { combineReducers } from 'redux'
import referentialReducer from './reducers/referentialReducer';
import gameReducer from './reducers/gameReducer';
import { ActionTypes } from './actions/ActionTypes';
import { referentialMock } from 'mock/referential';
import { gameMock } from 'mock/game';

describe('reducers', () => {
  const referentialInitialState = {
      races: null,
      subRaces: null,
      classes: null,
      weaponCategories: null,
      weapons: null,
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