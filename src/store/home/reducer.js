import * as type from "./action-type";

export const currentTab = (state = 0, action = {}) => {
  switch (action.type) {
    case type.SET_CURRENT_TAB:
      return action.index;
    default:
      return state;
  }
};

export const assistant = (
  state = { messageCount: 0, show: false, input: "" },
  action = {}
) => {
  const { value } = action;
  switch (action.type) {
    case type.SET_ASSISTANT_MESSAGE_COUNT:
      return { ...state, messageCount: value };
    case type.SET_ASSISTANT_SHOW:
      return { ...state, show: value };
    case type.SET_ASSISTANT_INPUT:
      return { ...state, input: value };
    default:
      return state;
  }
};

export const card = (state = { id: 0 }, action = {}) => {
  const { value } = action;
  switch (action.type) {
    case type.SET_CARD_ID:
      return { id: value };
    default:
      return state;
  }
};
