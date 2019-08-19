import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtTabs, AtTabsPane } from "taro-ui";

import "./css/index-center.scss";

import Cards from "./cards/Cards";
import UserInfo from "./user-info/UserInfo";

class IndexCenter extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    };
  }

  onTabClick(value) {
    this.setState({
      current: value
    });
  }

  render() {
    return (
      <View className='index-center'>
        <View className='index-center__tabs'>
          <Text
            className={`item ${this.state.current == 0 ? "active" : ""}`}
            onClick={this.onTabClick.bind(this, 0)}
          >
            全部名片
          </Text>
          <Text
            className={`item ${this.state.current == 1 ? "active" : ""}`}
            onClick={this.onTabClick.bind(this, 1)}
          >
            个人信息
          </Text>
        </View>
        <View className='index-center__content'>
          {this.state.current === 0 ? <Cards /> : null}
          {this.state.current === 1 ? <UserInfo /> : null}
        </View>
      </View>
    );
  }
}

export default IndexCenter;
