import Taro, { Component, useState, useEffect } from "@tarojs/taro";
import { View, Text, Image, Swiper, SwiperItem } from "@tarojs/components";
import "./css/my-swiper.scss";

export default props => {
  const [imgArr, setImgArr] = useState([
    {
      src:
        "https://pic1.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_1200x500.jpg"
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW6Ga8ZzXNlLPMkPkNJgBLez2_mV42KTEYIAYzzC4Fzkvydx0s"
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxDRW4qezkbmveF99G185uFlMxpF0xnIveXMAPLyJUXRfUU1N-"
    }
  ]);
  const [currentDot, setCurrentDot] = useState(0);

  function onCurrentChange(param) {
    let index = param.currentTarget.current;

    setCurrentDot[index];

    // console.log("index:" + index);
    // console.log("currentDot:" + currentDot);
  }

  return (
    <View className='my-swiper'>
      <Swiper circular autoplay onChange={onCurrentChange}>
        {imgArr &&
          imgArr.map((item, index) => (
            <SwiperItem key={index} className='my-swiper-item'>
              <Image className='img' src={item.src} />
            </SwiperItem>
          ))}
      </Swiper>
      <View className='dot'>
        {imgArr &&
          imgArr.map((item, index) => (
            <View key={index} className='dot-item' />
          ))}
      </View>
      {/* {currentDot} */}
    </View>
  );
};
