import React, { Component } from 'react';
import LocalTheme from 'components/LocalTheme';
import Button from 'bee-button';

import './index.scss';

const cdnUrl = window.tinperCdnUrl?window.tinperCdnUrl:"//iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/tinper-bee/theme/";
const cookieId = window.tinperCookieId?window.tinperCookieId:"tinper-bee-theme";

let img1 = require('../../static/image/cloud-platform.png');
let img2 = require('../../static/image/营销云主题.png');
let img3 = require('../../static/image/ncc主题.png');

let href1 = cdnUrl + "tinper-bee.css";
let href2 = cdnUrl + "tinper-bee-yxy.css";
let href3 = cdnUrl + "tinper-bee-ncc.css";

const defaultProps = {
  clsPrefix: "tinper-bee-theme",
  colors: "default"
};


class ThemeTemplate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: "0"
    }
  }

  handleClick = (index) => {
    this.setState({
      active : index
    })
  }
  
  render() {
    let {clsPrefix} = this.props; 
    let { active } = this.state;
    let interfaces = [
      <img src={img1} alt="云平台主题"/>,
      <img src={img2} alt="营销云主题"/>,
      <img src={img3} alt="NCC主题"/>
    ];
    let links = [ href1, href2, href3 ];
    return (
      <div className={`${clsPrefix}-themetemplate ${this.props.className}`}>
        <div className="title"><span className="titile-well">#</span>官方主题</div>
        <div className="local-theme">
          <LocalTheme activeNum={active} index="0" title="云平台主题(默认)" handleClick={this.handleClick}/>
          <LocalTheme activeNum={active} index="1" title="营销云主题" handleClick={this.handleClick}/>
          <LocalTheme activeNum={active} index="2" title="NCC主题" handleClick={this.handleClick}/>
        </div>
        <div className="primary">
          <div className="title interface"><span className="titile-well">#</span>界面</div>
          {interfaces[active]}
          <div className='submit'>
            <p>你的定制版Tinper UI即将大功告成. 只要点击下边的按钮就可以下载了.</p>
            <Button colors="primary" className="login" >立即下载</Button> 
          </div>
       </div>
      </div>
    )
  }
}
ThemeTemplate.defaultProps = defaultProps;
export default ThemeTemplate;