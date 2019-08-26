import Taro, { Component, useContext, useEffect, useState } from "@tarojs/taro";
import { View, Text, Swiper, SwiperItem, Image } from "@tarojs/components";
import { CardInfoContext, ShareCardContext } from "@/context/index/context";
import Card from "./card/Card";

import "./css/cards.scss";

export default () => {
  const cardInfo = useContext(CardInfoContext);
  const shareCard = useContext(ShareCardContext);

  function onChange(param) {
    let index = param.currentTarget.current;
    // console.log(cardInfo.list[index]);
    cardInfo.setCurrentIndex(index);
  }

  function onClickLike() {
    console.log("click-like");
  }

  function onClickLeaveMessage() {
    Taro.navigateTo({
      url: `/pages/leave-message/LeaveMessage?cardId=${
        cardInfo.list[cardInfo.currentIndex].id
      }`
    });
  }

  return (
    <View className='cards'>
      <Swiper
        className='swiper'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        onChange={onChange}
        // circular
      >
        {cardInfo.list &&
          cardInfo.list.map(item => (
            <SwiperItem key={item.id} className='swiper-item'>
              <Card cardInfo={item} />
            </SwiperItem>
          ))}
      </Swiper>
      <View className='bottom'>
        <View className='like item' onClick={onClickLike}>
          <Image className='img-like img' src={require("./img/like.png")} />
          {/* <Image
            className='img-like-active img'
            src={require("./img/like-active.png")}
          /> */}
          <View className='num'>5912</View>
        </View>
        <View className='leave-message item' onClick={onClickLeaveMessage}>
          <Image
            className='img-leave-message img'
            src={require("./img/leave-message.png")}
          />
          <View className='num'>5914</View>
        </View>
        <View className='share item' onClick={shareCard.doOpen}>
          <Image className='img-share img' src={require("./img/share.png")} />
          <View className='num'>8529</View>
        </View>
      </View>
    </View>
  );
};
