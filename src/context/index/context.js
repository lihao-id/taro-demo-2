/* eslint-disable import/prefer-default-export */
import { createContext } from "@tarojs/taro";

export const NotifyContext = createContext({ count: 0 });

export const CardInfoContext = createContext({
  list: [],
  currentIndex: 0,
  setCurrentIndex: () => {}
});

export const ShareCardContext = createContext({
  doOpen: () => {}
});
