import {takeLatest, put, all, call} from 'redux-saga/effects';

export function* onSignInStart() {
  yield takeLatest();
}

export function* onSignUpStart() {
  yield takeLatest();
}

export function* onSignUpSuccess() {
  yield takeLatest();
}

export function* userSagas() {
  yield all([call(onSignInStart), call(onSignUpStart), call(onSignUpSuccess)]);
}
