import { GET_USERINFO, GET_WORDLIST } from '../actions';
import produce from 'immer';

const INIT_STATE = {
  userInfo: {
    userId: '',
  },
  wordList: {
    viewType: '',
    startDate: '',
    endDate: '',
    words: [],
  },
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USERINFO:
      return produce(state, (draftState) => {
        draftState.userInfo = action.payload;
        return draftState;
      });
    case GET_WORDLIST:
      return produce(state, (draftState) => {
        draftState.wordList = action.payload;
        return draftState;
      });
    default:
      return state;
  }
};

export default reducer;
