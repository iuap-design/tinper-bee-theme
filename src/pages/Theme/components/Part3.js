import React, { Component } from 'react';
import { ColItem } from './Card';
import {
    Row,
    Pagination,
    Dropdown,
    Menu,
    Button,
} from 'tinper-bee';
const { Item } = Menu;
export const PartThree = (props) => {
    function onSelect({ key }) {
        console.log(`${key} selected`);
     
      }
     
      function onVisibleChange(visible) {
        console.log(visible);
      }
     
    const menu1 = (
        <Menu
          onSelect={onSelect}>
          <Item key="1">借款合同</Item>
          <Item key="2">抵/质押合同</Item>
          <Item key="3">担保合同</Item>
          <Item key="4">联保合同</Item>
          <Item key="5">合同审批</Item>
          <Item key="6">抵/质押合同跟踪</Item>
        </Menu>
    );
    return (
        <Row>
            <ColItem md={9} title={'分页 Pagination'}>
                <Pagination
                    first
                    last
                    prev
                    next
                    maxButtons={5}
                    boundaryLinks
                    activePage={1}
                    onSelect={()=>{}}
                    onDataNumSelect={()=>{}}
                    // showJump={true}
                    total={100}
                    dataNum={2}
                />

            </ColItem>
            <ColItem md={3} title={'下拉按钮 Dropdown'}>
                <Dropdown
                    trigger={['click']}
                    overlay={menu1}
                    animation="slide-up"
                    onVisibleChange={onVisibleChange}>
                    <Button colors='primary'>点击显示</Button>
                </Dropdown>
            </ColItem>

        </Row>
    )
}

