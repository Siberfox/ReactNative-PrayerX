import {all, call} from 'redux-saga/effects';

import {userSagas} from './sagas/user.sagas';
import {cardsSagas} from './sagas/cards.sagas';
import {commentsSagas} from './sagas/comments.sagas';
import {columnsSagas} from './sagas/columns.sagas';

export default function* rootSaga() {
  yield all([
    call(cardsSagas),
    call(userSagas),
    call(commentsSagas),
    call(columnsSagas),
  ]);
}
