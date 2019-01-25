import React, { Component } from 'react';
import Tabs from 'bee-tabs';
import Home from '../Home'

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

  render() {
    let {clsPrefix} = this.props; 
    return (
      <div className={`${clsPrefix}-template`}>
         <h2>官方主题</h2>
        <div className="header">
          <ul>
            <li><a href="javascript:void(0)" onClick={this.themClick} id="ncc" >NCC 主题</a></li>
            <li><a href="javascript:void(0)" onClick={this.themClick} id="yxy" >营销云 主题</a></li>
            <li><a href="javascript:void(0)" onClick={this.themClick} id="hxlh" >华新丽华 主题</a></li>
          </ul>
        </div>

        <Tabs
                defaultActiveKey="1"
                onChange={this.onTabsChange}
                tabBarStyle="upborder"
                className="demo1-tabs"
                style={{width:'500px'}}
                tabIndex='3'
            >
                <TabPane tab='主题模板' key="1">
                  
                </TabPane>
                <TabPane tab='自定义主题' key="1-2">
                  <Home />
                </TabPane>
               
            </Tabs> 
      </div>
    )
  }
}
Template.defaultProps = defaultProps;
export default Template;