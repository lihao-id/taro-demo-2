import * as type from "./action-type";

export const setCurrentTab = index => {
  return {
    type: type.SET_CURRENT_TAB,
    index: index
  };
};

export const setAssistantMessageCount = value => {
  return {
    type: type.SET_ASSISTANT_MESSAGE_COUNT,
    value: value
  };
};

export const setAssistantShow = value => {
  return {
    type: type.SET_ASSISTANT_SHOW,
    value: value
  };
};

export const setAssistantInput = value => {
  return {
    type: type.SET_ASSISTANT_INPUT,
    value: value
  };
};

export const setCardId = value => {
  return {
    type: type.SET_CARD_ID,
    value: value
  };
};
