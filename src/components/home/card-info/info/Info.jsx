import Taro from "@tarojs/taro";

import { View, Text, Image } from "@tarojs/components";
import * as Api from "api/api";
import "./css/info.scss";

export default props => {
  function getImg(url) {
    return Api.IMG_BASE_URL + "/card-info/info" + url;
  }
  return (
    <View className='info'>
      <View className='info__title'>
        <Image className='icon' src={getImg("/title-icon.png")} />
        <Text className='text'>详细信息</Text>
      </View>
      <View className='info__info'>
        <Image className='bg-img' src={getImg("/bg.png")} />
        <View className='floor'>
          <Image className='left-icon' src={getImg("/mobilephone.png")} />
          <Text className='label'>电话</Text>
          <Text className='value'>134 5919 2001</Text>
          <View className='button'>
            <View className='icon-wrapper'>
              <Image className='icon' src={getImg("/call.png")} />
            </View>
          </View>
        </View>
        <View className='floor'>
          <Image className='left-icon' src={getImg("/phone.png")} />
          <Text className='label'>座机</Text>
          <Text className='value'>021-342145</Text>
          <View className='button'>
            <View className='icon-wrapper'>
              <Image className='icon' src={getImg("/call.png")} />
            </View>
          </View>
        </View>
        <View className='floor'>
          <Image className='left-icon' src={getImg("/wechat.png")} />
          <Text className='label'>微信</Text>
          <Text className='value'>zxw13490987301</Text>
          <View className='button'>
            <View className='icon-wrapper'>
              <Image className='icon' src={getImg("/copy.png")} />
            </View>
          </View>
        </View>
        <View className='floor'>
          <Image className='left-icon' src={getImg("/email.png")} />
          <Text className='label'>邮箱</Text>
          <Text className='value'>912394810@qq.com</Text>
          <View className='button'>
            <View className='icon-wrapper'>
              <Image className='icon' src={getImg("/copy.png")} />
            </View>
          </View>
        </View>
        <View className='floor'>
          <Image className='left-icon' src={getImg("/company.png")} />
          <Text className='label'>公司</Text>
          <Text className='value'>西安国信软件研究院有限责 任公司</Text>
          <View className='button'>
            <View className='icon-wrapper'>
              <Image className='icon' src={getImg("/copy.png")} />
            </View>
          </View>
        </View>
        <View className='floor'>
          <Image className='left-icon' src={getImg("/address.png")} />
          <Text className='label'>地址</Text>
          <Text className='value'>陕西省西安市XX区XX街XX 大厦1204</Text>
          <View className='button'>
            <View className='icon-wrapper'>
              <Image className='icon' src={getImg("/copy.png")} />
            </View>
          </View>
        </View>
      </View>
      <View className='info__btn'>存入手机通讯录</View>
    </View>
  );
};
