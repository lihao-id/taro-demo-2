import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import CardText from "components/index/center/cards/card/text/CardText";
import * as Api from "api/api";

import "./css/card.scss";

export default props => {
  let avatar =
    "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIP9LICDLf33J6DVVwz6Q597z05t9Tic4tnj3v9qRY554YZ8bDOy3FZwzqJSUDnJBRRSgj8zzbnibLA/132";

  function getImg(url) {
    return Api.IMG_BASE_URL + "/card-info/card" + url;
  }
  return (
    <View className='card'>
      <Image className='bg-img' src={getImg("/bg.png")} />
      <Image className='bg-shadow' src={getImg("/bg-shadow.png")} />
      <View className='avatar-wrapper'>
        <Image className='avatar' src={avatar} />
      </View>
      <CardText
        info={{
          id: 1,
          title: "首席AI服务官",
          name: "人工智能推广系统",
          company: "西安国信软件",
          mobilephone: "13212344321",
          email: "12352-9109@qq.com",
          address: "西安市XX区XX街XX大厦2412"
        }}
      />
    </View>
  );
};
