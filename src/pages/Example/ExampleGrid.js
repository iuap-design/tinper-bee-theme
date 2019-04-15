import React, { Component } from 'react';
import Grid from 'bee-complex-grid'; 
import styled from 'styled-components';
import {Button} from 'tinper-bee';
// import 'bee-complex-grid/node_modules/src/Grid.scss'; 

import './index.scss';

const defaultProps = {
  clsPrefix: "tinper-bee-theme",
  colors: "default"
};


function fmoney(s, n) {
  n = n > 0 && n <= 20 ? n : 2;
  s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
  let l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
  let t = "";
  for (let i = 0; i < l.length; i++) {
  t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
  }
  return t.split("").reverse().join("") + "." + r;
  }
  
const dataList = [
  {
    index: 1,
    orderCode: "2343",
    supplierName: "xxx",
    type_name: "123",
    purchasing: "内行",
    purchasingGroup: "323",
    voucherDate: "kkkk",
    approvalState_name: "vvvv",
    confirmState_name: "aaaa",
    closeState_name: "vnnnnn",
    money:'1232.56',
    _checked: true,
    d: "操作",
    key: "1"
  },
  {
    index: 2,
    _checked: true,
    orderCode: "222",
    supplierName: "22xxx",
    type_name: "1223",
    purchasing: "内行2",
    purchasingGroup: "3223",
    voucherDate: "222kk",
    approvalState_name: "22vvvv",
    confirmState_name: "2aaaa",
    closeState_name: "2vnnnnn",
    money:'2341232.56',
    d: "2操作",
    key: "2"
  },
  {
    index: 3,
    orderCode: "222",
    supplierName: "22xxx",
    _disabled: true,
    type_name: "1223",
    purchasing: "内行2",
    purchasingGroup: "3223",
    voucherDate: "222kk",
    approvalState_name: "22vvvv",
    confirmState_name: "2aaaa",
    closeState_name: "2vnnnnn",
    money:'122368732.56',
    d: "3操作",
    key: "3"
  },
  {
    index: 4,
    orderCode: "222",
    supplierName: "22xxx",
    type_name: "1223",
    purchasing: "内行2",
    purchasingGroup: "3223",
    voucherDate: "222kk",
    approvalState_name: "22vvvv",
    confirmState_name: "2aaaa",
    closeState_name: "2vnnnnn",
    money:'18765232.56',
    _checked: true,
    d: "4操作",
    key: "4"
  },
  {
    index: 5,
    orderCode: "222",
    supplierName: "22xxx",
    type_name: "1223",
    purchasing: "内行2",
    purchasingGroup: "3223",
    voucherDate: "222kk",
    approvalState_name: "22vvvv",
    confirmState_name: "2aaaa",
    closeState_name: "2vnnnnn",
    money:'18765232.56',
    _checked: true,
    d: "5操作",
    key: "5"
  },
  {
    index: 6,
    orderCode: "222",
    supplierName: "22xxx",
    type_name: "1223",
    purchasing: "内行2",
    purchasingGroup: "3223",
    voucherDate: "222kk",
    approvalState_name: "22vvvv",
    confirmState_name: "2aaaa",
    closeState_name: "2vnnnnn",
    money:'18765232.56',
    _checked: true,
    d: "6操作",
    key: "6"
  }
];


class ExampleGrid extends Component {

  constructor(props) {
    super(props); 
    this.state = {
      selectedValue: 'edg'
    }; 
  }
   
  handleChange(value) { 
  }

  render() {
    let {
      // styleJs:{all:_primary,button:_button},
    clsPrefix,theme} = this.props;
    //button
    // const PrimaryButton = styled(Button)`${_primary}`;
    // const PrimaryButton = styled(Button)`${_primary}
    //   background-color:${theme["border-color"]} !important;
    //   border-color:${theme["border-color"]} !important;
    // `; 

    let paginationObj = {
      items:10,//一页显示多少条
      total:100,//总共多少条、
      freshData:this.freshData,//点击下一页刷新的数据
      onDataNumSelect:this.onDataNumSelect, //每页大小改变触发的事件
      showJump:false,
      verticalPosition:null
    }
    const PrimaryGrid = styled(Grid)`
      .operation-btn>a{
          color:${theme["text-color-base"]} !important;
      }
      .u-checkbox.u-checkbox-indeterminate .u-checkbox-label:after{
        color:${theme["primary-color"]} !important;
      }
      .u-checkbox.is-checked .u-checkbox-label:after{
        color:${theme["primary-color"]} !important;
      }
      .u-table-row-hover{
        background:${theme["table-row-hover-bg-color"]} !important; 
      }
      .u-table-thead th{
        background:${theme["table-header-background-color"]} !important; 
      }
      .u-table-thead .th-drag{
        color:${theme["table-header-text-color"]} !important; 
      }
      .u-table td{
        border-bottom:1px solid ${theme["table-border-color-base"]} !important;
      }
      .u-table-bordered td, .u-table-bordered th{ 
        border-right:1px solid ${theme["table-border-color-base"]} !important;
      }
    `;

    const PrimaryButton = styled(Button)`
      background:${theme["primary-color"]} !important;
      border: 1px solid ${theme["primary-color"]} !important;
    `;

    const column = [
      {
        title: "序号",
        dataIndex: "index",
        key: "index",
        width: 100
      },
      {
        title: "订单编号",
        dataIndex: "orderCode",
        key: "orderCode",
        width: 150
      },
      {
        title: "金额",
        dataIndex: "money",
        key: "money",
        width: 160,
        textAlign:'right',
        render(text, record, index) {
           let money = fmoney(text,2);
           return (<span>{money}</span>)
        }
      },
      {
        title: "类型",
        dataIndex: "type_name",
        key: "type_name",
        width: 100
      },
      {
        title: "采购组织",
        dataIndex: "purchasing",
        key: "purchasing",
        width: 150
      },
      {
        title: "采购组",
        dataIndex: "purchasingGroup",
        key: "purchasingGroup",
        width: 300
      },
      {
        title: "凭证日期",
        dataIndex: "voucherDate",
        key: "voucherDate",
        width: 150
      },
      {
        title: "审批状态",
        dataIndex: "approvalState_name",
        key: "approvalState_name",
        width: 150
      },
      {
        title: "确认状态",
        dataIndex: "confirmState_name",
        key: "confirmState_name",
        width: 500
      },
      {
        title: "关闭状态",
        dataIndex: "closeState_name",
        key: "closeState_name",
        width: 150
      },
      {
        title: "操作",
        dataIndex: "d",
        key: "d",
        width: 200,
        fixed: "right",
        render(text, record, index) {
          return (
            <div className="operation-btn">
              <a
                href="#"
                tooltip={text}
                onClick={() => {
                  alert("这是第" + index + "列，内容为:" + text);
                }}
              >
                查看详情
              </a>
              <PrimaryButton size="sm" colors="primary" >修改</PrimaryButton>
              <PrimaryButton size="sm" colors="primary">删除</PrimaryButton>
            </div>
          );
        }
      }
    ];
 
    return (
      <div className={`${clsPrefix}-grid`}>
          <PrimaryGrid
            className="demo"
            columns={column}
            data={dataList}
            getSelectedDataFunc={this.getSelectedDataFunc}
            paginationObj={paginationObj}
          />
      </div>
    )
  }
}

ExampleGrid.defaultProps = defaultProps;
export default ExampleGrid;