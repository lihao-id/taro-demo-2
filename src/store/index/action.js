import * as type from "./action-type";

export const add = () => {
  return {
    type: type.ADD
  };
};
export const minus = () => {
  return {
    type: type.MINUS
  };
};

// 异步的action
export function asyncAdd() {
  return dispatch => {
    setTimeout(() => {
      dispatch(add());
    }, 500);
  };
}

/**
 * 设置通知的个数
 * @param {*} count
 */
export const setNotifyCount = count => {
  return {
    type: type.SET_NOTIFY_COUNT,
    count: count
  };
};

/**
 * 设置cardInfoList
 * @param {*} cardInfoList
 */
export const setCardInfoList = cardInfoList => {
  return {
    type: type.SET_CARD_INFO_LIST,
    cardInfoList: cardInfoList
  };
};

export const setCurrentCardIndex = index => {
  return {
    type: type.SET_CURRENT_CARD_INDEX,
    index: index
  };
};
