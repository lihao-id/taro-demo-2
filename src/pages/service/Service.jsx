import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import "./css/service.scss";

export default class Service extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return <View className='service'>Service</View>;
  }
}
