
import * as type from "./action-type";

export const setKeyword = value => {
  return {
    type: type.SET_KEYWORD,
    value: value
  };
};

export const setRecommendKeywordList = value => {
  return {
    type: type.SET_RECOMMEND_KEYWORD_LIST,
    value: value
  };
};
