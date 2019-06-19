import React, { Component } from 'react';
import styled from 'styled-components';
import { ColItem } from './Card';

import {
  Col,
  Row,
  Menu,
  Button,
  Checkbox,
  Radio,
  Tabs,
  InputGroup,
  FormControl,
  InputNumber,
  Select
  // DatePicker
} from 'tinper-bee';
import DatePicker from "tinper-bee/lib/Datepicker"
const SubMenu = Menu.SubMenu;
const { TabPane } = Tabs;
const {Option} = Select;
const format = "YYYY-MM-DD dddd";
const dateInputPlaceholder = "选择日期";
export class PartFour extends Component {
  constructor(props) {

    super(props);
    this.state = {
      current: '1', //bee-menu
      openKeys: [], //bee-menu
      selectedValue: '3',//bee-radio
      activeKey: "1",//bee-tab
      value: 5,//bee-number-input
    }
  }
  //start:bee-menu
  handleClick = (e) => {
    console.log('Clicked: ', e);
    this.setState({ current: e.key });
  }
  onOpenChange = (openKeys) => {
    const state = this.state;

    const latestOpenKey = this.myfilter(openKeys, state.openKeys);
    const latestCloseKey = this.myfilter(state.openKeys, openKeys);

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  }

  //IE下 array.find（）方法不可用
  myfilter = (arr1, arr2) => {
    if (arr2.length === 0 || !arr2) {
      return arr1[0];
    }

    for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i].toString()) === -1) {
        return arr1[i];
      }
    }
    return false;
  }

  getAncestorKeys = (key) => {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  }
  //end:bee-menu
  //start:bee-radio
  handleChange(value) {
    this.setState({ selectedValue: value });
  }
  //end:bee-radio
  //start:bee-datePicker
  onSelect = (d, dataString) => {
    console.log('select')
    console.log(d, dataString);
  }
  onClick = d => {
    console.log('click')
  }
  onChange = (d, dataString) => {
    console.log('change')
    console.log(d, dataString)
  };
  //end:bee-daatePicker
  //start:bee-tab
  onTabChange = (activeKey) => {
    console.log(`onChange ${activeKey} o-^-o`);
    this.setState({
      activeKey,
    });
  }
  //end:bee-tab
  //start:bee-number-input 
  handleNumChange = (value) => {
    console.log(value);
    this.setState({
      value: value
    })
  }
  renderStyled = () =>{
    let {styleJs:{all:_primary,button:_button},clsPrefix,theme} = this.props;
    const PrimaryMenu = styled(Menu)`
      .u-menu-submenu-active{ 
          background-color:${theme["item-hover-bg-color-base"]} !important;
      }
      .u-menu-item-active, .u-menu-item:hover, .u-menu-submenu-active, .u-menu-submenu-title:hover, .u-menu:not(.u-menu-inline) .u-menu-submenu-open{
          background-color:${theme["item-hover-bg-color-base"]} !important;
      }
      .u-menu:not(.u-menu-horizontal) .u-menu-item-selected{
          background-color:${theme["item-selected-bg-color-base"]} !important;
      }
      .u-menu:not(.u-menu-horizontal) .u-menu-item-selected:after{
          border-right: 3px solid ${theme["primary-color"]} !important;
      }
      .u-menu-item-selected, .u-menu-item-selected>a, .u-menu-item-selected>a:hover{
          color:${theme["primary-color"]} !important;
      }
      .u-dropdown-menu-item:hover{
          background-color: ${theme["item-hover-bg-color-base"]} !important;
      }
      .u-dropdown-menu-item-selected{
          color: ${theme["primary-color"]} !important;
          background-color: ${theme["item-selected-bg-color-base"]} !important;
      }
      border-radius:${theme["border-radius"]}px !important;
  `;
    const PrimaryCheckboxGroup = styled(Checkbox.CheckboxGroup)`
      .u-checkbox.is-checked .u-checkbox-label:after{
        color:${theme["primary-color"]}  !important;
      }
      .u-checkbox.u-checkbox-indeterminate .u-checkbox-label:after{
        color:${theme["primary-color"]}  !important;
      }
    `;
    const PrimaryRadioGroup = styled(Radio.RadioGroup)`{
      .is-checked .u-radio-label:after{
        background:${theme["primary-color"]}  !important;
      }
      .u-radio-label:before{
        border: 2px solid ${theme["primary-color"]}  !important;
      }
    }`;
    const PrimaryFormControl = styled(FormControl)`
      border-radius:${theme["border-radius"]}px !important;
  `;
    const PrimaryDatePicker = styled(DatePicker)`
          .rc-calendar-selected-date .rc-calendar-date, .rc-calendar-selected-day .rc-calendar-date{
              background-color:${theme["primary-color"]} !important;
              border: 1px solid ${theme["border-color"]} !important; 
          }
          .rc-calendar-today .rc-calendar-date{
              border: 1px solid ${theme["border-color"]} !important;
          }
          .rc-calendar-ok-btn, .rc-calendar-time-picker-btn, .rc-calendar-today-btn{
              color:${theme["primary-color"]} !important;
          }
          .rc-calendar-year-panel-selected-cell .rc-calendar-year-panel-year:hover{
              background-color:${theme["primary-color"]} !important;
          }
          .rc-calendar-month-panel-selected-cell .rc-calendar-month-panel-month,
          .rc-calendar-year-panel-selected-cell .rc-calendar-year-panel-year{
              background-color:${theme["primary-color"]} !important;
          }
          .rc-calendar-day-select:hover, .rc-calendar-month-select:hover, .rc-calendar-year-select:hover{
              color:${theme["primary-color"]} !important;
          }
          .rc-calendar-next-month-btn:hover, .rc-calendar-next-year-btn:hover, .rc-calendar-prev-month-btn:hover, .rc-calendar-prev-year-btn:hover{
              color:${theme["primary-color"]} !important;
          }
    `;
     const PrimaryTabs = styled(Tabs)`{
         .u-tabs-tab-active, .u-tabs .u-tabs-tab-active:hover {
          color: ${theme["primary-color"]} !important;
        
        }
        .u-tabs-tab:hover {
          color: ${theme["primary-color"]} !important;
        }
        .u-tabs-ink-bar {
          
          background-color: ${theme["primary-color"]} !important;
        
        }
     }`
    const PrimarySelectOption = styled(Option)`{
      .u-select-dropdown .u-select-dropdown-menu-item-selected{
        color: ${theme["primary-color"]} !important;
        background-color: ${theme["primary-color"]} !important;
      }
      .u-select-dropdown-menu-item-selected{
        color: ${theme["primary-color"]} !important;
        background-color: ${theme["primary-color"]} !important;
      }
    }`
    return (
      <Row>
        <ColItem md={3} title={'菜单 Menus'} height={350}>
          <PrimaryMenu
            mode="inline"
            openKeys={this.state.openKeys}
            selectedKeys={[this.state.current]}
            style={{ width: 240 }}
            onOpenChange={this.onOpenChange}
            onClick={this.handleClick}>
            <PrimaryMenu.SubMenu key="sub1" title={<span><span>组织 1</span></span>}>
              <PrimaryMenu.Item key="1">选项 1</PrimaryMenu.Item>
              <PrimaryMenu.Item key="2">选项 2</PrimaryMenu.Item>
              <PrimaryMenu.Item key="3">选项 3</PrimaryMenu.Item>
              <PrimaryMenu.Item key="4">选项 4</PrimaryMenu.Item>
            </PrimaryMenu.SubMenu>
            <PrimaryMenu.SubMenu key="sub2" title={<span><span>组织 2</span></span>}>
              <PrimaryMenu.Item key="5">选项 5</PrimaryMenu.Item>
              <PrimaryMenu.Item key="6">选项 6</PrimaryMenu.Item>
              <PrimaryMenu.SubMenu key="sub3" title="子项">
                <PrimaryMenu.Item key="7">选项 7</PrimaryMenu.Item>
                <PrimaryMenu.Item key="8">选项 8</PrimaryMenu.Item>
              </PrimaryMenu.SubMenu>
            </PrimaryMenu.SubMenu>
            <PrimaryMenu.SubMenu key="sub4" title={<span><span>组织 3</span></span>}>
              <PrimaryMenu.Item key="9">选项 9</PrimaryMenu.Item>
              <PrimaryMenu.Item key="10">选项 10</PrimaryMenu.Item>
              <PrimaryMenu.Item key="11">选项 11</PrimaryMenu.Item>
              <PrimaryMenu.Item key="12">选项 12</PrimaryMenu.Item>
            </PrimaryMenu.SubMenu>
          </PrimaryMenu>
        </ColItem>
        <Col className="three-in-one" md={3} xs={12} sm={12} >
          <ColItem md={12} title={'多选 Checkbox'}>
          <PrimaryCheckboxGroup>
              <Checkbox
                  disabled
                  className="test" >组织
              </Checkbox>
              <Checkbox
                  ref="test"
                  checked={true}>
                  部门
              </Checkbox>
              <Checkbox
                  ref="test"
                  >
                  人员
              </Checkbox> 
            </PrimaryCheckboxGroup>
          </ColItem>
          <ColItem md={12} title={'单选 Radio'}>
          <PrimaryRadioGroup name="lol" 
            selectedValue={this.state.selectedValue}
            onChange={this.handleChange.bind(this)}
          >
              < Radio colors="primary" value="1" >组织</Radio>
              <Radio colors="primary" value="2" >部门</Radio>
              <Radio colors="primary" value="3" >人员</Radio>
            </PrimaryRadioGroup>
          </ColItem>
          <ColItem md={12} title={'日期 DatePicker'}>
            <PrimaryDatePicker
              format={format}
              onSelect={this.onSelect}
              onChange={this.onChange}
              onClick={this.onClick}
            />
          </ColItem>
        </Col>
        <Col className="three-in-one" md={6} xs={12} sm={12} >
          <ColItem md={12} title={'多选 Checkbox'}>
            <PrimaryTabs
              value={this.state.activeKey}
              onChange={this.onTabChange}
              className="demo1-tabs"
            >
              <PrimaryTabs.TabPane tab='Tab 1' key="1">Content of Tab Pane 1</PrimaryTabs.TabPane>
              <PrimaryTabs.TabPane tab='Tab 2' key="2">Content of Tab Pane 2</PrimaryTabs.TabPane>
              <PrimaryTabs.TabPane tab='Tab 3' key="3">Content of Tab Pane 3</PrimaryTabs.TabPane>
            </PrimaryTabs>
          </ColItem>
          <ColItem md={6} title={'输入框组 InputGroup'}>
            <InputGroup >
              <InputGroup.Addon >https://</InputGroup.Addon>
              <PrimaryFormControl type="text" />
              <InputGroup.Addon>.com</InputGroup.Addon>
            </InputGroup>
          </ColItem>
          <ColItem md={6} title={'输入框 FormControl'}>
            <PrimaryFormControl
              className="demo1-input"
              value={this.state.value}
              onChange={this.onChange}
            />
          </ColItem>
          <ColItem md={6} title={'数字框 InputNumber'}>
            <div style={{width:'50%',display:'inline-block',marginRight:6}}>
              <InputNumber precision={2} min={0} value={this.state.value} onChange={this.handleNumChange} />
            </div>
            <div style={{width:'40%',display:'inline-block'}}>
              <InputNumber
                iconStyle="one"
                max={12}
                min={5}
                step={2}
                value={this.state.value}
                onChange={this.handleNumChange}
              />
            </div>
            
          </ColItem>
          <ColItem md={6} title={'下拉菜单 Select'}>
            <Select
              defaultValue="all"
              onChange={this.handleChange}
              showSearch={true}
            >
              <PrimarySelectOption value="all">全部</PrimarySelectOption>
              <PrimarySelectOption value="confirming">待确认</PrimarySelectOption>
              <PrimarySelectOption value="executing">执行中</PrimarySelectOption>
              <PrimarySelectOption value="completed" disabled>
                已办结
              </PrimarySelectOption>
              <PrimarySelectOption value="termination">终止</PrimarySelectOption>
            </Select>
          </ColItem>
        </Col>
      </Row>
    )
  }
  //end:bee-number-input
  render() {
    if(this.props.customed){
      return this.renderStyled();
      // return false;
    }
    return (
      <Row>
        <ColItem md={3} title={'菜单 Menus'} height={350}>
          <Menu
            mode="inline"
            openKeys={this.state.openKeys}
            selectedKeys={[this.state.current]}
            style={{ width: 240 }}
            onOpenChange={this.onOpenChange}
            onClick={this.handleClick}>
            <SubMenu key="sub1" title={<span><span>组织 1</span></span>}>
              <Menu.Item key="1">选项 1</Menu.Item>
              <Menu.Item key="2">选项 2</Menu.Item>
              <Menu.Item key="3">选项 3</Menu.Item>
              <Menu.Item key="4">选项 4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><span>组织 2</span></span>}>
              <Menu.Item key="5">选项 5</Menu.Item>
              <Menu.Item key="6">选项 6</Menu.Item>
              <SubMenu key="sub3" title="子项">
                <Menu.Item key="7">选项 7</Menu.Item>
                <Menu.Item key="8">选项 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title={<span><span>组织 3</span></span>}>
              <Menu.Item key="9">选项 9</Menu.Item>
              <Menu.Item key="10">选项 10</Menu.Item>
              <Menu.Item key="11">选项 11</Menu.Item>
              <Menu.Item key="12">选项 12</Menu.Item>
            </SubMenu>
          </Menu>
        </ColItem>
        <Col className="three-in-one" md={3} xs={12} sm={12} >
          <ColItem md={12} title={'多选 Checkbox'}>
            <Checkbox colors="primary">组织</Checkbox>
            <Checkbox colors="primary">部门</Checkbox>
            <Checkbox colors="primary">人员</Checkbox>
          </ColItem>
          <ColItem md={12} title={'单选 Radio'}>
            <Radio.RadioGroup
              name="color"
              selectedValue={this.state.selectedValue}
              onChange={this.handleChange.bind(this)}>
              <Radio colors="primary" value="1" >组织</Radio>
              <Radio colors="primary" value="2" >部门</Radio>
              <Radio colors="primary" value="3" >人员</Radio>

            </Radio.RadioGroup>
          </ColItem>
          <ColItem md={12} title={'日期 DatePicker'}>
            <DatePicker
              format={format}
              onSelect={this.onSelect}
              onChange={this.onChange}
              onClick={this.onClick}
            />
          </ColItem>
        </Col>
        <Col className="three-in-one" md={6} xs={12} sm={12} >
          <ColItem md={12} title={'多选 Checkbox'}>
            <Tabs
              defaultActiveKey="1"
              onChange={this.onTabChange}
              className="demo1-tabs"
            >
              <TabPane tab='Tab 1' key="1">Content of Tab Pane 1</TabPane>
              <TabPane tab='Tab 2' key="2">Content of Tab Pane 2</TabPane>
              <TabPane tab='Tab 3' key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
          </ColItem>
          <ColItem md={6} title={'单选 Radio'}>
            <InputGroup >
              <InputGroup.Addon >https://</InputGroup.Addon>
              <FormControl type="text" />
              <InputGroup.Addon>.com</InputGroup.Addon>
            </InputGroup>
          </ColItem>
          <ColItem md={6} title={'输入框 FormControl'}>
            <FormControl
              className="demo1-input"
              value={this.state.value}
              onChange={this.onChange}
            />
          </ColItem>
          <ColItem md={6} title={'数字框 InputNumber'}>
            <div style={{width:'50%',display:'inline-block',marginRight:6}}>
              <InputNumber precision={2} min={0} value={this.state.value} onChange={this.handleNumChange} />
            </div>
            <div style={{width:'40%',display:'inline-block'}}>
              <InputNumber
                iconStyle="one"
                max={12}
                min={5}
                step={2}
                value={this.state.value}
                onChange={this.handleNumChange}
              />
            </div>
            
          </ColItem>
          <ColItem md={6} title={'下拉菜单 Select'}>
            <Select
              defaultValue="all"
              onChange={this.handleChange}
              showSearch={true}
            >
              <Option value="all">全部</Option>
              <Option value="confirming">待确认</Option>
              <Option value="executing">执行中</Option>
              <Option value="completed" disabled>
                已办结
              </Option>
              <Option value="termination">终止</Option>
            </Select>
          </ColItem>
        </Col>
      </Row>
    )
  }
}
