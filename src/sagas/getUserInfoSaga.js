import { call, put, takeLatest } from 'redux-saga/effects';
import { actionType } from '../actions';
import axios from 'axios';

function getAPI() {
  axios
    .get(
      `https://studymouse-mjung1798.endpoint.ainize.ai/oauth2/authorization/google`,
    )
    .then((res) => console.log(res))
    .catch((error) => console.log('error', error));
}

export function* getUserInfoSaga() {
  function* getUserInfo() {
    try {
      const res = yield call(getAPI);
      console.log(res);
      yield put({ type: actionType.GET_USERINFO_SUCCESS, payload: res });
    } catch (e) {
      console.log(e);
      yield put({ type: actionType.GET_USERINFO_FAILURE, payload: e });
    }
  }
  yield takeLatest(actionType.GET_USERINFO_REQUEST, getUserInfo);
}
