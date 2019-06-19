import React, { Component } from 'react';
import { ColItem } from './Card';
import styled from 'styled-components';
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
    if(props.customed){
        let {styleJs:{all:_primary,button:_button},clsPrefix,theme} = props;
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
        const menu1 = (
            <PrimaryMenu
              onSelect={onSelect}>
              <PrimaryMenu.Item key="1">借款合同</PrimaryMenu.Item>
              <PrimaryMenu.Item key="2">抵/质押合同</PrimaryMenu.Item>
              <PrimaryMenu.Item key="3">担保合同</PrimaryMenu.Item>
              <PrimaryMenu.Item key="4">联保合同</PrimaryMenu.Item>
              <PrimaryMenu.Item key="5">合同审批</PrimaryMenu.Item>
              <PrimaryMenu.Item key="6">抵/质押合同跟踪</PrimaryMenu.Item>
            </PrimaryMenu>
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
                        <PrimaryButton colors='primary'>点击显示</PrimaryButton>
                    </Dropdown>
                </ColItem>
    
            </Row>
        )
    }else{
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
   
}

