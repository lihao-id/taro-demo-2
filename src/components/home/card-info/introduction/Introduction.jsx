import Taro, { Component } from "@tarojs/taro";

import { View, Text, Image } from "@tarojs/components";

import "./css/introduction.scss";

export default props => {
  return (
    <View className='introduction'>
      <View className='introduction__title'>
        <Image className='icon' src={require("./img/title-icon.png")} />
        <Text className='text'>个人简介</Text>
      </View>
      <View className='introduction__content'>
        您好，我是西安国信软件信息技术研究院有限公司人工智能推广系统的首席服务官，很高兴能在这里与您相遇！
        感谢您关注西安国信软件信息技术研究院有限公司的智能名片，在这里您将体验到全球首款AI人工智能名片！
        西安国信软件信息技术研究院有限公司成立于2018年9月，是一家创新驱动的城市互联网公司，致力于大数据赋能的产品创新、
        服务创新、模式创新为城市客户提供咨询定制、架构实现、云化运营的一站式以科技手段推动产城融合及数字经济的可持续发展。
      </View>
    </View>
  );
};
