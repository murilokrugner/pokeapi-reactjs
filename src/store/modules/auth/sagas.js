import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import history from '../../../services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    if (email === "pokeapi@mail.com") {
      history.push('/pokemons');
      return;
    }

    if (email !== "pokeapi@mail.com") {
      toast.error('Falha na autenticação, verifique seus dados');
      return;
    }

    yield put(signInSuccess(email, password));

  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
