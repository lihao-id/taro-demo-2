import Taro, { Component, useContext } from "@tarojs/taro";

import { View, Text, Image } from "@tarojs/components";
import { CardInfoContext } from "@/context/index/context";

import "./css/bottom.scss";

export default () => {
  const cardInfo = useContext(CardInfoContext);

  return (
    <View className='index-bottom'>
      <View className='index-bottom__title'>
        <Image className='img-signature' src={require("./img/signature.png")} />
        <Text className='text'>个性签名</Text>
        {/* 当前CardInfoIndex：{cardInfo.currentIndex} */}
      </View>
      <View className='index-bottom__content'>
        致力于大数据赋能的产品创新、服务创新、模式创新为城市客户提供咨询订制、架构实现、云化运营的一站式以科技手段推动产城融合及数字经济的可持续发展。
      </View>
    </View>
  );
};
