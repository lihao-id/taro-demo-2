import { createContext } from "@tarojs/taro";

export const AssistantContext = createContext({
  messageCount: 0,
  setShow: () => {},
  input: "",
  setInput: () => {}
});

export const CardContext = createContext({
  id: 0
});
