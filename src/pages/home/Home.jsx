import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { AtTabBar } from "taro-ui";
import * as Action from "@/store/home/action";

import CardInfo from "pages/card-info/CardInfo";
import Shop from "pages/shop/Shop";
import Discover from "pages/discover/Discover";
import Website from "pages/website/Website";
import * as Api from "api/api";
import { AssistantContext, CardContext } from "@/context/home/context";

import AssitantButton from "components/home/assistant-button/AssistantButton";
import Assistant from "components/home/assistant/Assistant";
import "./css/home.scss";

@connect(
  ({ currentTab, assistant, card }) => ({
    currentTab,
    assistant,
    card
  }),
  dispatch => ({
    setCurrentTab(index) {
      dispatch(Action.setCurrentTab(index));
    },
    setAssistantMessageCount(value) {
      dispatch(Action.setAssistantMessageCount(value));
    },
    setAssistantShow(value) {
      dispatch(Action.setAssistantShow(value));
    },
    setAssistantInput(value) {
      dispatch(Action.setAssistantInput(value));
    },
    setCardId(value) {
      dispatch(Action.setCardId(value));
    }
  })
)
export default class Home extends Component {
  constructor() {
    super(...arguments);
  }

  componentWillMount() {
    const { cardId } = this.$router.params;
    const { setCardId } = this.props;
    setCardId(cardId);
  }

  componentDidMount() {
    let { setAssistantMessageCount } = this.props;
    setAssistantMessageCount(3);
  }

  getImg(url) {
    return Api.IMG_BASE_URL + "/home" + url;
  }

  render() {
    let {
      currentTab,
      setCurrentTab,
      assistant,
      setAssistantShow,
      setAssistantInput,
      card
    } = this.props;
    return (
      <AssistantContext.Provider
        value={{
          ...assistant,
          setShow: setAssistantShow,
          setInput: setAssistantInput
        }}
      >
        <CardContext.Provider value={card}>
          <View className='home'>
            <Image className='bg-img-0' src={this.getImg("/bg.png")} />
            <AssitantButton />
            {assistant.show && <Assistant />}
            <AtTabBar
              fixed
              tabList={[
                { title: "名片", iconType: "iphone", text: "new" },
                { title: "商城", iconType: "shopping-bag" },
                { title: "动态", iconType: "folder", text: "100", max: 99 },
                { title: "官网", iconType: "home", text: "12", max: 99 }
              ]}
              onClick={setCurrentTab}
              current={currentTab}
            />
            {currentTab === 0 && <CardInfo />}
            {currentTab === 1 && <Shop />}
            {currentTab === 2 && <Discover />}
            {currentTab === 3 && <Website />}
          </View>
        </CardContext.Provider>
      </AssistantContext.Provider>
    );
  }
}
