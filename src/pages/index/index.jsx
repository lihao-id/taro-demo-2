/* eslint-disable taro/this-props-function */
import Taro, { Component, useEffect } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import Top from "components/index/top/IndexTop";
import Center from "components/index/center/IndexCenter";
import Bottom from "components/index/bottom/IndexBottom";

import * as Action from "store/index/action";
import {
  NotifyContext,
  CardInfoContext,
  ShareCardContext
} from "@/context/index/context";
import * as Api from "api/api";

import ShareCard from "components/share-card/ShareCard";

import "./css/index.scss";

@connect(
  ({ notify, cardInfoList, currentCardIndex, shareCard }) => ({
    notify,
    cardInfoList,
    currentCardIndex,
    shareCard
  }),
  dispatch => ({
    setNotifyCount(count) {
      dispatch(Action.setNotifyCount(count));
    },
    setCardInfoList(cardInfoList) {
      dispatch(Action.setCardInfoList(cardInfoList));
    },
    setCurrentCardIndex(index) {
      dispatch(Action.setCurrentCardIndex(index));
    },
    setShowShareCard(value) {
      dispatch(Action.setShowShareCard(value));
    }
  })
)
export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    // console.log(this.props, nextProps);
  }

  componentWillMount() {
    // wx.login({
    //   success: res => {
    //     if (res.code) {
    //       Api.login({
    //         code: res.code
    //       }).then(res => {});
    //     }
    //   },
    //   fail: () => {}
    // });
    // wx.getUserInfo({
    //   success: res => {
    //     console.log(res);
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
            currentIndex: this.props.currentCardIndex,
            setCurrentIndex: this.props.setCurrentCardIndex
          }}
        >
          <ShareCardContext.Provider
            value={{
              doOpen: () => {
                this.props.setShowShareCard(true);
              }
            }}
          >
            <View className='index'>
              <Image
                className='bg-img'
                src={Api.IMG_BASE_URL + "/index/bg.png"}
              />
              <Top />
              <Center />
              <View className='line' />
              <Bottom />
              {this.props.shareCard.show && (
                <ShareCard
                  onClose={() => {
                    this.props.setShowShareCard(false);
                  }}
                />
              )}
            </View>
          </ShareCardContext.Provider>
        </CardInfoContext.Provider>
      </NotifyContext.Provider>
    );
  }
}
