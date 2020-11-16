import {all, call, takeLatest, put} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

import {deleteCard, setCards, getCardsStart, addCardStart} from './cardsSlice';

import {
  addCardApi,
  deleteCardApi,
  getCardsApi,
} from '../../services/apiServices';

export function* addCardRequest(action: PayloadAction<[string, string]>) {
  const [id, value] = action.payload;
  try {
    yield addCardApi(value, id);
    yield put(getCardsStart);
  } catch (e) {
    console.log(e);
  }
}

export function* deleteCardRequest(action: PayloadAction<string>) {
  try {
    yield deleteCardApi(action.payload);
    yield put(getCardsStart);
  } catch (e) {
    console.log(e);
  }
}

export function* getCardsData() {
  try {
    const response = yield getCardsApi();
    yield setCards(response);
  } catch (e) {
    console.log(e);
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
