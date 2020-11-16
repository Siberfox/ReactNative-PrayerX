import {all, call, put, takeLatest} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

import {
  addCommentStart,
  deleteComment,
  setComments,
  getCommentsStart,
} from './commentsSlice';

import {
  addCommentApi,
  deleteCommentApi,
  getCommentsApi,
} from '../../services/apiServices';

export function* addCommentRequest(
  action: PayloadAction<[string, string, string]>,
) {
  const [id, value, username] = action.payload;
  try {
    yield addCommentApi(username, value, id);
    yield put(getCommentsStart());
  } catch (e) {
    console.log(e);
  }
}

export function* deleteCommentRequest(action: PayloadAction<string>) {
  try {
    yield deleteCommentApi(action.payload);
    yield put(getCommentsStart());
  } catch (e) {
    console.log(e);
  }
}

export function* getCommentsData() {
  try {
    const response = yield getCommentsApi();
    console.log(response);
    yield setComments(response);
  } catch (e) {
    console.log(e);
  }
}

export function* onGetCommentsData() {
  yield takeLatest(getCommentsStart, getCommentsData);
}

export function* onAddComment() {
  yield takeLatest(addCommentStart, addCommentRequest);
}

export function* onDeleteComment() {
  yield takeLatest(deleteComment, deleteCommentRequest);
}

export function* commentsSagas() {
  yield all([
    call(onAddComment),
    call(onDeleteComment),
    call(onGetCommentsData),
  ]);
}
