import {all, call, put, takeLatest} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

import {
  addCommentStart,
  deleteCommentStart,
  setComments,
  getCommentsStart,
  setCommentsLoading,
  requestCommentsFailure,
} from './commentsSlice';

import {
  addComment,
  deleteComment,
  getComments,
} from '../../services/apiServices';

export function* addCommentRequest(
  action: PayloadAction<[string, string, string]>,
) {
  const [id, value, username] = action.payload;
  try {
    yield put(setCommentsLoading());
    yield addComment(username, value, id);
    yield put(getCommentsStart());
  } catch (e) {
    yield put(requestCommentsFailure(e.message));
  }
}

export function* deleteCommentRequest(action: PayloadAction<string>) {
  try {
    yield put(setCommentsLoading());
    yield deleteComment(action.payload);
    yield put(getCommentsStart());
  } catch (e) {
    yield put(requestCommentsFailure(e.message));
  }
}

export function* getCommentsData() {
  try {
    yield put(setCommentsLoading());
    const response = yield getComments();
    console.log(response);
    yield setComments(response);
  } catch (e) {
    yield put(requestCommentsFailure(e.message));
  }
}

export function* onGetCommentsData() {
  yield takeLatest(getCommentsStart, getCommentsData);
}

export function* onAddComment() {
  yield takeLatest(addCommentStart, addCommentRequest);
}

export function* onDeleteComment() {
  yield takeLatest(deleteCommentStart, deleteCommentRequest);
}

export function* commentsSagas() {
  yield all([
    call(onAddComment),
    call(onDeleteComment),
    call(onGetCommentsData),
  ]);
}
