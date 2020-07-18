import takeLatest, {delay} from 'redux-saga';
import { actionType } from '../actions';


export function* getUserInfoSaga() {
  function* getUserInfo ({type, payload}) {
    yield delay(1000);
  }

  yield takeLatest(actionType.GET_USERINFO, getUserInfo)
}
