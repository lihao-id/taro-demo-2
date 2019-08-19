import Taro, { Component } from "@tarojs/taro";

import { View, Text, Image } from "@tarojs/components";

import * as IndexContext from "pages/index/context";

import "./css/index-top.scss";

class IndexTop extends Component {
  static contextType = IndexContext.NotifyContext;
  onClickMessage() {
    console.log("click-message");
  }

  onClickSearch() {
    console.log("click-search");
  }

  render() {
    return (
      <View className='index-top'>
        <Image className='bg-img' src={require("./img/bg.png")} />
        <View className='index-top-content'>
          <View className='index-top__title'>
            <View className='index-top__title--big'>商通云</View>
            <View className='index-top__title--small'>AI智能名片</View>
          </View>

          <View className='index-top__bell'>
            <Image
              className='img'
              src={require("./img/message.png")}
              onClick={this.onClickMessage.bind(this)}
            />
            <Text className='notify-count'>{this.context.count}</Text>
          </View>
          <Image
            className='index-top__search'
            src={require("./img/search.png")}
            onClick={this.onClickSearch.bind(this)}
          />
        </View>
      </View>
    );
  }
}

export default IndexTop;
