import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";

import "./css/user.scss";

export default () => {
  return (
    <View className='user'>
      <View className='user__edit'>
        <Text className='edit'>编辑资料</Text>
      </View>
      <View className='user__balance'>
        <Image className='avatar'>
          <Text className='username'>用户皮卡丘</Text>
        </Image>
        <View className='floor1'>我的财富 (元)</View>
        <View className='floor2'>19842.00</View>
        <View className='floor3'>
          <Button>提现</Button>
        </View>
      </View>
      <View className='user__menu'>
        <View className='floor'>
          <Image className='icon' />
          <Text className='name'>动态</Text>
          <View className='message-count' />
        </View>
        <View className='floor'>
          <Image className='icon' />
          <Text className='name'>消息</Text>
          <View className='message-count' />
        </View>
        <View className='floor'>
          <Image className='icon' />
          <Text className='name'>雷达</Text>
          <View className='message-count' />
        </View>
        <View className='floor'>
          <Image className='icon' />
          <Text className='name'>资金明细</Text>
          <View className='message-count' />
        </View>
        <View className='floor'>
          <Image className='icon' />
          <Text className='name'>我的订单</Text>
          <View className='message-count' />
        </View>
        <View className='floor'>
          <Image className='icon' />
          <Text className='name'>历史浏览</Text>
          <View className='message-count' />
        </View>
        <View className='floor'>
          <Image className='icon' />
          <Text className='name'>我的收藏</Text>
          <View className='message-count' />
        </View>
      </View>
    </View>
  );
};
