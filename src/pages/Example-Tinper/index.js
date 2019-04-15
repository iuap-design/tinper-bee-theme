import React, { Component } from 'react';
import styled from 'styled-components';
import './index.scss';

// import Button from 'bee-button';
// import Pagination from 'bee-pagination';
// import Modal from 'bee-modal';
// import Radio from 'bee-radio';
// import Popconfirm from 'bee-popconfirm';
// import Checkbox from 'bee-checkbox';
// import Switch from 'bee-switch';
// import Transfer from 'bee-transfer';
// import ProgressBar from 'bee-progress-bar';
// import Breadcrumb from 'bee-breadcrumb';
// import Select from 'bee-select';
// import Cascader from 'bee-cascader';
// import Rate from 'bee-rate';
// import Timeline from 'bee-timeline';
// import Navbar from 'bee-navbar';
// import FormControl from 'bee-form-control';
// import Badge from 'bee-badge';
// import ButtonGroup from 'bee-button-group';
// import Loadingstate from 'bee-loading-state';
// import { Col, Row } from 'bee-layout';
import { Col, Row ,ButtonGroup,LoadingState,Badge,FormControl,Navbar,Timeline,Rate,Cascader,Select,Breadcrumb,ProgressBar,Transfer,Switch,
  Checkbox,Popconfirm,Radio,Modal,Pagination,Button,
} from 'tinper-bee';

const defaultProps = {
  clsPrefix: "tinper-bee-theme",
  colors: "default"
};

const cdnUrl = window.tinperCdnUrl?window.tinperCdnUrl:"http://iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/tinper-bee/theme/";
const cookieId = window.tinperCookieId?window.tinperCookieId:"tinper-bee-theme";

class ExampleTinper extends Component {

  constructor(props) {
    super(props);
    let _cookie = this.getCookie(cookieId);
    if(_cookie){
        // document.getElementById(cookieId).href = (cdnUrl+_cookie);
    }
    this.state = {
      selectedValue: 'edg'
    }; 
  }
  
  getCookie(name){ 
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
      if(arr=document.cookie.match(reg))
          return unescape(arr[2]); 
      else 
          return null; 
  }
  
  handleChange(value) {
    this.setState({selectedValue: value});
  }

  render() {
    let {styleJs:{all:_primary,button:_button},clsPrefix,theme} = this.props;
    // const PrimaryButton = styled(Button)`${_primary}`;
    const PrimaryButton = styled(Button)`${_primary}
      background-color:${theme["primary-color"]} !important;
      border-color:${theme["primary-color"]} !important;
      :hover{
        background-color:${theme["primary-color-light"]} !important;
      }
      :active{
        background-color:${theme["primary-color-dark"]} !important;
      }
    `;
    const SecondaryButton = styled(Button)`${_button}`;

    const PrimaryPagination = styled(Pagination)`${_primary}`;
    const PrimaryModal = styled(Modal)`${_primary}`;

    //.u-radio-label::before{
  //   -webkit-box-shadow:inset 0 0 0 10px ${theme["primary-color"]}  !important;
  //   box-shadow:inset 0 0 0 10px ${theme["primary-color"]}  !important;
  //   border-color:${theme["primary-color"]} !important;
  // }
  // .u-radio.is-checked .u-radio-label:after{
  //   background:#fff;
  // }


    const PrimaryRadioGroup = styled(Radio.RadioGroup)`{
      .is-checked .u-radio-label:after{
        background:${theme["primary-color"]}  !important;
      }
      .u-radio-label:before{
        border: 2px solid ${theme["primary-color"]}  !important;
      }
    }`;
    const PrimaryPopconfirm = styled(Popconfirm)``;
    // console.log(" primary-- ",theme["primary-color"]);
    const PrimaryCheckboxGroup = styled(Checkbox.CheckboxGroup)`
      .u-checkbox.is-checked .u-checkbox-label:after{
        color:${theme["primary-color"]}  !important;
      }
      .u-checkbox.u-checkbox-indeterminate .u-checkbox-label:after{
        color:${theme["primary-color"]}  !important;
      }
    `;

    // .u-checkbox-label::before{
    //   -webkit-box-shadow:inset 0 0 0 10px ${theme["primary-color"]}  !important;
    //   box-shadow:inset 0 0 0 10px ${theme["primary-color"]}  !important;
    // }

    const PrimarySwitch = styled(Switch)`{
      background-color:${theme["primary-color"]} !important;
      border-color:${theme["primary-color"]} !important;
    }`;
    const PrimaryTransfer = styled(Transfer)`${_primary}`;
    const PrimaryProgressBar = styled(ProgressBar)`{
      .u-progress-bar{
        background-color:${theme["primary-color"]} !important;
      }
    }`;
    const PrimaryBreadcrumb = styled(Breadcrumb)`${_primary}`;
    const PrimarySelect = styled(Select)`{
      
    }`;
    const Option = PrimarySelect.Option;
    const PrimaryCascader = styled(Cascader)`${_primary}`;
    const PrimaryRate = styled(Rate)`{
      .u-rate-star-full i{
        color:${theme["primary-color"]} !important;
      }
    }`;

    const PrimaryTimeline = styled(Timeline)`{
      .u-timeline-item-head-primary{
        border-color:${theme["primary-color"]} !important;
        color:${theme["primary-color"]} !important;
      }
    }`;

    const PrimaryNavbar = styled(Navbar)`{
      border-color:${theme["primary-color"]} !important;
      background-color:${theme["primary-color"]} !important;
      .u-navbar-inverse .u-navbar-collapse{
        border-color:${theme["primary-color"]} !important;
      }
    }`;

    const PrimaryBadge = styled(Badge)`{
      .badge-single{
        background-color:${theme["primary-color"]} !important;
      }
    }`;

    const PrimaryButtonGroup = styled(ButtonGroup)``;

    const PrimaryLoadingstate = styled(LoadingState)`
      .u-loading.u-loading-rotate>div{
        border-color:${theme["primary-color"]} !important;
      }
    `;
    

    return (
      <div className={`${clsPrefix}-example-tinper`}> 

        <div className="example" >
          <div className="component first" >
            <PrimaryBadge colors="primary" >8</PrimaryBadge>

            <PrimaryCheckboxGroup>
              <Checkbox
                  disabled
                  className="test" >
              </Checkbox>
              <Checkbox
                  onDoubleClick={ this.handleDblClick }
                  ref="test"
                  checked={true}>
                  全选
              </Checkbox>
              <Checkbox
                  ref="test"
                  indeterminate
                  >
                  半选
              </Checkbox> 
            </PrimaryCheckboxGroup>

            <PrimaryRadioGroup name="lol" selectedValue={this.state.selectedValue} onChange={this.handleChange.bind(this)}>
                <Radio value="ig" >男</Radio>
                <Radio value="edg" >女</Radio> 
            </PrimaryRadioGroup>

            <PrimarySwitch
              checked={true}
            />

            <PrimaryRate value={3} />
          </div>
          
          <div className="component" >
              <PrimaryButton colors="primary" className="button">主按钮</PrimaryButton>
              <SecondaryButton colors="secondary" className="button">次按钮</SecondaryButton>

              <PrimaryButtonGroup style={{ margin: 10 }}>
                <PrimaryButton colors="primary">新增</PrimaryButton>
                <PrimaryButton colors="primary">修改</PrimaryButton>
                <PrimaryButton colors="primary">删除</PrimaryButton>
              </PrimaryButtonGroup>

              <PrimaryPopconfirm trigger="click" placement="right" content='您喜欢使用tinper-bee组件库吗？'>
                  <PrimaryButton colors="primary" style={{ margin: 10 }}>点击</PrimaryButton>
              </PrimaryPopconfirm>
            </div>

            <div className="component" >
              <PrimarySelect
                    defaultValue="lucy"
                    style={{ width: 200, marginRight: 6 }}
                    size="sm"
                  >
                <Option value="jack">供应商</Option>
                <Option value="lucy">采购商</Option>
                <Option value="disabled" disabled>
                  企业
                </Option>
                <Option value="yiminghe">个人</Option>
              </PrimarySelect>
          </div>

          <div className="component" style={{marginTop:30}} >
            <PrimaryTimeline>
                <PrimaryTimeline.Item>创建服务的时间 2015-09-01</PrimaryTimeline.Item>
                <PrimaryTimeline.Item>服务部署时间 2015-10-01</PrimaryTimeline.Item>
                <PrimaryTimeline.Item>查看时间 2015-11-01</PrimaryTimeline.Item>
                <PrimaryTimeline.Item>结束时间 2015-11-12</PrimaryTimeline.Item>
            </PrimaryTimeline>
            </div>

            <div className="bar" >
              <PrimaryProgressBar active now = {40} size="sm" style={{width:150}} />
            </div>
          </div>
      </div>
    )
  }
}
ExampleTinper.defaultProps = defaultProps;
export default ExampleTinper;