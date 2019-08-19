import Taro, { Components } from "@tarojs/taro";

import { View, Text, Image } from "@tarojs/components";

import "./css/card.scss";

export default props => {
  let { cardInfo: info } = props;
  return (
    <View className='card'>
      <Image className='bg-img' src={require("./img/bg.png")} />
      <View className='top'>
        <View className='card__title'>{info.title}</View>
        <View className='card__name-wrapper'>
          <Text className='card__name'>{info.name}</Text>
          <Text className='card__company'>{info.company}</Text>
        </View>
      </View>
      <View className='line' />
      <View className='bottom'>
        <View className='card__mobilephone'>
          <Text className='item'>联系电话</Text>
          <Text className='value'>{info.mobilephone}</Text>
        </View>
        <View className='card__email'>
          <Text className='item'>电子邮箱</Text>
          <Text className='value'>{info.email}</Text>
        </View>
        <View className='card__address'>
          <Text className='item'>公司地址</Text>
          <Text className='value'>{info.address}</Text>
        </View>
      </View>
    </View>
  );
};
