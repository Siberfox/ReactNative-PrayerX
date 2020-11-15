import {all, call} from 'redux-saga/effects';

import {userSagas} from './user/user.sagas';
import {cardsSagas} from './cards/cards.sagas';
import {commentsSagas} from './comments/comments.sagas';
import {columnsSagas} from './columns/columns.sagas';

export default function* rootSaga() {
  yield all([
    call(cardsSagas),
    call(userSagas),
    call(commentsSagas),
    call(columnsSagas),
  ]);
}
