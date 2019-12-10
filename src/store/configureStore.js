import { createStore, combineReducers } from 'redux'
import referentialReducer from './reducers/referentialReducer';
import gameReducer from './reducers/gameReducer';

const reducers = combineReducers(
  {
    referential: referentialReducer,
    game: gameReducer
  }
);

export default createStore(reducers);