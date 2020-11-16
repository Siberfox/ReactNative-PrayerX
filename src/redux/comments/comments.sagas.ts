import {all, call, takeLatest, put} from 'redux-saga/effects';

import {addComment, editComment, deleteComment} from './commentsSlice';

export function* addCommentRequest() {}

export function* editCommentRequest() {}

export function* deleteCommentRequest() {}

export function* onAddComment() {
  yield takeLatest(addComment, addCommentRequest);
}

export function* onEditComment() {
  yield takeLatest(editComment, editCommentRequest);
}

export function* onDeleteComment() {
  yield takeLatest(deleteComment, deleteCommentRequest);
}

export function* cardsSagas() {
  yield all([call(onAddComment), call(onEditComment), call(onDeleteComment)]);
}
