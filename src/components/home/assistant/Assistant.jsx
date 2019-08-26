import Taro, { useContext, Component } from "@tarojs/taro";
import { View, Text, Image, Input } from "@tarojs/components";
import * as Api from "api/api";
import { AssistantContext } from "@/context/home/context";

import "./css/assistant.scss";

export default class Assistant extends Component {
  static contextType = AssistantContext;

  constructor() {
    super(...arguments);
    this.state = {
      input: ""
    };
  }

  getImg(url) {
    return Api.IMG_BASE_URL + "/assistant" + url;
  }

  onInputChange(param) {
    const { value } = param.detail;
    console.log(value);
    this.setState({
      input: value
    });
  }

  toService() {
    Taro.navigateTo({
      url: "/pages/service/Service"
    });
  }

  render() {
    const { assistant } = this.context;
    return (
      <View className='assistant'>
        <View className='bg' />
        <View className='assistant__card'>
          <Image className='card-bg' src={this.getImg("/bg.png")} />
          <Image className='card-icon' src={this.getImg("/icon.png")} />
          <View className='title'>AI智能机器人助手</View>
          <View className='content' />
          <View className='menu'>
            <Image
              className='service-icon menu-icon'
              src={this.getImg("/service.png")}
              onClick={this.toService}
            />
            <Image
              className='input-icon menu-icon'
              src={this.getImg("/input.png")}
            />
          </View>
          <Image className='voice-icon' src={this.getImg("/voice.png")} />
        </View>
        <Input
          className='assistant__input'
          value={this.state.input}
          onInput={this.onInputChange.bind(this)}
          placeholder='我想要说...'
        />
      </View>
    );
  }
}

// export default () => {
//   let assistant = useContext(AssistantContext);

//   function getImg(url) {
//     return Api.IMG_BASE_URL + "/assistant" + url;
//   }

//   function onInputChange(e) {
//     // assistant.setInput(e.target.value);
//     const { value } = e.detail;
//     console.log(value);
//   }

//   return (
//     <View className='assistant'>
//       <View className='bg' />
//       <View className='assistant__card'>
//         <Image className='card-bg' src={getImg("/bg.png")} />
//         <Image className='card-icon' src={getImg("/icon.png")} />
//         <View className='title'>AI智能机器人助手</View>
//         <View className='content' />
//         <View className='menu'>
//           {/* <View className='service-btn btn'> */}
//           <Image
//             className='service-icon menu-icon'
//             src={getImg("/service.png")}
//           />
//           {/* </View> */}
//           {/* <View className='input-btn btn'> */}
//           <Image className='input-icon menu-icon' src={getImg("/input.png")} />
//           {/* </View> */}
//         </View>
//         <Image className='voice-icon' src={getImg("/voice.png")} />
//       </View>
//       <Input
//         className='assistant__input'
//         value={assistant.input}
//         bindinput={onInputChange}
//       />
//     </View>
//   );
// };
