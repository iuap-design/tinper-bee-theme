import React, { Component } from 'react';
import { Menu } from 'tinper-bee';
import styled from 'styled-components'; 

import './index.scss';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const defaultProps = {
    clsPrefix: "tinper-bee-theme",
    colors: "default"
  };
  

class ExampleMenus extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
        current: 1
    }
}

handleClick = (e) => {

    this.setState({
        current: e.key,
    });
}

/**
 * 获取当前选中行的item对象。
 * @param {*} value 
 */
onSelect({item,key,selectedKeys}){ 
    // console.log(`${key} selected`); //获取key
    let currentObject = {};
    currentObject.value = item.props.children; //获取选中对象的数据
    currentObject.key = item.props.eventKey;
    // console.log(currentObject); 
}

render() {
    let {clsPrefix,theme} = this.props;
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
        border-radius:${theme["border-radius"]}px !important;
   `;

    return (
        <div className="menu_context" ><PrimaryMenu onClick={this.handleClick} 
        defaultOpenKeys={['demo3sub1']}
        //  openKeys={['demo3sub1','demo3sub2']}
        selectedKeys={[this.state.current,'4']} mode="inline" onSelect={this.onSelect.bind(this)}>
            <SubMenu key="demo3sub1" title={<span><span>用友集团</span></span>}>
                <MenuItemGroup title="用友总部">
                    <Menu.Item key="1">用友网络</Menu.Item>
                    <Menu.Item key="2">用友金融</Menu.Item>   
                </MenuItemGroup>
                <MenuItemGroup title="团体">
                    <Menu.Item key="3">用友FED</Menu.Item>
                    <Menu.Item key="4">用友tinper</Menu.Item>
                </MenuItemGroup>
            </SubMenu>
            <SubMenu key="demo3sub2" title={<span><span>用友集团分公司</span></span>}>
                <Menu.Item key="5">湖南总公司</Menu.Item>
                <Menu.Item key="6">石家庄分公司</Menu.Item>
                <SubMenu key="demo3sub3" title="石家庄-前端团队">
                    <Menu.Item key="7">销售事业部</Menu.Item>
                    <Menu.Item key="8">海外事业部</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key="demo3sub4" title={<span><span>用友开源团队</span></span>}>
                <Menu.Item key="9">tnper-bee团队</Menu.Item>
                <Menu.Item key="10">ynpm团队</Menu.Item>
                <Menu.Item key="11">其他工具类团队</Menu.Item>
                <Menu.Item key="12">mock团队</Menu.Item>
            </SubMenu>
        </PrimaryMenu></div>
    )
  }
}

ExampleMenus.defaultProps = defaultProps;
export default ExampleMenus;