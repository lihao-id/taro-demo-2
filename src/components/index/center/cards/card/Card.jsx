import Taro, { Components } from "@tarojs/taro";

import { View, Text, Image } from "@tarojs/components";
import CardText from "./text/CardText";
import "./css/card.scss";

export default props => {
  let { cardInfo: info } = props;

  function onClick() {
    Taro.navigateTo({
      url: `/pages/home/Home?cardId=${info.id}`
    });
  }

  return (
    <View className='card' onClick={onClick}>
      <Image className='bg-img' src={require("./img/bg.png")} />
      <Image className='bg-shadow' src={require("./img/bg-shadow.png")} />
      <CardText info={info} />
    </View>
  );
};
