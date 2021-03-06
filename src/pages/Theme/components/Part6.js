import React, { Component } from 'react';
import { ColItem } from './Card';
import styled from 'styled-components';
import {
  Row,
  Table,
  Tag
} from 'tinper-bee';

export const PartSix = (props) => {
  const columns = [
    { title: "订单编号", dataIndex: "orderNum", key: "orderNum", width: 100 },
    { title: "采购组织", dataIndex: "org", key: "org", width: 200 },
    { title: "供应商", dataIndex: "supplier", key: "supplier", width: 100 },
    { title: "订单日期", dataIndex: "orderDate", key: "orderDate", width: 150 },
    { title: "总数量", dataIndex: "quantity", key: "quantity", width: 100 },
    {
      title: "单据状态", dataIndex: "status", key: "status", width: 100,
      render: (text, record, index) => {
        return (
          <Tag colors={text.type}>{text.desc}</Tag>
        );
      }
    },
    { title: "提交人", dataIndex: "submitter", key: "submitter", width: 100 },
    { title: "单位", dataIndex: "unit", key: "unit", width: 100 },
    { title: "总税价合计", dataIndex: "sum", key: "sum", width: 100 },
  ];

  const data = [
    {
      orderNum: "NU0391025",
      org: "用友网络科技股份有限公司",
      supplier: "xx供应商",
      orderDate: '2018年03月18日',
      quantity: '100.00',
      status: { type: 'success', desc: '正常' },
      submitter: '小张',
      unit: 'pc',
      sum: '8,487.00',
      key: "1"
    },
    {
      orderNum: "NU0391026",
      org: "用友网络科技股份有限公司",
      supplier: "xx供应商",
      orderDate: '2018年02月05日',
      quantity: '91.00',
      status: { type: 'danger', desc: '异常' },
      submitter: '小红',
      unit: 'pc',
      sum: '675.00',
      key: "2"
    },
    {
      orderNum: "NU0391027",
      org: "用友网络科技股份有限公司",
      supplier: "xx供应商",
      orderDate: '2018年07月01日',
      quantity: '98.00',
      status: { type: 'success', desc: '正常' },
      submitter: '小李',
      unit: 'pc',
      sum: '1,531.00',
      key: "3"
    }
  ];
  if(props.customed){
    let {
    clsPrefix,theme} = props;
    const PrimaryTable= styled(Table)`
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
    return(
      <Row>
      <ColItem md={12} title={'表格 Table'} height={274}>
        <PrimaryTable columns={columns} data={data} size="sm" />
      </ColItem>
    </Row>
    )
  }
  return (
    <Row>
      <ColItem md={12} title={'表格 Table'} height={274}>
        <Table columns={columns} data={data} size="sm" />
      </ColItem>
    </Row>
  )
}

