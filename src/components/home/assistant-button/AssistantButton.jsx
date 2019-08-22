import Taro, { useContext } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AssistantContext } from "@/context/home/context";

import "./css/assistant-button.scss";

export default props => {
  const assistant = useContext(AssistantContext);

  return (
    <View
      className='assistant-button'
      onClick={() => {
        assistant.setShow(true);
      }}
    >
      {assistant.messageCount > 0 && (
        <View className='message'>{assistant.messageCount}</View>
      )}
    </View>
  );
};
