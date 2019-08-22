/* eslint-disable import/prefer-default-export */
import * as type from "./action-type";

export const keyword = (state = "", action = {}) => {
  switch (action.type) {
    case type.SET_KEYWORD:
      return action.value;
    default:
      return state;
  }
};

export const recommendKeywordList = (state = [], action = {}) => {
  switch (action.type) {
    case type.SET_RECOMMEND_KEYWORD_LIST:
      return action.value;
    default:
      return state;
  }
};
