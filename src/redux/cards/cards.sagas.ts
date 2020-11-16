import {all, call, takeLatest} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

import {addCard, deleteCard, setCards, getCardsStart} from './cardsSlice';

import {
  addCardApi,
  deleteCardApi,
  getCardsApi,
} from '../../services/apiServices';

export function* addCardRequest(action: PayloadAction<[string, string]>) {
  const [id, value] = action.payload;
  try {
    yield addCardApi(value, id);
  } catch (e) {
    console.log(e);
  }
}

export function* deleteCardRequest(action: PayloadAction<string>) {
  try {
    yield deleteCardApi(action.payload);
  } catch (e) {
    console.log(e);
  }
}

export function* getCardsData() {
  try {
    const response = yield getCardsApi();
    console.log(response);
    yield setCards(response);
  } catch (e) {
    console.log(e);
  }
}

export function* onGetCardsData() {
  yield takeLatest(getCardsStart, getCardsData);
}

export function* onAddCard() {
  yield takeLatest(addCard, addCardRequest);
}

export function* onDeleteCard() {
  yield takeLatest(deleteCard, deleteCardRequest);
}

export function* cardsSagas() {
  yield all([call(onAddCard), call(onDeleteCard), call(onGetCardsData)]);
}
