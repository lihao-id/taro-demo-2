/* eslint-disable import/prefer-default-export */
import * as type from "./action-type";

export const counter = (state = 0, action = {}) => {
  switch (action.type) {
    case type.ADD:
      return state + 1;
    case type.MINUS:
      return state - 1;
    default:
      return state;
  }
};

export const notify = (state = { count: 0 }, action = {}) => {
  switch (action.type) {
    case type.SET_NOTIFY_COUNT:
      return { ...state, count: action.count };
    default:
      return state;
  }
};

export const cardInfoList = (state = [], action = {}) => {
  switch (action.type) {
    case type.SET_CARD_INFO_LIST:
      return action.cardInfoList;
    default:
      return state;
  }
};

export const currentCardIndex = (state = 0, action = {}) => {
  switch (action.type) {
    case type.SET_CURRENT_CARD_INDEX:
      return action.index;
    default:
      return state;
  }
};
