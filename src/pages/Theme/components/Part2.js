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
    const PrimaryBreadcrumb = styled(Breadcrumb)`
    padding:0;
  `
    return (
      <Row>
        <Col className="three-in-one" md={3} xs={12} sm={12} >
          <ColItem md="12" title={'标记 Bage'}>
            <Badge colors="primary" >8</Badge>
          </ColItem>
          <ColItem md="12" title={'状态按钮 LoadingState'}>
            <LoadingState
              showBackDrop={false}
              onClick={this.handleClick}
              show={this.state.show}
              colors="primary">
                  confirm
            </LoadingState>
          </ColItem>
          <ColItem md="12" title={'面包屑 Breadcrumb'}>
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
        <ColItem md="3" title={'时间轴 Timeline'} height={350}>
          <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
          </Timeline>
        </ColItem>
        <ColItem md="3" title={'日历 Calendar'} height={350}>
          <Calendar
            fullscreen={true}
            onSelect={this.onSelect}
          >
          </Calendar>
        </ColItem>
        <ColItem md="3" title={'树形控件 Tree'} height={350}>
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
