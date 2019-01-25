import React, { Component } from 'react';
import styled from 'styled-components';
// const rgbHex = require('rgb-hex');
import './index.scss';

import Button from 'bee-button';
import Pagination from 'bee-pagination';
import Modal from 'bee-modal';
import Radio from 'bee-radio';
import Popconfirm from 'bee-popconfirm';
import Checkbox from 'bee-checkbox';
import Switch from 'bee-switch';
import Transfer from 'bee-transfer';
import ProgressBar from 'bee-progress-bar';
import Breadcrumb from 'bee-breadcrumb';
import Select from 'bee-select';
import Cascader from 'bee-cascader';
import Rate from 'bee-rate';

const defaultProps = {
  clsPrefix: "tinper-bee-theme",
  colors: "default"
};

const cdnUrl = window.tinperCdnUrl?window.tinperCdnUrl:"//iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/tinper-bee/theme/";
const cookieId = window.tinperCookieId?window.tinperCookieId:"tinper-bee-theme";

class Example extends Component {

  constructor(props) {
    super(props);
    let _cookie = this.getCookie(cookieId);
    if(_cookie){
        document.getElementById(cookieId).href = (cdnUrl+_cookie);
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
    //button
    const PrimaryButton = styled(Button)`${_primary}`;
    const SecondaryButton = styled(Button)`${_button}`;

    const PrimaryPagination = styled(Pagination)`${_primary}`;
    const PrimaryModal = styled(Modal)`${_primary}`;
    const PrimaryRadio = styled(Radio)`{
      label:before{
        box-shadow: inset 0 0 0 10px ${theme["primary-color"]}  !important;
        border-color:${theme["primary-color"]} !important;
      }
    }`;
    const PrimaryPopconfirm = styled(Popconfirm)``;
    const PrimaryCheckbox = styled(Checkbox)`{
      label:before{
        box-shadow: inset 0 0 0 10px ${theme["primary-color"]}  !important;
        border-color:${theme["primary-color"]} !important;
      }
    }`;
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

    return (
      <div className={`${clsPrefix}-example`}> 

          <div className="example" >
            {/* <div className="title"># bee-Button</div> */}
            <div className="component" >
              <PrimaryButton colors="primary" className="button">主按钮(primary)</PrimaryButton>
              <SecondaryButton colors="secondary" className="button">次按钮(secondary)</SecondaryButton>
            </div>

            {/* <div className="component" >
              <PrimaryPagination
                first
                last
                prev
                next
                maxButtons={5}
                boundaryLinks 
                activePage={1}
                showJump={true}
                total={100}
                dataNum={2}
              />
            </div> */}

            <div className="component" >
              <PrimaryRadio.RadioGroup className="component"  name="lol" selectedValue={this.state.selectedValue} onChange={this.handleChange.bind(this)}>
                  <PrimaryRadio value="ig" >男</PrimaryRadio>
                  <PrimaryRadio value="edg" >女</PrimaryRadio> 
              </PrimaryRadio.RadioGroup>
            </div>


            <div className="component" >
              <PrimaryPopconfirm trigger="click" placement="right" content='您喜欢使用tinper-bee组件库吗？'>
                  <PrimaryButton colors="primary">点击</PrimaryButton>
              </PrimaryPopconfirm>
            </div>

            <div className="component">
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
            </div>

            <div className="component">
              <PrimarySwitch
                checked={true}
              />
            </div>

            <div className="component">
              <PrimaryProgressBar style={{width:30}} now = {40} />
            </div>

            <div className="component">
              <PrimarySelect
                defaultValue="lucy"
                style={{ width: 200, marginRight: 6 }}
              >
                <Option value="jack">boyuzhou111</Option>
                <Option value="lucy">renhualiu</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="yiminghe">yuzhao</Option>
              </PrimarySelect>
            </div>

            <div className="component" style={{paddingTop:200}}>
              <PrimaryRate value={3} />
            </div>

            {/* <div className="component" style={{paddingTop:200}}>
              <PrimarySlider defaultValue={20} />
            </div> */}

          </div>
      </div>
    )
  }
}
Example.defaultProps = defaultProps;
export default Example;