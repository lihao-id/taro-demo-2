import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import * as Api from "api/api";

import "./css/message.scss";

export default props => {
  console.log(props.message);
  const [message, setMessage] = useState(props.message);

  function getImg(url) {
    return Api.IMG_BASE_URL + "/leave-message" + url;
  }
  function getDate(time) {
    let str = "";

    str += time.getFullYear() + "年";

    str += time.getMonth() + 1 + "月";

    str += time.getDate() + "日";

    return str;
  }
  function getTime(time) {
    let str = "";

    str += time.getHours() + ":";

    str += time.getMinutes();

    return str;
  }
  return (
    <View className='message'>
      <View className='message__top'>
        <Image className='avatar' />
        <View className='center'>
          <Text className='username'>{message.username}</Text>
          <Text className='time'>
            {/* <Text className='date'>{getDate(message.time)}</Text>
            <Text className='time'>{getTime(message.time)}</Text> */}
          </Text>
        </View>
        <View className='like'>
          <Text className='like-num'>{message.likeNum}</Text>
          {message.like ? (
            <Image className='like-active-img' src={getImg("/like-active.png")} />
          ) : (
            <Image className='like-img' src={getImg("/like.png")} />
          )}
        </View>
      </View>
      <View className='message__content'>{message.content}</View>
    </View>
  );
};
