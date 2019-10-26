import { combineReducers } from 'redux';

import auth from './auth/reducer';
import pokemons from './pokemons/reducer';

export default combineReducers({
  auth,
  pokemons,
});
