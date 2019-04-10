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
      background-color:${theme["border-color"]} !important;
      border-color:${theme["border-color"]} !important;
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
    const PrimaryRadio = styled(Radio)`{
      .u-radio-label:after{
        background:${theme["primary-color"]}  !important;
      }
      .u-radio-label:before{
        border: 2px solid ${theme["primary-color"]}  !important;
      }
    }`;
    const PrimaryPopconfirm = styled(Popconfirm)``;
    // console.log(" primary-- ",theme["primary-color"]);
    const PrimaryCheckbox = styled(Checkbox)`
      .u-checkbox-label:after{
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

            <PrimaryCheckbox
                disabled
                className="test" >
            </PrimaryCheckbox>
            <PrimaryCheckbox
                onDoubleClick={ this.handleDblClick }
                ref="test"
                checked={true}>
                全选
            </PrimaryCheckbox>
            <PrimaryCheckbox
                ref="test"
                indeterminate
                >
                半选
            </PrimaryCheckbox>

            <PrimaryRadio.RadioGroup name="lol" selectedValue={this.state.selectedValue} onChange={this.handleChange.bind(this)}>
                <PrimaryRadio value="ig" >男</PrimaryRadio>
                <PrimaryRadio value="edg" >女</PrimaryRadio> 
            </PrimaryRadio.RadioGroup>

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
                <Option value="jack">boyuzhou111</Option>
                <Option value="lucy">renhualiu</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="yiminghe">yuzhao</Option>
              </PrimarySelect>
          </div>

          <div className="component" style={{marginTop:30}} >
            <PrimaryTimeline>
                <PrimaryTimeline.Item>Create a services site 2015-09-01</PrimaryTimeline.Item>
                <PrimaryTimeline.Item>Solve initial network problems 2015-09-01</PrimaryTimeline.Item>
                <PrimaryTimeline.Item>Technical testing 2015-09-01</PrimaryTimeline.Item>
                <PrimaryTimeline.Item>Network problems being solved 2015-09-01</PrimaryTimeline.Item>
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