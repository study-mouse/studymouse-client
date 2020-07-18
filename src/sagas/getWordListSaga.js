import takeLatest from 'redux-saga';
import { actionType } from '../actions';

export function* getWordListSaga() {
  function* getWordList() {}

  yield takeLatest(actionType.GET_WORDLIST_REQUEST, getWordList);
}
