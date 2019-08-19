/* eslint-disable taro/this-props-function */
import Taro, { Component, useEffect } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import Top from "components/index/top/IndexTop";
import Center from "components/index/center/IndexCenter";
import Bottom from "components/index/bottom/IndexBottom";

import * as action from "store/index/action";
import { NotifyContext, CardInfoContext } from "./context";
// import * as API from "api/api";

import "./index.scss";

@connect(
  ({ notify, cardInfoList, currentCardIndex }) => ({
    notify,
    cardInfoList,
    currentCardIndex
  }),
  dispatch => ({
    setNotifyCount(count) {
      dispatch(action.setNotifyCount(count));
    },
    setCardInfoList(cardInfoList) {
      dispatch(action.setCardInfoList(cardInfoList));
    },
    setCurrentCardIndex(index) {
      dispatch(action.setCurrentCardIndex(index));
    }
  })
)
export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillMount() {
    // wx.login({
    //   success: res => {
    //     if (res.code) {
    //       API.login({
    //         code: res.code
    //       }).then(res => {});
    //     }
    //   },
    //   fail: () => {}
    // });
    // wx.getUserInfo({
    //   success: res => {
    //       console.log(res);
    //   }
    // });
  }

  componentDidMount() {
    this.props.setNotifyCount(5);
    this.props.setCardInfoList([
      {
        id: 1,
        title: "首席AI服务官",
        name: "人工智能推广系统",
        company: "西安国信软件",
        mobilephone: "13212344321",
        email: "12352-9109@qq.com",
        address: "西安市XX区XX街XX大厦2412"
      },
      {
        id: 2,
        title: "首席AI服务官-2",
        name: "人工智能推广系统-2",
        company: "西安国信软件-2",
        mobilephone: "13212344321",
        email: "12352-9109@qq.com",
        address: "西安市XX区XX街XX大厦2412"
      }
    ]);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {};

  render() {
    return (
      <NotifyContext.Provider value={this.props.notify}>
        <CardInfoContext.Provider
          value={{
            list: this.props.cardInfoList,
            currentIndex: this.props.currentCardIndex
          }}
        >
          <View className='index'>
            <Image className='bg-img' src={require("./img/bg.png")} />
            <Top />
            <Center />
            <View className='line' />
            <Bottom />
          </View>
        </CardInfoContext.Provider>
      </NotifyContext.Provider>
    );
  }
}
