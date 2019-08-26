import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import * as Api from "api/api";
import Message from "@/components/leave-message/message/Message";

import "./css/leave-message.scss";

export default class LeaveMessage extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      cardId: 0
    };
  }

  componentWillMount() {
    const { cardId } = this.$router.params;
    this.setState({
      cardId
    });
  }

  getImg(url) {
    return Api.IMG_BASE_URL + "/leave-message" + url;
  }

  back() {
    Taro.navigateBack();
  }

  toWriteLeaveMessage() {
    Taro.navigateTo({
      url: `/pages/write-leave-message/WriteLeaveMessage?cardId=${
        this.state.cardId
      }`
    });
  }

  render() {
    const messageList = [
      {
        id: 1,
        username: "名字1",
        avatar: "",
        time: new Date(),
        content: "一直很喜欢，会一直关注的",
        likeNum: 1000,
        like: true
      },
      {
        id: 2,
        username: "名字2",
        avatar: "",
        time: new Date(),
        content:
          "这是一段评论，如果字数太长太长在20字时转行，评论行数不限，可一直向下转行直到结束可一直向下转行直到结束可一直向下转行直到结束可一直向下转行直到结束可一直向下转行直到结束可一直向下转行直到结束可一直向下",
        likeNum: 936,
        like: false
      },
      {
        id: 3,
        username: "名字3",
        avatar: "",
        time: new Date(),
        content: "很好很好，爱了爱了哈哈哈哈哈哈",
        likeNum: 7243,
        like: false
      },
      {
        id: 4,
        username: "名字4",
        avatar: "",
        time: new Date(),
        content: "很好很好，爱了爱了哈哈哈哈哈哈",
        likeNum: 2738,
        like: false
      },
      {
        id: 5,
        username: "名字5",
        avatar: "",
        time: new Date(),
        content: "很好很好，爱了爱了哈哈哈哈哈哈",
        likeNum: 9273,
        like: false
      }
    ];
    return (
      <View className='leave-message'>
        <Image className='leave-message__bg-img' src={this.getImg("/bg.png")} />
        <Image
          className='leave-message__top-bg-img'
          src={this.getImg("/top-bg.png")}
        />
        <View className='leave-message__back' onClick={this.back}>
          <Image className='back-img' src={this.getImg("/back.png")} />
          <Text className='text'>留言</Text>
        </View>
        <View className='leave-message__title'>
          <Image className='avatar' />
          <View className='content'>
            <Text className='floor1'>首席AI服务官</Text>
            <Text className='floor2'>人工智能推广系统</Text>
            <Text className='floor3'>人工智能推广系统</Text>
          </View>
        </View>
        <View className='leave-message__content'>
          <View className='top'>
            <Text className='count'>{messageList.length}条留言</Text>
            <Text className='write' onClick={this.toWriteLeaveMessage}>
              写留言
            </Text>
          </View>
          {messageList &&
            messageList.map(item => <Message key={item.id} message={item} />)}
        </View>
      </View>
    );
  }
}
