import React, { Component } from 'react';
import Tabs from 'bee-tabs';
import Home from '../Home'
import classnames from 'classnames';

import './index.scss';

const cdnUrl = window.tinperCdnUrl?window.tinperCdnUrl:"//iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/tinper-bee/theme/";
const cookieId = window.tinperCookieId?window.tinperCookieId:"tinper-bee-theme";

const defaultProps = {
  clsPrefix: "tinper-bee-theme",
  colors: "default"
};
const {TabPane} = Tabs;


class Template extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 0
    }
    let _cookie = this.getCookie(cookieId);
    if(_cookie){
        document.getElementById(cookieId).href = (cdnUrl+_cookie);
    }
  }
  
  getCookie(name){ 
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
      if(arr=document.cookie.match(reg))
          return unescape(arr[2]); 
      else 
          return null; 
  }
  

  onTabsChange = ()=>{
    
  }

  switchNav = (type) => {
    this.setState({
      active: type
    })
  }

  render() {
    let {clsPrefix} = this.props; 
    let { active } = this.state;
    return (
      <div className={`${clsPrefix}-template`}>
         <h2>定制主题</h2>
        <div className="header">
          <ul>
            <li><a href="javascript:void(0)" onClick={this.themClick} id="ncc" >NCC 主题</a></li>
            <li><a href="javascript:void(0)" onClick={this.themClick} id="yxy" >营销云 主题</a></li>
            <li><a href="javascript:void(0)" onClick={this.themClick} id="hxlh" >华新丽华 主题</a></li>
          </ul>
        </div>

        {/* <Tabs
            defaultActiveKey="1"
            onChange={this.onTabsChange}
            tabBarStyle="upborder"
            className="demo1-tabs"
            style={{width:'500px'}}
            tabIndex='3'
        >
            <TabPane tab='主题模板' key="1">
              111
            </TabPane>
            <TabPane tab='自定义主题' key="1-2">
              <Home />
            </TabPane>
            
        </Tabs>  */}
        <ul className="table-section-nav">
          <li onClick={() => this.switchNav(0)} className={active === 0 ? 'active' : ''}>
            主题模板
            <div className="underline"></div>
          </li>
          <li onClick={() => this.switchNav(1)} className={active === 1 ? 'active' : ''}>
            自定义主题
            <div className="underline"></div>
          </li>
        </ul>
        <Home className={classnames({"show" : active === 1,"hidden" : active !== 1})} />
      </div>
    )
  }
}
Template.defaultProps = defaultProps;
export default Template;