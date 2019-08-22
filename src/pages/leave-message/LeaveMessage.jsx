import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import * as Api from "api/api";

import "./css/leave-message.scss";

export default class LeaveMessage extends Component {
  constructor() {
    super(...arguments);
  }

  componentWillMount() {
    const { cardId } = this.$router.params;
  }

  getImg(url) {
    return Api.IMG_BASE_URL + "/leave-message" + url;
  }

  render() {
    return (
      <View className='leave-message'>
        <Image className='bg-img' src={this.getImg("/bg.png")} />
      </View>
    );
  }
}
