import {all, call, takeLatest, put} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

import {
  addColumnStart,
  deleteColumnStart,
  setColumn,
  getColumnsStart,
  setColumnLoading,
  requestColumnFailure,
} from './columnsSlice';

import {addColumn, deleteColumn, getColumns} from '../../services/apiServices';

export function* addColumnRequest(action: PayloadAction<string>) {
  try {
    yield put(setColumnLoading());
    yield addColumn(action.payload);
    yield put(getColumnsStart());
  } catch (e) {
    yield put(requestColumnFailure(e.message));
  }
}

export function* deleteColumnRequest(action: PayloadAction<number>) {
  try {
    yield put(setColumnLoading());
    yield deleteColumn(action.payload);
    yield put(getColumnsStart());
  } catch (e) {
    yield put(requestColumnFailure(e.message));
  }
}

export function* getColumnData() {
  try {
    yield put(setColumnLoading());
    const response = yield getColumns();
    yield put(setColumn(response.data));
  } catch (e) {
    yield put(requestColumnFailure(e.message));
  }
}

export function* onGetColumnData() {
  yield takeLatest(getColumnsStart, getColumnData);
}

export function* onAddColumn() {
  yield takeLatest(addColumnStart, addColumnRequest);
}

export function* onDeleteColumn() {
  yield takeLatest(deleteColumnStart, deleteColumnRequest);
}

export function* columnsSagas() {
  yield all([call(onAddColumn), call(onDeleteColumn), call(onGetColumnData)]);
}
