import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Home from '../Home';
import Theme from '../Theme';
import './index.scss';
const cookieId = window.tinperCookieId?window.tinperCookieId:"tinper-bee-theme";
class HomeNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1,
    }
    this.themeSelectedIndex = 0;
  }
  componentDidMount(){
    if(this.state.activeIndex === 1){
      document.body.className = document.body.className + 'customed';//使用color.less
    }
  }
  handleClick = (activeIndex) => {
    if (activeIndex === this.state.activeIndex) return;
    this.setState({
      activeIndex
    },()=>{
      if(activeIndex === 1){
        document.body.className = document.body.className + 'customed';
      }else{
        document.body.className = '';
      }
    })
  }
  
  render() {
    let { activeIndex } = this.state;
    let Content = Home;
    if (activeIndex == 0) {
      Content = Theme;
    }
    return (
      <div className="tinper-bee-theme-main">
        <ul className="theme-tab">
          <li className={`theme-tab-item ${activeIndex === 0 ? 'theme-tab-item-actived' : ''}`} onClick={e => this.handleClick(0)}>预制</li>
          <li className={`theme-tab-item ${activeIndex === 1 ? 'theme-tab-item-actived' : ''}`} onClick={e => this.handleClick(1)}>自定义</li>
        </ul>
        <div className="ready-theme" style={activeIndex === 1 ? {"transform": 'translate(-100%,-100%)',  "position": "absolute",'zIndex':-1}:{}}>
          <Theme></Theme>
        </div>
        <div className="customed-theme" style={activeIndex === 0 ? {"transform": 'translate(-100%,-100%)', "position": "absolute",'zIndex':-1}:{}}>
          <Home></Home>
        </div>
       
      </div>


    )
  }
}

export default HomeNew;