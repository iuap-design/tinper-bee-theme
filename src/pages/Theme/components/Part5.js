import React, { Component } from 'react';
import { ColItem } from './Card';
import styled from 'styled-components';
import {
  Row,
  Cascader,
  Switch,
  Rate,
  // Timepicker,
} from 'tinper-bee';
import TimePicker from 'bee-timepicker';
// import 'bee-timepicker/build/TimePicker.css';
export class PartFive extends Component {
  constructor(props) {

    super(props);
    this.state = {
      checked: true,//SWITCH
      value: 3,//rate
    }
  }
  //start:级联
  onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  }
  //end:级联
  //start:switch
  onSwitchChange = () => {
    this.setState({
      checked: !this.state.checked
    });
  };
  //end:switch
  //start:rate
  handRateChange = value => {
    this.setState({
      value
    })
  }
  //end:rate
  render() {
    const options = [{
      label: '基础组件',
      value: 'jczj',
      children: [{
        label: '导航',
        value: 'dh',
        children: [{
          label: '面包屑',
          value: 'mbx'
        }, {
          label: '分页',
          value: 'fy'
        }, {
          label: '标签',
          value: 'bq'
        }, {
          label: '菜单',
          value: 'cd'
        }]
      }, {
        label: '反馈',
        value: 'fk',
        children: [{
          label: '模态框',
          value: 'mtk'
        }, {
          label: '通知',
          value: 'tz'
        }]
      },
      {
        label: '表单',
        value: 'bd'
      }]
    }, {
      label: '应用组件',
      value: 'yyzj',
      children: [{
        label: '参照',
        value: 'ref',
        children: [{
          label: '树参照',
          value: 'reftree'
        }, {
          label: '表参照',
          value: 'reftable'
        }, {
          label: '穿梭参照',
          value: 'reftransfer'
        }]
      }]
    }
    ];
    if(this.props.customed){
      let {styleJs:{all:_primary,button:_button},clsPrefix,theme} = this.props;
      const PrimaryTimePicker = styled(TimePicker)`{
        .u-time-picker-input {
          border-radius: ${theme["border-radius"]}!important 
         
        }
        .u-time-picker-panel li.u-time-picker-panel-select-option-selected{
          background: ${theme["item-selected-bg-color-base"]} !important;
          color: ${theme["primary-color"]} !important;
        }
        .u-time-picker-panel .u-time-picker-panel-inner {
          border-radius: ${theme["border-radius"]}!important      
        }
        .u-time-picker-panel .u-time-picker-panel-select li:hover {
          background: ${theme["item-hover-bg-color-base"]} !important;
        }
        
      }`
      const PrimaryCascader = styled(Cascader)`${_primary}`;

      const PrimarySwitch = styled(Switch)`{
        border-color: ${theme["primary-color"]} !important;
        background-color: ${theme["primary-color"]} !important;
      }`
      const PrimaryRate = styled(Rate)`{
        .u-rate-star-full i{
          color:${theme["primary-color"]} !important;
        }
      }`;
      return(
        <Row>
        <ColItem md={3} title={'时间 TimePicker'} >
           <PrimaryTimePicker  placeholder="选择时间" onChange={()=>{}} />
        </ColItem>
        <ColItem md={3} title={'级联菜单 Cascader'} >
          <PrimaryCascader
            options={options}
            onChange={this.onChange}
            placeholder="请选择"
          />
        </ColItem>
        <ColItem md={3} title={'开关 Switch'} >
          <PrimarySwitch
            checked={this.state.checked}
            onChange={this.onSwitchChange}
          />
        </ColItem>
        <ColItem md={3} title={'评分 Rate'} >
          <PrimaryRate value={this.state.value} onChange={this.handRateChange} />
        </ColItem>
      </Row>
      )
    }
    return (
      <Row>
        <ColItem md={3} title={'时间 TimePicker'} >
           <TimePicker  placeholder="选择时间" onChange={()=>{}} />
        </ColItem>
        <ColItem md={3} title={'级联菜单 Cascader'} >
          <Cascader
            options={options}
            onChange={this.onChange}
            placeholder="请选择"
          />
        </ColItem>
        <ColItem md={3} title={'开关 Switch'} >
          <Switch
            checked={this.state.checked}
            onChange={this.onSwitchChange}
          />
        </ColItem>
        <ColItem md={3} title={'评分 Rate'} >
          <Rate value={this.state.value} onChange={this.handRateChange} />
        </ColItem>
      </Row>
    )
  }
}
