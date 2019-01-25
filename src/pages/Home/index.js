import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { post,get } from 'public/utils';
import { Label, FormControl ,Loading} from 'tinper-bee';
import Button from 'bee-button';
import Form from 'bee-form';
import PhotoshopPickerComp from '../../components/color';
import TextInput from '../../components/input';
import Example from '../Example'
import cookie from 'react-cookies';
const rgbHex = require('rgb-hex');
import styled from 'styled-components';

import './index.scss';

const serverUrl = window.tinperServerUrl;
const cdnUrl = window.tinperCdnUrl?window.tinperCdnUrl:"//iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/tinper-bee/theme/";
const fileName = window.tinperFileName?window.tinperFileName:"tinper-bee";
const cookieId = window.tinperCookieId?window.tinperCookieId:"tinper-bee-theme";

const FormItem = Form.FormItem;

const defaultProps = {
  clsPrefix: "tinper-bee-theme",
  colors: "default"
};

let defaultColor = {
  // 默认色
  "default-color":"224,224,224",
  "default-color-dark":"189,189,189",
  "default-color-light":"238,238,238",
  // 辅色
  "color-accent":"$palette-green-600",
  "color-accent-dark":"$palette-green-800",
  "color-accent-light":"$palette-green-400",
}
const _defaultColor = "30,136,229"; 

let defaultValueAll = {
  background: "#405569 !important",
  active:"#405569 !important",
  hover:"#405569 !important",
  active:"#405569 !important",
  "font-family":"Open Sans2 !important",
  "font-size":"12 !important",
  color:"#ffffff !important",
  "border-color":"#405569 !important",
}

class Home extends Component {

  constructor(props) {
    super(props);
    let _cookie = this.getCookie(cookieId);
    if(_cookie){
        document.getElementById(cookieId).href = (cdnUrl+_cookie);
    }
 
    let _style = {
      all:defaultValueAll,
      button:{}
    }
    let _styleJs = this.getObjToStyle(_style);
    debugger;
    this.state = {
        data:{
            theme:{
              ...defaultColor,
              // 主题色
              "primary-color":_defaultColor,
              // "primary-color":_defaultColor,
              "primary-color-dark":_defaultColor,
              "primary-color-light":_defaultColor,

              // 次按钮 
              "secondary-color":_defaultColor,
              "secondary-color-dark":_defaultColor,
              "secondary-color-light":_defaultColor,

              // 字体
              "font-family-primary":"Open Sans",
              "font-size-base":"12",
              "text-color-base":"255,255,255",
              "border-color":_defaultColor,

               // 次按钮文本色
              "button-secondary-text-color":_defaultColor,

              "item-hover-bg-color-base":_defaultColor,
              "item-selected-bg-color-base":_defaultColor

            },
            "type":"me"
        },
        showLine:false,
        style:_style,
        styleJs:_styleJs
    }
  }
  
  getCookie(name){ 
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
      if(arr=document.cookie.match(reg))
          return unescape(arr[2]); 
      else 
          return null; 
  }
 
  save = (param) => {
    post("/saveThemeColor",{param}).then((data) => {
        this.setState({showLine:false});
        this.changeTheme(data.name); 
    }, (error) => {
        this.setState({showLine:false});
        console.log(error);
    });
  }

  changeTheme = (_fileName) => {
    let cssLinkId = "tinper-bee-theme";
    document.getElementById(cookieId).href = (cdnUrl+_fileName);
    // window.localStorage.setItem("tinper-bee-theme") = _fileName;
    document.cookie= cookieId + "="+_fileName;
    window.parent.postMessage(_fileName,serverUrl);
  }

  themClick = (e) => {
    let _FileName = fileName +"-"+ e.target.id +".css";
    this.changeTheme(_FileName);
  }

  submit = (e) => {
      this.setState({showLine:true});
      if(this.getCookie(cookieId) !== "tinper-bee.css"){
        cookie.remove(cookieId);
      }
      let aa = this.getCookie(cookieId)
      this.save(this.state.data);
  }
  submitNcc = (e) => {
    this.setState({showLine:true});
    this.save({type:"ncc"});
  }
  
  get = (attr) => {
    this.setState({showLine:true});
    this.save({type:"ncc"});
  }

  /**
   * 根据数据中的type,返回当前值是否需要转换
   * @memberof Home
   */
  getItemTypeColor = (item,color)=>{
    switch(item.type){
      case "number": // 数字
        return color + " !important";
      case "string": // 字符串
        return color + " !important";
      default: 
      return "#"+rgbHex(color)+" !important";
    }
  }


  /**
   * 选中触发事件
   * @memberof Home
   */
  handleChange = (color,attr,component) => { 
    let {data:{theme},style} = this.state;
    theme[attr.key] = color;
    let newStyle = {},_color = this.getItemTypeColor(attr,color);
    newStyle = {[component]:{...style[component],[attr.style]:_color}}
    let _style = {...style,...newStyle};
    this.setState({
      data:{theme},
      style:_style,
      styleJs:this.getObjToStyle(_style)
    });
  }

  /**
   * 把state中的style对象转换成 styleJs样式
   * @memberof Home
   */
  getObjToStyle = (style)=>{
    let styleJs = {};
    for (let key in style) {
      let item = style[key];
      let _style =  "{ \n"; 
      let _theme = JSON.stringify(item);
      if(_theme !== "{}"){
        for (let componentKey in item) {
          _style +=  this.getItemStyle(componentKey,item) + " \n"; 
        }
      }
      _style += " \n }"
      styleJs[key] = _style;
    }
    return styleJs;
  }

  /**
   * 获取当前数据的状态，需要设置哪个属性
   * @memberof Home
   */
  getItemStyle = (key,item)=>{
    let style  = item[key];
    switch(key){
      case "active":
        return " &:active { background : " + style + " }";
      case "hover":
        return " &:hover { background : " + style  + " }";
      default: 
      return [key] + ":" + style;
    }
  }


  handleChangeNumber = (color,type) => {
    let {theme} = this.state.data;
    theme[type] = color;
    this.setState({data:{theme}});
  }

  /**
   * 更新服务器的源代码接口
   * @memberof Home
   */
  update = (e) => {
    this.setState({showLine:true});
    get("/Update").then((data) => {
        this.setState({showLine:false});
    }, (error) => {
        this.setState({showLine:false});
        console.log(error);
    });
  }

  /**
   * 动态生成页变量抽取的内容
   * @memberof Home
   */
  getComponentListRender = ()=>{
    let dataList = {
      all:[
        {type:"color",label:"主题色",key:"primary-color",style:"background"},
        {type:"color",label:"点击色(active)",key:"primary-color-dark",style:"active"},
        {type:"color",label:"点击色(hover)",key:"primary-color-light",style:"hover"},
        {type:"hr"},
        {type:"string",label:"字体(font family)",key:"font-family-primary",style:"font-family"},
        {type:"number",label:"字号",key:"font-size-base",style:"font-size"},
        {type:"color",label:"字体颜色",key:"text-color-base",style:"color"},
        {type:"hr"},
        {type:"color",label:"边框颜色",key:"border-color",style:"border-color"},
        {type:"color",label:"条目hover背景色",key:"item-hover-bg-color-base",style:"background"},
        {type:"color",label:"条目selected背景色",key:"item-selected-bg-color-base",style:"background"},
      ],
      type:"hr",
      button:[
        {type:"color",label:"背景色(次按钮)",key:"secondary-color",style:"background"},
        {type:"color",label:"active(次按钮)",key:"secondary-color-dark",style:"active"},
        {type:"color",label:"hover(次按钮)",key:"secondary-color-light",style:"hover"},
        {type:"color",label:"文本色(次按钮)",key:"button-secondary-text-color",style:"color"}
      ]
    }
    
    let _ht = [];
    for (let key in dataList) {
      let item = dataList[key];
      if(Array.isArray(item)){
        _ht.push(_ht.length != 0 ?<span key={key}>{key}</span>:null);
        _ht = _ht.concat(this.getItemRender(item,key));
      }else if(typeof(item) == 'string'){
        _ht.push(this.getHrRender(key));
      }
    }
    return _ht;
  }

  getItemRender = (item,component)=>{
    let _ht = [];
    item.forEach((attr)=>{
      _ht.push(this.getTypeInput(attr,component));
    })
    return _ht;
  }

  /**
   * 获取变量抽取的间隔线条
   * @memberof Home
   */
  getHrRender =(component)=>{
    return(<div className="online">
      <hr />
    </div>);
  }

  /**
   * 根据数据中的类型，获取选用的控件类型，目前就
   * 拾色器、数字、字符串
   * @memberof Home
   */
  getTypeInput = (attr,component)=>{
    let newAttr = {defaultValue:this.state.data.theme[attr.key],
      handleChange:(color)=>{this.handleChange(color,attr,component)},
      ...attr}

    switch(attr.type){
      case "color":
        return <PhotoshopPickerComp name={attr.key} {...newAttr} />;
      case "string":
        return <TextInput name={attr.key} {...newAttr} />;
      case "number":
        return <TextInput name={attr.key} {...newAttr} />;
      case "hr":
        return this.getHrRender(null); 
    }
  }

  render() {
    let {clsPrefix} = this.props;
    let data = this.state.data.theme;
    let state = this.state;
    let _primary = state.styleJs.all;
    let _button = state.styleJs.button; 
    return (
      <div className={`${clsPrefix}-home ${this.props.className}`}>
         {/* <h2>官方主题</h2>
        <div className="header">
          <ul>
            <li><a href="javascript:void(0)" onClick={this.themClick} id="ncc" >NCC 主题</a></li>
            <li><a href="javascript:void(0)" onClick={this.themClick} id="yxy" >营销云 主题</a></li>
            <li><a href="javascript:void(0)" onClick={this.themClick} id="hxlh" >华新丽华 主题</a></li>
          </ul>
        </div> */}

       <div className="title"><span className="titile-well">#</span>自定义主题</div>

       <div className="primry">
          {
             this.getComponentListRender()
          } 
          <div className="online title">
            预览
            <hr />
          </div>

          <div className="exampleall" >
             <Example styleJs={state.styleJs} theme={data} />
          </div>

          <div className='submit'>
            <p>你的定制版Tinper UI即将大功告成. 只要点击下边的按钮就可以下载了.</p>
            <Button colors="primary" className="login" onClick={this.submit}>开始构建</Button> 
            <Button colors="primary" className="login" onClick={this.update}>更新代码</Button> 
            {/* <Button colors="primary" className="login" onClick={this.submitNcc}>Ncc 主题build 保存</Button> */}
            {/* <Button colors="secondary" shape="border" className="reset">取消</Button> */}
          </div>
       </div>

       <Loading
            showBackDrop={true}
            loadingType="line"
            show={this.state.showLine}
        />

      </div>
    )
  }
}
Home.defaultProps = defaultProps;
export default Home;