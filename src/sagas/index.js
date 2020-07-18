import { all, fork } from 'redux-saga/effects';
import { getUserInfoSaga } from './getUserInfoSaga';
import { getWordListSaga } from './getWordListSaga';

export default function* rootSaga() {
  yield all([fork(getUserInfoSaga), fork(getWordListSaga)]);
}
