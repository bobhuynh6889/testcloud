import * as types from '../actions/ActionTypes';

const INITIAL_STATE = {
  personalInfo: [],
  post: [],
  allPost: [],
};

const globalstate = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SAVE_PERSONAL_INFO:
      return {...state, personalInfo: action.personalInfo};
    case types.SAVE_POST:
      return {...state, post: action.post};
    case types.SAVE_ALL_POST:
      return {...state, allPost: action.allPost};
    default:
      return state;
  }
};

export default globalstate;
