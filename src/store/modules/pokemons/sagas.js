import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import jsonapi from '../../../services/jsonapi';

import { requestSuccess, requestFailed } from './actions';

export function* request({ payload }) {
  try {
    const { name, image } = payload;

    const response = yield call(jsonapi.post, 'pokemons', {
      name,
      image,
    });

    console.log(response.data);
    console.tron.log(response.data);

    yield put(requestSuccess(name, image));
    toast.success('Pokemon adicionado!');

  } catch(err) {
    yield put(requestFailed());
  }
}

export default all([
  takeLatest('@pokemons/REQUEST', request),
])
