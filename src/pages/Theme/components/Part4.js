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
  //end:bee-number-input
  render() {
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
