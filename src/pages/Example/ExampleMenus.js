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
    console.log(`${key} selected`); //获取key
    let currentObject = {};
    currentObject.value = item.props.children; //获取选中对象的数据
    currentObject.key = item.props.eventKey;
    console.log(currentObject); 
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
            <SubMenu key="demo3sub1" title={<span><span>组织 1</span></span>}>
                <MenuItemGroup title="组 1">
                    <Menu.Item key="1">选项 1</Menu.Item>
                    <Menu.Item key="2">选项 2</Menu.Item>   
                </MenuItemGroup>
                <MenuItemGroup title="组 2">
                    <Menu.Item key="3">选项 3</Menu.Item>
                    <Menu.Item key="4">选项 4</Menu.Item>
                </MenuItemGroup>
            </SubMenu>
            <SubMenu key="demo3sub2" title={<span><span>组织 2</span></span>}>
                <Menu.Item key="5">选项 5</Menu.Item>
                <Menu.Item key="6">选项 6</Menu.Item>
                <SubMenu key="demo3sub3" title="子项">
                    <Menu.Item key="7">选项 7</Menu.Item>
                    <Menu.Item key="8">选项 8</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key="demo3sub4" title={<span><span>组织 3</span></span>}>
                <Menu.Item key="9">选项 9</Menu.Item>
                <Menu.Item key="10">选项 10</Menu.Item>
                <Menu.Item key="11">选项 11</Menu.Item>
                <Menu.Item key="12">选项 12</Menu.Item>
            </SubMenu>
        </PrimaryMenu></div>
    )
  }
}

ExampleMenus.defaultProps = defaultProps;
export default ExampleMenus;