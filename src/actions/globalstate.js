import * as types from './ActionTypes';

export function savePersonalInfo(personalInfo) {
  return {
    type: types.SAVE_PERSONAL_INFO,
    personalInfo,
  };
}

export function savePost(post) {
  return {
    type: types.SAVE_POST,
    post,
  };
}

export function saveAllPost(allPost) {
  return {
    type: types.SAVE_ALL_POST,
    allPost,
  };
}
