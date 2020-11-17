import {PayloadAction} from '@reduxjs/toolkit';

import {takeLatest, put, all, call} from 'redux-saga/effects';

import {
  signInStart,
  signUpStart,
  signInSuccess,
  requestFailure,
  setLoading,
} from './userSlice';

import {signInRequest, signUpRequest} from '../../services/apiServices';

export function* signIn(
  action: PayloadAction<{email: string; password: string}>,
) {
  const {email, password} = action.payload;
  try {
    yield put(setLoading());
    const response = yield signInRequest(email, password);
    const {name, token} = response.data;
    if (response.data.message) {
      throw new Error('Wrong email or password');
    }
    yield put(signInSuccess({name, token}));
  } catch (error) {
    yield put(requestFailure(error.message));
  }
}

export function* signUp(
  action: PayloadAction<{email: string; password: string; username: string}>,
) {
  const {email, username, password} = action.payload;
  try {
    yield put(setLoading());
    const response = yield signUpRequest(email, username, password);
    const {name, token} = response.data;
    if (response.data.message) {
      throw new Error('This email is already taken');
    }
    yield put(signInSuccess({name, token}));
  } catch (error) {
    yield put(requestFailure(error.message));
  }
}

export function* onSignInStart() {
  yield takeLatest(signInStart, signIn);
}

export function* onSignUpStart() {
  yield takeLatest(signUpStart, signUp);
}

export function* userSagas() {
  yield all([call(onSignInStart), call(onSignUpStart)]);
}
