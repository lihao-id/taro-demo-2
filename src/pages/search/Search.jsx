import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtInput } from "taro-ui";
import { connect } from "@tarojs/redux";
import * as Action from "store/search/action";
import * as Api from "api/api";

import "./css/search.scss";

@connect(
  ({ keyword, recommendKeywordList }) => ({ keyword, recommendKeywordList }),
  dispatch => ({
    setKeyword(value) {
      dispatch(Action.setKeyword(value));
    },
    setRecommendKeywordList(value) {
      dispatch(Action.setRecommendKeywordList(value));
    }
  })
)
export default class Search extends Component {
  constructor() {
    super(...arguments);
    this.textArr = [
      "小磨人工智能名片",
      "线下门店版",
      "AI",
      "AI人工智能",
      "展会/会销活动企业版",
      "手机站制作",
      "移动OA"
    ];
  }

  toIndex() {
    Taro.navigateBack();
  }

  getImg(url) {
    return Api.IMG_BASE_URL + "/search" + url;
  }

  onKeywordChange(value) {
    const { setKeyword, setRecommendKeywordList } = this.props;

    setKeyword(value);
    Api.getRecommendKeywords({ keyword: value }).then(response => {
      let data = response.data;
      data = data.substring(data.indexOf("["), data.lastIndexOf("]") + 1);
      data = JSON.parse(data);

      setRecommendKeywordList(data);
    });
  }

  onSearch(value) {
    const { keyword, setKeyword } = this.props;

    if (value !== keyword) {
      setKeyword(value);
      //   this.onKeywordChange(value);
    }
    console.log(`on-search:[${value}]`);
  }

  showRecommend() {
    let { keyword } = this.props;

    return keyword !== "" ? true : false;
  }

  clearKeyword() {
    const { setKeyword } = this.props;

    setKeyword("");
  }

  render() {
    const { keyword, recommendKeywordList } = this.props;
    return (
      <View className='search'>
        <Image className='bg-img' src={this.getImg("/bg.png")} />

        <View className='search__top'>
          {this.showRecommend() ? (
            <Image className='bg-img' src={this.getImg("/top-bg.png")} />
          ) : (
            <Image
              className='bg-img'
              src={this.getImg("/recommend-top-bg.png")}
            />
          )}
          {!this.showRecommend() && <View className='title'>输入搜索内容</View>}
          <View className='input-wrapper'>
            <AtInput
              value={keyword}
              onChange={this.onKeywordChange.bind(this)}
              border={false}
              focus
              onConfirm={this.onSearch.bind(this)}
            >
              <Image
                className='delete-keyword-img'
                src={this.getImg("/delete-keyword.png")}
                onClick={this.clearKeyword.bind(this)}
              />
            </AtInput>
            <Text className='cancel' onClick={this.toIndex.bind(this)}>
              取消
            </Text>
          </View>
        </View>
        <View className='search__bottom'>
          {this.showRecommend() ? (
            <View className='recommend'>
              {recommendKeywordList.map((item, index) => (
                <View className='item' key={index}>
                  {item.substring(0, item.indexOf(keyword))}
                  <Text className='match'>{keyword}</Text>
                  {item.substring(
                    item.indexOf(keyword) + keyword.length,
                    item.length
                  )}
                  <Image
                    className='arrow'
                    src={this.getImg("/search-recommend-keyword.png")}
                    onClick={this.onSearch.bind(this, item)}
                  />
                </View>
              ))}
            </View>
          ) : (
            <View className='history'>
              <View className='title-wrapper'>
                <Text className='title'>历史搜索</Text>
                <Image
                  className='delete-img'
                  src={this.getImg("/delete-history.png")}
                />
              </View>

              <View className='text-wrapper'>
                {this.textArr &&
                  this.textArr.map((item, index) => (
                    <View
                      className='text'
                      key={index}
                      onClick={this.onSearch.bind(this, item)}
                    >
                      {item}
                    </View>
                  ))}
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}
