import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./css/card-text.scss";

export default props => {
  let { info } = props;
  return (
    <View className='card-text'>
      <View className='top'>
        <View className='card-text__title'>{info.title}</View>
        <View className='card-text__name-wrapper'>
          <Text className='card-text__name'>{info.name}</Text>
          <Text className='card-text__company'>{info.company}</Text>
        </View>
      </View>
      <View className='line' />
      <View className='bottom'>
        <View className='card-text__mobilephone'>
          <Text className='item'>联系电话</Text>
          <Text className='value'>{info.mobilephone}</Text>
        </View>
        <View className='card-text__email'>
          <Text className='item'>电子邮箱</Text>
          <Text className='value'>{info.email}</Text>
        </View>
        <View className='card-text__address'>
          <Text className='item'>公司地址</Text>
          <Text className='value'>{info.address}</Text>
        </View>
      </View>
    </View>
  );
};
