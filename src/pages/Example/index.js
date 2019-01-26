import React, { Component } from 'react';
import styled from 'styled-components';
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
import Timeline from 'bee-timeline';
import Navbar from 'bee-navbar';
import FormControl from 'bee-form-control';
import Badge from 'bee-badge';
import ButtonGroup from 'bee-button-group';
import Loadingstate from 'bee-loading-state';

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
    // const PrimaryButton = styled(Button)`${_primary}`;
    const PrimaryButton = styled(Button)`${_primary}
      background-color:${theme["border-color"]} !important;
      border-color:${theme["border-color"]} !important;
    `;
    const SecondaryButton = styled(Button)`${_button}`;

    const PrimaryPagination = styled(Pagination)`${_primary}`;
    const PrimaryModal = styled(Modal)`${_primary}`;
    const PrimaryRadio = styled(Radio)`{
      .u-radio-label::before{
        -webkit-box-shadow:inset 0 0 0 10px ${theme["primary-color"]}  !important;
        box-shadow:inset 0 0 0 10px ${theme["primary-color"]}  !important;
        border-color:${theme["primary-color"]} !important;
      } 
    }`;
    const PrimaryPopconfirm = styled(Popconfirm)``;
    console.log(" primary-- ",theme["primary-color"]);
    const PrimaryCheckbox = styled(Checkbox)`
      .u-checkbox-label::before{
        -webkit-box-shadow:inset 0 0 0 10px ${theme["primary-color"]}  !important;
        box-shadow:inset 0 0 0 10px ${theme["primary-color"]}  !important;
      }
    `;
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

    const PrimaryLoadingstate = styled(Loadingstate)`
      .u-loading.u-loading-rotate>div{
        border-color:${theme["primary-color"]} !important;
      }
    `;
    

    return (
      <div className={`${clsPrefix}-example`}> 

        <div className="example" >
            <div className="title"><span className="titile-well">#</span>Button</div>
            <div className="component" >
              <PrimaryButton colors="primary" className="button">主按钮(primary)</PrimaryButton>
              <SecondaryButton colors="secondary" className="button">次按钮(secondary)</SecondaryButton>
            </div>

            <div className="title"><span className="titile-well">#</span>按钮组</div>
            <div className="component" >
              <PrimaryButtonGroup style={{ margin: 10 }}>
                <PrimaryButton colors="primary">新增</PrimaryButton>
                <PrimaryButton colors="primary">修改</PrimaryButton>
                <PrimaryButton colors="primary">删除</PrimaryButton>
              </PrimaryButtonGroup>
            </div>

            <div className="title"><span className="titile-well">#</span>状态按钮(Loadingstate)</div>
            <div className="component" >
              <PrimaryLoadingstate showBackDrop={false}	show={ true } colors="info">
                confirm
              </PrimaryLoadingstate>
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

            <div className="title"><span className="titile-well">#</span>Radio</div>
            <div className="component" >
              <PrimaryRadio.RadioGroup name="lol" selectedValue={this.state.selectedValue} onChange={this.handleChange.bind(this)}>
                  <PrimaryRadio value="ig" >男</PrimaryRadio>
                  <PrimaryRadio value="edg" >女</PrimaryRadio> 
              </PrimaryRadio.RadioGroup>
            </div>

            <div className="title"><span className="titile-well">#</span>Popconfirm</div>
            <div className="component" >
              <PrimaryPopconfirm trigger="click" placement="right" content='您喜欢使用tinper-bee组件库吗？'>
                  <PrimaryButton colors="primary">点击</PrimaryButton>
              </PrimaryPopconfirm>
            </div>

            <div className="title"><span className="titile-well">#</span>Badge</div>
            <div className="component" >
              <PrimaryBadge colors="primary" >8</PrimaryBadge>
            </div>
            
            <div className="title"><span className="titile-well">#</span>Checkbox</div>
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
            
            <div className="title"><span className="titile-well">#</span>Switch</div>
            <div className="component">
              <PrimarySwitch
                checked={true}
              />
            </div>
            
            <div className="title"><span className="titile-well">#</span>ProgressBar</div>
            <div className="component-bar">
              <PrimaryProgressBar active now = {40} />
            </div>
            
            <div className="title"><span className="titile-well">#</span>Select</div>
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
            
            <div className="title"><span className="titile-well">#</span>Rate</div>
            <div className="component">
              <PrimaryRate value={3} />
            </div>
            
            <div className="title"><span className="titile-well">#</span>Timeline</div>
            <div className="component">
              <PrimaryTimeline>
                  <PrimaryTimeline.Item>Create a services site 2015-09-01</PrimaryTimeline.Item>
                  <PrimaryTimeline.Item>Solve initial network problems 2015-09-01</PrimaryTimeline.Item>
                  <PrimaryTimeline.Item>Technical testing 2015-09-01</PrimaryTimeline.Item>
                  <PrimaryTimeline.Item>Network problems being solved 2015-09-01</PrimaryTimeline.Item>
              </PrimaryTimeline>
            </div>

            <div className="title"><span className="titile-well">#</span>Navbar</div>
            <div className="component navbar">

            <PrimaryNavbar
                    inverse
                    expanded={this.state.expanded}
                    onToggle={this.onToggle}>
                    <PrimaryNavbar.Header>
                        <PrimaryNavbar.Brand>
                            <a href="#">React-FED</a>
                        </PrimaryNavbar.Brand>
                        <PrimaryNavbar.Toggle />
                    </PrimaryNavbar.Header>

                    <PrimaryNavbar.Collapse>
                        <PrimaryNavbar.Nav
                            selectedkey={this.state.selectedkey}
                            onSelect={this.handleSelect}>
                            <PrimaryNavbar.NavItem eventKey={1}>选项</PrimaryNavbar.NavItem>
                            <PrimaryNavbar.NavItem href="#" eventKey={2}>
                                选项
                            </PrimaryNavbar.NavItem>
                        </PrimaryNavbar.Nav>
                        
                        <PrimaryNavbar.Form pullRight>
                            <FormControl type="text" placeholder="Search"/>
                        </PrimaryNavbar.Form>
                    </PrimaryNavbar.Collapse>
                </PrimaryNavbar>

            </div>


            

            <div className="title"><span className="titile-well">#</span>界面</div>
            <div className="component interface"></div>
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