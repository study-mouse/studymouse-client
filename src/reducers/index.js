import { combineReducers } from 'redux';
import { actionType } from '../actions';
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

const reducer = combineReducers({
  getUserInfo: (state = INIT_STATE.userInfo, action) => {
    switch (action.type) {
      case actionType.GET_USERINFO_REQUEST:
        return produce(state, (draftState) => {
          draftState = action.payload;
          return draftState;
        });
      default:
        return state;
    }
  },
  getWordList: (state = INIT_STATE.wordList, action) => {
    switch (action.type) {
      case actionType.GET_WORDLIST_REQUEST:
        return produce(state, (draftState) => {
          draftState = action.payload;
          return draftState;
        });
      default:
        return state;
    }
  },
});

export default reducer;
