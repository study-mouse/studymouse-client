export const actionType = {
  GET_USERINFO: '@@/user/GET_USERINFO',
  GET_WORDLIST: '@@/word/GET_WORDLIST',
};

export const userActions = {};

const makeActionCreator = (actionType) => {
  return (payload) => ({ type: actionType, payload });
};

export const getUserInfo = (payload) => ({
  type: actionType.GET_USERINFO,
  payload,
});

export const getWordList = (payload) => ({
  type: actionType.GET_WORDLIST,
  payload,
});
