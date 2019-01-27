import React, { Component } from 'react';
import LocalTheme from 'components/LocalTheme';
import Button from 'bee-button';

import './index.scss';

const cdnUrl = window.tinperCdnUrl?window.tinperCdnUrl:"//iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/tinper-bee/theme/";
const cookieId = window.tinperCookieId?window.tinperCookieId:"tinper-bee-theme";

const defaultProps = {
  clsPrefix: "tinper-bee-theme",
  colors: "default"
};


class ThemeTemplate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  handleClick(){

  }
  
  render() {
    let {clsPrefix} = this.props; 
    let { active } = this.state;
    let currentTheme;
    return (
      <div className={`${clsPrefix}-themetemplate ${this.props.className}`}>
        <div className="title"><span className="titile-well">#</span>官方主题</div>
        <div className="local-theme">
          <LocalTheme imgName="主题模板-云平台.png" title="云平台主题(默认)" currentTheme={true}/>
          <LocalTheme imgName="主题模板-营销云.png" title="营销云主题" currentTheme={false}/>
          <LocalTheme imgName="主题模板-ncc.png" title="NCC主题" currentTheme={false}/>
        </div>
        <div className="primry">
          <div className="online title">
            预览
            <hr />
          </div>
          <div className="title"><span className="titile-well">#</span>界面</div>
          <img src={require('../../static/image/cloud-platform.png')} alt="界面" style={{width: 50 + "%"}}/>
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