import Taro, { Component } from "@tarojs/taro";

import { View, Text, Image } from "@tarojs/components";

import "./css/footer.scss";

export default props => {
  return (
    <View className='footer'>
      <Image className='icon' />
      <Text className='text'>商通中国提供技术支持</Text>
    </View>
  );
};
