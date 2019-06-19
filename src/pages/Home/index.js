import React, { Component } from 'react';
import cookie from 'react-cookies';
import { post,get,getUrl } from 'public/utils';
import { Label, FormControl ,Icon,Form,Select,Button,Dropdown,Menu,
  Row, Col,Tooltip
} from 'tinper-bee';
import Loading from 'bee-loading';
import PhotoshopPickerComp from '../../components/color';
import TextInput from '../../components/input';
import ExampleTinper from '../Example-Tinper';
import Example from '../Example';
import SearchPanel from 'bee-search-panel';
import ExampleMenus from '../Example/ExampleMenus'; 

import{
    PartOne,
    PartTwo,
    PartThree,
    PartFour,
    PartFive,
    PartSix,

} from '../Theme/components/Part'
let HeadContainer = SearchPanel.HeadContainer;
let AdvancedContainer = SearchPanel.AdvancedContainer;
const Option = Select.Option;

const rgbHex = require('rgb-hex');
const hexRgb = require('hex-rgb'); 

const { Item } = Menu;


import './index.scss';

const serverUrl = window.tinperServerUrl;
const cdnUrl = window.tinperCdnUrl?window.tinperCdnUrl:"http://iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/tinper-bee/theme/";
const fileName = window.tinperFileName?window.tinperFileName:"tinper-bee";
const cookieId = window.tinperCookieId?window.tinperCookieId:"tinper-bee-theme";

const FormItem = Form.FormItem;

const defaultProps = {
  clsPrefix: "tinper-bee-theme",
  colors: "default"
};

//全局主色
let defaultValueAll = {
  background: "#F53C32",
  active:"#E60012",
  hover:"#E60012",
  "font-family":"Open Sans2",
  "font-size":"12",
  color:"#212121",
  "border-color":"#a5adba",
  "border-radius":"3",
  "item-bg":"#E7F4FD",
  "item-hover":"#EBECF0",// 最新
  "table-header-background-color":"#F1F2F5",
  "table-header-text-color":"#212121",
  "table-border-color-base":"#C1C7D0",
  "table-row-hover-bg-color":"#ebecf0"
}

//次按钮部分
let defaultValueButton = {
  background: "#ECEFF1",
  active:"#DFE1E6",
  hover:"#DFE1E6", 
  color:"#212121",
}

//table 部分颜色
let defaultValueTable = {
  background: "#F1F2F5",
  color:"#212121",
  borderColor:"#C1C7D0"
}


let defaultColor = {
  // 默认色
  "default-color":defaultValueButton['background'],
  "default-color-dark":defaultValueButton['active'],
  "default-color-light":defaultValueButton['hover'],
  // 辅色
  "color-accent":"$palette-green-600",
  "color-accent-dark":"$palette-green-800",
  "color-accent-light":"$palette-green-400",
}

class Home extends Component {

  constructor(props) {
    super(props);
    let _cookie = this.getCookie(cookieId);
    if(_cookie){
        // document.getElementById(cookieId).href = (cdnUrl+_cookie+".css");
    }
    let _style = {
      all:defaultValueAll,
      button:{}
    }
    let _styleJs = this.getObjToStyle(_style);
    this.state = {
        expanded: true,
        versions:[],
        dowloand:"",
        version:"",
        prefixValue:"",
        data:{
            theme:{
              ...defaultColor,
              // 主题色
              "primary-color":defaultValueAll['background'],
              // "primary-color":_defaultColor,
              "primary-color-dark":defaultValueAll['active'],
              "primary-color-light":defaultValueAll['hover'],

              // 次按钮 
              "secondary-color":defaultValueButton['background'],
              "secondary-color-dark":defaultValueButton['active'],
              "secondary-color-light":defaultValueButton['hover'],

              // 字体
              "font-family-primary":defaultValueAll['font-family'],
              "font-size-base":defaultValueAll['font-size'],
              "text-color-base":defaultValueAll['color'],

              "border-radius":defaultValueAll['border-radius'],
              "border-color":defaultValueAll['border-color'],

               // 次按钮文本色
              "button-secondary-text-color":defaultValueAll['color'],

              "item-hover-bg-color-base":defaultValueAll['item-hover'],
              "item-selected-bg-color-base":defaultValueAll['item-bg'],

              // Table 细化样式变量：
              // 表头背景色
              "table-header-background-color":defaultValueAll['table-header-background-color'],
              // 表头文字颜色
              "table-header-text-color": defaultValueAll['table-header-text-color'],
              // 表格分割线颜色
              "table-border-color-base": defaultValueAll['table-border-color-base'],

              "table-row-hover-bg-color": defaultValueAll['table-row-hover-bg-color'],
            }
        },
        // version:"",
        showLine:false,
        style:_style,
        styleJs:_styleJs
    }
    this.getAlltag();
  }
   
  getAlltag = () => { 
      get("/version").then((data) => {
        this.setState({
          versions:data,
          version:data[0].value
        })
      }, (error) => {
          console.log(error);
      });
  }

  getCookie(name){ 
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
      if(arr=document.cookie.match(reg))
          return unescape(arr[2]); 
      else 
          return null; 
  }
 
  getHexRGBA=(color)=>{
    let {red,green,blue,alpha} = hexRgb(color);
    return red + "," + green + "," + blue + "," + alpha;
  }

  getParamToHex(param){
    let newParam = JSON.parse(JSON.stringify(param));
    for (const key in newParam) {
      let color = newParam[key];
      newParam[key] = color.indexOf("#")!=-1?this.getHexRGBA(color):color
    }
    return newParam;
  }

  save = (param) => {
    param.theme = this.getParamToHex(param.theme);
    if(this.state.prefixValue !== ""){
      param.prefixValue = this.state.prefixValue;
    }
    // console.log("param ----- ",param);
    post("/package",param).then((data) => {
      if(data){
        this.dowloand(data.url);
        this.setState({
          showLine:false,
          dowloand:true
        });
        // this.changeTheme(data.name); 
      }
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

  
  // onBuildSelect = ({ key }) => {
  //   this.version = key;
  //   this.setState({showLine:true});
  //     this.save({...this.state.data,version:key});
  // }
  // submit = (e) => {
  //     this.setState({showLine:true});
  //     if(this.getCookie(cookieId) !== "tinper-bee.css"){
  //       cookie.remove(cookieId);
  //     }
  //     let aa = this.getCookie(cookieId)
  //     this.save({...this.state.data,version:this.version});
  // }
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
        return color + "px !important";
      case "string": // 字符串
        return color + " !important";
      default: 
      return color+" !important";
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

  autoCalculate = (color,attr,component) => { 
    // console.log(" color---- ",color);
    this.state.data.theme["primary-color-dark"] = "#"+rgbHex(color['darker']);
    this.state.data.theme["primary-color-light"] = "#"+rgbHex(color['lighter']);
    this.state.data.theme["border-color"] = color['clor'];
    this.setState({
      data:{
        theme:{
        ...this.state.data.theme
        }
      }
    })

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
        return " &:active { background : " + style + " !important}";
      case "hover":
        return " &:hover { background : " + style  + " !important}";
      case "item-bg":
        return "";
      case "item-hover":
        return "";
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
    post("/updateAll",{version:[this.state.version]}).then((data) => {
      if(data){
        this.setState({showLine:false});
      }
    }, (error) => {
        this.setState({showLine:false});
        console.log(error);
    });
    // this.setState({showLine:true});
    // get("/Update").then((data) => {
    //   if(data.success){
    //     this.setState({showLine:false});
    //   }
    // }, (error) => {
    //     this.setState({showLine:false});
    //     console.log(error);
    // });
  }

  /**
   * 动态生成页变量抽取的内容
   * _level basics(基础样式) senior(高级设置)
   * @memberof Home
   */
  getComponentListRender = (_level,dataList)=>{ 
    // debugger;
    let _ht = [], i=0;
    for (let key in dataList) {
      i++;
      let item = dataList[key];
      if(Array.isArray(item)){
        if(_level === "senior" && key !== "all"){
          _ht.push(this.getHrRender(key));
          _ht.push(_ht.length != 0 ?<div><span key={`${i}-${key}`}><br />{key} 配置</span></div>:"");
          // _ht.push(<div><span key={`${i}-${key}`}><br />{key}</span></div>);
        }
        _ht = _ht.concat(this.getItemRender(item,key,_level));
      }else if(typeof(item) == 'string'){ 
        // _ht.push(this.getHrRender(key));
      }
    }
    return _ht;
  }

  getItemRender = (item,component,_level)=>{
    let _ht = [],i=2;
    item.forEach((attr)=>{
      i++;
      if(_level === attr.level){
        _ht.push(<Col xs={12} sm={6} md={4} lg={4} key={i+"input_"+attr.key}>
            <FormItem>
              <Col xs={12} sm={12} md={12}  lg={12} className="col">
                {this.getTypeInput(attr,component)}
              </Col>
            </FormItem>
          </Col>);
      }
    })
    return _ht;
  }

  

  /**
   * 获取变量抽取的间隔线条
   * @memberof Home
   */
  getHrRender =(component)=>{
    return(<div className="online">
      {/* <hr /> */}
    </div>);
  }

  /**
   * 根据数据中的类型，获取选用的控件类型，目前就
   * 拾色器、数字、字符串
   * @memberof Home
   */
  getTypeInput = (attr,component)=>{ 
    let autoCalculate = null; 
    if(attr['key'] === "primary-color"){
      autoCalculate = (color)=>{this.autoCalculate(color,attr,component)}
    }
    let newAttr = {defaultValue:this.state.data.theme[attr.key],
      handleChange:(color)=>{this.handleChange(color,attr,component)},
      autoCalculate,
      ...attr};
    switch(attr.type){
      case "color":
        return <PhotoshopPickerComp name={attr.key} {...newAttr} />;
      case "string":
        return <TextInput name={attr.key} {...newAttr} />;
      case "number":
        return <TextInput name={attr.key} {...newAttr} />;
      case "hr":
        // return attr.level === "senior"?this.getHrRender(null):""; 
        return this.getHrRender(null)
    }
  }

  dowloand = (url)=>{
    // let _cookie = this.getCookie(cookieId);
    // let _url = cdnUrl+(_cookie?_cookie:"tinper-bee-theme")+".css";
    this.downloadData(url,"tinper-bee-theme.css");
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

  versionHandleChange = value => {
    this.setState({
      version:value
    })
  };

  btnSubmit = (e) => {
    this.setState({showLine:true});
    this.save({...this.state.data,version:this.state.version});
  };

  onPrefixChange = (prefixValue) => {
    this.setState({
      prefixValue
    })
  }
  
  render() {
    let {clsPrefix} = this.props;
    let data = this.state.data.theme;
    let {versions,version,dowloand,styleJs}  = this.state;
    // let state = this.state;
    let dataHeadList = {
      all:[
        {type:"color",label:"主题色",key:"primary-color",style:"background",level:"basics"},
        {type:"number",label:"边框圆角",key:"border-radius",style:"border-radius",level:"basics"}
      ]
    }
    let dataList = {
      all:[
        {type:"color",label:"(active)色",key:"primary-color-dark",style:"active",level:"senior"},
        {type:"color",label:"(hover)色",key:"primary-color-light",style:"hover",level:"senior"},
        {type:"color",label:"字体颜色",key:"text-color-base",style:"color",level:"senior"},
        {type:"color",label:"边框颜色",key:"border-color",style:"border-color",level:"senior"},
        {type:"color",label:"条目hover背景色",key:"item-hover-bg-color-base",style:"item-bg",level:"senior"},
        {type:"color",label:"条目selected背景色",key:"item-selected-bg-color-base",style:"item-hover",level:"senior"},
      ],
      type:"hr",
      button:[
        {type:"color",label:"背景色(次按钮)",key:"secondary-color",style:"background",level:"senior"},
        {type:"color",label:"active(次按钮)",key:"secondary-color-dark",style:"active",level:"senior"},
        {type:"color",label:"hover(次按钮)",key:"secondary-color-light",style:"hover",level:"senior"},
        {type:"color",label:"文本色(次按钮)",key:"button-secondary-text-color",style:"color",level:"senior"},
      ],
      type:"hr",
      table:[
        {type:"color",label:"表头背景色",key:"table-header-background-color",style:"background",level:"senior"},
        {type:"color",label:"表头文字色",key:"table-header-text-color",style:"background",level:"senior"},
        {type:"color",label:"表格分割线颜色",key:"table-border-color-base",style:"background",level:"senior"},
        {type:"color",label:"表格行hover背景色",key:"table-row-hover-bg-color",style:"background",level:"senior"},
      ]
    }
    return (
      <div className={`${clsPrefix}-home ${this.props.className}`}>

       {/* <div className="title">自定义主题</div> */}
       
       <div className="primry">
          <div className="search-panel-cont">
            <div className="home-head">
                <SearchPanel >
                      <HeadContainer>
                        <Form>
                          <Row>
                            { this.getComponentListRender("basics",dataHeadList) }
                          </Row>
                        </Form>
                      </HeadContainer>
                </SearchPanel>
            </div>
            
            <SearchPanel title='' showOperation={false}>
                  <AdvancedContainer showOperation={false}>
                    <Form>
                      <Row>
                        { this.getComponentListRender("senior",dataList) }
                      </Row>
                    </Form> 
                  </AdvancedContainer>
            </SearchPanel>
          </div>
         
          <div className="online title">
             组件效果预览
            {/* <hr /> */}
          </div>

          <div className="exampleall" >
             {/* <ExampleTinper styleJs={styleJs} theme={data} /> */}
              <PartOne customed={true} theme={data} styleJs={styleJs} />
              <PartTwo customed={true} theme={data} styleJs={styleJs} />
              <PartThree customed={true} theme={data} styleJs={styleJs} />
              <PartFour customed={true} theme={data} styleJs={styleJs} />
              <PartFive customed={true} theme={data} styleJs={styleJs} /> 
              <PartSix customed={true} theme={data} styleJs={styleJs} />

          </div>
 
          <div className="online title">
            应用场景效果预览
            {/* <hr /> */}
          </div>

          <div className="app-cont">

              {/* <div className="online title">
                页面代码
              </div> */}
{/* 
              <div className="exampleall-app" >
                <div className="example-left">
                  <ExampleMenus styleJs={styleJs} theme={data} />
                </div>

                <div className="example-right">
                  <Example styleJs={styleJs} theme={data} />
                </div>
              </div> */}
          </div>
         
          <div className='clear annotation'>
            <p>请确定您选择的版本号、参数的完整性,点击下面开始构建,将为您打包一个您的完整的tinper-bee.css .</p>
          </div>  

          <div className='clear btn-cont'>
            <div className="sub-cont"  id="_sub-cont">
              {/* <div className='clear annotation'>
                <p>请确定您选择的版本号、参数的完整性,点击下面开始构建,将为您打包一个您的完整的tinper-bee.css .</p>
              </div>  */}

                <label>请选择版本号<font color="red"> * </font>:</label>
                <Select style={{width:200,lineHeight:33}}
                  defaultValue={version}
                  value={version}
                  getPopupContainer={()=>document.getElementById("_sub-cont")}
                  onChange={this.versionHandleChange}
                  showSearch={true}
                >
                {
                  versions.map((da,i)=><Option key={`${i}_v`} value={da.value}>{da.value}</Option>)
                }
                </Select> 


              {/* <div className='clear version'> */}
                <label>css添加前缀名:</label>
                <Tooltip inverse overlay={<div>添加自定义前缀，可以根据自己的项目前缀提供组件的覆盖样式，提升优先级(非必填).</div>}>
                  <FormControl style={{width:200}} className="demo1-input"  value={this.state.prefixValue}  onChange={this.onPrefixChange} />
                </Tooltip>
              {/* </div> */}

              
              <div className='clear submit'>
              {
                version === ""?<Button bordered disabled > 开始构建 </Button>:<Button bordered 
                onClick={this.btnSubmit} > 开始构建</Button>
              }
              </div>
              
              {/* {
                dowloand === ""?<Button bordered className="login" disabled > 下载 </Button>:<Button bordered className="login" 
                onClick={this.dowloand} > 下载 </Button>
              } */}
            </div>
          </div>
       </div>

       <Loading
          showBackDrop={true}
          loadingType="line"
          fullScreen={true}
          show={this.state.showLine}
        />
      </div>
    )
  }
}
Home.defaultProps = defaultProps;
export default Home;