import Taro, { Component } from "@tarojs/taro";

import { View, Text, Image } from "@tarojs/components";
// import CardText from "components/index/center/cards/card/text/CardText";
import Card from "components/home/card-info/card/Card";
import RecentlyViewed from "components/home/card-info/recently-viewed/RecentlyViewed";
import Menu from "components/home/card-info/menu/Menu";
import Info from "components/home/card-info/info/Info";
import Introduction from "components/home/card-info/introduction/Introduction";
import MySwiper from "components/home/card-info/my-swiper/MySwiper";
import Footer from "components/home/card-info/footer/Footer";
import * as Api from "api/api";

import "./css/card-info.scss";

export default class CardInfo extends Component {
  constructor() {
    super(...arguments);
  }

  getImg(url) {
    return Api.IMG_BASE_URL + "/card-info" + url;
  }

  render() {
    return (
      <View className='card-info'>
        <View className='card-info__back'>
          <Image className='back-img' src={this.getImg("/back.png")} />
          <Text className='text'>详情页面</Text>
        </View>
        <Card />
        <RecentlyViewed />
        <Menu />
        <Info />
        <Introduction />
        <MySwiper />
        <Footer />
      </View>
    );
  }
}
