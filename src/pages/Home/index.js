import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { post } from 'public/utils';
import { Button, Label, FormControl ,Loading} from 'tinper-bee';
import Form from 'bee-form';
import PhotoshopPickerComp from '../../components/color';
import TextInput from '../../components/input';
import cookie from 'react-cookies';
import './index.less';

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
  "default-color":"$palette-grey-300",
  "default-color-dark":"$palette-grey-400",
  "default-color-light":"$palette-grey-200",
  // 辅色
  "color-accent":"$palette-green-600",
  "color-accent-dark":"$palette-green-800",
  "color-accent-light":"$palette-green-400",
}
const _defaultColor = "64,85,105,1";
class Home extends Component {

  constructor(props) {
    super(props);
    let _cookie = this.getCookie(cookieId);
    if(_cookie){
        document.getElementById(cookieId).href = (cdnUrl+_cookie);
    }
    this.state = {
        data:{
            theme:{
              ...defaultColor,
              // 主题色
              "color-primary":_defaultColor,
              // "color-primary":_defaultColor,
              "color-primary-dark":_defaultColor,
              "color-primary-light":_defaultColor,

              // 次按钮 
              "secondary-color":_defaultColor,
              "secondary-color-dark":_defaultColor,
              "secondary-color-light":_defaultColor,

              // 字体
              "font-family-primary":"Open Sans",
              "font-size-base":"12",
              "text-color-base":_defaultColor,
              "border-color":_defaultColor,

               // 次按钮文本色
              "button-secondary-text-color":_defaultColor
            },
            "type":"me"
        },
        showLine:false
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
        // console.log(data);
        // document.getElementById("tinper-bee-theme").href = data.url;
        // console.log("tinper.bee.theme post: ",data.url);
        // window.parent.postMessage(data.url,"http://localhost:9090");
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
      console.log("------------submit----------");
      this.setState({showLine:true});
      if(this.getCookie(cookieId) !== "tinper-bee.css"){
        cookie.remove(cookieId);
      }
      let aa = this.getCookie(cookieId)
      this.save(this.state.data);
  }
  submitNcc = (e) => {
    console.log("------------submitNcc----------");
    this.setState({showLine:true});
    this.save({type:"ncc"});
  }
  

  handleChange = (color,type) => {
    let {theme} = this.state.data;
    theme[type] = color;
    this.setState({data:{theme}});
  }

  handleChangeNumber = (color,type) => {
    let {theme} = this.state.data;
    theme[type] = color;
    this.setState({data:{theme}});
  }

  render() {
    let {clsPrefix} = this.props;
    let data = this.state.data.theme;
    return (
      <div className={`${clsPrefix}-home`}>
        <div className="header">
          <ul>
            <li><a href="javascript:void(0)" onClick={this.themClick} id="ncc" >NCC 主题</a></li>
            <li><a href="javascript:void(0)" onClick={this.themClick} id="yxy" >营销云 主题</a></li>
            <li><a href="javascript:void(0)" onClick={this.themClick} id="hxlh" >华新丽华 主题</a></li>
          </ul>
        </div>

        <h2>在线构建自定义主题</h2>

       <div className="primry">
          <PhotoshopPickerComp label="主色" name="color-primary" defaultValue={data["color-primary"]} handleChange={(color)=>{this.handleChange(color,"color-primary")}} />
          <PhotoshopPickerComp label="点击色(active)" name="color-primary-dark" defaultValue={data["color-primary-dark"]} handleChange={(color)=>{this.handleChange(color,"color-primary-dark")}} />
          <PhotoshopPickerComp label="点击色(hover)" name="color-primary-light" defaultValue={data["color-primary-light"]} handleChange={(color)=>{this.handleChange(color,"color-primary-light")}} />
         
          <hr />

          <TextInput label="字体(font family)" name="font-family-primary" defaultValue={data["font-family-primary"]} handleChange={(color)=>{this.handleChangeNumber(color,"font-family-primary")}} />
          <TextInput label="字号" name="font-size-base" defaultValue={data["font-size-base"]} handleChange={(color)=>{this.handleChangeNumber(color,"font-size-base")}} />
          <PhotoshopPickerComp label="字体颜色" name="text-color-base" defaultValue={data["text-color-base"]} handleChange={(color)=>{this.handleChange(color,"text-color-base")}} />
          
          <hr />

          <PhotoshopPickerComp label="边框颜色" name="border-color" defaultValue={data["border-color"]} handleChange={(color)=>{this.handleChange(color,"border-color")}} />

          <div className="online">
            Button
            <hr />
            <Button colors="primary" className="button">主按钮</Button>
            <Button color="secondary" className="button">次按钮</Button>
          </div>
          <PhotoshopPickerComp label="背景色(次按钮)" name="secondary-color" defaultValue={data["secondary-color"]} handleChange={(color)=>{this.handleChange(color,"secondary-color")}} />
          <PhotoshopPickerComp label="active(次按钮)" name="secondary-color-dark" defaultValue={data["secondary-color-dark"]} handleChange={(color)=>{this.handleChange(color,"secondary-color-dark")}} />
          <PhotoshopPickerComp label="hover(次按钮)" name="secondary-color-light" defaultValue={data["secondary-color-light"]} handleChange={(color)=>{this.handleChange(color,"secondary-color-light")}} />
          <PhotoshopPickerComp label="文本色(次按钮)" name="button-secondary-text-color" defaultValue={data["button-secondary-text-color"]} handleChange={(color)=>{this.handleChange(color,"button-secondary-text-color")}} />

          <div className='submit'>
            <Button colors="primary" className="login" onClick={this.submit}>开始构建</Button>

            {/* <Button colors="primary" className="login" onClick={this.submitNcc}>Ncc 主题build 保存</Button> */}

            <Button shape="border" className="reset">取消</Button>
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