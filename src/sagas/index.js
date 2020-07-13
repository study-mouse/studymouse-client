import { put, takeLatest, all } from 'redux-saga/effects';

function* f() {
  yield takeLatest();
}
export default function* rootSaga() {
  yield all([f()]);
}
