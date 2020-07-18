import { createAction } from 'redux-actions';

export const actionType = {
  GET_USERINFO_REQUEST: '@@/user/GET_USERINFO/REQUEST',
  GET_USERINFO_SUCCESS: '@@/user/GET_USERINFO/SUCCESS',
  GET_USERINFO_FAILURE: '@@/user/GET_USERINFO/FAILURE',

  GET_WORDLIST_REQUEST: '@@/word/GET_WORDLIST/REQUEST',
  GET_WORDLIST_SUCCESS: '@@/word/GET_WORDLIST/SUCCESS',
  GET_WORDLIST_FAILURE: '@@/word/GET_WORDLIST/FAILURE',
};

export const getUserInfoActionRequest = createAction(
  actionType.GET_USERINFO_REQUEST,
);
export const getUserInfoActionSuccess = createAction(
  actionType.GET_USERINFO_SUCCESS,
);
export const getUserInfoActionFailure = createAction(
  actionType.GET_USERINFO_FAILURE,
);
export const getWordListActionRequest = createAction(
  actionType.GET_WORDLIST_REQUEST,
);
export const getWordListActionSuccess = createAction(
  actionType.GET_WORDLIST_SUCCESS,
);
export const getWordListActionFailure = createAction(
  actionType.GET_WORDLIST_FAILURE,
);
