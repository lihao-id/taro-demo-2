import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image, Textarea, Button } from "@tarojs/components";
import * as Api from "api/api";

import Back from "components/back/Back";

import "./css/write-leave-message.scss";

export default class WriteLeaveMessage extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      cardId: 0,
      message: ""
    };
  }
  componentWillMount() {
    const { cardId } = this.$router.params;
    this.setState({
      cardId
    });
    console.log(this.state.cardId);
  }

  getImg(url) {
    return Api.IMG_BASE_URL + "/write-leave-message" + url;
  }

  back() {
    Taro.navigateBack();
  }

  onClickSend() {
    console.log(this.state.message);
  }

  onMessageChange(param) {
    console.log("message-change");
    const value = param.detail.value;
    this.setState({
      message: value
    });
  }

  back() {
    Taro.navigateBack();
  }

  render() {
    return (
      <View className='write-leave-message'>
        <Image
          className='write-leave-message__bg-img'
          src={this.getImg("/bg.png")}
        />

        <View className='write-leave-message__back' onClick={this.back}>
          <Image className='back-img' src={this.getImg("/back.png")} />
          <Text className='back-text'>写留言</Text>
        </View>
        <Textarea
          className='message'
          placeholder='我想对你说'
          value={this.state.message}
          placeholder-class='message-placeholder'
          onInput={this.onMessageChange.bind(this)}
        />
        <Button className='send' onClick={this.onClickSend.bind(this)}>
          写留言
        </Button>
      </View>
    );
  }
}
