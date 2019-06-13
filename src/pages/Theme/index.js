import React, { Component } from 'react';
import { Icon } from 'tinper-bee';
import { PartOne } from './components/Part1';
import { PartTwo } from './components/Part2';
import { PartThree } from './components/Part3';
import { PartFour } from './components/Part4';
import { PartFive } from './components/Part5';
import { PartSix } from './components/Part6';
import './index.scss';
const themeDisplay = ['用友红风格', '科技蓝风格', '中兴蓝风格', '华新蓝风格'];
const themeColorVar = ['#F53C32', '#2196F3', '#1A78EB', '#3046C1']
const themeFileId= ['','lightBlue','blue','indigo'];
let currentThemeFileName='';
let currentThemeFileUrl = '';
const serverUrl = window.tinperServerUrl;
const cdnUrl = window.tinperCdnUrl?window.tinperCdnUrl:"http://iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/tinper-bee/theme/";
const fileName = window.tinperFileName?window.tinperFileName:"tinper-bee";
const cookieId = window.tinperCookieId?window.tinperCookieId:"tinper-bee-theme";

class Theme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themeSelectedIndex: 0,
    }

  }
  changeThemeJS = (_fileName) => {
    currentThemeFileName = _fileName;
    currentThemeFileUrl = cdnUrl+_fileName;
    document.getElementById(cookieId).href = (currentThemeFileUrl);
    // window.localStorage.setItem("tinper-bee-theme") = _fileName;
    document.cookie= cookieId + "="+_fileName;
    //window.parent.postMessage(_fileName,serverUrl);
  }
  
  changeTheme = (themeSelectedIndex) => {
    if (themeSelectedIndex === this.state.themeSelectedIndex) return;
    this.setState({
      themeSelectedIndex
    },()=>{
      let _FileName ;
      if(!!themeFileId[themeSelectedIndex]){
        _FileName = fileName +"-"+themeFileId[themeSelectedIndex]+".css"
      }else{
        _FileName = fileName +".css"
      }
      this.changeThemeJS(_FileName);
    })
  }

  download = ()=>{
    if(!currentThemeFileName || !currentThemeFileUrl){
      currentThemeFileName='tinper-bee.css';
      currentThemeFileUrl = cdnUrl+currentThemeFileName
    }
    this.downloadData(currentThemeFileUrl,currentThemeFileName);
  }

  downloadData=(excelUrl,reportName)=>{
      let token = "Bearer " + sessionStorage.getItem('token')
      fetch(excelUrl, {
          headers: {
              'Content-type': 'application/json;charset=UTF-8',
              'Authorization': token
          }
      }).then(res => res.blob().then(blob => {
          var filename=`${reportName}`
          if (window.navigator.msSaveOrOpenBlob) {
              navigator.msSaveBlob(blob, filename);  //兼容ie10
          } else {
              var a = document.createElement('a');
              document.body.appendChild(a) //兼容火狐，将a标签添加到body当中
              var url = window.URL.createObjectURL(blob);   // 获取 blob 本地文件连接 (blob 为纯二进制对象，不能够直接保存到磁盘上)
              a.href = url;
              a.download = filename;
              a.target='_blank'  // a标签增加target属性
              a.click();
              a.remove()  //移除a标签
              window.URL.revokeObjectURL(url);
          }
      }))
  }
  
  onChange = () => {
    this.setState({expanded: !this.state.expanded})
  }

  getComponentHeader = () => {
    let { themeSelectedIndex } = this.state;
    return themeDisplay.map((item, index) => {
      let active = '';
      if (index === themeSelectedIndex) active = 'active'
      return (
        <li key={`theme-display-item-${index}`}
          className={`theme-display-item ${active}`}
          onClick={this.changeTheme.bind(this, index)}
        >
          <span className="theme-display-item-title">{item}</span>
          <span className="theme-display-item-block" style={{ backgroundColor: themeColorVar[index] }}>
            {active && <Icon type="uf-correct"></Icon>}
          </span>
        </li>
      )

    })
  }
  render() {

    return (
      <div className="theme-display">
        <ul className="theme-display-list">
          {this.getComponentHeader()}
        </ul>
        <div htmlFor="" className="theme-line-title">组件效果预览</div>
        <div className="theme-display-content">
          <div className="content-line">
            <PartOne />
          </div>
          <div className="content-line">
            <PartTwo />
          </div>
          <div className="content-line">
            <PartThree />
          </div>
          <div className="content-line">
            <PartFour />
          </div>
          <div className="content-line">
            <PartFive />
          </div>
          <div className="content-line">
            <PartSix />
          </div>
        </div>
        <div className="theme-display-footer">
          <span className="download" 
          onClick={this.download.bind(this)} 
          style={{borderColor:themeColorVar[this.state.themeSelectedIndex],color:themeColorVar[this.state.themeSelectedIndex]}}>开始下载</span>
        </div>
      </div>
    )
  }
}

export default Theme;