import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { requestSuccess, requestFailed } from './actions';

export function* request({ payload }) {
  try {
    function* loadPokemons() {
      const response = yield call(api.get, 'pokemon/');

      yield put(requestSuccess(response.data.results));
    }

    loadPokemons();

  } catch(err) {
    yield put(requestFailed());
  }
}

export default all([
  takeLatest('@pokemons/REQUEST', request),
])
