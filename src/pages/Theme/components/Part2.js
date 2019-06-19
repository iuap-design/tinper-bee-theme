import React, { Component } from 'react';
import styled from 'styled-components';
import { ColItem } from './Card';

import {
  Col,
  Row,
  LoadingState,
  Breadcrumb,
  Badge,
  Timeline,
  Tree,
  Icon,
} from 'tinper-bee';
const TreeNode = Tree.TreeNode;

import Calendar from "tinper-bee/lib/Calendar";
export class PartTwo extends Component{
  constructor(props){
    
    super(props);
    this.state={
      show:false,
      defaultExpandedKeys: ['0-0-0', '0-0-1'],
			defaultSelectedKeys: ['0-0-0', '0-0-1'],
			defaultCheckedKeys:['0-0-0', '0-0-1'],
			checkedKeys: {checked:['0-0-0', '0-0-1']},
    }
  }
  onSelect = (value) => {
    console.log(value);
  }
  handleClick = () => {
    this.setState({
      show: true
    });

    setTimeout(() => {
            this.setState({
                show: false
            })
    }, 3000)
  }
  render(){
    let PrimaryBreadcrumb = styled(Breadcrumb)`
      padding:0;
    ` 
   if(this.props.customed){
    let {styleJs:{all:_primary,button:_button},clsPrefix,theme} = this.props;
      const PrimaryBadge = styled(Badge)`{
        .badge-single{
          background-color:${theme["primary-color"]} !important;
        }
      }`;
      const PrimaryLoadingstate = styled(LoadingState)`${_primary}
      .u-button.u-button-primary{
        backgroud:${theme["primary-color"]} !important
      }
      .u-loading.u-loading-rotate>div{
        border-color:${theme["primary-color"]} !important;
      }
    `;
     PrimaryBreadcrumb = styled(Breadcrumb)`
      li{
        color:${theme["primary-color"]} !important;
      }
      a{
        color:${theme["primary-color"]} !important;
      }
      `;
     const PrimaryTimeline = styled(Timeline)`{
      .u-timeline-item-head-primary{
        border-color:${theme["primary-color"]} !important;
        color:${theme["primary-color"]} !important;
      }
    }`;
    const PrimaryCalendar = styled(Calendar)`{
      .u-calendar-today .u-calendar-date {
        border-top-color:${theme["primary-color"]} !important;
        color: ${theme["primary-color"]} !important;
      }
      ..u-calendar-selected-day .u-calendar-date{
        background: ${theme["item-selected-bg-color-base"]} !important
      }
      .u-calendar-full-header .u-calendar-full-header-switcher .u-calendar-full-header-switcher-focus{
        border-color:${theme["primary-color"]} !important;
        background-color:${theme["primary-color"]} !important;
      }
     
    }`
    const PrimaryTree = styled(Tree)`{
      li a.u-tree-node-selected {
          background-color: ${theme["item-selected-bg-color-base"]} !important;
          .u-tree-title{
              color:${theme["primary-color"]} !important;
          }
      }
      li a:hover {
          background-color:${theme["item-hover-bg-color-base"]} !important;
        }
      .u-tree-checkbox-checked .u-tree-checkbox-inner:after, .u-tree .u-tree-checkbox-inner:after{
          border: 2px solid ${theme["primary-color"]} !important;
      }
    }`
     return(
      <Row>
      <Col className="three-in-one" md={3} xs={12} sm={12} >
        <ColItem md={12} title={'标记 Bage'}>
          <PrimaryBadge colors="primary" >8</PrimaryBadge>
        </ColItem>
        <ColItem md={12} title={'状态按钮 LoadingState'}>
          <PrimaryLoadingstate
            showBackDrop={false}
            onClick={this.handleClick}
            show={this.state.show}
            colors="primary">
                confirm
          </PrimaryLoadingstate>
        </ColItem>
        <ColItem md={12} title={'面包屑 Breadcrumb'}>
          <PrimaryBreadcrumb>
            <PrimaryBreadcrumb.Item href="#">
              Home
                </PrimaryBreadcrumb.Item>
            <PrimaryBreadcrumb.Item>
              Library
                </PrimaryBreadcrumb.Item>
            <PrimaryBreadcrumb.Item active>
              Data
                </PrimaryBreadcrumb.Item>
          </PrimaryBreadcrumb>
        </ColItem>
      </Col>
      <ColItem md={3} title={'时间轴 Timeline'} height={350}>
        <PrimaryTimeline>
          <PrimaryTimeline.Item>Create a services site 2015-09-01</PrimaryTimeline.Item>
          <PrimaryTimeline.Item>Solve initial network problems 2015-09-01</PrimaryTimeline.Item>
          <PrimaryTimeline.Item>Technical testing 2015-09-01</PrimaryTimeline.Item>
          <PrimaryTimeline.Item>Network problems being solved 2015-09-01</PrimaryTimeline.Item>
        </PrimaryTimeline>
      </ColItem>
      <ColItem md={3} title={'日历 Calendar'} height={350}>
        <PrimaryCalendar
          fullscreen={true}
          onSelect={this.onSelect}
        >
        </PrimaryCalendar>
      </ColItem>
      <ColItem md={3} title={'树形控件 Tree'} height={350}>
        <PrimaryTree className="myCls" showLine checkable
          defaultExpandedKeys={this.state.defaultExpandedKeys}
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          defaultCheckedKeys = {this.state.defaultCheckedKeys}
          checkStrictly
          showIcon
          cancelUnSelect={true}
          onSelect={this.onSelect} onCheck={this.onCheck}
          onDoubleClick={this.onDoubleClick}
        >
          <PrimaryTree.TreeNode title="parent 1" key="0-0"  icon={<Icon type="uf-treefolder"  />}>
            <PrimaryTree.TreeNode title="parent 1-0" key="0-0-0" disabled  icon={<Icon type="uf-treefolder" />}>
              <PrimaryTree.TreeNode title="leaf" key="0-0-0-0" disableCheckbox icon={<Icon type="uf-list-s-o" />}/>
              <PrimaryTree.TreeNode title="leaf" key="0-0-0-1" icon={<Icon type="uf-list-s-o" />}/>
            </PrimaryTree.TreeNode>
            <PrimaryTree.TreeNode title="parent 1-1" key="0-0-1" icon={<Icon type="uf-treefolder" />}>
              <PrimaryTree.TreeNode title={<span>sss</span>} key="0-0-1-0" icon={<Icon type="uf-list-s-o" />}/>
            </PrimaryTree.TreeNode>
          </PrimaryTree.TreeNode>
        </PrimaryTree>
      </ColItem>
    </Row>
     )
   }
    return (
      <Row>
        <Col className="three-in-one" md={3} xs={12} sm={12} >
          <ColItem md={12} title={'标记 Bage'}>
            <Badge colors="primary" >8</Badge>
          </ColItem>
          <ColItem md={12} title={'状态按钮 LoadingState'}>
            <LoadingState
              showBackDrop={false}
              onClick={this.handleClick}
              show={this.state.show}
              colors="primary">
                  confirm
            </LoadingState>
          </ColItem>
          <ColItem md={12} title={'面包屑 Breadcrumb'}>
            <PrimaryBreadcrumb>
              <PrimaryBreadcrumb.Item href="#">
                Home
                  </PrimaryBreadcrumb.Item>
              <PrimaryBreadcrumb.Item>
                Library
                  </PrimaryBreadcrumb.Item>
              <PrimaryBreadcrumb.Item active>
                Data
                  </PrimaryBreadcrumb.Item>
            </PrimaryBreadcrumb>
          </ColItem>
        </Col>
        <ColItem md={3} title={'时间轴 Timeline'} height={350}>
          <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
          </Timeline>
        </ColItem>
        <ColItem md={3} title={'日历 Calendar'} height={350}>
          <Calendar
            fullscreen={true}
            onSelect={this.onSelect}
          >
          </Calendar>
        </ColItem>
        <ColItem md={3} title={'树形控件 Tree'} height={350}>
          <Tree className="myCls" showLine checkable
            defaultExpandedKeys={this.state.defaultExpandedKeys}
            defaultSelectedKeys={this.state.defaultSelectedKeys}
            defaultCheckedKeys = {this.state.defaultCheckedKeys}
            checkStrictly
            showIcon
            cancelUnSelect={true}
            onSelect={this.onSelect} onCheck={this.onCheck}
            onDoubleClick={this.onDoubleClick}
          >
            <TreeNode title="parent 1" key="0-0"  icon={<Icon type="uf-treefolder"  />}>
              <TreeNode title="parent 1-0" key="0-0-0" disabled  icon={<Icon type="uf-treefolder" />}>
                <TreeNode title="leaf" key="0-0-0-0" disableCheckbox icon={<Icon type="uf-list-s-o" />}/>
                <TreeNode title="leaf" key="0-0-0-1" icon={<Icon type="uf-list-s-o" />}/>
              </TreeNode>
              <TreeNode title="parent 1-1" key="0-0-1" icon={<Icon type="uf-treefolder" />}>
                <TreeNode title={<span>sss</span>} key="0-0-1-0" icon={<Icon type="uf-list-s-o" />}/>
              </TreeNode>
            </TreeNode>
          </Tree>
        </ColItem>
      </Row>
    )
  }
}
