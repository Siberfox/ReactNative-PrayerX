import {all, call, takeLatest, put} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

import {
  deleteCard,
  setCards,
  getCardsStart,
  addCardStart,
  setCardsLoading,
  requestCardsFailure,
} from './cardsSlice';

import {
  addCardApi,
  deleteCardApi,
  getCardsApi,
} from '../../services/apiServices';

export function* addCardRequest(action: PayloadAction<[string, string]>) {
  const [id, value] = action.payload;
  try {
    yield put(setCardsLoading());
    yield addCardApi(value, id);
    yield put(getCardsStart);
  } catch (e) {
    yield put(requestCardsFailure(e.message));
  }
}

export function* deleteCardRequest(action: PayloadAction<string>) {
  try {
    yield put(setCardsLoading());
    yield deleteCardApi(action.payload);
    yield put(getCardsStart);
  } catch (e) {
    yield put(requestCardsFailure(e.message));
  }
}

export function* getCardsData() {
  try {
    yield put(setCardsLoading());
    const response = yield getCardsApi();
    yield setCards(response);
  } catch (e) {
    yield put(requestCardsFailure(e.message));
  }
}

export function* onGetCardsData() {
  yield takeLatest(getCardsStart, getCardsData);
}

export function* onAddCard() {
  yield takeLatest(addCardStart, addCardRequest);
}

export function* onDeleteCard() {
  yield takeLatest(deleteCard, deleteCardRequest);
}

export function* cardsSagas() {
  yield all([call(onAddCard), call(onDeleteCard), call(onGetCardsData)]);
}
