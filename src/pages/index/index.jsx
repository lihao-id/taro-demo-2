import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import User from "pages/user/User";

// import { add, minus, asyncAdd } from "../../actions/counter";
import { add, minus, asyncAdd } from "store/index/action";
import * as API from "api/api";

import "./index.scss";

@connect(
  ({ counter }) => ({
    counter
  }),
  dispatch => ({
    add() {
      dispatch(add());
    },
    dec() {
      dispatch(minus());
    },
    asyncAdd() {
      dispatch(asyncAdd());
    }
  })
)
class Index extends Component {

    constructor(props){
        super(props);
    }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillMount() {
    wx.login({
      success: res => {
        if (res.code) {
          API.login({
            code: res.code
          }).then(res => {});
        }
      },
      fail: () => {}
    });

    wx.getUserInfo({
      success: res => {
          console.log(res);
      }
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "首页"
  };

  render() {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>
          +
        </Button>
        <Button className='dec_btn' onClick={this.props.dec}>
          -
        </Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>
          async
        </Button>
        <View>
          <Text>{this.props.counter}</Text>
        </View>
        <View>
          <Text>Hello, World</Text>
        </View>
        <User />
      </View>
    );
  }
}

export default Index;
