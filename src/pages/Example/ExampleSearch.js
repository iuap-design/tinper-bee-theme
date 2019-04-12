import React, { Component } from 'react';
import { Form, Label,Checkbox,Switch,Button,
  Radio, Select,  Col , Row , FormControl } from 'tinper-bee';
import DatePicker from 'bee-datepicker';
import moment from "moment/moment";
const FormItem = Form.FormItem;
const Option = Select.Option;
const { RangePicker } = DatePicker;
const CheckboxGroup = Checkbox.CheckboxGroup;
import styled from 'styled-components';
import SearchPanel from 'bee-search-panel';
let HeadContainer = SearchPanel.HeadContainer;
let AdvancedContainer = SearchPanel.AdvancedContainer;

import './index.scss';

const defaultProps = {
  clsPrefix: "tinper-bee-theme",
  colors: "default"
};

class ExampleSearch extends Component {

  constructor(props) {
    super(props);

      this.state = {
         state:'all',
         expanded: true,
          approvalState: '1',
          purchasingGroup:'2',
          closeState: '',
          confirmState: '',
          voucherDate: [moment(),moment('2019-07-20')],
          orderTypes:[
              {
                  'code':'001',
                  'name':'类型1'
              },
              {
                  'code':'002',
                  'name':'类型2'
              },
              {
                  'code':'003',
                  'name':'类型3'
              },
          ]
      };
  }
  
  submit = (e) => {
      this.props.form.validateFields((err, values) => {
          if (err) {
              console.log('校验失败', values);
          } else {
              console.log('提交成功', values)
          }
      });
  }
  reset = () =>{
      this.props.form.resetFields();
      //部分表单元素无法通过this.props.form.resetFields重置，需要手动重置，如下
      this.setState({
          approvalState: '',
          closeState: '',
          confirmState: '',
          voucherDate: []
      })
  }
  onChange = () => {
    this.setState({expanded: !this.state.expanded})
}

  search =()=>{
      this.props.form.validateFields((err, values) => {
          if (err) {
              console.log('校验失败', values);
          } else {
              console.log('提交成功', values)
          }
      });
  }

  render() {
    let {clsPrefix,theme} = this.props;
    // //button
    // // const PrimaryButton = styled(Button)`${_primary}`;
    // const PrimaryButton = styled(Button)`${_primary}
    //   background-color:${theme["border-color"]} !important;
    //   border-color:${theme["border-color"]} !important;
    // `; 

    const PrimaryFormControl = styled(FormControl)`
        border-radius:${theme["border-radius"]}px !important;
   `;

   const PrimaryDatePicker = styled(DatePicker)`
        .rc-calendar-selected-date .rc-calendar-date, .rc-calendar-selected-day .rc-calendar-date{
            background-color:${theme["primary-color"]} !important;
            border: 1px solid ${theme["border-color"]} !important; 
        }
        .rc-calendar-today .rc-calendar-date{
            border: 1px solid ${theme["border-color"]} !important;
        }
        .rc-calendar-ok-btn, .rc-calendar-time-picker-btn, .rc-calendar-today-btn{
            color:${theme["primary-color"]} !important;
        }
        .rc-calendar-year-panel-selected-cell .rc-calendar-year-panel-year:hover{
            background-color:${theme["primary-color"]} !important;
        }
        .rc-calendar-month-panel-selected-cell .rc-calendar-month-panel-month,
        .rc-calendar-year-panel-selected-cell .rc-calendar-year-panel-year{
            background-color:${theme["primary-color"]} !important;
        }
        .rc-calendar-day-select:hover, .rc-calendar-month-select:hover, .rc-calendar-year-select:hover{
            color:${theme["primary-color"]} !important;
        }
        .rc-calendar-next-month-btn:hover, .rc-calendar-next-year-btn:hover, .rc-calendar-prev-month-btn:hover, .rc-calendar-prev-year-btn:hover{
            color:${theme["primary-color"]} !important;
        }
   `;
   
    const { getFieldProps, getFieldError } = this.props.form;
    let self = this;

    return (
      <div className={`${clsPrefix}-search`}>
          <SearchPanel
                title='条件筛选'
                onSearch={this.search}
                onReset={this.clear}
                expanded={this.state.expanded} 
                onChange={this.onChange}
                onPanelChangeStart={status => {
                    console.log(status, "start")
                }}
                onPanelChangeIng={status => {
                    console.log(status, "ing")
                }}
                onPanelChangeEnd={status => {
                    console.log(status, "end")
                }}
                >
                <HeadContainer>
                    <div className='demo-head'>
                        <Form>
                            <Row>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <FormItem>
                                        <Col xs={12} sm={12} md={12}  lg={12} className="col">
                                            <Label>名 称</Label>
                                            <PrimaryFormControl size="sm"
                                                {
                                                ...getFieldProps('orderCode', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                        </Col>
                                    </FormItem>
                                </Col>

                                <Col xs={12} sm={6} md={4}  lg={3}>
                                    <FormItem>
                                        <Col xs={12} sm={12} md={12}  lg={12} className="col">
                                            <Label>时间</Label> 
                                            <PrimaryDatePicker
                                                format="YYYY-MM-DD dddd" 
                                                defaultValue={moment()}
                                            />
                                        </Col>
                                    </FormItem>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </HeadContainer>
                
                <AdvancedContainer>
                    <div className='demo-body'>
                        <Form>
                            <Row>

                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <FormItem>
                                        <Col xs={12} sm={12} md={12}  lg={12} className="col">
                                            <Label>联系人</Label>
                                            <PrimaryFormControl size="sm"
                                                {
                                                ...getFieldProps('orderCode', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                        </Col>
                                    </FormItem>
                                </Col>

                                <Col xs={12} sm={6} md={4}  lg={3}>
                                    <FormItem>
                                        <Col xs={12} sm={12} md={12}  lg={12} className="col">
                                            <Label>供应商</Label>
                                            <PrimaryFormControl size="sm"
                                                {
                                                ...getFieldProps('supplierName', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                        </Col>
                                    </FormItem>
                                </Col> 

                                <Col xs={12} sm={6} md={4}  lg={3}>
                                    <FormItem>
                                        <Col xs={12} sm={12} md={12}  lg={12} className="col">
                                            <Label>地址</Label>
                                            <PrimaryFormControl size="sm"
                                                {
                                                ...getFieldProps('supplierName', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                        </Col>
                                    </FormItem>
                                </Col> 

 {/*
                                <Col xs={12} sm={6} md={4}  lg={3}>
                                    <FormItem>
                                        <Col xs={12} sm={12} md={12}  lg={12} className="col">
                                            <Label>车牌</Label>
                                            <PrimaryFormControl size="sm"
                                                {
                                                ...getFieldProps('supplierName', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                        </Col>
                                    </FormItem>
                                </Col>

                                <Col xs={12} sm={6} md={4}  lg={3}>
                                    <FormItem>
                                        <Col xs={12} sm={12} md={12}  lg={12} className="col">
                                            <Label>备注</Label>
                                            <PrimaryFormControl size="sm"
                                                {
                                                ...getFieldProps('supplierName', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                        </Col>
                                    </FormItem>
                                </Col>

                                <Col xs={12} sm={6} md={4}  lg={3}>
                                    <FormItem>
                                        <Col xs={12} sm={12} md={12}  lg={12} className="col">
                                            <Label>编号</Label>
                                            <PrimaryFormControl size="sm"
                                                {
                                                ...getFieldProps('supplierName', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                        </Col>
                                    </FormItem>
                                </Col> */}

                            </Row>
                        </Form>
                    </div>                 
                </AdvancedContainer>
            </SearchPanel>
      </div>
    )
  }
}
ExampleSearch.defaultProps = defaultProps;
export default Form.createForm()(ExampleSearch);