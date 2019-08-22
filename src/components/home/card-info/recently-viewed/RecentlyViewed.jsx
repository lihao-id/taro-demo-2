import Taro, { Component } from "@tarojs/taro";

import { View, Text, Image } from "@tarojs/components";

import "./css/recently-viewed.scss";

export default props => {
  let avatar =
    "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIP9LICDLf33J6DVVwz6Q597z05t9Tic4tnj3v9qRY554YZ8bDOy3FZwzqJSUDnJBRRSgj8zzbnibLA/132";
  let recentlyViewedArr = [
    {
      avatar: avatar
    },
    {
      avatar: avatar
    },
    {
      avatar: avatar
    },
    {
      avatar: avatar
    },
    {
      avatar: avatar
    },
    {
      avatar: avatar
    },
    {
      avatar: avatar
    }
  ];
  if (recentlyViewedArr.length > 6) {
    recentlyViewedArr = recentlyViewedArr.slice(0, 6);
  }
  return (
    <View className='recently-viewed'>
      <View className='top'>
        {recentlyViewedArr &&
          recentlyViewedArr.map((item, index) => (
            <Image className='avatar' key={index} src={item.avatar} />
          ))}
        <Image className='more-img' src={require("./img/more.png")} />
        <View className='like-wrapper'>
          <Text className='like-num'>5912</Text>
          <Image className='like-img' src={require("./img/like.png")} />
        </View>
      </View>
      <View className='line' />
      <View className='bottom'>最近浏览</View>
    </View>
  );
};
