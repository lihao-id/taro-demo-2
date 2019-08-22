import Taro, { Component, useContext } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { CardContext } from "@/context/home/context";
import "./css/menu.scss";

export default props => {
  const card = useContext(CardContext);
  function toLeaveMessage() {
    Taro.navigateTo({
      url: `/pages/leave-message/LeaveMessage?cardId=${card.id}`
    });
  }
  return (
    <View className='menu'>
      <View className='floor'>
        <View className='item'>
          <Image className='icon' src={require("./img/goods.png")} />
          <View className='right'>
            <Text className='value'>28件</Text>
            <Text className='label'>商品</Text>
          </View>
        </View>
        <View className='item'>
          <Image
            className='icon'
            src={require("./img/leave-message.png")}
            onClick={toLeaveMessage}
          />
          <View className='right'>
            <Text className='value'>9514</Text>
            <Text className='label'>留言</Text>
          </View>
        </View>
      </View>
      <View className='floor'>
        <View className='item'>
          <Image className='icon' src={require("./img/favorites.png")} />
          <View className='right'>
            <Text className='value'>1.4W</Text>
            <Text className='label'>收藏</Text>
          </View>
        </View>
        <View className='item'>
          <Image className='icon' src={require("./img/share.png")} />
          <View className='right'>
            <Text className='value'>8529</Text>
            <Text className='label'>发送名片</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
