import Taro, { request as http } from "@tarojs/taro";

Taro.addInterceptor(Taro.interceptors.logInterceptor);
Taro.addInterceptor(Taro.interceptors.timeoutInterceptor);

const BASE_URL = "http://www.glx.com";

export const LOGIN = "https://api.weixin.qq.com/sns/jscode2session";
export const IMG_BASE_URL =
  "http://39.105.219.102:8081/file/business-card/image";

export const login = ({ code }) => {
  return http({
    url: LOGIN,
    method: "GET",
    data: {
      appid: "wxea9c3a8b2f8ca1cf",
      secret: "6367c7b5c9a14c43d852c44ada455b67",
      js_code: code,
      grant_type: "authorization_code"
    }
  });
};

export const GET_ACCESS_TOKEN = "https://api.weixin.qq.com/cgi-bin/token";
// export const getAccessToken = ({})=>{
//     return http({
//         url:GET_ACCESS_TOKEN,
//         method:'GET',

//     })
// }

export const SEND_MESSAGE =
  "https://api.weixin.qq.com/cgi-bin/message/custom/send";

export const sendMessage = ({}) => {};

const GET_RECOMMENT_KEYWORDS = "http://suggestion.baidu.com/su";
export const getRecommendKeywords = ({ keyword }) => {
  return http({
    method: "GET",
    url: GET_RECOMMENT_KEYWORDS,
    data: {
      wd: keyword,
      cb: "window.baidu.sug"
    }
  });
};
