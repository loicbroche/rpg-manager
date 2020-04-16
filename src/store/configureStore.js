import { createStore, combineReducers } from 'redux'
import referentialReducer from './reducers/referentialReducer';
import gameReducer from './reducers/gameReducer';

const reducers = combineReducers(
  {
    referential: referentialReducer,
    game: gameReducer
  }
);

const store = createStore(reducers);
export default store;