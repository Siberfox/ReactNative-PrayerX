import {all, call, takeLatest, put} from 'redux-saga/effects';

import {addColumn, editColumnName, deleteColumn} from './columnsSlice';

export function* addColumnRequest() {}

export function* editColumnRequest() {}

export function* deleteColumnRequest() {}

export function* onAddColumn() {
  yield takeLatest(addColumn, addColumnRequest);
}

export function* onEditColumn() {
  yield takeLatest(editColumnName, editColumnRequest);
}

export function* onDeleteColumn() {
  yield takeLatest(deleteColumn, deleteColumnRequest);
}

export function* cardsSagas() {
  yield all([call(onAddColumn), call(onEditColumn), call(onDeleteColumn)]);
}
