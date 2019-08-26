import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, Button } from "@tarojs/components";
import * as Api from "api/api";

import "./css/share-card.scss";

export default props => {
  const { onClose } = props;

  function getImg(url) {
    return Api.IMG_BASE_URL + "/share-card" + url;
  }

  return (
    <View className='share-card'>
      <View className='share-card__mask' />
      <View className='share-card__card'>
        <Image className='card__bg-img' src={getImg("/card-bg.png")} />
        <View className='card__top'>
          <Image className='avatar' />
          <View className='title'>
            <Text className='floor1'>首席AI服务官</Text>
            <Text className='floor2'>人工智能推广系统</Text>
            <Text className='floor3'>西安国信软件信息技术研究院有</Text>
          </View>
        </View>
        <View className='card__center'>
          <Text className='title'>分享至</Text>
          <View className='share-wrapper'>
            <View className='share-floor'>
              <View className='share'>
                <Image
                  className='share-icon'
                  src={getImg("/wechat-moment.png")}
                />
                <Text className='share-text'>微信朋友圈</Text>
              </View>
              <View className='share'>
                <Image
                  className='share-icon'
                  src={getImg("/wechat-friend.png")}
                />
                <Text className='share-text'>微信好友</Text>
              </View>
              <View className='share'>
                <Image className='share-icon' src={getImg("/qq-space.png")} />
                <Text className='share-text'>QQ空间</Text>
              </View>
              <View className='share'>
                <Image className='share-icon' src={getImg("/qq-friend.png")} />
                <Text className='share-text'>QQ好友</Text>
              </View>
            </View>
            <View className='share-floor'>
              <View className='share'>
                <Image className='share-icon' src={getImg("/weibo.png")} />
                <Text className='share-text'>微博</Text>
              </View>
            </View>
          </View>
        </View>
        <View className='card__bottom'>
          <Button className='close' onClick={onClose}>
            关闭
          </Button>
        </View>
      </View>
    </View>
  );
};
