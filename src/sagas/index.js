import { all } from 'redux-saga/effects';
import getUserInfoSaga from './getUserInfoSaga';

export default function* rootSaga() {
  yield all(getUserInfoSaga);
}
