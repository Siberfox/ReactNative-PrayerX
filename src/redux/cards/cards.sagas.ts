import {all, call, takeLatest, put} from 'redux-saga/effects';

import {addCard, addCardPrayed, deleteCard} from './cardsSlice';

export function* addCardRequest() {}

export function* addPrayedRequest() {}

export function* deleteCardRequest() {}

export function* onAddCard() {
  yield takeLatest(addCard, addCardRequest);
}

export function* onAddPrayed() {
  yield takeLatest(addCardPrayed, addPrayedRequest);
}

export function* onDeleteCard() {
  yield takeLatest(deleteCard, deleteCardRequest);
}

export function* cardsSagas() {
  yield all([call(onAddCard), call(onAddPrayed), call(onDeleteCard)]);
}
